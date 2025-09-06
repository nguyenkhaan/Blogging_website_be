declare const makeSignature: (header: unknown, payload: string) => string;
declare const makeToken: (id: string, name: string) => string;
export { makeToken, makeSignature };
