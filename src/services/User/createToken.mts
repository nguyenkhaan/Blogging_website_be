import { base64Url } from "../../helpers/base64Url.mjs";
import crypto from "crypto";
const jwtKey = btoa("18102006");

const makeEncodedHeader = (header: unknown) => {
    return base64Url(btoa(JSON.stringify(header)));
};
const makeEncodedPayload = (payload: unknown) => {
    return base64Url(btoa(JSON.stringify(payload)));
};
const makeSignature = (header: unknown, payload: string) => {
    const encodedHeader = makeEncodedHeader(header);
    const encodedPayload = makeEncodedPayload(payload);
    const secretKey = crypto.createHmac("sha512", jwtKey);
    const signature = secretKey
        .update(`${encodedHeader}.${encodedPayload}`)
        .digest("base64url");
    return signature;
};
const makeToken = (id: string, name: string) => {
    const header = {
        alg: "HS256",
        typ: "JWT",
    };
    const payload = {
        id,
        name,
    };
    const encodedHeader = makeEncodedHeader(header);
    const encodedPayload = makeEncodedPayload(payload);
    const signature = makeSignature(encodedHeader, encodedPayload);
    return `${encodedHeader}.${encodedPayload}.${signature}`;
};
export { makeToken, makeSignature };
