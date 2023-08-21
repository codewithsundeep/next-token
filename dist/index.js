var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import CryptoJS from "crypto-js"; // Import the entire CryptoJS library
export function sign(objOrString, secretString) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const obj = typeof objOrString === 'string' ? JSON.parse(objOrString) : objOrString;
            const token = yield CryptoJS.AES.encrypt(JSON.stringify(obj), secretString).toString();
            return token;
        }
        catch (err) {
            return false; // Return false for errors
        }
    });
}
export function verify(token, secret) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const byte = CryptoJS.AES.decrypt(token, secret);
            const data = JSON.parse(byte.toString(CryptoJS.enc.Utf8)); // Use CryptoJS.enc.Utf8
            return data;
        }
        catch (err) {
            return false; // Return false for errors
        }
    });
}
// Exporting an object with functions as properties
export const token = {
    verify,
    sign,
};
