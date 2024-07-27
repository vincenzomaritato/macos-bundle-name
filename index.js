const fs = require('fs');
const path = require('path');

/**
 * Retrieve the bundle name from a bundle identifier on macOS.
 *
 * @param {string} bundleIdentifier - The bundle identifier.
 * @returns {string | null} - The name of the bundle or null if not found.
 */
function getBundleName(bundleIdentifier) {
  const appsDirectory = '/Applications';
  const appDirs = fs.readdirSync(appsDirectory);

  for (const appDir of appDirs) {
    const infoPlistPath = path.join(appsDirectory, appDir, 'Contents', 'Info.plist');
    if (fs.existsSync(infoPlistPath)) {
      const infoPlist = fs.readFileSync(infoPlistPath, 'utf8');
      const bundleIDMatch = infoPlist.match(/<key>CFBundleIdentifier<\/key>\s*<string>(.*?)<\/string>/);
      if (bundleIDMatch && bundleIDMatch[1] === bundleIdentifier) {
        const bundleNameMatch = infoPlist.match(/<key>CFBundleName<\/key>\s*<string>(.*?)<\/string>/);
        if (bundleNameMatch) {
          return bundleNameMatch[1];
        }
      }
    }
  }
  return null;
}

module.exports = getBundleName;
