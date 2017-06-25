import { GenericCipherDelegate, GenericDecipherDelegate } from "./CipherSuite";
export declare type BlockCipherAlgorithm = "aes-128-cbc" | "aes-256-cbc" | "des-ede3-cbc";
export interface BlockCipherDelegate extends GenericCipherDelegate {
    /**
     * The block size of this algorithm
     */
    blockSize: number;
}
export interface BlockDecipherDelegate extends GenericDecipherDelegate {
    /**
     * The block size of this algorithm
     */
    blockSize: number;
}
/**
 * Creates a block cipher delegate used to encrypt packet fragments.
 * @param algorithm - The block cipher algorithm to be used
 */
export declare function createCipher(algorithm: BlockCipherAlgorithm): BlockCipherDelegate;
/**
 * Creates a block cipher delegate used to decrypt packet fragments.
 * @param algorithm - The block cipher algorithm to be used
 */
export declare function createDecipher(algorithm: BlockCipherAlgorithm): BlockDecipherDelegate;
