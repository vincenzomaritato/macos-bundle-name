const test = require('ava');
const getBundleName = require('./index');

test('getBundleName returns correct name for Safari', t => {
  const bundleName = getBundleName('com.apple.Safari');
  t.is(bundleName, 'Safari');
});

test('getBundleName returns null for non-existent bundle identifier', t => {
  const bundleName = getBundleName('com.nonexistent.Bundle');
  t.is(bundleName, null);
});
