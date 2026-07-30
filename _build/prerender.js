// Ön-render: her sayfanın React ağacını statik HTML'e çevirip .prerender/ içine yazar.
// Tarayıcı ve Node gerektirmez — macOS'un yerleşik JS motoru + ReactDOMServer.
//
// Çalıştırma:  osascript -l JavaScript _build/prerender.js
//
// Neden gerekli: arama motorlarının bir kısmı ve AI tarayıcılarının çoğu (GPTBot,
// ClaudeBot, PerplexityBot, CCBot) JavaScript ÇALIŞTIRMAZ. Ön-render olmadan
// bu botlar boş bir <div id="root"></div> görür.
ObjC.import('Foundation');

var geval = eval;   // dolaylı eval → global kapsamda çalışır

function slurp(p) {
  var s = $.NSString.stringWithContentsOfFileEncodingError($(p), $.NSUTF8StringEncoding, null);
  if (!s) throw new Error('okunamadi: ' + p);
  return s.js;
}
function spit(p, t) {
  $(t).writeToFileAtomicallyEncodingError($(p), true, $.NSUTF8StringEncoding, null);
}
function mkdirp(p) {
  $.NSFileManager.defaultManager
    .createDirectoryAtPathWithIntermediateDirectoriesAttributesError($(p), true, $(), null);
}

var env = $.NSProcessInfo.processInfo.environment;
var BUILD = ObjC.unwrap(env.objectForKey('NORD_BUILD_DIR'));
var SITE  = ObjC.unwrap(env.objectForKey('NORD_SITE_DIR'));
if (!BUILD || !SITE) throw new Error('NORD_BUILD_DIR / NORD_SITE_DIR yok');
var OUT = BUILD + '/.prerender';
mkdirp(OUT);

// ─── JXA'da bulunmayan tarayıcı API'leri için minimal karşılıklar ───
this.window = this; this.self = this; this.global = this;
this.setTimeout = function () { return 0; };
this.clearTimeout = function () {};
this.MessageChannel = function () { this.port1 = {}; this.port2 = { postMessage: function () {} }; };
function TextEncoder() {}
TextEncoder.prototype.encode = function (s) {
  var u = unescape(encodeURIComponent(s)), a = new Uint8Array(u.length);
  for (var i = 0; i < u.length; i++) a[i] = u.charCodeAt(i);
  return a;
};
function TextDecoder() {}
TextDecoder.prototype.decode = function (a) {
  var s = ''; for (var i = 0; i < a.length; i++) s += String.fromCharCode(a[i]);
  return decodeURIComponent(escape(s));
};
this.TextEncoder = TextEncoder; this.TextDecoder = TextDecoder;

// React ve sunucu render'ı bir kez yüklenir
geval(slurp(SITE + '/vendor/react.production.min.js'));
geval(slurp(BUILD + '/react-dom-server.legacy.js'));
if (typeof ReactDOMServer === 'undefined' || !ReactDOMServer.renderToStaticMarkup)
  throw new Error('ReactDOMServer.renderToStaticMarkup bulunamadi');

// Sayfa dosyaları sonda ReactDOM.createRoot(...).render(<App/>) çağırır.
// DOM olmadığı için bunu yakalayıp elementi alıyoruz.
var captured = null;
this.ReactDOM = { createRoot: function () { return { render: function (el) { captured = el; } }; } };
this.document = { getElementById: function () { return {}; } };

var pages = JSON.parse(slurp(BUILD + '/pages.json'));
var ok = 0, fail = [];

for (var i = 0; i < pages.length; i++) {
  var pg = pages[i];
  try {
    captured = null;
    // sayfaya özel global değişkenler (NORD_BASE, NORD_SERVICE, NORD_POST…)
    // nord-shared.js BASE/HOME'u yüklenme anında hesaplar, o yüzden önce set edilir
    for (var k in pg.gvars) this[k] = pg.gvars[k];
    for (var j = 0; j < pg.scripts.length; j++) geval(slurp(SITE + '/' + pg.scripts[j]));
    if (!captured) throw new Error('render cagrisi yakalanamadi');
    var markup = ReactDOMServer.renderToStaticMarkup(captured);
    if (markup.length < 2000) throw new Error('markup beklenenden kisa: ' + markup.length);
    spit(OUT + '/' + pg.path.replace(/\//g, '__'), markup);
    ok++;
  } catch (e) {
    fail.push(pg.path + ': ' + e);
  }
}

console.log('  ' + ok + '/' + pages.length + ' sayfa ön-render edildi');
if (fail.length) {
  for (var f = 0; f < fail.length; f++) console.log('  HATA ' + fail[f]);
  throw new Error('ön-render basarisiz');
}
