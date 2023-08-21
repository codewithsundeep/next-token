import CryptoJS from "crypto-js"; // Import the entire CryptoJS library

// types.ts
export interface SignResult {
  token: string | false; // Updated to allow false for errors
}

export interface VerifyResult {
  data: string | object | false; // Updated to allow false for errors
}

export async function sign(objOrString: string | object, secretString: string): Promise<string | false> {
  try {
    const obj = typeof objOrString === 'string' ? JSON.parse(objOrString) : objOrString;
    const token = await CryptoJS.AES.encrypt(JSON.stringify(obj), secretString).toString();
    return token;
  } catch (err: any) {
    return false; // Return false for errors
  }
}

export async function verify(token: string, secret: string): Promise<string | object | false> {
  try {
    const byte = CryptoJS.AES.decrypt(token, secret);
    const data = JSON.parse(byte.toString(CryptoJS.enc.Utf8)); // Use CryptoJS.enc.Utf8
    return data;
  } catch (err: any) {
    return false; // Return false for errors
  }
}

// Exporting an object with functions as properties
export const token = {
  verify,
  sign,
};
