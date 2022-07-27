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
