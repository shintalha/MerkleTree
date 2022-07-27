# MerkleTree
Merkletree is created by encrypting multiple wallet addresses with keccak256.


![Hash_Tree](https://user-images.githubusercontent.com/97956471/181312920-05832caa-f9c6-4685-9764-99515b2bb353.svg)

The data to be encrypted are the leaves of the merkletree. These leaves are encrypted sequentially as a binary tree. The two encrypted data are combined and encrypted again. This continues until only one encrypted root (root) remains. The tree formed in this way is called the Merkle Tree.
