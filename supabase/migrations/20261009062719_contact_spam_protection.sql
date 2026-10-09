/*
# Contact form spam protection

1. New Tables
- `contact_submissions` - log of every contact form attempt, used for rate limiting and audit
  - `id` (uuid, primary key)
  - `created_at` (timestamptz)
  - `ip_hash` (text) - SHA-256 hash of the sender IP (raw IP is never stored)
  - `email` (text) - submitted email, lowercased
  - `name`, `company`, `size`, `phone` (text) - submitted fields
  - `status` (text) - delivered | spam | rate_limited | failed
  - `reason` (text) - why it was blocked, if blocked
- `app_settings` - private key/value settings (e.g. the Google Chat webhook URL)
  - `key` (text, primary key)
  - `value` (text)

2. Security
- RLS enabled on both tables with NO policies: visitors (anon/authenticated) cannot read or write.
- Only the server-side contact function (service role) accesses them.

3. Notes
1. Index on (ip_hash, created_at) and (email, created_at) for fast rate-limit checks.
*/

CREATE TABLE IF NOT EXISTS contact_submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at timestamptz NOT NULL DEFAULT now(),
  ip_hash text NOT NULL DEFAULT '',
  email text NOT NULL DEFAULT '',
  name text NOT NULL DEFAULT '',
  company text NOT NULL DEFAULT '',
  size text NOT NULL DEFAULT '',
  phone text NOT NULL DEFAULT '',
  status text NOT NULL CHECK (status IN ('delivered','spam','rate_limited','failed')),
  reason text NOT NULL DEFAULT ''
);

CREATE INDEX IF NOT EXISTS contact_submissions_ip_idx ON contact_submissions (ip_hash, created_at DESC);
CREATE INDEX IF NOT EXISTS contact_submissions_email_idx ON contact_submissions (email, created_at DESC);
CREATE INDEX IF NOT EXISTS contact_submissions_created_idx ON contact_submissions (created_at DESC);

ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;

CREATE TABLE IF NOT EXISTS app_settings (
  key text PRIMARY KEY,
  value text NOT NULL
);

ALTER TABLE app_settings ENABLE ROW LEVEL SECURITY;

REVOKE ALL ON contact_submissions FROM anon, authenticated;
REVOKE ALL ON app_settings FROM anon, authenticated;
