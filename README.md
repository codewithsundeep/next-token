# next-token

A Node.js package designed for use in Next.js applications, "next-token" provides functions for signing and verifying tokens using the CryptoJS library. It allows you to encrypt and decrypt data with a secret string, making it useful for securing sensitive information in your Next.js projects.

## Installation

To use this module in your Next.js project, you can install it via npm:

```
npm install next-token
```
## Usage
You can import and use the ```sign``` and ```verify``` functions to work with tokens in your Next.js application:

```
import { sign, verify } from "next-token";
```
```javascript
// Sign a token
const token = await sign({ data: "your-data" }, "your-secret-key");

// Verify a token
const decodedData = await verify(token, "your-secret-key");
```
## Functions
```sign(objOrString, secretString)```: Signs an object or string using the provided secret key and returns the encrypted token.

```verify(token, secret)```: Verifies and decrypts a token using the provided secret key and returns the original data.

## Integration with Next.js
This module is designed to work seamlessly with Next.js applications, providing a secure way to handle token-based authentication and data encryption in your Next.js projects.

## License
This project is licensed under the MIT License. See the [LICENSE.md](https://github.com/codewithsundeep/next-token/blob/main/LICENSE) file for details.

## Contributing
Contributions are welcome! If you would like to contribute to this project, please open an issue or submit a pull request.

## Acknowledgments
This project uses the [CryptoJS](https://github.com/brix/crypto-js) library for cryptographic operations.
