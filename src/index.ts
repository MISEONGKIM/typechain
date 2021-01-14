import * as CryptoJS from "crypto-js"

class Block {
    // static이 위에있는 구조가 좋다.
    static calculateBlockHash = (
        index: number,
        previousHash: string,
        data: string,
        timestamp: number 
    ): string => CryptoJS.SHA256(index + previousHash + timestamp + data).toString();

    static validateStructure = (aBlock: Block): boolean => 
        typeof aBlock.index === "number" &&
        typeof aBlock.previousHash === "string" &&
        typeof aBlock.hash === "string" &&
        typeof aBlock.data === "string" &&
        typeof aBlock.timestamp === "number";

    public index: number;
    public hash: string;
    public previousHash: string;
    public data: string;
    public timestamp: number;

    constructor(
        index: number,
        hash: string,
        previousHash: string,
        data: string,
        timestamp: number
    ) {
        this.index = index;
        this.hash = hash;
        this.previousHash = previousHash;
        this.data = data;
        this.timestamp = timestamp;
    }
}

const genesisBlock: Block = new Block(0, "2020202020202", "", "Hello", 123456);

let blockchain: Block[] = [genesisBlock]

const getBlockchain = (): Block[] => blockchain;

const getLatestBlock = (): Block => blockchain[blockchain.length - 1];

const getNewTimeStamp = (): number => Math.round(new Date().getTime() / 1000);

const createNewBlock = (data: string): Block => {
    const previousBlock: Block = getLatestBlock();
    const newIndex: number = previousBlock.index + 1;
    const newTimestamp: number = getNewTimeStamp();
    const newHash: string = Block.calculateBlockHash(
        newIndex,
        previousBlock.hash,
        data,
        newTimestamp
    );
    
    const newBlock: Block = new Block(
        newIndex,
        newHash,
        previousBlock.hash,
        data,
        newTimestamp
        );

    addBlock(newBlock);
    return newBlock;
}

const getHashforBlock = (aBlock: Block): string => Block.calculateBlockHash(aBlock.index, aBlock.previousHash, aBlock.data, aBlock.timestamp);

const isBlockValid = (candidateBlock: Block, previousBlock: Block): boolean => {
    if (!Block.validateStructure(candidateBlock)) {
        return false;
    } else if (previousBlock.index + 1 !== candidateBlock.index) {
        return false;
    } else if (previousBlock.hash !== candidateBlock.previousHash) {
        return false;
    } else if (getHashforBlock(candidateBlock) !== candidateBlock.hash) {
        return false;
    } else {
        return true;
    }
}

const addBlock = (candidateBlock: Block): void => {
    if (isBlockValid(candidateBlock, getLatestBlock())) {
        blockchain.push(candidateBlock);
    }
}

createNewBlock("second Block");
createNewBlock("third Block");
createNewBlock("fourth Block");

console.log(blockchain);



export {};