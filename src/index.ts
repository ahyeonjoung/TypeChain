import * as CryptoJS from "crypto-js";
import { decodedTextSpanIntersectsWith } from "typescript";
class Block{
    public index:number;
    public hash:string;
    public previousHash:string;
    public data: string;
    public timestamp: number;

    //static: 생성하지 않아도 쓸 수 있음 
    static calculateBlockHash=(index:number,previousHash:string, timestamp:number,data:string):string=>
    CryptoJS.SHA256(index+previousHash+timestamp+data).toString();

    constructor(index:number,hash:string,previousHash:string,data:string,timestamp:number){
        this.index=index;
        this.hash=hash;
        this.previousHash=previousHash;
        this.data=data;
        this.timestamp=timestamp;
    }
}


const genesisBlock:Block =new Block(0,"202020202020202","","Hello",123456);
let blockchain :Block[] =[genesisBlock];

const getBlockChain =() :Block[]=>blockchain;
const getLatestBlock=():Block =>blockchain[blockchain.length-1];
const getNewTimeStamp=():number =>Math.round(new Date().getTime()/1000);
const createNewBlock=(data:string):Block =>{
    const previousBlock:Block =getLatestBlock();
    const newIndex:number =previousBlock.index+1;
    const newTimestamp:number=getNewTimeStamp();
    const newHash:string =Block.calculateBlockHash(newIndex,previousBlock.hash,newTimestamp,data);
    const newBlock:Block=new Block(newIndex,newHash,previousBlock.hash,data,newTimestamp);
    return newBlock;
}

console.log(blockchain);
console.log(createNewBlock("hello"),createNewBlock("bye-bye"))

export {};