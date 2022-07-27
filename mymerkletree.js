const { MerkleTree } = require('merkletreejs');
const keccak256 = require('keccak256');
const ethers = require('ethers');
var whitelistAddresses = require('./whitelistAddresses')

function Hash(account){
 return Buffer.from(ethers.utils.solidityKeccak256(['address'],[account],).slice(2), 'hex');
}


const leafNodes = whitelistAddresses.map(addr => Hash(addr));
//const leafNodes = Object.entries(whitelistAddresses).map(addr => HashToken(...addr));

const merkleTree = new MerkleTree(leafNodes, keccak256, {sortPairs: true})
proof = merkleTree.getHexProof(leafNodes[0])
hex = "[".concat(proof).concat("]")
console.log(hex);
console.log(merkleTree.toString());

//0x5572ea8e573c7dbe227296ed82c8ac18e45898968fce38079d3073ce88b37f25
/*
let whitelistAddresses = [
    
    '0xAb8483F64d9C6d1EcF9b849Ae677dD3315835cb2', 
    '0x5c6B0f7Bf3E7ce046039Bd8FABdfD3f9F5021678',
    '0x4B20993Bc481177ec7E8f571ceCaE8A9e22C02db', 
    '0x78731D3Ca6b7E34aC0F824c42a7cC18A495cabaB', 
    '0x03C6FcED478cBbC9a4FAB34eF9f40767739D1Ff7', 
    '0x617F2E2fD72FD9D5503197092aC168c91465E7f2', 
    '0x17F6AD8Ef982297579C203069C1DbfFE4348c372', 
    
    
]
*/

/*
let whitelistAddresses = [
    
    '2:TW0xAb8483F64d9C6d1EcF9b849Ae677dD3315835cb2',
    '0x5c6B0f7Bf3E7ce046039Bd8FABdfD3f9F5021678', 
    '0x4B20993Bc481177ec7E8f571ceCaE8A9e22C02db', 
    '0x78731D3Ca6b7E34aC0F824c42a7cC18A495cabaB',
    '0x03C6FcED478cBbC9a4FAB34eF9f40767739D1Ff7',
    '0x617F2E2fD72FD9D5503197092aC168c91465E7f2',
    '0x17F6AD8Ef982297579C203069C1DbfFE4348c372'
    
    
]
const whitelistAddresses = {
    '2:TW':'0xAb8483F64d9C6d1EcF9b849Ae677dD3315835cb2',
    '5:DC':'0x5c6B0f7Bf3E7ce046039Bd8FABdfD3f9F5021678',
    '2:DF':'0x4B20993Bc481177ec7E8f571ceCaE8A9e22C02db',
    '7:BG':'0x78731D3Ca6b7E34aC0F824c42a7cC18A495cabaB',
    '2:TL':'0x03C6FcED478cBbC9a4FAB34eF9f40767739D1Ff7',
    '6:DS':'0x617F2E2fD72FD9D5503197092aC168c91465E7f2',
    '2:TK':'0x17F6AD8Ef982297579C203069C1DbfFE4348c372',
}

const whitelistAddresses = [
    {allowence: 2, addres:'0xAb8483F64d9C6d1EcF9b849Ae677dD3315835cb2'},
    {allowence: 3, addres:'0x5c6B0f7Bf3E7ce046039Bd8FABdfD3f9F5021678'},
    {allowence: 4, addres:'0x4B20993Bc481177ec7E8f571ceCaE8A9e22C02db'},
    {allowence: 5, addres:'0x78731D3Ca6b7E34aC0F824c42a7cC18A495cabaB'},
    {allowence: 6, addres:'0x03C6FcED478cBbC9a4FAB34eF9f40767739D1Ff7'},
    {allowence: 7, addres:'0x617F2E2fD72FD9D5503197092aC168c91465E7f2'},
    {allowence: 8, addres:'0x17F6AD8Ef982297579C203069C1DbfFE4348c372'},
]
*/