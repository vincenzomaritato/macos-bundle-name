/**
 * Retrieve the bundle name from a bundle identifier on macOS.
 *
 * @param bundleIdentifier - The bundle identifier.
 * @returns The name of the bundle or null if not found.
 *
 * @example
 * ```
 * const getBundleName = require('macos-bundle-name');
 *
 * const bundleName = getBundleName('com.apple.Safari');
 * console.log(bundleName); // 'Safari'
 *
 * const nonExistentBundle = getBundleName('com.nonexistent.Bundle');
 * console.log(nonExistentBundle); // null
 * ```
 */
declare function getBundleName(bundleIdentifier: string): string | null;

export = getBundleName;
