// JSX → JS derleyici. Tarayıcı ve Node gerektirmez; macOS'un yerleşik
// JavaScript motorunu (osascript -l JavaScript) ve Babel standalone'u kullanır.
//
// Çalıştırma:  osascript -l JavaScript _build/compile.js
//
// Her çıktı bir IIFE'ye sarılır. Bu, Babel'in modül kapsamını taklit eder;
// aksi hâlde dosyalar arası üst düzey const çakışır (ör. useState hem
// nord-shared hem nord-home içinde tanımlı).
ObjC.import('Foundation');

function slurp(p) {
  var s = $.NSString.stringWithContentsOfFileEncodingError($(p), $.NSUTF8StringEncoding, null);
  if (!s) throw new Error('okunamadi: ' + p);
  return s.js;
}
function spit(p, text) {
  $(text).writeToFileAtomicallyEncodingError($(p), true, $.NSUTF8StringEncoding, null);
}

var HERE = $.NSString.stringWithString($('/dev/null')).js; // yer tutucu
// script konumunu argümandan değil, sabit göreli yapıdan çıkar:
var BUILD = ObjC.unwrap($.NSProcessInfo.processInfo.environment.objectForKey('NORD_BUILD_DIR'));
if (!BUILD) throw new Error('NORD_BUILD_DIR ortam degiskeni yok');
var SITE = ObjC.unwrap($.NSProcessInfo.processInfo.environment.objectForKey('NORD_SITE_DIR'));

eval(slurp(BUILD + '/babel.min.js'));

var FILES = ['nord-data', 'nord-shared', 'nord-home', 'nord-service', 'nord-about',
             'nord-blog-data', 'nord-legal-data', 'nord-page-blog', 'nord-page-hizmetler',
             'nord-page-legal', 'nord-page-odak', 'nord-page-panel', 'nord-page-post',
             'nord-page-referanslar', 'nord-page-yaklasim'];

var ok = 0, fail = [];
for (var i = 0; i < FILES.length; i++) {
  var name = FILES[i];
  try {
    var src = slurp(SITE + '/' + name + '.jsx');
    var code = Babel.transform(src, {
      presets: [['react', { runtime: 'classic' }]],
      sourceType: 'script', compact: false
    }).code;
    var wrapped = '/* ' + name + '.jsx dosyasindan uretildi — elle duzenlemeyin */\n' +
                  '(function () {\n"use strict";\n' + code + '\n})();\n';
    spit(SITE + '/' + name + '.js', wrapped);
    ok++;
  } catch (e) {
    fail.push(name + ': ' + e);
  }
}
console.log('  ' + ok + '/' + FILES.length + ' dosya derlendi');
if (fail.length) {
  for (var j = 0; j < fail.length; j++) console.log('  HATA ' + fail[j]);
  $.NSApplication; // no-op
  throw new Error('derleme basarisiz');
}
