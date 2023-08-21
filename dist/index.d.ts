export interface SignResult {
    token: string | false;
}
export interface VerifyResult {
    data: string | object | false;
}
export declare function sign(objOrString: object, secretString: string): Promise<string | false>;
export declare function verify(token: string, secret: string): Promise<string | object | false>;
export declare const token: {
    verify: typeof verify;
    sign: typeof sign;
};
