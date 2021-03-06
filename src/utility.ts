import { blake160 } from "./hash";
import { getPublicFromPrivate } from "./key/key";

/**
 * @hidden
 */
const toHexByte = (byte: number) =>
    byte < 0x10 ? `0${byte.toString(16)}` : byte.toString(16);

/**
 * Converts buffer to hexadecimal string.
 * @param buffer arbritrary length of data
 * @returns hexadecimal string
 */
export const toHex = (buffer: Buffer): string => {
    return Array.from(buffer)
        .map(toHexByte)
        .join("");
};

/**
 * Gets account id from private key.
 * @param priv 32 byte hexadecimal string of private key
 * @returns 20 byte hexadecimal string of account id
 */
export const getAccountIdFromPrivate = (priv: string): string => {
    const publicKey = getPublicFromPrivate(priv);
    return getAccountIdFromPublic(publicKey);
};

/**
 * Gets account id from the given public key.
 * @param publicKey 64 byte hexadecimal string of uncompressed public key
 * @returns 20 byte hexadecimal string of account id
 */
export const getAccountIdFromPublic = (publicKey: string): string => {
    return blake160(publicKey);
};
