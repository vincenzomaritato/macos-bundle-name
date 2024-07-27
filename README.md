# macos-bundle-name

**macos-bundle-name** is a lightweight utility to retrieve the bundle name from a bundle identifier on macOS.

## Installation

You can install this package via npm:

```sh
npm install macos-bundle-name
```

## Usage

Here's a quick example of how to use this package:

```javascript
const getBundleName = require("macos-bundle-name");

const bundleName = getBundleName("com.apple.Safari");
console.log(bundleName); // 'Safari'

const nonExistentBundle = getBundleName("com.nonexistent.Bundle");
console.log(nonExistentBundle); // null
```

## API

### `getBundleName(bundleIdentifier: string): string | null`

Retrieves the bundle name associated with the given bundle identifier.

#### Parameters

- `bundleIdentifier` (string): The bundle identifier to look up.

#### Returns

- `string | null`: The name of the bundle if found, otherwise `null`.

## Example

```javascript
const getBundleName = require("macos-bundle-name");

const bundleName = getBundleName("com.apple.Safari");
console.log(bundleName); // 'Safari'

const nonExistentBundle = getBundleName("com.nonexistent.Bundle");
console.log(nonExistentBundle); // null
```

## TypeScript

This package includes TypeScript definitions.

```typescript
import getBundleName from "macos-bundle-name";

const bundleName: string | null = getBundleName("com.apple.Safari");
```

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
