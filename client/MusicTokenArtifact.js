let MusicTokenArtifact = {
    "contractName": "MusicToken",
    "abi": [
      {
        "inputs": [],
        "stateMutability": "nonpayable",
        "type": "constructor"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": true,
            "internalType": "address",
            "name": "owner",
            "type": "address"
          },
          {
            "indexed": true,
            "internalType": "address",
            "name": "approved",
            "type": "address"
          },
          {
            "indexed": true,
            "internalType": "uint256",
            "name": "tokenId",
            "type": "uint256"
          }
        ],
        "name": "Approval",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": true,
            "internalType": "address",
            "name": "owner",
            "type": "address"
          },
          {
            "indexed": true,
            "internalType": "address",
            "name": "operator",
            "type": "address"
          },
          {
            "indexed": false,
            "internalType": "bool",
            "name": "approved",
            "type": "bool"
          }
        ],
        "name": "ApprovalForAll",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": true,
            "internalType": "address",
            "name": "previousOwner",
            "type": "address"
          },
          {
            "indexed": true,
            "internalType": "address",
            "name": "newOwner",
            "type": "address"
          }
        ],
        "name": "OwnershipTransferred",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": true,
            "internalType": "address",
            "name": "from",
            "type": "address"
          },
          {
            "indexed": true,
            "internalType": "address",
            "name": "to",
            "type": "address"
          },
          {
            "indexed": true,
            "internalType": "uint256",
            "name": "tokenId",
            "type": "uint256"
          }
        ],
        "name": "Transfer",
        "type": "event"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "to",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "tokenId",
            "type": "uint256"
          }
        ],
        "name": "approve",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "owner",
            "type": "address"
          }
        ],
        "name": "balanceOf",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "baseURI",
        "outputs": [
          {
            "internalType": "string",
            "name": "",
            "type": "string"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "tokenId",
            "type": "uint256"
          }
        ],
        "name": "getApproved",
        "outputs": [
          {
            "internalType": "address",
            "name": "",
            "type": "address"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "owner",
            "type": "address"
          },
          {
            "internalType": "address",
            "name": "operator",
            "type": "address"
          }
        ],
        "name": "isApprovedForAll",
        "outputs": [
          {
            "internalType": "bool",
            "name": "",
            "type": "bool"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "name",
        "outputs": [
          {
            "internalType": "string",
            "name": "",
            "type": "string"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "owner",
        "outputs": [
          {
            "internalType": "address",
            "name": "",
            "type": "address"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "tokenId",
            "type": "uint256"
          }
        ],
        "name": "ownerOf",
        "outputs": [
          {
            "internalType": "address",
            "name": "",
            "type": "address"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "renounceOwnership",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "from",
            "type": "address"
          },
          {
            "internalType": "address",
            "name": "to",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "tokenId",
            "type": "uint256"
          }
        ],
        "name": "safeTransferFrom",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "from",
            "type": "address"
          },
          {
            "internalType": "address",
            "name": "to",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "tokenId",
            "type": "uint256"
          },
          {
            "internalType": "bytes",
            "name": "_data",
            "type": "bytes"
          }
        ],
        "name": "safeTransferFrom",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "operator",
            "type": "address"
          },
          {
            "internalType": "bool",
            "name": "approved",
            "type": "bool"
          }
        ],
        "name": "setApprovalForAll",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "bytes4",
            "name": "interfaceId",
            "type": "bytes4"
          }
        ],
        "name": "supportsInterface",
        "outputs": [
          {
            "internalType": "bool",
            "name": "",
            "type": "bool"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "symbol",
        "outputs": [
          {
            "internalType": "string",
            "name": "",
            "type": "string"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "index",
            "type": "uint256"
          }
        ],
        "name": "tokenByIndex",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "owner",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "index",
            "type": "uint256"
          }
        ],
        "name": "tokenOfOwnerByIndex",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "tokenId",
            "type": "uint256"
          }
        ],
        "name": "tokenURI",
        "outputs": [
          {
            "internalType": "string",
            "name": "",
            "type": "string"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "totalSupply",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "from",
            "type": "address"
          },
          {
            "internalType": "address",
            "name": "to",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "tokenId",
            "type": "uint256"
          }
        ],
        "name": "transferFrom",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "newOwner",
            "type": "address"
          }
        ],
        "name": "transferOwnership",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "_address",
            "type": "address"
          }
        ],
        "name": "setStoreAddress",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "string",
            "name": "titre",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "genre",
            "type": "string"
          },
          {
            "internalType": "uint256",
            "name": "duree",
            "type": "uint256"
          }
        ],
        "name": "createMusic",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "MusicId",
            "type": "uint256"
          }
        ],
        "name": "setMusiclisten",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "id",
            "type": "uint256"
          }
        ],
        "name": "getMusicTitre",
        "outputs": [
          {
            "internalType": "string",
            "name": "",
            "type": "string"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "id",
            "type": "uint256"
          }
        ],
        "name": "getMusicListens",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "listens",
            "type": "uint256"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "id",
            "type": "uint256"
          }
        ],
        "name": "getMusicCreator",
        "outputs": [
          {
            "internalType": "address",
            "name": "creator",
            "type": "address"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "getStoreAddress",
        "outputs": [
          {
            "internalType": "address",
            "name": "",
            "type": "address"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "isMusicToken",
        "outputs": [
          {
            "internalType": "bool",
            "name": "",
            "type": "bool"
          }
        ],
        "stateMutability": "pure",
        "type": "function"
      }
    ],
    "metadata": "{\"compiler\":{\"version\":\"0.7.0+commit.9e61f92b\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"inputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"constructor\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"approved\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"Approval\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"approved\",\"type\":\"bool\"}],\"name\":\"ApprovalForAll\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"previousOwner\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"newOwner\",\"type\":\"address\"}],\"name\":\"OwnershipTransferred\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"Transfer\",\"type\":\"event\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"approve\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"}],\"name\":\"balanceOf\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"baseURI\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"string\",\"name\":\"titre\",\"type\":\"string\"},{\"internalType\":\"string\",\"name\":\"genre\",\"type\":\"string\"},{\"internalType\":\"uint256\",\"name\":\"duree\",\"type\":\"uint256\"}],\"name\":\"createMusic\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"getApproved\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"id\",\"type\":\"uint256\"}],\"name\":\"getMusicCreator\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"creator\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"id\",\"type\":\"uint256\"}],\"name\":\"getMusicListens\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"listens\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"id\",\"type\":\"uint256\"}],\"name\":\"getMusicTitre\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"getStoreAddress\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"}],\"name\":\"isApprovedForAll\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"isMusicToken\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"pure\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"name\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"owner\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"ownerOf\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"renounceOwnership\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"safeTransferFrom\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"},{\"internalType\":\"bytes\",\"name\":\"_data\",\"type\":\"bytes\"}],\"name\":\"safeTransferFrom\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"},{\"internalType\":\"bool\",\"name\":\"approved\",\"type\":\"bool\"}],\"name\":\"setApprovalForAll\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"MusicId\",\"type\":\"uint256\"}],\"name\":\"setMusiclisten\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"_address\",\"type\":\"address\"}],\"name\":\"setStoreAddress\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bytes4\",\"name\":\"interfaceId\",\"type\":\"bytes4\"}],\"name\":\"supportsInterface\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"symbol\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"index\",\"type\":\"uint256\"}],\"name\":\"tokenByIndex\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"index\",\"type\":\"uint256\"}],\"name\":\"tokenOfOwnerByIndex\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"tokenURI\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"totalSupply\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"transferFrom\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"newOwner\",\"type\":\"address\"}],\"name\":\"transferOwnership\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"}],\"devdoc\":{\"kind\":\"dev\",\"methods\":{\"approve(address,uint256)\":{\"details\":\"See {IERC721-approve}.\"},\"balanceOf(address)\":{\"details\":\"See {IERC721-balanceOf}.\"},\"baseURI()\":{\"details\":\"Returns the base URI set via {_setBaseURI}. This will be automatically added as a prefix in {tokenURI} to each token's URI, or to the token ID if no specific URI is set for that token ID.\"},\"constructor\":{\"details\":\"Contract constructor calls ERC721 constructor and pass the name and symbol parameters\"},\"getApproved(uint256)\":{\"details\":\"See {IERC721-getApproved}.\"},\"getMusicCreator(uint256)\":{\"params\":{\"id\":\"The Id of the musict/ERC721 \"},\"returns\":{\"creator\":\"returns the creator of a music\"}},\"getMusicTitre(uint256)\":{\"params\":{\"id\":\"The Id of the music/ERC721 \"},\"returns\":{\"_0\":\"titre returns the titref the music\"}},\"getStoreAddress()\":{\"returns\":{\"_0\":\"storeAddress returns the address registered for the marketplace\"}},\"isApprovedForAll(address,address)\":{\"details\":\"See {IERC721-isApprovedForAll}.\"},\"isMusicToken()\":{\"details\":\"This function is useful to confirm if the address passed to ProductStore.sol constructor is correct\"},\"name()\":{\"details\":\"See {IERC721Metadata-name}.\"},\"owner()\":{\"details\":\"Returns the address of the current owner.\"},\"ownerOf(uint256)\":{\"details\":\"See {IERC721-ownerOf}.\"},\"renounceOwnership()\":{\"details\":\"Leaves the contract without owner. It will not be possible to call `onlyOwner` functions anymore. Can only be called by the current owner. NOTE: Renouncing ownership will leave the contract without an owner, thereby removing any functionality that is only available to the owner.\"},\"safeTransferFrom(address,address,uint256)\":{\"details\":\"See {IERC721-safeTransferFrom}.\"},\"safeTransferFrom(address,address,uint256,bytes)\":{\"details\":\"See {IERC721-safeTransferFrom}.\"},\"setApprovalForAll(address,bool)\":{\"details\":\"See {IERC721-setApprovalForAll}.\"},\"setStoreAddress(address)\":{\"params\":{\"_address\":\"Deployed Music Store contract address\"}},\"supportsInterface(bytes4)\":{\"details\":\"See {IERC165-supportsInterface}. Time complexity O(1), guaranteed to always use less than 30 000 gas.\"},\"symbol()\":{\"details\":\"See {IERC721Metadata-symbol}.\"},\"tokenByIndex(uint256)\":{\"details\":\"See {IERC721Enumerable-tokenByIndex}.\"},\"tokenOfOwnerByIndex(address,uint256)\":{\"details\":\"See {IERC721Enumerable-tokenOfOwnerByIndex}.\"},\"tokenURI(uint256)\":{\"details\":\"See {IERC721Metadata-tokenURI}.\"},\"totalSupply()\":{\"details\":\"See {IERC721Enumerable-totalSupply}.\"},\"transferFrom(address,address,uint256)\":{\"details\":\"See {IERC721-transferFrom}.\"},\"transferOwnership(address)\":{\"details\":\"Transfers ownership of the contract to a new account (`newOwner`). Can only be called by the current owner.\"}},\"title\":\"Musictoken \",\"version\":1},\"userdoc\":{\"kind\":\"user\",\"methods\":{\"getMusicCreator(uint256)\":{\"notice\":\"Returns the creator of a music\"},\"getMusicTitre(uint256)\":{\"notice\":\"Returns the name of a Music\"},\"getStoreAddress()\":{\"notice\":\"Returns the address registered for the marketplace\"},\"isMusicToken()\":{\"notice\":\"Returns true\"}},\"notice\":\"Create tokenized (ERC721) versions of properties music\",\"version\":1}},\"settings\":{\"compilationTarget\":{\"/Users/irmenedocteur/Downloads/Listen Music Score _ final project consensys/contracts/MusicToken.sol\":\"MusicToken\"},\"evmVersion\":\"istanbul\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":false,\"runs\":200},\"remappings\":[]},\"sources\":{\"/Users/irmenedocteur/Downloads/Listen Music Score _ final project consensys/contracts/MusicToken.sol\":{\"keccak256\":\"0xffc60b40948b77f678d718a7ee532154be6c5c667e89df4e9df0412c38cc2e24\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://240844efdeb5083c7a1851e643d2abbd7cc5220d3990fc52932de3d8cc794bcb\",\"dweb:/ipfs/QmYG8UGu792Pknranh5Z9hTsU4MbAbZkX5mzXVwvPHWr2h\"]},\"@openzeppelin/contracts/GSN/Context.sol\":{\"keccak256\":\"0x8d3cb350f04ff49cfb10aef08d87f19dcbaecc8027b0bed12f3275cd12f38cf0\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://ded47ec7c96750f9bd04bbbc84f659992d4ba901cb7b532a52cd468272cf378f\",\"dweb:/ipfs/QmfBrGtQP7rZEqEg6Wz6jh2N2Kukpj1z5v3CGWmAqrzm96\"]},\"@openzeppelin/contracts/access/Ownable.sol\":{\"keccak256\":\"0xf7c39c7e6d06ed3bda90cfefbcbf2ddc32c599c3d6721746546ad64946efccaa\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://cb57a28e189cd8b05748db44bdd51d608e6f1364dd1b35ad921e1bc82c10631e\",\"dweb:/ipfs/QmaWWTBbVu2pRR9XUbE4iC159NoP59cRF9ZJwhf4ghFN9i\"]},\"@openzeppelin/contracts/introspection/ERC165.sol\":{\"keccak256\":\"0xd6b90e604fb2eb2d641c7110c72440bf2dc999ec6ab8ff60f200e71ca75d1d90\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://7b92d8ab83b21ff984b1f0d6d66897d5afb1f2052004cbcb133cea023e0ae468\",\"dweb:/ipfs/QmTarypkQrFp4UMjTh7Zzhz2nZLz5uPS4nJQtHDEuwBVe6\"]},\"@openzeppelin/contracts/introspection/IERC165.sol\":{\"keccak256\":\"0xf70bc25d981e4ec9673a995ad2995d5d493ea188d3d8f388bba9c227ce09fb82\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://bd970f51e3a77790c2f02b5b1759827c3b897c3d98c407b3631e8af32e3dc93c\",\"dweb:/ipfs/QmPF85Amgbqjk3SNZKsPCsqCw8JfwYEPMnnhvMJUyX58je\"]},\"@openzeppelin/contracts/math/SafeMath.sol\":{\"keccak256\":\"0x3b21f2c8d626de3b9925ae33e972d8bf5c8b1bffb3f4ee94daeed7d0679036e6\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://7f8d45329fecbf0836ad7543330c3ecd0f8d0ffa42d4016278c3eb2215fdcdfe\",\"dweb:/ipfs/QmXWLT7GcnHtA5NiD6MFi2CV3EWJY4wv5mLNnypqYDrxL3\"]},\"@openzeppelin/contracts/token/ERC721/ERC721.sol\":{\"keccak256\":\"0x5a3de7f7f76e47a071195cf42e2a702265694a6b32037de709463bd8ad784fb5\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://678cbad1f972a4d8c9d47bc39fa6d39560b4fc143c8d9c812a63fe99bb13062e\",\"dweb:/ipfs/QmUhLDvUndcbQLakDNg9G4UXz8UPzRqC6S3rWGKupB6DYs\"]},\"@openzeppelin/contracts/token/ERC721/IERC721.sol\":{\"keccak256\":\"0x5a9f5c29bd7cf0b345e14d97d5f685f68c07e1e5bfdd47e5bcec045e81b0b6ac\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://321cbaa1412fc8d013d8ad3fb5f98c0db7401ddacfb09b70828ea2cebe37397e\",\"dweb:/ipfs/Qmd3Hoc71w6rmxAR6A5VKW9at677VP1L5KDcJnyvu4ksu3\"]},\"@openzeppelin/contracts/token/ERC721/IERC721Enumerable.sol\":{\"keccak256\":\"0xe6bd1b1218338b6f9fe17776f48623b4ac3d8a40405f74a44bc23c00abe2ca13\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://0c354c3f6e9c487759aa7869be4fba68e0b2efc777b514d289c4cbd3ff8f7e1a\",\"dweb:/ipfs/QmdF9LcSYVmiUCL7JxLEYmSLrjga6zJsujfi6sgEJD4M1z\"]},\"@openzeppelin/contracts/token/ERC721/IERC721Metadata.sol\":{\"keccak256\":\"0xccb917776f826ac6b68bd5a15a5f711e3967848a52ba11e6104d9a4f593314a7\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://430255ad2229ced6d880e61a67bdc6e48dbbaed8354a7c1fe918cd8b8714a886\",\"dweb:/ipfs/QmTHY56odzqEpEC6v6tafaWMYY7vmULw25q5XHJLCCAeox\"]},\"@openzeppelin/contracts/token/ERC721/IERC721Receiver.sol\":{\"keccak256\":\"0x52146049d6709c870e8ddcd988b5155cb6c5d640cfcd8978aee52bc1ba2ec4eb\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://ada84513617b7c1b2f890b44503735abaec73a1acd030112a17aac7e6c66a4a1\",\"dweb:/ipfs/QmaiFwdio67iJrfjAdkMac24eJ5sS1qD7CZW6PhUU6KjiK\"]},\"@openzeppelin/contracts/utils/Address.sol\":{\"keccak256\":\"0xa6a15ddddcbf29d2922a1e0d4151b5d2d33da24b93cc9ebc12390e0d855532f8\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://7c119bcaecfa853d564ac88d312777f75fa1126a3bca88a3371adb0ad9f35cb0\",\"dweb:/ipfs/QmY9UPuXeSKq86Zh38fE43VGQPhKMN34mkuFSFqPcr6nvZ\"]},\"@openzeppelin/contracts/utils/EnumerableMap.sol\":{\"keccak256\":\"0xf6bdf22fe038e5310b6f0372ecd01f221e2c0b248b45efc404542d94fcac9133\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://6e798f3492180627d6616fa94925b61a9f105347eed9e895f3e18a0eb3dfcd3d\",\"dweb:/ipfs/QmQcTro5nv3Lopf4c4rEe1BuykCfPsjRsJmysdNXtHNUdt\"]},\"@openzeppelin/contracts/utils/EnumerableSet.sol\":{\"keccak256\":\"0xae0992eb1ec30fd1ecdf2e04a6036decfc9797bf11dc1ec84b546b74318d5ec2\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://3b61f99a64e999682ad7bfbb3a1c762a20a0a5b30f9f2011693fa857969af61f\",\"dweb:/ipfs/QmZystFY76wkWCf7V3yKh3buZuKVKbswiE7y6yU62kk3zi\"]},\"@openzeppelin/contracts/utils/Strings.sol\":{\"keccak256\":\"0x16b5422892fbdd9648f12e59de85b42efd57d76b6d6b2358cb46e0f6d4a71aaf\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://4ef38821a4ee756757dc1ce9074ef6096d1b5c760627e92c0852d788dc636ea7\",\"dweb:/ipfs/QmdGwP6BtRMcp4VVJUWwTmXEjYmL52A8WZpBdFJYmzc9pJ\"]}},\"version\":1}",
    "bytecode": "0x60806040523480156200001157600080fd5b506040518060400160405280601081526020017f546f6b656e697a6564204d7573696373000000000000000000000000000000008152506040518060400160405280600281526020017f544d000000000000000000000000000000000000000000000000000000000000815250620000966301ffc9a760e01b620001d160201b60201c565b8160069080519060200190620000ae929190620002e2565b508060079080519060200190620000c7929190620002e2565b50620000e06380ac58cd60e01b620001d160201b60201c565b620000f8635b5e139f60e01b620001d160201b60201c565b6200011063780e9d6360e01b620001d160201b60201c565b5050600062000124620002da60201b60201c565b905080600a60006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508073ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a3506000600c8190555062000388565b63ffffffff60e01b817bffffffffffffffffffffffffffffffffffffffffffffffffffffffff191614156200026e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601c8152602001807f4552433136353a20696e76616c696420696e746572666163652069640000000081525060200191505060405180910390fd5b6001600080837bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19167bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916815260200190815260200160002060006101000a81548160ff02191690831515021790555050565b600033905090565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f106200032557805160ff191683800117855562000356565b8280016001018555821562000356579182015b828111156200035557825182559160200191906001019062000338565b5b50905062000365919062000369565b5090565b5b80821115620003845760008160009055506001016200036a565b5090565b6136d180620003986000396000f3fe608060405234801561001057600080fd5b50600436106101c45760003560e01c806370a08231116100f9578063b88d4fde11610097578063f0f0211a11610071578063f0f0211a14610af4578063f2fde38b14610c50578063f8edc51b14610c94578063ffc2886e14610cd6576101c4565b8063b88d4fde146108ce578063c87b56dd146109d3578063e985e9c514610a7a576101c4565b806393b5bbe7116100d357806393b5bbe7146107a757806395d89b41146107c7578063a22cb4651461084a578063b07ed3a91461089a576101c4565b806370a0823114610711578063715018a6146107695780638da5cb5b14610773576101c4565b80633c9eac9c11610166578063624e8a5011610140578063624e8a501461059a5780636352211e146105f25780636559e59a1461064a5780636c0360eb1461068e576101c4565b80633c9eac9c1461044357806342842e0e146104ea5780634f6ccce714610558576101c4565b8063095ea7b3116101a2578063095ea7b31461030757806318160ddd1461035557806323b872dd146103735780632f745c59146103e1576101c4565b806301ffc9a7146101c957806306fdde031461022c578063081812fc146102af575b600080fd5b610214600480360360208110156101df57600080fd5b8101908080357bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19169060200190929190505050610d04565b60405180821515815260200191505060405180910390f35b610234610d6b565b6040518080602001828103825283818151815260200191508051906020019080838360005b83811015610274578082015181840152602081019050610259565b50505050905090810190601f1680156102a15780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b6102db600480360360208110156102c557600080fd5b8101908080359060200190929190505050610e0d565b604051808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b6103536004803603604081101561031d57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610ea8565b005b61035d610fec565b6040518082815260200191505060405180910390f35b6103df6004803603606081101561038957600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610ffd565b005b61042d600480360360408110156103f757600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050611073565b6040518082815260200191505060405180910390f35b61046f6004803603602081101561045957600080fd5b81019080803590602001909291905050506110ce565b6040518080602001828103825283818151815260200191508051906020019080838360005b838110156104af578082015181840152602081019050610494565b50505050905090810190601f1680156104dc5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b6105566004803603606081101561050057600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff1690602001909291908035906020019092919050505061110d565b005b6105846004803603602081101561056e57600080fd5b810190808035906020019092919050505061112d565b6040518082815260200191505060405180910390f35b6105c6600480360360208110156105b057600080fd5b8101908080359060200190929190505050611150565b604051808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b61061e6004803603602081101561060857600080fd5b8101908080359060200190929190505050611190565b604051808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b61068c6004803603602081101561066057600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291905050506111c7565b005b6106966112d5565b6040518080602001828103825283818151815260200191508051906020019080838360005b838110156106d65780820151818401526020810190506106bb565b50505050905090810190601f1680156107035780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b6107536004803603602081101561072757600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050611377565b6040518082815260200191505060405180910390f35b61077161144c565b005b61077b6115d7565b604051808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b6107af611601565b60405180821515815260200191505060405180910390f35b6107cf61160a565b6040518080602001828103825283818151815260200191508051906020019080838360005b8381101561080f5780820151818401526020810190506107f4565b50505050905090810190601f16801561083c5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b6108986004803603604081101561086057600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291908035151590602001909291905050506116ac565b005b6108a2611862565b604051808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b6109d1600480360360808110156108e457600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803590602001909291908035906020019064010000000081111561094b57600080fd5b82018360208201111561095d57600080fd5b8035906020019184600183028401116401000000008311171561097f57600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f82011690508083019250505050505050919291929050505061188c565b005b6109ff600480360360208110156109e957600080fd5b8101908080359060200190929190505050611904565b6040518080602001828103825283818151815260200191508051906020019080838360005b83811015610a3f578082015181840152602081019050610a24565b50505050905090810190601f168015610a6c5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b610adc60048036036040811015610a9057600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050611bed565b60405180821515815260200191505060405180910390f35b610c4e60048036036060811015610b0a57600080fd5b8101908080359060200190640100000000811115610b2757600080fd5b820183602082011115610b3957600080fd5b80359060200191846001830284011164010000000083111715610b5b57600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f82011690508083019250505050505050919291929080359060200190640100000000811115610bbe57600080fd5b820183602082011115610bd057600080fd5b80359060200191846001830284011164010000000083111715610bf257600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f82011690508083019250505050505050919291929080359060200190929190505050611c81565b005b610c9260048036036020811015610c6657600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050611c91565b005b610cc060048036036020811015610caa57600080fd5b8101908080359060200190929190505050611ea1565b6040518082815260200191505060405180910390f35b610d0260048036036020811015610cec57600080fd5b8101908080359060200190929190505050611ec1565b005b6000806000837bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19167bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916815260200190815260200160002060009054906101000a900460ff169050919050565b606060068054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015610e035780601f10610dd857610100808354040283529160200191610e03565b820191906000526020600020905b815481529060010190602001808311610de657829003601f168201915b5050505050905090565b6000610e1882611fb4565b610e6d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602c8152602001806135c6602c913960400191505060405180910390fd5b6004600083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050919050565b6000610eb382611190565b90508073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415610f3a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602181526020018061364a6021913960400191505060405180910390fd5b8073ffffffffffffffffffffffffffffffffffffffff16610f59611fd1565b73ffffffffffffffffffffffffffffffffffffffff161480610f885750610f8781610f82611fd1565b611bed565b5b610fdd576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260388152602001806135196038913960400191505060405180910390fd5b610fe78383611fd9565b505050565b6000610ff86002612092565b905090565b61100e611008611fd1565b826120a7565b611063576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252603181526020018061366b6031913960400191505060405180910390fd5b61106e83838361219b565b505050565b60006110c682600160008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206123de90919063ffffffff16565b905092915050565b60606040518060400160405280600581526020017f76616c75650000000000000000000000000000000000000000000000000000008152509050919050565b6111288383836040518060200160405280600081525061188c565b505050565b6000806111448360026123f890919063ffffffff16565b50905080915050919050565b6000600d600083815260200190815260200160002060040160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050919050565b60006111c08260405180606001604052806029815260200161357b6029913960026124249092919063ffffffff16565b9050919050565b6111cf611fd1565b73ffffffffffffffffffffffffffffffffffffffff16600a60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614611291576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260208152602001807f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657281525060200191505060405180910390fd5b80600b60006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b606060098054600181600116156101000203166002900480601f01602080910402602001604051908101604052809291908181526020018280546001816001161561010002031660029004801561136d5780601f106113425761010080835404028352916020019161136d565b820191906000526020600020905b81548152906001019060200180831161135057829003601f168201915b5050505050905090565b60008073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614156113fe576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602a815260200180613551602a913960400191505060405180910390fd5b611445600160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020612443565b9050919050565b611454611fd1565b73ffffffffffffffffffffffffffffffffffffffff16600a60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614611516576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260208152602001807f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657281525060200191505060405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff16600a60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a36000600a60006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550565b6000600a60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b60006001905090565b606060078054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156116a25780601f10611677576101008083540402835291602001916116a2565b820191906000526020600020905b81548152906001019060200180831161168557829003601f168201915b5050505050905090565b6116b4611fd1565b73ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415611755576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260198152602001807f4552433732313a20617070726f766520746f2063616c6c65720000000000000081525060200191505060405180910390fd5b8060056000611762611fd1565b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055508173ffffffffffffffffffffffffffffffffffffffff1661180f611fd1565b73ffffffffffffffffffffffffffffffffffffffff167f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c318360405180821515815260200191505060405180910390a35050565b6000600b60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b61189d611897611fd1565b836120a7565b6118f2576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252603181526020018061366b6031913960400191505060405180910390fd5b6118fe84848484612458565b50505050565b606061190f82611fb4565b611964576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602f81526020018061361b602f913960400191505060405180910390fd5b6060600860008481526020019081526020016000208054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015611a0d5780601f106119e257610100808354040283529160200191611a0d565b820191906000526020600020905b8154815290600101906020018083116119f057829003601f168201915b50505050509050600060098054600181600116156101000203166002900490501415611a3c5780915050611be8565b600081511115611b15576009816040516020018083805460018160011615610100020316600290048015611aa75780601f10611a85576101008083540402835291820191611aa7565b820191906000526020600020905b815481529060010190602001808311611a93575b505082805190602001908083835b60208310611ad85780518252602082019150602081019050602083039250611ab5565b6001836020036101000a03801982511681845116808217855250505050505090500192505050604051602081830303815290604052915050611be8565b6009611b20846124ca565b6040516020018083805460018160011615610100020316600290048015611b7e5780601f10611b5c576101008083540402835291820191611b7e565b820191906000526020600020905b815481529060010190602001808311611b6a575b505082805190602001908083835b60208310611baf5780518252602082019150602081019050602083039250611b8c565b6001836020036101000a038019825116818451168082178552505050505050905001925050506040516020818303038152906040529150505b919050565b6000600560008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16905092915050565b611c8c838383612611565b505050565b611c99611fd1565b73ffffffffffffffffffffffffffffffffffffffff16600a60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614611d5b576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260208152602001807f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657281525060200191505060405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415611de1576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602681526020018061347d6026913960400191505060405180910390fd5b8073ffffffffffffffffffffffffffffffffffffffff16600a60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a380600a60006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b6000600d6000838152602001908152602001600020600301549050919050565b803373ffffffffffffffffffffffffffffffffffffffff16611ee282611190565b73ffffffffffffffffffffffffffffffffffffffff1614611f0257600080fd5b600073ffffffffffffffffffffffffffffffffffffffff16600b60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff161415611f5e57600080fd5b611f8b600b60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1660016116ac565b6001600d6000848152602001908152602001600020600301600082825401925050819055505050565b6000611fca82600261271990919063ffffffff16565b9050919050565b600033905090565b816004600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550808273ffffffffffffffffffffffffffffffffffffffff1661204c83611190565b73ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45050565b60006120a082600001612733565b9050919050565b60006120b282611fb4565b612107576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602c8152602001806134ed602c913960400191505060405180910390fd5b600061211283611190565b90508073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff16148061218157508373ffffffffffffffffffffffffffffffffffffffff1661216984610e0d565b73ffffffffffffffffffffffffffffffffffffffff16145b8061219257506121918185611bed565b5b91505092915050565b8273ffffffffffffffffffffffffffffffffffffffff166121bb82611190565b73ffffffffffffffffffffffffffffffffffffffff1614612227576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260298152602001806135f26029913960400191505060405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614156122ad576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260248152602001806134a36024913960400191505060405180910390fd5b6122b8838383612744565b6122c3600082611fd9565b61231481600160008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002061274990919063ffffffff16565b5061236681600160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002061276390919063ffffffff16565b5061237d8183600261277d9092919063ffffffff16565b50808273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a4505050565b60006123ed83600001836127b2565b60001c905092915050565b60008060008061240b8660000186612835565b915091508160001c8160001c9350935050509250929050565b6000612437846000018460001b846128ce565b60001c90509392505050565b6000612451826000016129c4565b9050919050565b61246384848461219b565b61246f848484846129d5565b6124c4576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252603281526020018061344b6032913960400191505060405180910390fd5b50505050565b60606000821415612512576040518060400160405280600181526020017f3000000000000000000000000000000000000000000000000000000000000000815250905061260c565b600082905060005b6000821461253c578080600101915050600a828161253457fe5b04915061251a565b60608167ffffffffffffffff8111801561255557600080fd5b506040519080825280601f01601f1916602001820160405280156125885781602001600182028036833780820191505090505b50905060006001830390508593505b6000841461260457600a84816125a957fe5b0660300160f81b828280600190039350815181106125c357fe5b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a905350600a84816125fc57fe5b049350612597565b819450505050505b919050565b6001600c5401600c819055506040518060a00160405280848152602001838152602001828152602001600081526020013373ffffffffffffffffffffffffffffffffffffffff16815250600d6000600c548152602001908152602001600020600082015181600001908051906020019061268c92919061338b565b5060208201518160010190805190602001906126a992919061338b565b50604082015181600201556060820151816003015560808201518160040160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555090505061271433600c54612bee565b505050565b600061272b836000018360001b612c0c565b905092915050565b600081600001805490509050919050565b505050565b600061275b836000018360001b612c2f565b905092915050565b6000612775836000018360001b612d17565b905092915050565b60006127a9846000018460001b8473ffffffffffffffffffffffffffffffffffffffff1660001b612d87565b90509392505050565b600081836000018054905011612813576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260228152602001806134296022913960400191505060405180910390fd5b82600001828154811061282257fe5b9060005260206000200154905092915050565b60008082846000018054905011612897576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260228152602001806135a46022913960400191505060405180910390fd5b60008460000184815481106128a857fe5b906000526020600020906002020190508060000154816001015492509250509250929050565b60008084600101600085815260200190815260200160002054905060008114158390612995576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825283818151815260200191508051906020019080838360005b8381101561295a57808201518184015260208101905061293f565b50505050905090810190601f1680156129875780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b508460000160018203815481106129a857fe5b9060005260206000209060020201600101549150509392505050565b600081600001805490509050919050565b60006129f68473ffffffffffffffffffffffffffffffffffffffff16612e63565b612a035760019050612be6565b6060612b6d63150b7a0260e01b612a18611fd1565b888787604051602401808573ffffffffffffffffffffffffffffffffffffffff1681526020018473ffffffffffffffffffffffffffffffffffffffff16815260200183815260200180602001828103825283818151815260200191508051906020019080838360005b83811015612a9c578082015181840152602081019050612a81565b50505050905090810190601f168015612ac95780820380516001836020036101000a031916815260200191505b5095505050505050604051602081830303815290604052907bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff838183161783525050505060405180606001604052806032815260200161344b603291398773ffffffffffffffffffffffffffffffffffffffff16612e769092919063ffffffff16565b90506000818060200190516020811015612b8657600080fd5b8101908080519060200190929190505050905063150b7a0260e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916817bffffffffffffffffffffffffffffffffffffffffffffffffffffffff191614925050505b949350505050565b612c08828260405180602001604052806000815250612e8e565b5050565b600080836001016000848152602001908152602001600020541415905092915050565b60008083600101600084815260200190815260200160002054905060008114612d0b5760006001820390506000600186600001805490500390506000866000018281548110612c7a57fe5b9060005260206000200154905080876000018481548110612c9757fe5b9060005260206000200181905550600183018760010160008381526020019081526020016000208190555086600001805480612ccf57fe5b60019003818190600052602060002001600090559055866001016000878152602001908152602001600020600090556001945050505050612d11565b60009150505b92915050565b6000612d238383612eff565b612d7c578260000182908060018154018082558091505060019003906000526020600020016000909190919091505582600001805490508360010160008481526020019081526020016000208190555060019050612d81565b600090505b92915050565b6000808460010160008581526020019081526020016000205490506000811415612e2e57846000016040518060400160405280868152602001858152509080600181540180825580915050600190039060005260206000209060020201600090919091909150600082015181600001556020820151816001015550508460000180549050856001016000868152602001908152602001600020819055506001915050612e5c565b82856000016001830381548110612e4157fe5b90600052602060002090600202016001018190555060009150505b9392505050565b600080823b905060008111915050919050565b6060612e858484600085612f22565b90509392505050565b612e9883836130cb565b612ea560008484846129d5565b612efa576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252603281526020018061344b6032913960400191505060405180910390fd5b505050565b600080836001016000848152602001908152602001600020541415905092915050565b606082471015612f7d576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260268152602001806134c76026913960400191505060405180910390fd5b612f8685612e63565b612ff8576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601d8152602001807f416464726573733a2063616c6c20746f206e6f6e2d636f6e747261637400000081525060200191505060405180910390fd5b600060608673ffffffffffffffffffffffffffffffffffffffff1685876040518082805190602001908083835b602083106130485780518252602082019150602081019050602083039250613025565b6001836020036101000a03801982511681845116808217855250505050505090500191505060006040518083038185875af1925050503d80600081146130aa576040519150601f19603f3d011682016040523d82523d6000602084013e6130af565b606091505b50915091506130bf8282866132bf565b92505050949350505050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16141561316e576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260208152602001807f4552433732313a206d696e7420746f20746865207a65726f206164647265737381525060200191505060405180910390fd5b61317781611fb4565b156131ea576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601c8152602001807f4552433732313a20746f6b656e20616c7265616479206d696e7465640000000081525060200191505060405180910390fd5b6131f660008383612744565b61324781600160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002061276390919063ffffffff16565b5061325e8183600261277d9092919063ffffffff16565b50808273ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a45050565b606083156132cf57829050613384565b6000835111156132e25782518084602001fd5b816040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825283818151815260200191508051906020019080838360005b8381101561334957808201518184015260208101905061332e565b50505050905090810190601f1680156133765780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b9392505050565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f106133cc57805160ff19168380011785556133fa565b828001600101855582156133fa579182015b828111156133f95782518255916020019190600101906133de565b5b509050613407919061340b565b5090565b5b8082111561342457600081600090555060010161340c565b509056fe456e756d657261626c655365743a20696e646578206f7574206f6620626f756e64734552433732313a207472616e7366657220746f206e6f6e20455243373231526563656976657220696d706c656d656e7465724f776e61626c653a206e6577206f776e657220697320746865207a65726f20616464726573734552433732313a207472616e7366657220746f20746865207a65726f2061646472657373416464726573733a20696e73756666696369656e742062616c616e636520666f722063616c6c4552433732313a206f70657261746f7220717565727920666f72206e6f6e6578697374656e7420746f6b656e4552433732313a20617070726f76652063616c6c6572206973206e6f74206f776e6572206e6f7220617070726f76656420666f7220616c6c4552433732313a2062616c616e636520717565727920666f7220746865207a65726f20616464726573734552433732313a206f776e657220717565727920666f72206e6f6e6578697374656e7420746f6b656e456e756d657261626c654d61703a20696e646578206f7574206f6620626f756e64734552433732313a20617070726f76656420717565727920666f72206e6f6e6578697374656e7420746f6b656e4552433732313a207472616e73666572206f6620746f6b656e2074686174206973206e6f74206f776e4552433732314d657461646174613a2055524920717565727920666f72206e6f6e6578697374656e7420746f6b656e4552433732313a20617070726f76616c20746f2063757272656e74206f776e65724552433732313a207472616e736665722063616c6c6572206973206e6f74206f776e6572206e6f7220617070726f766564a264697066735822122030b024847d5ca272fddde35dbf31aaab6c1a184f704893ee4a5d4ffca05693b364736f6c63430007000033",
    "deployedBytecode": "0x608060405234801561001057600080fd5b50600436106101c45760003560e01c806370a08231116100f9578063b88d4fde11610097578063f0f0211a11610071578063f0f0211a14610af4578063f2fde38b14610c50578063f8edc51b14610c94578063ffc2886e14610cd6576101c4565b8063b88d4fde146108ce578063c87b56dd146109d3578063e985e9c514610a7a576101c4565b806393b5bbe7116100d357806393b5bbe7146107a757806395d89b41146107c7578063a22cb4651461084a578063b07ed3a91461089a576101c4565b806370a0823114610711578063715018a6146107695780638da5cb5b14610773576101c4565b80633c9eac9c11610166578063624e8a5011610140578063624e8a501461059a5780636352211e146105f25780636559e59a1461064a5780636c0360eb1461068e576101c4565b80633c9eac9c1461044357806342842e0e146104ea5780634f6ccce714610558576101c4565b8063095ea7b3116101a2578063095ea7b31461030757806318160ddd1461035557806323b872dd146103735780632f745c59146103e1576101c4565b806301ffc9a7146101c957806306fdde031461022c578063081812fc146102af575b600080fd5b610214600480360360208110156101df57600080fd5b8101908080357bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19169060200190929190505050610d04565b60405180821515815260200191505060405180910390f35b610234610d6b565b6040518080602001828103825283818151815260200191508051906020019080838360005b83811015610274578082015181840152602081019050610259565b50505050905090810190601f1680156102a15780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b6102db600480360360208110156102c557600080fd5b8101908080359060200190929190505050610e0d565b604051808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b6103536004803603604081101561031d57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610ea8565b005b61035d610fec565b6040518082815260200191505060405180910390f35b6103df6004803603606081101561038957600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610ffd565b005b61042d600480360360408110156103f757600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050611073565b6040518082815260200191505060405180910390f35b61046f6004803603602081101561045957600080fd5b81019080803590602001909291905050506110ce565b6040518080602001828103825283818151815260200191508051906020019080838360005b838110156104af578082015181840152602081019050610494565b50505050905090810190601f1680156104dc5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b6105566004803603606081101561050057600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff1690602001909291908035906020019092919050505061110d565b005b6105846004803603602081101561056e57600080fd5b810190808035906020019092919050505061112d565b6040518082815260200191505060405180910390f35b6105c6600480360360208110156105b057600080fd5b8101908080359060200190929190505050611150565b604051808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b61061e6004803603602081101561060857600080fd5b8101908080359060200190929190505050611190565b604051808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b61068c6004803603602081101561066057600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291905050506111c7565b005b6106966112d5565b6040518080602001828103825283818151815260200191508051906020019080838360005b838110156106d65780820151818401526020810190506106bb565b50505050905090810190601f1680156107035780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b6107536004803603602081101561072757600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050611377565b6040518082815260200191505060405180910390f35b61077161144c565b005b61077b6115d7565b604051808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b6107af611601565b60405180821515815260200191505060405180910390f35b6107cf61160a565b6040518080602001828103825283818151815260200191508051906020019080838360005b8381101561080f5780820151818401526020810190506107f4565b50505050905090810190601f16801561083c5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b6108986004803603604081101561086057600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291908035151590602001909291905050506116ac565b005b6108a2611862565b604051808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b6109d1600480360360808110156108e457600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803590602001909291908035906020019064010000000081111561094b57600080fd5b82018360208201111561095d57600080fd5b8035906020019184600183028401116401000000008311171561097f57600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f82011690508083019250505050505050919291929050505061188c565b005b6109ff600480360360208110156109e957600080fd5b8101908080359060200190929190505050611904565b6040518080602001828103825283818151815260200191508051906020019080838360005b83811015610a3f578082015181840152602081019050610a24565b50505050905090810190601f168015610a6c5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b610adc60048036036040811015610a9057600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050611bed565b60405180821515815260200191505060405180910390f35b610c4e60048036036060811015610b0a57600080fd5b8101908080359060200190640100000000811115610b2757600080fd5b820183602082011115610b3957600080fd5b80359060200191846001830284011164010000000083111715610b5b57600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f82011690508083019250505050505050919291929080359060200190640100000000811115610bbe57600080fd5b820183602082011115610bd057600080fd5b80359060200191846001830284011164010000000083111715610bf257600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f82011690508083019250505050505050919291929080359060200190929190505050611c81565b005b610c9260048036036020811015610c6657600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050611c91565b005b610cc060048036036020811015610caa57600080fd5b8101908080359060200190929190505050611ea1565b6040518082815260200191505060405180910390f35b610d0260048036036020811015610cec57600080fd5b8101908080359060200190929190505050611ec1565b005b6000806000837bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19167bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916815260200190815260200160002060009054906101000a900460ff169050919050565b606060068054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015610e035780601f10610dd857610100808354040283529160200191610e03565b820191906000526020600020905b815481529060010190602001808311610de657829003601f168201915b5050505050905090565b6000610e1882611fb4565b610e6d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602c8152602001806135c6602c913960400191505060405180910390fd5b6004600083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050919050565b6000610eb382611190565b90508073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415610f3a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602181526020018061364a6021913960400191505060405180910390fd5b8073ffffffffffffffffffffffffffffffffffffffff16610f59611fd1565b73ffffffffffffffffffffffffffffffffffffffff161480610f885750610f8781610f82611fd1565b611bed565b5b610fdd576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260388152602001806135196038913960400191505060405180910390fd5b610fe78383611fd9565b505050565b6000610ff86002612092565b905090565b61100e611008611fd1565b826120a7565b611063576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252603181526020018061366b6031913960400191505060405180910390fd5b61106e83838361219b565b505050565b60006110c682600160008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206123de90919063ffffffff16565b905092915050565b60606040518060400160405280600581526020017f76616c75650000000000000000000000000000000000000000000000000000008152509050919050565b6111288383836040518060200160405280600081525061188c565b505050565b6000806111448360026123f890919063ffffffff16565b50905080915050919050565b6000600d600083815260200190815260200160002060040160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050919050565b60006111c08260405180606001604052806029815260200161357b6029913960026124249092919063ffffffff16565b9050919050565b6111cf611fd1565b73ffffffffffffffffffffffffffffffffffffffff16600a60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614611291576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260208152602001807f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657281525060200191505060405180910390fd5b80600b60006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b606060098054600181600116156101000203166002900480601f01602080910402602001604051908101604052809291908181526020018280546001816001161561010002031660029004801561136d5780601f106113425761010080835404028352916020019161136d565b820191906000526020600020905b81548152906001019060200180831161135057829003601f168201915b5050505050905090565b60008073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614156113fe576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602a815260200180613551602a913960400191505060405180910390fd5b611445600160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020612443565b9050919050565b611454611fd1565b73ffffffffffffffffffffffffffffffffffffffff16600a60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614611516576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260208152602001807f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657281525060200191505060405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff16600a60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a36000600a60006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550565b6000600a60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b60006001905090565b606060078054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156116a25780601f10611677576101008083540402835291602001916116a2565b820191906000526020600020905b81548152906001019060200180831161168557829003601f168201915b5050505050905090565b6116b4611fd1565b73ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415611755576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260198152602001807f4552433732313a20617070726f766520746f2063616c6c65720000000000000081525060200191505060405180910390fd5b8060056000611762611fd1565b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055508173ffffffffffffffffffffffffffffffffffffffff1661180f611fd1565b73ffffffffffffffffffffffffffffffffffffffff167f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c318360405180821515815260200191505060405180910390a35050565b6000600b60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b61189d611897611fd1565b836120a7565b6118f2576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252603181526020018061366b6031913960400191505060405180910390fd5b6118fe84848484612458565b50505050565b606061190f82611fb4565b611964576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602f81526020018061361b602f913960400191505060405180910390fd5b6060600860008481526020019081526020016000208054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015611a0d5780601f106119e257610100808354040283529160200191611a0d565b820191906000526020600020905b8154815290600101906020018083116119f057829003601f168201915b50505050509050600060098054600181600116156101000203166002900490501415611a3c5780915050611be8565b600081511115611b15576009816040516020018083805460018160011615610100020316600290048015611aa75780601f10611a85576101008083540402835291820191611aa7565b820191906000526020600020905b815481529060010190602001808311611a93575b505082805190602001908083835b60208310611ad85780518252602082019150602081019050602083039250611ab5565b6001836020036101000a03801982511681845116808217855250505050505090500192505050604051602081830303815290604052915050611be8565b6009611b20846124ca565b6040516020018083805460018160011615610100020316600290048015611b7e5780601f10611b5c576101008083540402835291820191611b7e565b820191906000526020600020905b815481529060010190602001808311611b6a575b505082805190602001908083835b60208310611baf5780518252602082019150602081019050602083039250611b8c565b6001836020036101000a038019825116818451168082178552505050505050905001925050506040516020818303038152906040529150505b919050565b6000600560008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16905092915050565b611c8c838383612611565b505050565b611c99611fd1565b73ffffffffffffffffffffffffffffffffffffffff16600a60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614611d5b576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260208152602001807f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657281525060200191505060405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415611de1576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602681526020018061347d6026913960400191505060405180910390fd5b8073ffffffffffffffffffffffffffffffffffffffff16600a60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a380600a60006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b6000600d6000838152602001908152602001600020600301549050919050565b803373ffffffffffffffffffffffffffffffffffffffff16611ee282611190565b73ffffffffffffffffffffffffffffffffffffffff1614611f0257600080fd5b600073ffffffffffffffffffffffffffffffffffffffff16600b60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff161415611f5e57600080fd5b611f8b600b60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1660016116ac565b6001600d6000848152602001908152602001600020600301600082825401925050819055505050565b6000611fca82600261271990919063ffffffff16565b9050919050565b600033905090565b816004600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550808273ffffffffffffffffffffffffffffffffffffffff1661204c83611190565b73ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45050565b60006120a082600001612733565b9050919050565b60006120b282611fb4565b612107576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602c8152602001806134ed602c913960400191505060405180910390fd5b600061211283611190565b90508073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff16148061218157508373ffffffffffffffffffffffffffffffffffffffff1661216984610e0d565b73ffffffffffffffffffffffffffffffffffffffff16145b8061219257506121918185611bed565b5b91505092915050565b8273ffffffffffffffffffffffffffffffffffffffff166121bb82611190565b73ffffffffffffffffffffffffffffffffffffffff1614612227576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260298152602001806135f26029913960400191505060405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614156122ad576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260248152602001806134a36024913960400191505060405180910390fd5b6122b8838383612744565b6122c3600082611fd9565b61231481600160008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002061274990919063ffffffff16565b5061236681600160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002061276390919063ffffffff16565b5061237d8183600261277d9092919063ffffffff16565b50808273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a4505050565b60006123ed83600001836127b2565b60001c905092915050565b60008060008061240b8660000186612835565b915091508160001c8160001c9350935050509250929050565b6000612437846000018460001b846128ce565b60001c90509392505050565b6000612451826000016129c4565b9050919050565b61246384848461219b565b61246f848484846129d5565b6124c4576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252603281526020018061344b6032913960400191505060405180910390fd5b50505050565b60606000821415612512576040518060400160405280600181526020017f3000000000000000000000000000000000000000000000000000000000000000815250905061260c565b600082905060005b6000821461253c578080600101915050600a828161253457fe5b04915061251a565b60608167ffffffffffffffff8111801561255557600080fd5b506040519080825280601f01601f1916602001820160405280156125885781602001600182028036833780820191505090505b50905060006001830390508593505b6000841461260457600a84816125a957fe5b0660300160f81b828280600190039350815181106125c357fe5b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a905350600a84816125fc57fe5b049350612597565b819450505050505b919050565b6001600c5401600c819055506040518060a00160405280848152602001838152602001828152602001600081526020013373ffffffffffffffffffffffffffffffffffffffff16815250600d6000600c548152602001908152602001600020600082015181600001908051906020019061268c92919061338b565b5060208201518160010190805190602001906126a992919061338b565b50604082015181600201556060820151816003015560808201518160040160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555090505061271433600c54612bee565b505050565b600061272b836000018360001b612c0c565b905092915050565b600081600001805490509050919050565b505050565b600061275b836000018360001b612c2f565b905092915050565b6000612775836000018360001b612d17565b905092915050565b60006127a9846000018460001b8473ffffffffffffffffffffffffffffffffffffffff1660001b612d87565b90509392505050565b600081836000018054905011612813576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260228152602001806134296022913960400191505060405180910390fd5b82600001828154811061282257fe5b9060005260206000200154905092915050565b60008082846000018054905011612897576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260228152602001806135a46022913960400191505060405180910390fd5b60008460000184815481106128a857fe5b906000526020600020906002020190508060000154816001015492509250509250929050565b60008084600101600085815260200190815260200160002054905060008114158390612995576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825283818151815260200191508051906020019080838360005b8381101561295a57808201518184015260208101905061293f565b50505050905090810190601f1680156129875780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b508460000160018203815481106129a857fe5b9060005260206000209060020201600101549150509392505050565b600081600001805490509050919050565b60006129f68473ffffffffffffffffffffffffffffffffffffffff16612e63565b612a035760019050612be6565b6060612b6d63150b7a0260e01b612a18611fd1565b888787604051602401808573ffffffffffffffffffffffffffffffffffffffff1681526020018473ffffffffffffffffffffffffffffffffffffffff16815260200183815260200180602001828103825283818151815260200191508051906020019080838360005b83811015612a9c578082015181840152602081019050612a81565b50505050905090810190601f168015612ac95780820380516001836020036101000a031916815260200191505b5095505050505050604051602081830303815290604052907bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff838183161783525050505060405180606001604052806032815260200161344b603291398773ffffffffffffffffffffffffffffffffffffffff16612e769092919063ffffffff16565b90506000818060200190516020811015612b8657600080fd5b8101908080519060200190929190505050905063150b7a0260e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916817bffffffffffffffffffffffffffffffffffffffffffffffffffffffff191614925050505b949350505050565b612c08828260405180602001604052806000815250612e8e565b5050565b600080836001016000848152602001908152602001600020541415905092915050565b60008083600101600084815260200190815260200160002054905060008114612d0b5760006001820390506000600186600001805490500390506000866000018281548110612c7a57fe5b9060005260206000200154905080876000018481548110612c9757fe5b9060005260206000200181905550600183018760010160008381526020019081526020016000208190555086600001805480612ccf57fe5b60019003818190600052602060002001600090559055866001016000878152602001908152602001600020600090556001945050505050612d11565b60009150505b92915050565b6000612d238383612eff565b612d7c578260000182908060018154018082558091505060019003906000526020600020016000909190919091505582600001805490508360010160008481526020019081526020016000208190555060019050612d81565b600090505b92915050565b6000808460010160008581526020019081526020016000205490506000811415612e2e57846000016040518060400160405280868152602001858152509080600181540180825580915050600190039060005260206000209060020201600090919091909150600082015181600001556020820151816001015550508460000180549050856001016000868152602001908152602001600020819055506001915050612e5c565b82856000016001830381548110612e4157fe5b90600052602060002090600202016001018190555060009150505b9392505050565b600080823b905060008111915050919050565b6060612e858484600085612f22565b90509392505050565b612e9883836130cb565b612ea560008484846129d5565b612efa576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252603281526020018061344b6032913960400191505060405180910390fd5b505050565b600080836001016000848152602001908152602001600020541415905092915050565b606082471015612f7d576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260268152602001806134c76026913960400191505060405180910390fd5b612f8685612e63565b612ff8576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601d8152602001807f416464726573733a2063616c6c20746f206e6f6e2d636f6e747261637400000081525060200191505060405180910390fd5b600060608673ffffffffffffffffffffffffffffffffffffffff1685876040518082805190602001908083835b602083106130485780518252602082019150602081019050602083039250613025565b6001836020036101000a03801982511681845116808217855250505050505090500191505060006040518083038185875af1925050503d80600081146130aa576040519150601f19603f3d011682016040523d82523d6000602084013e6130af565b606091505b50915091506130bf8282866132bf565b92505050949350505050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16141561316e576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260208152602001807f4552433732313a206d696e7420746f20746865207a65726f206164647265737381525060200191505060405180910390fd5b61317781611fb4565b156131ea576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601c8152602001807f4552433732313a20746f6b656e20616c7265616479206d696e7465640000000081525060200191505060405180910390fd5b6131f660008383612744565b61324781600160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002061276390919063ffffffff16565b5061325e8183600261277d9092919063ffffffff16565b50808273ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a45050565b606083156132cf57829050613384565b6000835111156132e25782518084602001fd5b816040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825283818151815260200191508051906020019080838360005b8381101561334957808201518184015260208101905061332e565b50505050905090810190601f1680156133765780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b9392505050565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f106133cc57805160ff19168380011785556133fa565b828001600101855582156133fa579182015b828111156133f95782518255916020019190600101906133de565b5b509050613407919061340b565b5090565b5b8082111561342457600081600090555060010161340c565b509056fe456e756d657261626c655365743a20696e646578206f7574206f6620626f756e64734552433732313a207472616e7366657220746f206e6f6e20455243373231526563656976657220696d706c656d656e7465724f776e61626c653a206e6577206f776e657220697320746865207a65726f20616464726573734552433732313a207472616e7366657220746f20746865207a65726f2061646472657373416464726573733a20696e73756666696369656e742062616c616e636520666f722063616c6c4552433732313a206f70657261746f7220717565727920666f72206e6f6e6578697374656e7420746f6b656e4552433732313a20617070726f76652063616c6c6572206973206e6f74206f776e6572206e6f7220617070726f76656420666f7220616c6c4552433732313a2062616c616e636520717565727920666f7220746865207a65726f20616464726573734552433732313a206f776e657220717565727920666f72206e6f6e6578697374656e7420746f6b656e456e756d657261626c654d61703a20696e646578206f7574206f6620626f756e64734552433732313a20617070726f76656420717565727920666f72206e6f6e6578697374656e7420746f6b656e4552433732313a207472616e73666572206f6620746f6b656e2074686174206973206e6f74206f776e4552433732314d657461646174613a2055524920717565727920666f72206e6f6e6578697374656e7420746f6b656e4552433732313a20617070726f76616c20746f2063757272656e74206f776e65724552433732313a207472616e736665722063616c6c6572206973206e6f74206f776e6572206e6f7220617070726f766564a264697066735822122030b024847d5ca272fddde35dbf31aaab6c1a184f704893ee4a5d4ffca05693b364736f6c63430007000033",
    "immutableReferences": {},
    "sourceMap": "259:2622:1:-:0;;;695:83;;;;;;;;;;3575:369:7;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;768:40:4;435:10;787:20;;768:18;;;:40;;:::i;:::-;3657:5:7;3649;:13;;;;;;;;;;;;:::i;:::-;;3682:7;3672;:17;;;;;;;;;;;;:::i;:::-;;3777:40;2740:10;3796:20;;3777:18;;;:40;;:::i;:::-;3827:49;3072:10;3846:29;;3827:18;;;:49;;:::i;:::-;3886:51;3445:10;3905:31;;3886:18;;;:51;;:::i;:::-;3575:369;;882:17:3;902:12;:10;;;:12;;:::i;:::-;882:32;;933:9;924:6;;:18;;;;;;;;;;;;;;;;;;990:9;957:43;;986:1;957:43;;;;;;;;;;;;848:159;772:1:1::1;759:10;:14;;;;259:2622:::0;;1499:198:4;1597:10;1582:25;;:11;:25;;;;;1574:66;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1686:4;1650:20;:33;1671:11;1650:33;;;;;;;;;;;;;;;;;;:40;;;;;;;;;;;;;;;;;;1499:198;:::o;598:104:2:-;651:15;685:10;678:17;;598:104;:::o;259:2622:1:-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;:::o;:::-;;;;;;;",
    "deployedSourceMap": "259:2622:1:-:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;965:140:4;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;4500:90:7;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;7107:209;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;6665:381;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;6175:200;;;:::i;:::-;;;;;;;;;;;;;;;;;;;7955:300;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;5952:152;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;1775:130:1;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;8321:149:7;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;6447:161;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;2312:114:1;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;4271:167:7;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;844:94:1;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;5786:87:7;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;4003:211;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;1706:145:3;;;:::i;:::-;;1083:77;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;2810:69:1;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;4654:94:7;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;7383:290;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;2578:90:1;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;8536:282:7;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;4814:740;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;7739:154;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;991:125:1;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;2000:240:3;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;2052:111:1;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;1438:195;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;965:140:4;1042:4;1065:20;:33;1086:11;1065:33;;;;;;;;;;;;;;;;;;;;;;;;;;;1058:40;;965:140;;;:::o;4500:90:7:-;4546:13;4578:5;4571:12;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;4500:90;:::o;7107:209::-;7175:7;7202:16;7210:7;7202;:16::i;:::-;7194:73;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;7285:15;:24;7301:7;7285:24;;;;;;;;;;;;;;;;;;;;;7278:31;;7107:209;;;:::o;6665:381::-;6745:13;6761:16;6769:7;6761;:16::i;:::-;6745:32;;6801:5;6795:11;;:2;:11;;;;6787:57;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;6879:5;6863:21;;:12;:10;:12::i;:::-;:21;;;:62;;;;6888:37;6905:5;6912:12;:10;:12::i;:::-;6888:16;:37::i;:::-;6863:62;6855:152;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;7018:21;7027:2;7031:7;7018:8;:21::i;:::-;6665:381;;;:::o;6175:200::-;6228:7;6347:21;:12;:19;:21::i;:::-;6340:28;;6175:200;:::o;7955:300::-;8114:41;8133:12;:10;:12::i;:::-;8147:7;8114:18;:41::i;:::-;8106:103;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;8220:28;8230:4;8236:2;8240:7;8220:9;:28::i;:::-;7955:300;;;:::o;5952:152::-;6041:7;6067:30;6091:5;6067:13;:20;6081:5;6067:20;;;;;;;;;;;;;;;:23;;:30;;;;:::i;:::-;6060:37;;5952:152;;;;:::o;1775:130:1:-;1831:13;1886:14;;;;;;;;;;;;;;;;;;;1775:130;;;:::o;8321:149:7:-;8424:39;8441:4;8447:2;8451:7;8424:39;;;;;;;;;;;;:16;:39::i;:::-;8321:149;;;:::o;6447:161::-;6514:7;6534:15;6555:22;6571:5;6555:12;:15;;:22;;;;:::i;:::-;6533:44;;;6594:7;6587:14;;;6447:161;;;:::o;2312:114:1:-;2370:15;2400:9;:13;2410:2;2400:13;;;;;;;;;;;:21;;;;;;;;;;;;2393:28;;2312:114;;;:::o;4271:167:7:-;4335:7;4361:70;4378:7;4361:70;;;;;;;;;;;;;;;;;:12;:16;;:70;;;;;:::i;:::-;4354:77;;4271:167;;;:::o;844:94:1:-;1297:12:3;:10;:12::i;:::-;1287:22;;:6;;;;;;;;;;;:22;;;1279:67;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;925:8:1::1;910:12;;:23;;;;;;;;;;;;;;;;;;844:94:::0;:::o;5786:87:7:-;5826:13;5858:8;5851:15;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;5786:87;:::o;4003:211::-;4067:7;4111:1;4094:19;;:5;:19;;;;4086:74;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;4178:29;:13;:20;4192:5;4178:20;;;;;;;;;;;;;;;:27;:29::i;:::-;4171:36;;4003:211;;;:::o;1706:145:3:-;1297:12;:10;:12::i;:::-;1287:22;;:6;;;;;;;;;;;:22;;;1279:67;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1812:1:::1;1775:40;;1796:6;;;;;;;;;;;1775:40;;;;;;;;;;;;1842:1;1825:6;;:19;;;;;;;;;;;;;;;;;;1706:145::o:0;1083:77::-;1121:7;1147:6;;;;;;;;;;;1140:13;;1083:77;:::o;2810:69:1:-;2857:4;2872;2865:11;;2810:69;:::o;4654:94:7:-;4702:13;4734:7;4727:14;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;4654:94;:::o;7383:290::-;7497:12;:10;:12::i;:::-;7485:24;;:8;:24;;;;7477:62;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;7595:8;7550:18;:32;7569:12;:10;:12::i;:::-;7550:32;;;;;;;;;;;;;;;:42;7583:8;7550:42;;;;;;;;;;;;;;;;:53;;;;;;;;;;;;;;;;;;7647:8;7618:48;;7633:12;:10;:12::i;:::-;7618:48;;;7657:8;7618:48;;;;;;;;;;;;;;;;;;;;7383:290;;:::o;2578:90:1:-;2629:7;2651:12;;;;;;;;;;;2644:19;;2578:90;:::o;8536:282:7:-;8667:41;8686:12;:10;:12::i;:::-;8700:7;8667:18;:41::i;:::-;8659:103;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;8772:39;8786:4;8792:2;8796:7;8805:5;8772:13;:39::i;:::-;8536:282;;;;:::o;4814:740::-;4879:13;4912:16;4920:7;4912;:16::i;:::-;4904:76;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;4991:23;5017:10;:19;5028:7;5017:19;;;;;;;;;;;4991:45;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;5135:1;5115:8;5109:22;;;;;;;;;;;;;;;;:27;5105:74;;;5159:9;5152:16;;;;;5105:74;5307:1;5287:9;5281:23;:27;5277:110;;;5355:8;5365:9;5338:37;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;5324:52;;;;;5277:110;5517:8;5527:18;:7;:16;:18::i;:::-;5500:46;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;5486:61;;;4814:740;;;;:::o;7739:154::-;7828:4;7851:18;:25;7870:5;7851:25;;;;;;;;;;;;;;;:35;7877:8;7851:35;;;;;;;;;;;;;;;;;;;;;;;;;7844:42;;7739:154;;;;:::o;991:125:1:-;1080:31;1093:5;1099;1105;1080:12;:31::i;:::-;991:125;;;:::o;2000:240:3:-;1297:12;:10;:12::i;:::-;1287:22;;:6;;;;;;;;;;;:22;;;1279:67;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2108:1:::1;2088:22;;:8;:22;;;;2080:73;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2197:8;2168:38;;2189:6;;;;;;;;;;;2168:38;;;;;;;;;;;;2225:8;2216:6;;:17;;;;;;;;;;;;;;;;;;2000:240:::0;:::o;2052:111:1:-;2110:12;2137:9;:13;2147:2;2137:13;;;;;;;;;;;:21;;;2130:28;;2052:111;;;:::o;1438:195::-;1498:7;577:10;556:31;;:17;564:8;556:7;:17::i;:::-;:31;;;548:40;;;;;;1545:1:::1;1521:26;;:12;;;;;;;;;;;:26;;;;1513:35;;;::::0;::::1;;1554:37;1572:12;;;;;;;;;;;1586:4;1554:17;:37::i;:::-;1627:1;1597:9;:18;1607:7;1597:18;;;;;;;;;;;:26;;;:31;;;;;;;;;;;1438:195:::0;;:::o;10252:117:7:-;10309:4;10332:30;10354:7;10332:12;:21;;:30;;;;:::i;:::-;10325:37;;10252:117;;;:::o;598:104:2:-;651:15;685:10;678:17;;598:104;:::o;15908:155:7:-;16000:2;15973:15;:24;15989:7;15973:24;;;;;;;;;;;;:29;;;;;;;;;;;;;;;;;;16048:7;16044:2;16017:39;;16026:16;16034:7;16026;:16::i;:::-;16017:39;;;;;;;;;;;;15908:155;;:::o;7031:121:13:-;7100:7;7126:19;7134:3;:10;;7126:7;:19::i;:::-;7119:26;;7031:121;;;:::o;10527:329:7:-;10612:4;10636:16;10644:7;10636;:16::i;:::-;10628:73;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;10711:13;10727:16;10735:7;10727;:16::i;:::-;10711:32;;10772:5;10761:16;;:7;:16;;;:51;;;;10805:7;10781:31;;:20;10793:7;10781:11;:20::i;:::-;:31;;;10761:51;:87;;;;10816:32;10833:5;10840:7;10816:16;:32::i;:::-;10761:87;10753:96;;;10527:329;;;;:::o;13521:559::-;13638:4;13618:24;;:16;13626:7;13618;:16::i;:::-;:24;;;13610:78;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;13720:1;13706:16;;:2;:16;;;;13698:65;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;13774:39;13795:4;13801:2;13805:7;13774:20;:39::i;:::-;13875:29;13892:1;13896:7;13875:8;:29::i;:::-;13915:35;13942:7;13915:13;:19;13929:4;13915:19;;;;;;;;;;;;;;;:26;;:35;;;;:::i;:::-;;13960:30;13982:7;13960:13;:17;13974:2;13960:17;;;;;;;;;;;;;;;:21;;:30;;;;:::i;:::-;;14001:29;14018:7;14027:2;14001:12;:16;;:29;;;;;:::i;:::-;;14065:7;14061:2;14046:27;;14055:4;14046:27;;;;;;;;;;;;13521:559;;;:::o;9214:135:14:-;9285:7;9319:22;9323:3;:10;;9335:5;9319:3;:22::i;:::-;9311:31;;9304:38;;9214:135;;;;:::o;7480:224:13:-;7560:7;7569;7589:11;7602:13;7619:22;7623:3;:10;;7635:5;7619:3;:22::i;:::-;7588:53;;;;7667:3;7659:12;;7689:5;7681:14;;7651:46;;;;;;7480:224;;;;;:::o;8123:202::-;8230:7;8272:44;8277:3;:10;;8297:3;8289:12;;8303;8272:4;:44::i;:::-;8264:53;;8249:69;;8123:202;;;;;:::o;8770:112:14:-;8830:7;8856:19;8864:3;:10;;8856:7;:19::i;:::-;8849:26;;8770:112;;;:::o;9680:269:7:-;9793:28;9803:4;9809:2;9813:7;9793:9;:28::i;:::-;9839:48;9862:4;9868:2;9872:7;9881:5;9839:22;:48::i;:::-;9831:111;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;9680:269;;;;:::o;210:723:15:-;266:13;492:1;483:5;:10;479:51;;;509:10;;;;;;;;;;;;;;;;;;;;;479:51;539:12;554:5;539:20;;569:14;593:75;608:1;600:4;:9;593:75;;625:8;;;;;;;655:2;647:10;;;;;;;;;593:75;;;677:19;709:6;699:17;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;677:39;;726:13;751:1;742:6;:10;726:26;;769:5;762:12;;784:112;799:1;791:4;:9;784:112;;857:2;850:4;:9;;;;;;845:2;:14;834:27;;816:6;823:7;;;;;;;816:15;;;;;;;;;;;:45;;;;;;;;;;;883:2;875:10;;;;;;;;;784:112;;;919:6;905:21;;;;;;210:723;;;;:::o;1170:234:1:-;1287:1;1276:10;;:12;1263:10;:25;;;;1318:42;;;;;;;;1324:6;1318:42;;;;1332:6;1318:42;;;;1339:6;1318:42;;;;1346:1;1318:42;;;;1349:10;1318:42;;;;;1294:9;:21;1304:10;;1294:21;;;;;;;;;;;:66;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1366:33;1376:10;1388;;1366:9;:33::i;:::-;1170:234;;;:::o;6799:149:13:-;6883:4;6906:35;6916:3;:10;;6936:3;6928:12;;6906:9;:35::i;:::-;6899:42;;6799:149;;;;:::o;4491:108::-;4547:7;4573:3;:12;;:19;;;;4566:26;;4491:108;;;:::o;16659:93:7:-;;;;:::o;8329:135:14:-;8399:4;8422:35;8430:3;:10;;8450:5;8442:14;;8422:7;:35::i;:::-;8415:42;;8329:135;;;;:::o;8032:129::-;8099:4;8122:32;8127:3;:10;;8147:5;8139:14;;8122:4;:32::i;:::-;8115:39;;8032:129;;;;:::o;6247:174:13:-;6336:4;6359:55;6364:3;:10;;6384:3;6376:12;;6406:5;6398:14;;6390:23;;6359:4;:55::i;:::-;6352:62;;6247:174;;;;;:::o;4452:201:14:-;4519:7;4567:5;4546:3;:11;;:18;;;;:26;4538:73;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;4628:3;:11;;4640:5;4628:18;;;;;;;;;;;;;;;;4621:25;;4452:201;;;;:::o;4942:274:13:-;5009:7;5018;5067:5;5045:3;:12;;:19;;;;:27;5037:74;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;5122:22;5147:3;:12;;5160:5;5147:19;;;;;;;;;;;;;;;;;;5122:44;;5184:5;:10;;;5196:5;:12;;;5176:33;;;;;4942:274;;;;;:::o;5623:315::-;5717:7;5736:16;5755:3;:12;;:17;5768:3;5755:17;;;;;;;;;;;;5736:36;;5802:1;5790:8;:13;;5805:12;5782:36;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;5871:3;:12;;5895:1;5884:8;:12;5871:26;;;;;;;;;;;;;;;;;;:33;;;5864:40;;;5623:315;;;;;:::o;4013:107:14:-;4069:7;4095:3;:11;;:18;;;;4088:25;;4013:107;;;:::o;15313:589:7:-;15433:4;15458:15;:2;:13;;;:15::i;:::-;15453:58;;15496:4;15489:11;;;;15453:58;15520:23;15546:246;15598:45;;;15657:12;:10;:12::i;:::-;15683:4;15701:7;15722:5;15562:175;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;15546:246;;;;;;;;;;;;;;;;;:2;:15;;;;:246;;;;;:::i;:::-;15520:272;;15802:13;15829:10;15818:32;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;15802:48;;1076:10;15878:16;;15868:26;;;:6;:26;;;;15860:35;;;;15313:589;;;;;;;:::o;11187:108::-;11262:26;11272:2;11276:7;11262:26;;;;;;;;;;;;:9;:26::i;:::-;11187:108;;:::o;4278:123:13:-;4349:4;4393:1;4372:3;:12;;:17;4385:3;4372:17;;;;;;;;;;;;:22;;4365:29;;4278:123;;;;:::o;2212:1512:14:-;2278:4;2394:18;2415:3;:12;;:19;2428:5;2415:19;;;;;;;;;;;;2394:40;;2463:1;2449:10;:15;2445:1273;;2806:21;2843:1;2830:10;:14;2806:38;;2858:17;2899:1;2878:3;:11;;:18;;;;:22;2858:42;;3140:17;3160:3;:11;;3172:9;3160:22;;;;;;;;;;;;;;;;3140:42;;3303:9;3274:3;:11;;3286:13;3274:26;;;;;;;;;;;;;;;:38;;;;3420:1;3404:13;:17;3378:3;:12;;:23;3391:9;3378:23;;;;;;;;;;;:43;;;;3527:3;:11;;:17;;;;;;;;;;;;;;;;;;;;;;;;3619:3;:12;;:19;3632:5;3619:19;;;;;;;;;;;3612:26;;;3660:4;3653:11;;;;;;;;2445:1273;3702:5;3695:12;;;2212:1512;;;;;:::o;1640:404::-;1703:4;1724:21;1734:3;1739:5;1724:9;:21::i;:::-;1719:319;;1761:3;:11;;1778:5;1761:23;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1941:3;:11;;:18;;;;1919:3;:12;;:19;1932:5;1919:19;;;;;;;;;;;:40;;;;1980:4;1973:11;;;;1719:319;2022:5;2015:12;;1640:404;;;;;:::o;1836:678:13:-;1912:4;2026:16;2045:3;:12;;:17;2058:3;2045:17;;;;;;;;;;;;2026:36;;2089:1;2077:8;:13;2073:435;;;2143:3;:12;;2161:38;;;;;;;;2178:3;2161:38;;;;2191:5;2161:38;;;2143:57;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2355:3;:12;;:19;;;;2335:3;:12;;:17;2348:3;2335:17;;;;;;;;;;;:39;;;;2395:4;2388:11;;;;;2073:435;2466:5;2430:3;:12;;2454:1;2443:8;:12;2430:26;;;;;;;;;;;;;;;;;;:33;;:41;;;;2492:5;2485:12;;;1836:678;;;;;;:::o;726:413:12:-;786:4;989:12;1098:7;1086:20;1078:28;;1131:1;1124:4;:8;1117:15;;;726:413;;;:::o;3581:193::-;3684:12;3715:52;3737:6;3745:4;3751:1;3754:12;3715:21;:52::i;:::-;3708:59;;3581:193;;;;;:::o;11516:247:7:-;11611:18;11617:2;11621:7;11611:5;:18::i;:::-;11647:54;11678:1;11682:2;11686:7;11695:5;11647:22;:54::i;:::-;11639:117;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;11516:247;;;:::o;3805:127:14:-;3878:4;3924:1;3901:3;:12;;:19;3914:5;3901:19;;;;;;;;;;;;:24;;3894:31;;3805:127;;;;:::o;4608:523:12:-;4735:12;4792:5;4767:21;:30;;4759:81;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;4858:18;4869:6;4858:10;:18::i;:::-;4850:60;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;4981:12;4995:23;5022:6;:11;;5042:5;5050:4;5022:33;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;4980:75;;;;5072:52;5090:7;5099:10;5111:12;5072:17;:52::i;:::-;5065:59;;;;4608:523;;;;;;:::o;12085:393:7:-;12178:1;12164:16;;:2;:16;;;;12156:61;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;12236:16;12244:7;12236;:16::i;:::-;12235:17;12227:58;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;12296:45;12325:1;12329:2;12333:7;12296:20;:45::i;:::-;12352:30;12374:7;12352:13;:17;12366:2;12352:17;;;;;;;;;;;;;;;:21;;:30;;;;:::i;:::-;;12393:29;12410:7;12419:2;12393:12;:16;;:29;;;;;:::i;:::-;;12463:7;12459:2;12438:33;;12455:1;12438:33;;;;;;;;;;;;12085:393;;:::o;6111:725:12:-;6226:12;6254:7;6250:580;;;6284:10;6277:17;;;;6250:580;6415:1;6395:10;:17;:21;6391:429;;;6653:10;6647:17;6713:15;6700:10;6696:2;6692:19;6685:44;6602:145;6792:12;6785:20;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;6111:725;;;;;;:::o;-1:-1:-1:-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;:::o",
    "source": "// SPDX-License-Identifier: MIT\npragma solidity ^0.7.0;\n\nimport \"@openzeppelin/contracts/access/Ownable.sol\";\nimport \"@openzeppelin/contracts/token/ERC721/ERC721.sol\";\n\n/// @title Musictoken \n/// @notice Create tokenized (ERC721) versions of properties music\ncontract MusicToken is ERC721, Ownable {\n\n  address internal storeAddress;\n  uint newMusicId;\n\n  struct Music {\n    string titre;\n    string genre;\n    uint duree;\n    uint listens;\n    address creator;\n  }\n\n  mapping (uint => Music) idToMusic;\n\n  modifier onlyMusicOwner(uint _musicId) { require(ownerOf(_musicId) == msg.sender); _; }\n\n  /// @dev Contract constructor calls ERC721 constructor and pass the name and symbol parameters\n  constructor () public ERC721(\"Tokenized Musics\", \"TM\") \n  {\n    newMusicId = 0;\n  }\n  \n  /// @param _address Deployed Music Store contract address\n  function setStoreAddress(address _address) public onlyOwner {\n    storeAddress = _address;\n  }\n\n  // @notice Create a new ERC721 Tokenized Music\n  function createMusic(string memory titre, string memory genre, uint duree ) public {\n    _createMusic(titre,genre,duree);\n  }\n\n  /// @notice Create a new ERC721 Tokenized Music\n  function _createMusic(string memory _titre, string memory _genre,uint _duree) internal {\n    newMusicId = newMusicId+1;\n    idToMusic[newMusicId] = Music(_titre, _genre,_duree,0, msg.sender);\n    _safeMint(msg.sender, newMusicId);\n  }\n\n  // @notice Add a new listen\n  function setMusiclisten(uint MusicId) public onlyMusicOwner(MusicId) {\n    require(storeAddress != address(0));\n    setApprovalForAll(storeAddress, true);\n    idToMusic[MusicId].listens += 1;\n  }\n\n \n\n  /// @notice Returns the name of a Music\n  /// @param id The Id of the music/ERC721 \n  /// @return titre returns the titref the music\n  function getMusicTitre (uint id) external view returns (string memory) {\n    //return idToMusic[id].titre;\n    return \"value\";\n  }\n\n  \n\n  // @notice Returns the listens of a Music\n  // @param id The Id of the product/ERC721 \n  // @return price returns the price of a product\n  function getMusicListens (uint id) external view returns (uint listens) {\n    return idToMusic[id].listens;\n  }\n\n  /// @notice Returns the creator of a music\n  /// @param id The Id of the musict/ERC721 \n  /// @return creator returns the creator of a music\n    function getMusicCreator (uint id) external view returns (address creator) {\n    return idToMusic[id].creator;\n  }\n  \n \n\n  /// @notice Returns the address registered for the marketplace\n  /// @return storeAddress returns the address registered for the marketplace\n  function getStoreAddress () external view returns (address) {\n    return storeAddress;\n  }\n\n  /// @notice Returns true\n  /// @dev This function is useful to confirm if the address passed to ProductStore.sol constructor is correct\n  function isMusicToken() external pure returns (bool) { return true; }\n}",
    "sourcePath": "/Users/irmenedocteur/Downloads/Listen Music Score _ final project consensys/contracts/MusicToken.sol",
    "ast": {
      "absolutePath": "/Users/irmenedocteur/Downloads/Listen Music Score _ final project consensys/contracts/MusicToken.sol",
      "exportedSymbols": {
        "MusicToken": [
          244
        ]
      },
      "id": 245,
      "license": "MIT",
      "nodeType": "SourceUnit",
      "nodes": [
        {
          "id": 38,
          "literals": [
            "solidity",
            "^",
            "0.7",
            ".0"
          ],
          "nodeType": "PragmaDirective",
          "src": "32:23:1"
        },
        {
          "absolutePath": "@openzeppelin/contracts/access/Ownable.sol",
          "file": "@openzeppelin/contracts/access/Ownable.sol",
          "id": 39,
          "nodeType": "ImportDirective",
          "scope": 245,
          "sourceUnit": 377,
          "src": "57:52:1",
          "symbolAliases": [],
          "unitAlias": ""
        },
        {
          "absolutePath": "@openzeppelin/contracts/token/ERC721/ERC721.sol",
          "file": "@openzeppelin/contracts/token/ERC721/ERC721.sol",
          "id": 40,
          "nodeType": "ImportDirective",
          "scope": 245,
          "sourceUnit": 1573,
          "src": "110:57:1",
          "symbolAliases": [],
          "unitAlias": ""
        },
        {
          "abstract": false,
          "baseContracts": [
            {
              "arguments": null,
              "baseName": {
                "contractScope": null,
                "id": 42,
                "name": "ERC721",
                "nodeType": "UserDefinedTypeName",
                "referencedDeclaration": 1572,
                "src": "282:6:1",
                "typeDescriptions": {
                  "typeIdentifier": "t_contract$_ERC721_$1572",
                  "typeString": "contract ERC721"
                }
              },
              "id": 43,
              "nodeType": "InheritanceSpecifier",
              "src": "282:6:1"
            },
            {
              "arguments": null,
              "baseName": {
                "contractScope": null,
                "id": 44,
                "name": "Ownable",
                "nodeType": "UserDefinedTypeName",
                "referencedDeclaration": 376,
                "src": "290:7:1",
                "typeDescriptions": {
                  "typeIdentifier": "t_contract$_Ownable_$376",
                  "typeString": "contract Ownable"
                }
              },
              "id": 45,
              "nodeType": "InheritanceSpecifier",
              "src": "290:7:1"
            }
          ],
          "contractDependencies": [
            267,
            376,
            433,
            445,
            1572,
            1688,
            1719,
            1746
          ],
          "contractKind": "contract",
          "documentation": {
            "id": 41,
            "nodeType": "StructuredDocumentation",
            "src": "169:90:1",
            "text": "@title Musictoken \n @notice Create tokenized (ERC721) versions of properties music"
          },
          "fullyImplemented": true,
          "id": 244,
          "linearizedBaseContracts": [
            244,
            376,
            1572,
            1719,
            1746,
            1688,
            433,
            445,
            267
          ],
          "name": "MusicToken",
          "nodeType": "ContractDefinition",
          "nodes": [
            {
              "constant": false,
              "id": 47,
              "mutability": "mutable",
              "name": "storeAddress",
              "nodeType": "VariableDeclaration",
              "overrides": null,
              "scope": 244,
              "src": "303:29:1",
              "stateVariable": true,
              "storageLocation": "default",
              "typeDescriptions": {
                "typeIdentifier": "t_address",
                "typeString": "address"
              },
              "typeName": {
                "id": 46,
                "name": "address",
                "nodeType": "ElementaryTypeName",
                "src": "303:7:1",
                "stateMutability": "nonpayable",
                "typeDescriptions": {
                  "typeIdentifier": "t_address",
                  "typeString": "address"
                }
              },
              "value": null,
              "visibility": "internal"
            },
            {
              "constant": false,
              "id": 49,
              "mutability": "mutable",
              "name": "newMusicId",
              "nodeType": "VariableDeclaration",
              "overrides": null,
              "scope": 244,
              "src": "336:15:1",
              "stateVariable": true,
              "storageLocation": "default",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              },
              "typeName": {
                "id": 48,
                "name": "uint",
                "nodeType": "ElementaryTypeName",
                "src": "336:4:1",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                }
              },
              "value": null,
              "visibility": "internal"
            },
            {
              "canonicalName": "MusicToken.Music",
              "id": 60,
              "members": [
                {
                  "constant": false,
                  "id": 51,
                  "mutability": "mutable",
                  "name": "titre",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 60,
                  "src": "375:12:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_storage_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 50,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "375:6:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 53,
                  "mutability": "mutable",
                  "name": "genre",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 60,
                  "src": "393:12:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_storage_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 52,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "393:6:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 55,
                  "mutability": "mutable",
                  "name": "duree",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 60,
                  "src": "411:10:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 54,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "411:4:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 57,
                  "mutability": "mutable",
                  "name": "listens",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 60,
                  "src": "427:12:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 56,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "427:4:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 59,
                  "mutability": "mutable",
                  "name": "creator",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 60,
                  "src": "445:15:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 58,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "445:7:1",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "name": "Music",
              "nodeType": "StructDefinition",
              "scope": 244,
              "src": "356:109:1",
              "visibility": "public"
            },
            {
              "constant": false,
              "id": 64,
              "mutability": "mutable",
              "name": "idToMusic",
              "nodeType": "VariableDeclaration",
              "overrides": null,
              "scope": 244,
              "src": "469:33:1",
              "stateVariable": true,
              "storageLocation": "default",
              "typeDescriptions": {
                "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_Music_$60_storage_$",
                "typeString": "mapping(uint256 => struct MusicToken.Music)"
              },
              "typeName": {
                "id": 63,
                "keyType": {
                  "id": 61,
                  "name": "uint",
                  "nodeType": "ElementaryTypeName",
                  "src": "478:4:1",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  }
                },
                "nodeType": "Mapping",
                "src": "469:23:1",
                "typeDescriptions": {
                  "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_Music_$60_storage_$",
                  "typeString": "mapping(uint256 => struct MusicToken.Music)"
                },
                "valueType": {
                  "contractScope": null,
                  "id": 62,
                  "name": "Music",
                  "nodeType": "UserDefinedTypeName",
                  "referencedDeclaration": 60,
                  "src": "486:5:1",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_Music_$60_storage_ptr",
                    "typeString": "struct MusicToken.Music"
                  }
                }
              },
              "value": null,
              "visibility": "internal"
            },
            {
              "body": {
                "id": 78,
                "nodeType": "Block",
                "src": "546:48:1",
                "statements": [
                  {
                    "expression": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "commonType": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          },
                          "id": 74,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "argumentTypes": null,
                            "arguments": [
                              {
                                "argumentTypes": null,
                                "id": 70,
                                "name": "_musicId",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 66,
                                "src": "564:8:1",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              }
                            ],
                            "expression": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              ],
                              "id": 69,
                              "name": "ownerOf",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 789,
                              "src": "556:7:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_internal_view$_t_uint256_$returns$_t_address_$",
                                "typeString": "function (uint256) view returns (address)"
                              }
                            },
                            "id": 71,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "556:17:1",
                            "tryCall": false,
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "==",
                          "rightExpression": {
                            "argumentTypes": null,
                            "expression": {
                              "argumentTypes": null,
                              "id": 72,
                              "name": "msg",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": -15,
                              "src": "577:3:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_magic_message",
                                "typeString": "msg"
                              }
                            },
                            "id": 73,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "sender",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": null,
                            "src": "577:10:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address_payable",
                              "typeString": "address payable"
                            }
                          },
                          "src": "556:31:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        ],
                        "id": 68,
                        "name": "require",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [
                          -18,
                          -18
                        ],
                        "referencedDeclaration": -18,
                        "src": "548:7:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                          "typeString": "function (bool) pure"
                        }
                      },
                      "id": 75,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "548:40:1",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$__$",
                        "typeString": "tuple()"
                      }
                    },
                    "id": 76,
                    "nodeType": "ExpressionStatement",
                    "src": "548:40:1"
                  },
                  {
                    "id": 77,
                    "nodeType": "PlaceholderStatement",
                    "src": "590:1:1"
                  }
                ]
              },
              "documentation": null,
              "id": 79,
              "name": "onlyMusicOwner",
              "nodeType": "ModifierDefinition",
              "overrides": null,
              "parameters": {
                "id": 67,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 66,
                    "mutability": "mutable",
                    "name": "_musicId",
                    "nodeType": "VariableDeclaration",
                    "overrides": null,
                    "scope": 79,
                    "src": "531:13:1",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "typeName": {
                      "id": 65,
                      "name": "uint",
                      "nodeType": "ElementaryTypeName",
                      "src": "531:4:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "value": null,
                    "visibility": "internal"
                  }
                ],
                "src": "530:15:1"
              },
              "src": "507:87:1",
              "virtual": false,
              "visibility": "internal"
            },
            {
              "body": {
                "id": 91,
                "nodeType": "Block",
                "src": "753:25:1",
                "statements": [
                  {
                    "expression": {
                      "argumentTypes": null,
                      "id": 89,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftHandSide": {
                        "argumentTypes": null,
                        "id": 87,
                        "name": "newMusicId",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 49,
                        "src": "759:10:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "nodeType": "Assignment",
                      "operator": "=",
                      "rightHandSide": {
                        "argumentTypes": null,
                        "hexValue": "30",
                        "id": 88,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "number",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "772:1:1",
                        "subdenomination": null,
                        "typeDescriptions": {
                          "typeIdentifier": "t_rational_0_by_1",
                          "typeString": "int_const 0"
                        },
                        "value": "0"
                      },
                      "src": "759:14:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "id": 90,
                    "nodeType": "ExpressionStatement",
                    "src": "759:14:1"
                  }
                ]
              },
              "documentation": {
                "id": 80,
                "nodeType": "StructuredDocumentation",
                "src": "598:94:1",
                "text": "@dev Contract constructor calls ERC721 constructor and pass the name and symbol parameters"
              },
              "id": 92,
              "implemented": true,
              "kind": "constructor",
              "modifiers": [
                {
                  "arguments": [
                    {
                      "argumentTypes": null,
                      "hexValue": "546f6b656e697a6564204d7573696373",
                      "id": 83,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "string",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "724:18:1",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": "t_stringliteral_d69c8a4aa29e28db2a749aa1c4df531042808c10f34a7f711108389269c9cce5",
                        "typeString": "literal_string \"Tokenized Musics\""
                      },
                      "value": "Tokenized Musics"
                    },
                    {
                      "argumentTypes": null,
                      "hexValue": "544d",
                      "id": 84,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "string",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "744:4:1",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": "t_stringliteral_05635ba15589c7d9a857b9904698c0d13524ecfa7c7097d1af530be3c0cfca90",
                        "typeString": "literal_string \"TM\""
                      },
                      "value": "TM"
                    }
                  ],
                  "id": 85,
                  "modifierName": {
                    "argumentTypes": null,
                    "id": 82,
                    "name": "ERC721",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 1572,
                    "src": "717:6:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_type$_t_contract$_ERC721_$1572_$",
                      "typeString": "type(contract ERC721)"
                    }
                  },
                  "nodeType": "ModifierInvocation",
                  "src": "717:32:1"
                }
              ],
              "name": "",
              "nodeType": "FunctionDefinition",
              "overrides": null,
              "parameters": {
                "id": 81,
                "nodeType": "ParameterList",
                "parameters": [],
                "src": "707:2:1"
              },
              "returnParameters": {
                "id": 86,
                "nodeType": "ParameterList",
                "parameters": [],
                "src": "753:0:1"
              },
              "scope": 244,
              "src": "695:83:1",
              "stateMutability": "nonpayable",
              "virtual": false,
              "visibility": "public"
            },
            {
              "body": {
                "id": 104,
                "nodeType": "Block",
                "src": "904:34:1",
                "statements": [
                  {
                    "expression": {
                      "argumentTypes": null,
                      "id": 102,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftHandSide": {
                        "argumentTypes": null,
                        "id": 100,
                        "name": "storeAddress",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 47,
                        "src": "910:12:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "nodeType": "Assignment",
                      "operator": "=",
                      "rightHandSide": {
                        "argumentTypes": null,
                        "id": 101,
                        "name": "_address",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 95,
                        "src": "925:8:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "src": "910:23:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "id": 103,
                    "nodeType": "ExpressionStatement",
                    "src": "910:23:1"
                  }
                ]
              },
              "documentation": {
                "id": 93,
                "nodeType": "StructuredDocumentation",
                "src": "784:57:1",
                "text": "@param _address Deployed Music Store contract address"
              },
              "functionSelector": "6559e59a",
              "id": 105,
              "implemented": true,
              "kind": "function",
              "modifiers": [
                {
                  "arguments": null,
                  "id": 98,
                  "modifierName": {
                    "argumentTypes": null,
                    "id": 97,
                    "name": "onlyOwner",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 325,
                    "src": "894:9:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_modifier$__$",
                      "typeString": "modifier ()"
                    }
                  },
                  "nodeType": "ModifierInvocation",
                  "src": "894:9:1"
                }
              ],
              "name": "setStoreAddress",
              "nodeType": "FunctionDefinition",
              "overrides": null,
              "parameters": {
                "id": 96,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 95,
                    "mutability": "mutable",
                    "name": "_address",
                    "nodeType": "VariableDeclaration",
                    "overrides": null,
                    "scope": 105,
                    "src": "869:16:1",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    },
                    "typeName": {
                      "id": 94,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "869:7:1",
                      "stateMutability": "nonpayable",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "value": null,
                    "visibility": "internal"
                  }
                ],
                "src": "868:18:1"
              },
              "returnParameters": {
                "id": 99,
                "nodeType": "ParameterList",
                "parameters": [],
                "src": "904:0:1"
              },
              "scope": 244,
              "src": "844:94:1",
              "stateMutability": "nonpayable",
              "virtual": false,
              "visibility": "public"
            },
            {
              "body": {
                "id": 120,
                "nodeType": "Block",
                "src": "1074:42:1",
                "statements": [
                  {
                    "expression": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "id": 115,
                          "name": "titre",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 107,
                          "src": "1093:5:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_string_memory_ptr",
                            "typeString": "string memory"
                          }
                        },
                        {
                          "argumentTypes": null,
                          "id": 116,
                          "name": "genre",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 109,
                          "src": "1099:5:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_string_memory_ptr",
                            "typeString": "string memory"
                          }
                        },
                        {
                          "argumentTypes": null,
                          "id": 117,
                          "name": "duree",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 111,
                          "src": "1105:5:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_string_memory_ptr",
                            "typeString": "string memory"
                          },
                          {
                            "typeIdentifier": "t_string_memory_ptr",
                            "typeString": "string memory"
                          },
                          {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        ],
                        "id": 114,
                        "name": "_createMusic",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 157,
                        "src": "1080:12:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_nonpayable$_t_string_memory_ptr_$_t_string_memory_ptr_$_t_uint256_$returns$__$",
                          "typeString": "function (string memory,string memory,uint256)"
                        }
                      },
                      "id": 118,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "1080:31:1",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$__$",
                        "typeString": "tuple()"
                      }
                    },
                    "id": 119,
                    "nodeType": "ExpressionStatement",
                    "src": "1080:31:1"
                  }
                ]
              },
              "documentation": null,
              "functionSelector": "f0f0211a",
              "id": 121,
              "implemented": true,
              "kind": "function",
              "modifiers": [],
              "name": "createMusic",
              "nodeType": "FunctionDefinition",
              "overrides": null,
              "parameters": {
                "id": 112,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 107,
                    "mutability": "mutable",
                    "name": "titre",
                    "nodeType": "VariableDeclaration",
                    "overrides": null,
                    "scope": 121,
                    "src": "1012:19:1",
                    "stateVariable": false,
                    "storageLocation": "memory",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_memory_ptr",
                      "typeString": "string"
                    },
                    "typeName": {
                      "id": 106,
                      "name": "string",
                      "nodeType": "ElementaryTypeName",
                      "src": "1012:6:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_storage_ptr",
                        "typeString": "string"
                      }
                    },
                    "value": null,
                    "visibility": "internal"
                  },
                  {
                    "constant": false,
                    "id": 109,
                    "mutability": "mutable",
                    "name": "genre",
                    "nodeType": "VariableDeclaration",
                    "overrides": null,
                    "scope": 121,
                    "src": "1033:19:1",
                    "stateVariable": false,
                    "storageLocation": "memory",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_memory_ptr",
                      "typeString": "string"
                    },
                    "typeName": {
                      "id": 108,
                      "name": "string",
                      "nodeType": "ElementaryTypeName",
                      "src": "1033:6:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_storage_ptr",
                        "typeString": "string"
                      }
                    },
                    "value": null,
                    "visibility": "internal"
                  },
                  {
                    "constant": false,
                    "id": 111,
                    "mutability": "mutable",
                    "name": "duree",
                    "nodeType": "VariableDeclaration",
                    "overrides": null,
                    "scope": 121,
                    "src": "1054:10:1",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "typeName": {
                      "id": 110,
                      "name": "uint",
                      "nodeType": "ElementaryTypeName",
                      "src": "1054:4:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "value": null,
                    "visibility": "internal"
                  }
                ],
                "src": "1011:55:1"
              },
              "returnParameters": {
                "id": 113,
                "nodeType": "ParameterList",
                "parameters": [],
                "src": "1074:0:1"
              },
              "scope": 244,
              "src": "991:125:1",
              "stateMutability": "nonpayable",
              "virtual": false,
              "visibility": "public"
            },
            {
              "body": {
                "id": 156,
                "nodeType": "Block",
                "src": "1257:147:1",
                "statements": [
                  {
                    "expression": {
                      "argumentTypes": null,
                      "id": 135,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftHandSide": {
                        "argumentTypes": null,
                        "id": 131,
                        "name": "newMusicId",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 49,
                        "src": "1263:10:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "nodeType": "Assignment",
                      "operator": "=",
                      "rightHandSide": {
                        "argumentTypes": null,
                        "commonType": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "id": 134,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "id": 132,
                          "name": "newMusicId",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 49,
                          "src": "1276:10:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "+",
                        "rightExpression": {
                          "argumentTypes": null,
                          "hexValue": "31",
                          "id": 133,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "1287:1:1",
                          "subdenomination": null,
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_1_by_1",
                            "typeString": "int_const 1"
                          },
                          "value": "1"
                        },
                        "src": "1276:12:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "src": "1263:25:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "id": 136,
                    "nodeType": "ExpressionStatement",
                    "src": "1263:25:1"
                  },
                  {
                    "expression": {
                      "argumentTypes": null,
                      "id": 148,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftHandSide": {
                        "argumentTypes": null,
                        "baseExpression": {
                          "argumentTypes": null,
                          "id": 137,
                          "name": "idToMusic",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 64,
                          "src": "1294:9:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_Music_$60_storage_$",
                            "typeString": "mapping(uint256 => struct MusicToken.Music storage ref)"
                          }
                        },
                        "id": 139,
                        "indexExpression": {
                          "argumentTypes": null,
                          "id": 138,
                          "name": "newMusicId",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 49,
                          "src": "1304:10:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": true,
                        "nodeType": "IndexAccess",
                        "src": "1294:21:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Music_$60_storage",
                          "typeString": "struct MusicToken.Music storage ref"
                        }
                      },
                      "nodeType": "Assignment",
                      "operator": "=",
                      "rightHandSide": {
                        "argumentTypes": null,
                        "arguments": [
                          {
                            "argumentTypes": null,
                            "id": 141,
                            "name": "_titre",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 124,
                            "src": "1324:6:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_string_memory_ptr",
                              "typeString": "string memory"
                            }
                          },
                          {
                            "argumentTypes": null,
                            "id": 142,
                            "name": "_genre",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 126,
                            "src": "1332:6:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_string_memory_ptr",
                              "typeString": "string memory"
                            }
                          },
                          {
                            "argumentTypes": null,
                            "id": 143,
                            "name": "_duree",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 128,
                            "src": "1339:6:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          {
                            "argumentTypes": null,
                            "hexValue": "30",
                            "id": 144,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "1346:1:1",
                            "subdenomination": null,
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_0_by_1",
                              "typeString": "int_const 0"
                            },
                            "value": "0"
                          },
                          {
                            "argumentTypes": null,
                            "expression": {
                              "argumentTypes": null,
                              "id": 145,
                              "name": "msg",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": -15,
                              "src": "1349:3:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_magic_message",
                                "typeString": "msg"
                              }
                            },
                            "id": 146,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "sender",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": null,
                            "src": "1349:10:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address_payable",
                              "typeString": "address payable"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_string_memory_ptr",
                              "typeString": "string memory"
                            },
                            {
                              "typeIdentifier": "t_string_memory_ptr",
                              "typeString": "string memory"
                            },
                            {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            },
                            {
                              "typeIdentifier": "t_rational_0_by_1",
                              "typeString": "int_const 0"
                            },
                            {
                              "typeIdentifier": "t_address_payable",
                              "typeString": "address payable"
                            }
                          ],
                          "id": 140,
                          "name": "Music",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 60,
                          "src": "1318:5:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_struct$_Music_$60_storage_ptr_$",
                            "typeString": "type(struct MusicToken.Music storage pointer)"
                          }
                        },
                        "id": 147,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "structConstructorCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "1318:42:1",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Music_$60_memory_ptr",
                          "typeString": "struct MusicToken.Music memory"
                        }
                      },
                      "src": "1294:66:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_Music_$60_storage",
                        "typeString": "struct MusicToken.Music storage ref"
                      }
                    },
                    "id": 149,
                    "nodeType": "ExpressionStatement",
                    "src": "1294:66:1"
                  },
                  {
                    "expression": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "expression": {
                            "argumentTypes": null,
                            "id": 151,
                            "name": "msg",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": -15,
                            "src": "1376:3:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_message",
                              "typeString": "msg"
                            }
                          },
                          "id": 152,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "sender",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": null,
                          "src": "1376:10:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address_payable",
                            "typeString": "address payable"
                          }
                        },
                        {
                          "argumentTypes": null,
                          "id": 153,
                          "name": "newMusicId",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 49,
                          "src": "1388:10:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_address_payable",
                            "typeString": "address payable"
                          },
                          {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        ],
                        "id": 150,
                        "name": "_safeMint",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [
                          1220,
                          1249
                        ],
                        "referencedDeclaration": 1220,
                        "src": "1366:9:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_uint256_$returns$__$",
                          "typeString": "function (address,uint256)"
                        }
                      },
                      "id": 154,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "1366:33:1",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$__$",
                        "typeString": "tuple()"
                      }
                    },
                    "id": 155,
                    "nodeType": "ExpressionStatement",
                    "src": "1366:33:1"
                  }
                ]
              },
              "documentation": {
                "id": 122,
                "nodeType": "StructuredDocumentation",
                "src": "1120:47:1",
                "text": "@notice Create a new ERC721 Tokenized Music"
              },
              "id": 157,
              "implemented": true,
              "kind": "function",
              "modifiers": [],
              "name": "_createMusic",
              "nodeType": "FunctionDefinition",
              "overrides": null,
              "parameters": {
                "id": 129,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 124,
                    "mutability": "mutable",
                    "name": "_titre",
                    "nodeType": "VariableDeclaration",
                    "overrides": null,
                    "scope": 157,
                    "src": "1192:20:1",
                    "stateVariable": false,
                    "storageLocation": "memory",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_memory_ptr",
                      "typeString": "string"
                    },
                    "typeName": {
                      "id": 123,
                      "name": "string",
                      "nodeType": "ElementaryTypeName",
                      "src": "1192:6:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_storage_ptr",
                        "typeString": "string"
                      }
                    },
                    "value": null,
                    "visibility": "internal"
                  },
                  {
                    "constant": false,
                    "id": 126,
                    "mutability": "mutable",
                    "name": "_genre",
                    "nodeType": "VariableDeclaration",
                    "overrides": null,
                    "scope": 157,
                    "src": "1214:20:1",
                    "stateVariable": false,
                    "storageLocation": "memory",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_memory_ptr",
                      "typeString": "string"
                    },
                    "typeName": {
                      "id": 125,
                      "name": "string",
                      "nodeType": "ElementaryTypeName",
                      "src": "1214:6:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_storage_ptr",
                        "typeString": "string"
                      }
                    },
                    "value": null,
                    "visibility": "internal"
                  },
                  {
                    "constant": false,
                    "id": 128,
                    "mutability": "mutable",
                    "name": "_duree",
                    "nodeType": "VariableDeclaration",
                    "overrides": null,
                    "scope": 157,
                    "src": "1235:11:1",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "typeName": {
                      "id": 127,
                      "name": "uint",
                      "nodeType": "ElementaryTypeName",
                      "src": "1235:4:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "value": null,
                    "visibility": "internal"
                  }
                ],
                "src": "1191:56:1"
              },
              "returnParameters": {
                "id": 130,
                "nodeType": "ParameterList",
                "parameters": [],
                "src": "1257:0:1"
              },
              "scope": 244,
              "src": "1170:234:1",
              "stateMutability": "nonpayable",
              "virtual": false,
              "visibility": "internal"
            },
            {
              "body": {
                "id": 186,
                "nodeType": "Block",
                "src": "1507:126:1",
                "statements": [
                  {
                    "expression": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "commonType": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          },
                          "id": 171,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "argumentTypes": null,
                            "id": 166,
                            "name": "storeAddress",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 47,
                            "src": "1521:12:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "!=",
                          "rightExpression": {
                            "argumentTypes": null,
                            "arguments": [
                              {
                                "argumentTypes": null,
                                "hexValue": "30",
                                "id": 169,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "number",
                                "lValueRequested": false,
                                "nodeType": "Literal",
                                "src": "1545:1:1",
                                "subdenomination": null,
                                "typeDescriptions": {
                                  "typeIdentifier": "t_rational_0_by_1",
                                  "typeString": "int_const 0"
                                },
                                "value": "0"
                              }
                            ],
                            "expression": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_rational_0_by_1",
                                  "typeString": "int_const 0"
                                }
                              ],
                              "id": 168,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "nodeType": "ElementaryTypeNameExpression",
                              "src": "1537:7:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_type$_t_address_$",
                                "typeString": "type(address)"
                              },
                              "typeName": {
                                "id": 167,
                                "name": "address",
                                "nodeType": "ElementaryTypeName",
                                "src": "1537:7:1",
                                "typeDescriptions": {
                                  "typeIdentifier": null,
                                  "typeString": null
                                }
                              }
                            },
                            "id": 170,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "typeConversion",
                            "lValueRequested": false,
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "1537:10:1",
                            "tryCall": false,
                            "typeDescriptions": {
                              "typeIdentifier": "t_address_payable",
                              "typeString": "address payable"
                            }
                          },
                          "src": "1521:26:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        ],
                        "id": 165,
                        "name": "require",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [
                          -18,
                          -18
                        ],
                        "referencedDeclaration": -18,
                        "src": "1513:7:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                          "typeString": "function (bool) pure"
                        }
                      },
                      "id": 172,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "1513:35:1",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$__$",
                        "typeString": "tuple()"
                      }
                    },
                    "id": 173,
                    "nodeType": "ExpressionStatement",
                    "src": "1513:35:1"
                  },
                  {
                    "expression": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "id": 175,
                          "name": "storeAddress",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 47,
                          "src": "1572:12:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        {
                          "argumentTypes": null,
                          "hexValue": "74727565",
                          "id": 176,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "bool",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "1586:4:1",
                          "subdenomination": null,
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          },
                          "value": "true"
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          },
                          {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        ],
                        "id": 174,
                        "name": "setApprovalForAll",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1028,
                        "src": "1554:17:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_bool_$returns$__$",
                          "typeString": "function (address,bool)"
                        }
                      },
                      "id": 177,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "1554:37:1",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$__$",
                        "typeString": "tuple()"
                      }
                    },
                    "id": 178,
                    "nodeType": "ExpressionStatement",
                    "src": "1554:37:1"
                  },
                  {
                    "expression": {
                      "argumentTypes": null,
                      "id": 184,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftHandSide": {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "baseExpression": {
                            "argumentTypes": null,
                            "id": 179,
                            "name": "idToMusic",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 64,
                            "src": "1597:9:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_Music_$60_storage_$",
                              "typeString": "mapping(uint256 => struct MusicToken.Music storage ref)"
                            }
                          },
                          "id": 181,
                          "indexExpression": {
                            "argumentTypes": null,
                            "id": 180,
                            "name": "MusicId",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 159,
                            "src": "1607:7:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "nodeType": "IndexAccess",
                          "src": "1597:18:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_Music_$60_storage",
                            "typeString": "struct MusicToken.Music storage ref"
                          }
                        },
                        "id": 182,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": true,
                        "memberName": "listens",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 57,
                        "src": "1597:26:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "nodeType": "Assignment",
                      "operator": "+=",
                      "rightHandSide": {
                        "argumentTypes": null,
                        "hexValue": "31",
                        "id": 183,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "number",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "1627:1:1",
                        "subdenomination": null,
                        "typeDescriptions": {
                          "typeIdentifier": "t_rational_1_by_1",
                          "typeString": "int_const 1"
                        },
                        "value": "1"
                      },
                      "src": "1597:31:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "id": 185,
                    "nodeType": "ExpressionStatement",
                    "src": "1597:31:1"
                  }
                ]
              },
              "documentation": null,
              "functionSelector": "ffc2886e",
              "id": 187,
              "implemented": true,
              "kind": "function",
              "modifiers": [
                {
                  "arguments": [
                    {
                      "argumentTypes": null,
                      "id": 162,
                      "name": "MusicId",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 159,
                      "src": "1498:7:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    }
                  ],
                  "id": 163,
                  "modifierName": {
                    "argumentTypes": null,
                    "id": 161,
                    "name": "onlyMusicOwner",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 79,
                    "src": "1483:14:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_modifier$_t_uint256_$",
                      "typeString": "modifier (uint256)"
                    }
                  },
                  "nodeType": "ModifierInvocation",
                  "src": "1483:23:1"
                }
              ],
              "name": "setMusiclisten",
              "nodeType": "FunctionDefinition",
              "overrides": null,
              "parameters": {
                "id": 160,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 159,
                    "mutability": "mutable",
                    "name": "MusicId",
                    "nodeType": "VariableDeclaration",
                    "overrides": null,
                    "scope": 187,
                    "src": "1462:12:1",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "typeName": {
                      "id": 158,
                      "name": "uint",
                      "nodeType": "ElementaryTypeName",
                      "src": "1462:4:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "value": null,
                    "visibility": "internal"
                  }
                ],
                "src": "1461:14:1"
              },
              "returnParameters": {
                "id": 164,
                "nodeType": "ParameterList",
                "parameters": [],
                "src": "1507:0:1"
              },
              "scope": 244,
              "src": "1438:195:1",
              "stateMutability": "nonpayable",
              "virtual": false,
              "visibility": "public"
            },
            {
              "body": {
                "id": 197,
                "nodeType": "Block",
                "src": "1846:59:1",
                "statements": [
                  {
                    "expression": {
                      "argumentTypes": null,
                      "hexValue": "76616c7565",
                      "id": 195,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "string",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "1893:7:1",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": "t_stringliteral_81afeeaff0ed5cee7d05a21078399c2f56226b0cd5657062500cef4c4e736f85",
                        "typeString": "literal_string \"value\""
                      },
                      "value": "value"
                    },
                    "functionReturnParameters": 194,
                    "id": 196,
                    "nodeType": "Return",
                    "src": "1886:14:1"
                  }
                ]
              },
              "documentation": {
                "id": 188,
                "nodeType": "StructuredDocumentation",
                "src": "1640:132:1",
                "text": "@notice Returns the name of a Music\n @param id The Id of the music/ERC721 \n @return titre returns the titref the music"
              },
              "functionSelector": "3c9eac9c",
              "id": 198,
              "implemented": true,
              "kind": "function",
              "modifiers": [],
              "name": "getMusicTitre",
              "nodeType": "FunctionDefinition",
              "overrides": null,
              "parameters": {
                "id": 191,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 190,
                    "mutability": "mutable",
                    "name": "id",
                    "nodeType": "VariableDeclaration",
                    "overrides": null,
                    "scope": 198,
                    "src": "1799:7:1",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "typeName": {
                      "id": 189,
                      "name": "uint",
                      "nodeType": "ElementaryTypeName",
                      "src": "1799:4:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "value": null,
                    "visibility": "internal"
                  }
                ],
                "src": "1798:9:1"
              },
              "returnParameters": {
                "id": 194,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 193,
                    "mutability": "mutable",
                    "name": "",
                    "nodeType": "VariableDeclaration",
                    "overrides": null,
                    "scope": 198,
                    "src": "1831:13:1",
                    "stateVariable": false,
                    "storageLocation": "memory",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_memory_ptr",
                      "typeString": "string"
                    },
                    "typeName": {
                      "id": 192,
                      "name": "string",
                      "nodeType": "ElementaryTypeName",
                      "src": "1831:6:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_storage_ptr",
                        "typeString": "string"
                      }
                    },
                    "value": null,
                    "visibility": "internal"
                  }
                ],
                "src": "1830:15:1"
              },
              "scope": 244,
              "src": "1775:130:1",
              "stateMutability": "view",
              "virtual": false,
              "visibility": "external"
            },
            {
              "body": {
                "id": 210,
                "nodeType": "Block",
                "src": "2124:39:1",
                "statements": [
                  {
                    "expression": {
                      "argumentTypes": null,
                      "expression": {
                        "argumentTypes": null,
                        "baseExpression": {
                          "argumentTypes": null,
                          "id": 205,
                          "name": "idToMusic",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 64,
                          "src": "2137:9:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_Music_$60_storage_$",
                            "typeString": "mapping(uint256 => struct MusicToken.Music storage ref)"
                          }
                        },
                        "id": 207,
                        "indexExpression": {
                          "argumentTypes": null,
                          "id": 206,
                          "name": "id",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 200,
                          "src": "2147:2:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "nodeType": "IndexAccess",
                        "src": "2137:13:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Music_$60_storage",
                          "typeString": "struct MusicToken.Music storage ref"
                        }
                      },
                      "id": 208,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "listens",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 57,
                      "src": "2137:21:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "functionReturnParameters": 204,
                    "id": 209,
                    "nodeType": "Return",
                    "src": "2130:28:1"
                  }
                ]
              },
              "documentation": null,
              "functionSelector": "f8edc51b",
              "id": 211,
              "implemented": true,
              "kind": "function",
              "modifiers": [],
              "name": "getMusicListens",
              "nodeType": "FunctionDefinition",
              "overrides": null,
              "parameters": {
                "id": 201,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 200,
                    "mutability": "mutable",
                    "name": "id",
                    "nodeType": "VariableDeclaration",
                    "overrides": null,
                    "scope": 211,
                    "src": "2078:7:1",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "typeName": {
                      "id": 199,
                      "name": "uint",
                      "nodeType": "ElementaryTypeName",
                      "src": "2078:4:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "value": null,
                    "visibility": "internal"
                  }
                ],
                "src": "2077:9:1"
              },
              "returnParameters": {
                "id": 204,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 203,
                    "mutability": "mutable",
                    "name": "listens",
                    "nodeType": "VariableDeclaration",
                    "overrides": null,
                    "scope": 211,
                    "src": "2110:12:1",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "typeName": {
                      "id": 202,
                      "name": "uint",
                      "nodeType": "ElementaryTypeName",
                      "src": "2110:4:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "value": null,
                    "visibility": "internal"
                  }
                ],
                "src": "2109:14:1"
              },
              "scope": 244,
              "src": "2052:111:1",
              "stateMutability": "view",
              "virtual": false,
              "visibility": "external"
            },
            {
              "body": {
                "id": 224,
                "nodeType": "Block",
                "src": "2387:39:1",
                "statements": [
                  {
                    "expression": {
                      "argumentTypes": null,
                      "expression": {
                        "argumentTypes": null,
                        "baseExpression": {
                          "argumentTypes": null,
                          "id": 219,
                          "name": "idToMusic",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 64,
                          "src": "2400:9:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_Music_$60_storage_$",
                            "typeString": "mapping(uint256 => struct MusicToken.Music storage ref)"
                          }
                        },
                        "id": 221,
                        "indexExpression": {
                          "argumentTypes": null,
                          "id": 220,
                          "name": "id",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 214,
                          "src": "2410:2:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "nodeType": "IndexAccess",
                        "src": "2400:13:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Music_$60_storage",
                          "typeString": "struct MusicToken.Music storage ref"
                        }
                      },
                      "id": 222,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "creator",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 59,
                      "src": "2400:21:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "functionReturnParameters": 218,
                    "id": 223,
                    "nodeType": "Return",
                    "src": "2393:28:1"
                  }
                ]
              },
              "documentation": {
                "id": 212,
                "nodeType": "StructuredDocumentation",
                "src": "2167:140:1",
                "text": "@notice Returns the creator of a music\n @param id The Id of the musict/ERC721 \n @return creator returns the creator of a music"
              },
              "functionSelector": "624e8a50",
              "id": 225,
              "implemented": true,
              "kind": "function",
              "modifiers": [],
              "name": "getMusicCreator",
              "nodeType": "FunctionDefinition",
              "overrides": null,
              "parameters": {
                "id": 215,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 214,
                    "mutability": "mutable",
                    "name": "id",
                    "nodeType": "VariableDeclaration",
                    "overrides": null,
                    "scope": 225,
                    "src": "2338:7:1",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "typeName": {
                      "id": 213,
                      "name": "uint",
                      "nodeType": "ElementaryTypeName",
                      "src": "2338:4:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "value": null,
                    "visibility": "internal"
                  }
                ],
                "src": "2337:9:1"
              },
              "returnParameters": {
                "id": 218,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 217,
                    "mutability": "mutable",
                    "name": "creator",
                    "nodeType": "VariableDeclaration",
                    "overrides": null,
                    "scope": 225,
                    "src": "2370:15:1",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    },
                    "typeName": {
                      "id": 216,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "2370:7:1",
                      "stateMutability": "nonpayable",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "value": null,
                    "visibility": "internal"
                  }
                ],
                "src": "2369:17:1"
              },
              "scope": 244,
              "src": "2312:114:1",
              "stateMutability": "view",
              "virtual": false,
              "visibility": "external"
            },
            {
              "body": {
                "id": 233,
                "nodeType": "Block",
                "src": "2638:30:1",
                "statements": [
                  {
                    "expression": {
                      "argumentTypes": null,
                      "id": 231,
                      "name": "storeAddress",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 47,
                      "src": "2651:12:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "functionReturnParameters": 230,
                    "id": 232,
                    "nodeType": "Return",
                    "src": "2644:19:1"
                  }
                ]
              },
              "documentation": {
                "id": 226,
                "nodeType": "StructuredDocumentation",
                "src": "2435:140:1",
                "text": "@notice Returns the address registered for the marketplace\n @return storeAddress returns the address registered for the marketplace"
              },
              "functionSelector": "b07ed3a9",
              "id": 234,
              "implemented": true,
              "kind": "function",
              "modifiers": [],
              "name": "getStoreAddress",
              "nodeType": "FunctionDefinition",
              "overrides": null,
              "parameters": {
                "id": 227,
                "nodeType": "ParameterList",
                "parameters": [],
                "src": "2603:2:1"
              },
              "returnParameters": {
                "id": 230,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 229,
                    "mutability": "mutable",
                    "name": "",
                    "nodeType": "VariableDeclaration",
                    "overrides": null,
                    "scope": 234,
                    "src": "2629:7:1",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    },
                    "typeName": {
                      "id": 228,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "2629:7:1",
                      "stateMutability": "nonpayable",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "value": null,
                    "visibility": "internal"
                  }
                ],
                "src": "2628:9:1"
              },
              "scope": 244,
              "src": "2578:90:1",
              "stateMutability": "view",
              "virtual": false,
              "visibility": "external"
            },
            {
              "body": {
                "id": 242,
                "nodeType": "Block",
                "src": "2863:16:1",
                "statements": [
                  {
                    "expression": {
                      "argumentTypes": null,
                      "hexValue": "74727565",
                      "id": 240,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "bool",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "2872:4:1",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      },
                      "value": "true"
                    },
                    "functionReturnParameters": 239,
                    "id": 241,
                    "nodeType": "Return",
                    "src": "2865:11:1"
                  }
                ]
              },
              "documentation": {
                "id": 235,
                "nodeType": "StructuredDocumentation",
                "src": "2672:135:1",
                "text": "@notice Returns true\n @dev This function is useful to confirm if the address passed to ProductStore.sol constructor is correct"
              },
              "functionSelector": "93b5bbe7",
              "id": 243,
              "implemented": true,
              "kind": "function",
              "modifiers": [],
              "name": "isMusicToken",
              "nodeType": "FunctionDefinition",
              "overrides": null,
              "parameters": {
                "id": 236,
                "nodeType": "ParameterList",
                "parameters": [],
                "src": "2831:2:1"
              },
              "returnParameters": {
                "id": 239,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 238,
                    "mutability": "mutable",
                    "name": "",
                    "nodeType": "VariableDeclaration",
                    "overrides": null,
                    "scope": 243,
                    "src": "2857:4:1",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    },
                    "typeName": {
                      "id": 237,
                      "name": "bool",
                      "nodeType": "ElementaryTypeName",
                      "src": "2857:4:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "value": null,
                    "visibility": "internal"
                  }
                ],
                "src": "2856:6:1"
              },
              "scope": 244,
              "src": "2810:69:1",
              "stateMutability": "pure",
              "virtual": false,
              "visibility": "external"
            }
          ],
          "scope": 245,
          "src": "259:2622:1"
        }
      ],
      "src": "32:2849:1"
    },
    "legacyAST": {
      "absolutePath": "/Users/irmenedocteur/Downloads/Listen Music Score _ final project consensys/contracts/MusicToken.sol",
      "exportedSymbols": {
        "MusicToken": [
          244
        ]
      },
      "id": 245,
      "license": "MIT",
      "nodeType": "SourceUnit",
      "nodes": [
        {
          "id": 38,
          "literals": [
            "solidity",
            "^",
            "0.7",
            ".0"
          ],
          "nodeType": "PragmaDirective",
          "src": "32:23:1"
        },
        {
          "absolutePath": "@openzeppelin/contracts/access/Ownable.sol",
          "file": "@openzeppelin/contracts/access/Ownable.sol",
          "id": 39,
          "nodeType": "ImportDirective",
          "scope": 245,
          "sourceUnit": 377,
          "src": "57:52:1",
          "symbolAliases": [],
          "unitAlias": ""
        },
        {
          "absolutePath": "@openzeppelin/contracts/token/ERC721/ERC721.sol",
          "file": "@openzeppelin/contracts/token/ERC721/ERC721.sol",
          "id": 40,
          "nodeType": "ImportDirective",
          "scope": 245,
          "sourceUnit": 1573,
          "src": "110:57:1",
          "symbolAliases": [],
          "unitAlias": ""
        },
        {
          "abstract": false,
          "baseContracts": [
            {
              "arguments": null,
              "baseName": {
                "contractScope": null,
                "id": 42,
                "name": "ERC721",
                "nodeType": "UserDefinedTypeName",
                "referencedDeclaration": 1572,
                "src": "282:6:1",
                "typeDescriptions": {
                  "typeIdentifier": "t_contract$_ERC721_$1572",
                  "typeString": "contract ERC721"
                }
              },
              "id": 43,
              "nodeType": "InheritanceSpecifier",
              "src": "282:6:1"
            },
            {
              "arguments": null,
              "baseName": {
                "contractScope": null,
                "id": 44,
                "name": "Ownable",
                "nodeType": "UserDefinedTypeName",
                "referencedDeclaration": 376,
                "src": "290:7:1",
                "typeDescriptions": {
                  "typeIdentifier": "t_contract$_Ownable_$376",
                  "typeString": "contract Ownable"
                }
              },
              "id": 45,
              "nodeType": "InheritanceSpecifier",
              "src": "290:7:1"
            }
          ],
          "contractDependencies": [
            267,
            376,
            433,
            445,
            1572,
            1688,
            1719,
            1746
          ],
          "contractKind": "contract",
          "documentation": {
            "id": 41,
            "nodeType": "StructuredDocumentation",
            "src": "169:90:1",
            "text": "@title Musictoken \n @notice Create tokenized (ERC721) versions of properties music"
          },
          "fullyImplemented": true,
          "id": 244,
          "linearizedBaseContracts": [
            244,
            376,
            1572,
            1719,
            1746,
            1688,
            433,
            445,
            267
          ],
          "name": "MusicToken",
          "nodeType": "ContractDefinition",
          "nodes": [
            {
              "constant": false,
              "id": 47,
              "mutability": "mutable",
              "name": "storeAddress",
              "nodeType": "VariableDeclaration",
              "overrides": null,
              "scope": 244,
              "src": "303:29:1",
              "stateVariable": true,
              "storageLocation": "default",
              "typeDescriptions": {
                "typeIdentifier": "t_address",
                "typeString": "address"
              },
              "typeName": {
                "id": 46,
                "name": "address",
                "nodeType": "ElementaryTypeName",
                "src": "303:7:1",
                "stateMutability": "nonpayable",
                "typeDescriptions": {
                  "typeIdentifier": "t_address",
                  "typeString": "address"
                }
              },
              "value": null,
              "visibility": "internal"
            },
            {
              "constant": false,
              "id": 49,
              "mutability": "mutable",
              "name": "newMusicId",
              "nodeType": "VariableDeclaration",
              "overrides": null,
              "scope": 244,
              "src": "336:15:1",
              "stateVariable": true,
              "storageLocation": "default",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              },
              "typeName": {
                "id": 48,
                "name": "uint",
                "nodeType": "ElementaryTypeName",
                "src": "336:4:1",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                }
              },
              "value": null,
              "visibility": "internal"
            },
            {
              "canonicalName": "MusicToken.Music",
              "id": 60,
              "members": [
                {
                  "constant": false,
                  "id": 51,
                  "mutability": "mutable",
                  "name": "titre",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 60,
                  "src": "375:12:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_storage_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 50,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "375:6:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 53,
                  "mutability": "mutable",
                  "name": "genre",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 60,
                  "src": "393:12:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_storage_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 52,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "393:6:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 55,
                  "mutability": "mutable",
                  "name": "duree",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 60,
                  "src": "411:10:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 54,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "411:4:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 57,
                  "mutability": "mutable",
                  "name": "listens",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 60,
                  "src": "427:12:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 56,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "427:4:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 59,
                  "mutability": "mutable",
                  "name": "creator",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 60,
                  "src": "445:15:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 58,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "445:7:1",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "name": "Music",
              "nodeType": "StructDefinition",
              "scope": 244,
              "src": "356:109:1",
              "visibility": "public"
            },
            {
              "constant": false,
              "id": 64,
              "mutability": "mutable",
              "name": "idToMusic",
              "nodeType": "VariableDeclaration",
              "overrides": null,
              "scope": 244,
              "src": "469:33:1",
              "stateVariable": true,
              "storageLocation": "default",
              "typeDescriptions": {
                "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_Music_$60_storage_$",
                "typeString": "mapping(uint256 => struct MusicToken.Music)"
              },
              "typeName": {
                "id": 63,
                "keyType": {
                  "id": 61,
                  "name": "uint",
                  "nodeType": "ElementaryTypeName",
                  "src": "478:4:1",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  }
                },
                "nodeType": "Mapping",
                "src": "469:23:1",
                "typeDescriptions": {
                  "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_Music_$60_storage_$",
                  "typeString": "mapping(uint256 => struct MusicToken.Music)"
                },
                "valueType": {
                  "contractScope": null,
                  "id": 62,
                  "name": "Music",
                  "nodeType": "UserDefinedTypeName",
                  "referencedDeclaration": 60,
                  "src": "486:5:1",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_Music_$60_storage_ptr",
                    "typeString": "struct MusicToken.Music"
                  }
                }
              },
              "value": null,
              "visibility": "internal"
            },
            {
              "body": {
                "id": 78,
                "nodeType": "Block",
                "src": "546:48:1",
                "statements": [
                  {
                    "expression": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "commonType": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          },
                          "id": 74,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "argumentTypes": null,
                            "arguments": [
                              {
                                "argumentTypes": null,
                                "id": 70,
                                "name": "_musicId",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 66,
                                "src": "564:8:1",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              }
                            ],
                            "expression": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              ],
                              "id": 69,
                              "name": "ownerOf",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 789,
                              "src": "556:7:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_internal_view$_t_uint256_$returns$_t_address_$",
                                "typeString": "function (uint256) view returns (address)"
                              }
                            },
                            "id": 71,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "556:17:1",
                            "tryCall": false,
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "==",
                          "rightExpression": {
                            "argumentTypes": null,
                            "expression": {
                              "argumentTypes": null,
                              "id": 72,
                              "name": "msg",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": -15,
                              "src": "577:3:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_magic_message",
                                "typeString": "msg"
                              }
                            },
                            "id": 73,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "sender",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": null,
                            "src": "577:10:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address_payable",
                              "typeString": "address payable"
                            }
                          },
                          "src": "556:31:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        ],
                        "id": 68,
                        "name": "require",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [
                          -18,
                          -18
                        ],
                        "referencedDeclaration": -18,
                        "src": "548:7:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                          "typeString": "function (bool) pure"
                        }
                      },
                      "id": 75,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "548:40:1",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$__$",
                        "typeString": "tuple()"
                      }
                    },
                    "id": 76,
                    "nodeType": "ExpressionStatement",
                    "src": "548:40:1"
                  },
                  {
                    "id": 77,
                    "nodeType": "PlaceholderStatement",
                    "src": "590:1:1"
                  }
                ]
              },
              "documentation": null,
              "id": 79,
              "name": "onlyMusicOwner",
              "nodeType": "ModifierDefinition",
              "overrides": null,
              "parameters": {
                "id": 67,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 66,
                    "mutability": "mutable",
                    "name": "_musicId",
                    "nodeType": "VariableDeclaration",
                    "overrides": null,
                    "scope": 79,
                    "src": "531:13:1",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "typeName": {
                      "id": 65,
                      "name": "uint",
                      "nodeType": "ElementaryTypeName",
                      "src": "531:4:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "value": null,
                    "visibility": "internal"
                  }
                ],
                "src": "530:15:1"
              },
              "src": "507:87:1",
              "virtual": false,
              "visibility": "internal"
            },
            {
              "body": {
                "id": 91,
                "nodeType": "Block",
                "src": "753:25:1",
                "statements": [
                  {
                    "expression": {
                      "argumentTypes": null,
                      "id": 89,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftHandSide": {
                        "argumentTypes": null,
                        "id": 87,
                        "name": "newMusicId",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 49,
                        "src": "759:10:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "nodeType": "Assignment",
                      "operator": "=",
                      "rightHandSide": {
                        "argumentTypes": null,
                        "hexValue": "30",
                        "id": 88,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "number",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "772:1:1",
                        "subdenomination": null,
                        "typeDescriptions": {
                          "typeIdentifier": "t_rational_0_by_1",
                          "typeString": "int_const 0"
                        },
                        "value": "0"
                      },
                      "src": "759:14:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "id": 90,
                    "nodeType": "ExpressionStatement",
                    "src": "759:14:1"
                  }
                ]
              },
              "documentation": {
                "id": 80,
                "nodeType": "StructuredDocumentation",
                "src": "598:94:1",
                "text": "@dev Contract constructor calls ERC721 constructor and pass the name and symbol parameters"
              },
              "id": 92,
              "implemented": true,
              "kind": "constructor",
              "modifiers": [
                {
                  "arguments": [
                    {
                      "argumentTypes": null,
                      "hexValue": "546f6b656e697a6564204d7573696373",
                      "id": 83,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "string",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "724:18:1",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": "t_stringliteral_d69c8a4aa29e28db2a749aa1c4df531042808c10f34a7f711108389269c9cce5",
                        "typeString": "literal_string \"Tokenized Musics\""
                      },
                      "value": "Tokenized Musics"
                    },
                    {
                      "argumentTypes": null,
                      "hexValue": "544d",
                      "id": 84,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "string",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "744:4:1",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": "t_stringliteral_05635ba15589c7d9a857b9904698c0d13524ecfa7c7097d1af530be3c0cfca90",
                        "typeString": "literal_string \"TM\""
                      },
                      "value": "TM"
                    }
                  ],
                  "id": 85,
                  "modifierName": {
                    "argumentTypes": null,
                    "id": 82,
                    "name": "ERC721",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 1572,
                    "src": "717:6:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_type$_t_contract$_ERC721_$1572_$",
                      "typeString": "type(contract ERC721)"
                    }
                  },
                  "nodeType": "ModifierInvocation",
                  "src": "717:32:1"
                }
              ],
              "name": "",
              "nodeType": "FunctionDefinition",
              "overrides": null,
              "parameters": {
                "id": 81,
                "nodeType": "ParameterList",
                "parameters": [],
                "src": "707:2:1"
              },
              "returnParameters": {
                "id": 86,
                "nodeType": "ParameterList",
                "parameters": [],
                "src": "753:0:1"
              },
              "scope": 244,
              "src": "695:83:1",
              "stateMutability": "nonpayable",
              "virtual": false,
              "visibility": "public"
            },
            {
              "body": {
                "id": 104,
                "nodeType": "Block",
                "src": "904:34:1",
                "statements": [
                  {
                    "expression": {
                      "argumentTypes": null,
                      "id": 102,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftHandSide": {
                        "argumentTypes": null,
                        "id": 100,
                        "name": "storeAddress",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 47,
                        "src": "910:12:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "nodeType": "Assignment",
                      "operator": "=",
                      "rightHandSide": {
                        "argumentTypes": null,
                        "id": 101,
                        "name": "_address",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 95,
                        "src": "925:8:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "src": "910:23:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "id": 103,
                    "nodeType": "ExpressionStatement",
                    "src": "910:23:1"
                  }
                ]
              },
              "documentation": {
                "id": 93,
                "nodeType": "StructuredDocumentation",
                "src": "784:57:1",
                "text": "@param _address Deployed Music Store contract address"
              },
              "functionSelector": "6559e59a",
              "id": 105,
              "implemented": true,
              "kind": "function",
              "modifiers": [
                {
                  "arguments": null,
                  "id": 98,
                  "modifierName": {
                    "argumentTypes": null,
                    "id": 97,
                    "name": "onlyOwner",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 325,
                    "src": "894:9:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_modifier$__$",
                      "typeString": "modifier ()"
                    }
                  },
                  "nodeType": "ModifierInvocation",
                  "src": "894:9:1"
                }
              ],
              "name": "setStoreAddress",
              "nodeType": "FunctionDefinition",
              "overrides": null,
              "parameters": {
                "id": 96,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 95,
                    "mutability": "mutable",
                    "name": "_address",
                    "nodeType": "VariableDeclaration",
                    "overrides": null,
                    "scope": 105,
                    "src": "869:16:1",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    },
                    "typeName": {
                      "id": 94,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "869:7:1",
                      "stateMutability": "nonpayable",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "value": null,
                    "visibility": "internal"
                  }
                ],
                "src": "868:18:1"
              },
              "returnParameters": {
                "id": 99,
                "nodeType": "ParameterList",
                "parameters": [],
                "src": "904:0:1"
              },
              "scope": 244,
              "src": "844:94:1",
              "stateMutability": "nonpayable",
              "virtual": false,
              "visibility": "public"
            },
            {
              "body": {
                "id": 120,
                "nodeType": "Block",
                "src": "1074:42:1",
                "statements": [
                  {
                    "expression": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "id": 115,
                          "name": "titre",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 107,
                          "src": "1093:5:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_string_memory_ptr",
                            "typeString": "string memory"
                          }
                        },
                        {
                          "argumentTypes": null,
                          "id": 116,
                          "name": "genre",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 109,
                          "src": "1099:5:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_string_memory_ptr",
                            "typeString": "string memory"
                          }
                        },
                        {
                          "argumentTypes": null,
                          "id": 117,
                          "name": "duree",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 111,
                          "src": "1105:5:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_string_memory_ptr",
                            "typeString": "string memory"
                          },
                          {
                            "typeIdentifier": "t_string_memory_ptr",
                            "typeString": "string memory"
                          },
                          {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        ],
                        "id": 114,
                        "name": "_createMusic",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 157,
                        "src": "1080:12:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_nonpayable$_t_string_memory_ptr_$_t_string_memory_ptr_$_t_uint256_$returns$__$",
                          "typeString": "function (string memory,string memory,uint256)"
                        }
                      },
                      "id": 118,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "1080:31:1",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$__$",
                        "typeString": "tuple()"
                      }
                    },
                    "id": 119,
                    "nodeType": "ExpressionStatement",
                    "src": "1080:31:1"
                  }
                ]
              },
              "documentation": null,
              "functionSelector": "f0f0211a",
              "id": 121,
              "implemented": true,
              "kind": "function",
              "modifiers": [],
              "name": "createMusic",
              "nodeType": "FunctionDefinition",
              "overrides": null,
              "parameters": {
                "id": 112,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 107,
                    "mutability": "mutable",
                    "name": "titre",
                    "nodeType": "VariableDeclaration",
                    "overrides": null,
                    "scope": 121,
                    "src": "1012:19:1",
                    "stateVariable": false,
                    "storageLocation": "memory",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_memory_ptr",
                      "typeString": "string"
                    },
                    "typeName": {
                      "id": 106,
                      "name": "string",
                      "nodeType": "ElementaryTypeName",
                      "src": "1012:6:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_storage_ptr",
                        "typeString": "string"
                      }
                    },
                    "value": null,
                    "visibility": "internal"
                  },
                  {
                    "constant": false,
                    "id": 109,
                    "mutability": "mutable",
                    "name": "genre",
                    "nodeType": "VariableDeclaration",
                    "overrides": null,
                    "scope": 121,
                    "src": "1033:19:1",
                    "stateVariable": false,
                    "storageLocation": "memory",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_memory_ptr",
                      "typeString": "string"
                    },
                    "typeName": {
                      "id": 108,
                      "name": "string",
                      "nodeType": "ElementaryTypeName",
                      "src": "1033:6:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_storage_ptr",
                        "typeString": "string"
                      }
                    },
                    "value": null,
                    "visibility": "internal"
                  },
                  {
                    "constant": false,
                    "id": 111,
                    "mutability": "mutable",
                    "name": "duree",
                    "nodeType": "VariableDeclaration",
                    "overrides": null,
                    "scope": 121,
                    "src": "1054:10:1",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "typeName": {
                      "id": 110,
                      "name": "uint",
                      "nodeType": "ElementaryTypeName",
                      "src": "1054:4:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "value": null,
                    "visibility": "internal"
                  }
                ],
                "src": "1011:55:1"
              },
              "returnParameters": {
                "id": 113,
                "nodeType": "ParameterList",
                "parameters": [],
                "src": "1074:0:1"
              },
              "scope": 244,
              "src": "991:125:1",
              "stateMutability": "nonpayable",
              "virtual": false,
              "visibility": "public"
            },
            {
              "body": {
                "id": 156,
                "nodeType": "Block",
                "src": "1257:147:1",
                "statements": [
                  {
                    "expression": {
                      "argumentTypes": null,
                      "id": 135,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftHandSide": {
                        "argumentTypes": null,
                        "id": 131,
                        "name": "newMusicId",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 49,
                        "src": "1263:10:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "nodeType": "Assignment",
                      "operator": "=",
                      "rightHandSide": {
                        "argumentTypes": null,
                        "commonType": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "id": 134,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "id": 132,
                          "name": "newMusicId",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 49,
                          "src": "1276:10:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "+",
                        "rightExpression": {
                          "argumentTypes": null,
                          "hexValue": "31",
                          "id": 133,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "1287:1:1",
                          "subdenomination": null,
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_1_by_1",
                            "typeString": "int_const 1"
                          },
                          "value": "1"
                        },
                        "src": "1276:12:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "src": "1263:25:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "id": 136,
                    "nodeType": "ExpressionStatement",
                    "src": "1263:25:1"
                  },
                  {
                    "expression": {
                      "argumentTypes": null,
                      "id": 148,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftHandSide": {
                        "argumentTypes": null,
                        "baseExpression": {
                          "argumentTypes": null,
                          "id": 137,
                          "name": "idToMusic",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 64,
                          "src": "1294:9:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_Music_$60_storage_$",
                            "typeString": "mapping(uint256 => struct MusicToken.Music storage ref)"
                          }
                        },
                        "id": 139,
                        "indexExpression": {
                          "argumentTypes": null,
                          "id": 138,
                          "name": "newMusicId",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 49,
                          "src": "1304:10:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": true,
                        "nodeType": "IndexAccess",
                        "src": "1294:21:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Music_$60_storage",
                          "typeString": "struct MusicToken.Music storage ref"
                        }
                      },
                      "nodeType": "Assignment",
                      "operator": "=",
                      "rightHandSide": {
                        "argumentTypes": null,
                        "arguments": [
                          {
                            "argumentTypes": null,
                            "id": 141,
                            "name": "_titre",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 124,
                            "src": "1324:6:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_string_memory_ptr",
                              "typeString": "string memory"
                            }
                          },
                          {
                            "argumentTypes": null,
                            "id": 142,
                            "name": "_genre",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 126,
                            "src": "1332:6:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_string_memory_ptr",
                              "typeString": "string memory"
                            }
                          },
                          {
                            "argumentTypes": null,
                            "id": 143,
                            "name": "_duree",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 128,
                            "src": "1339:6:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          {
                            "argumentTypes": null,
                            "hexValue": "30",
                            "id": 144,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "1346:1:1",
                            "subdenomination": null,
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_0_by_1",
                              "typeString": "int_const 0"
                            },
                            "value": "0"
                          },
                          {
                            "argumentTypes": null,
                            "expression": {
                              "argumentTypes": null,
                              "id": 145,
                              "name": "msg",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": -15,
                              "src": "1349:3:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_magic_message",
                                "typeString": "msg"
                              }
                            },
                            "id": 146,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "sender",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": null,
                            "src": "1349:10:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address_payable",
                              "typeString": "address payable"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_string_memory_ptr",
                              "typeString": "string memory"
                            },
                            {
                              "typeIdentifier": "t_string_memory_ptr",
                              "typeString": "string memory"
                            },
                            {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            },
                            {
                              "typeIdentifier": "t_rational_0_by_1",
                              "typeString": "int_const 0"
                            },
                            {
                              "typeIdentifier": "t_address_payable",
                              "typeString": "address payable"
                            }
                          ],
                          "id": 140,
                          "name": "Music",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 60,
                          "src": "1318:5:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_struct$_Music_$60_storage_ptr_$",
                            "typeString": "type(struct MusicToken.Music storage pointer)"
                          }
                        },
                        "id": 147,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "structConstructorCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "1318:42:1",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Music_$60_memory_ptr",
                          "typeString": "struct MusicToken.Music memory"
                        }
                      },
                      "src": "1294:66:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_Music_$60_storage",
                        "typeString": "struct MusicToken.Music storage ref"
                      }
                    },
                    "id": 149,
                    "nodeType": "ExpressionStatement",
                    "src": "1294:66:1"
                  },
                  {
                    "expression": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "expression": {
                            "argumentTypes": null,
                            "id": 151,
                            "name": "msg",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": -15,
                            "src": "1376:3:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_message",
                              "typeString": "msg"
                            }
                          },
                          "id": 152,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "sender",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": null,
                          "src": "1376:10:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address_payable",
                            "typeString": "address payable"
                          }
                        },
                        {
                          "argumentTypes": null,
                          "id": 153,
                          "name": "newMusicId",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 49,
                          "src": "1388:10:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_address_payable",
                            "typeString": "address payable"
                          },
                          {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        ],
                        "id": 150,
                        "name": "_safeMint",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [
                          1220,
                          1249
                        ],
                        "referencedDeclaration": 1220,
                        "src": "1366:9:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_uint256_$returns$__$",
                          "typeString": "function (address,uint256)"
                        }
                      },
                      "id": 154,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "1366:33:1",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$__$",
                        "typeString": "tuple()"
                      }
                    },
                    "id": 155,
                    "nodeType": "ExpressionStatement",
                    "src": "1366:33:1"
                  }
                ]
              },
              "documentation": {
                "id": 122,
                "nodeType": "StructuredDocumentation",
                "src": "1120:47:1",
                "text": "@notice Create a new ERC721 Tokenized Music"
              },
              "id": 157,
              "implemented": true,
              "kind": "function",
              "modifiers": [],
              "name": "_createMusic",
              "nodeType": "FunctionDefinition",
              "overrides": null,
              "parameters": {
                "id": 129,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 124,
                    "mutability": "mutable",
                    "name": "_titre",
                    "nodeType": "VariableDeclaration",
                    "overrides": null,
                    "scope": 157,
                    "src": "1192:20:1",
                    "stateVariable": false,
                    "storageLocation": "memory",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_memory_ptr",
                      "typeString": "string"
                    },
                    "typeName": {
                      "id": 123,
                      "name": "string",
                      "nodeType": "ElementaryTypeName",
                      "src": "1192:6:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_storage_ptr",
                        "typeString": "string"
                      }
                    },
                    "value": null,
                    "visibility": "internal"
                  },
                  {
                    "constant": false,
                    "id": 126,
                    "mutability": "mutable",
                    "name": "_genre",
                    "nodeType": "VariableDeclaration",
                    "overrides": null,
                    "scope": 157,
                    "src": "1214:20:1",
                    "stateVariable": false,
                    "storageLocation": "memory",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_memory_ptr",
                      "typeString": "string"
                    },
                    "typeName": {
                      "id": 125,
                      "name": "string",
                      "nodeType": "ElementaryTypeName",
                      "src": "1214:6:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_storage_ptr",
                        "typeString": "string"
                      }
                    },
                    "value": null,
                    "visibility": "internal"
                  },
                  {
                    "constant": false,
                    "id": 128,
                    "mutability": "mutable",
                    "name": "_duree",
                    "nodeType": "VariableDeclaration",
                    "overrides": null,
                    "scope": 157,
                    "src": "1235:11:1",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "typeName": {
                      "id": 127,
                      "name": "uint",
                      "nodeType": "ElementaryTypeName",
                      "src": "1235:4:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "value": null,
                    "visibility": "internal"
                  }
                ],
                "src": "1191:56:1"
              },
              "returnParameters": {
                "id": 130,
                "nodeType": "ParameterList",
                "parameters": [],
                "src": "1257:0:1"
              },
              "scope": 244,
              "src": "1170:234:1",
              "stateMutability": "nonpayable",
              "virtual": false,
              "visibility": "internal"
            },
            {
              "body": {
                "id": 186,
                "nodeType": "Block",
                "src": "1507:126:1",
                "statements": [
                  {
                    "expression": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "commonType": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          },
                          "id": 171,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "argumentTypes": null,
                            "id": 166,
                            "name": "storeAddress",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 47,
                            "src": "1521:12:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "!=",
                          "rightExpression": {
                            "argumentTypes": null,
                            "arguments": [
                              {
                                "argumentTypes": null,
                                "hexValue": "30",
                                "id": 169,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "number",
                                "lValueRequested": false,
                                "nodeType": "Literal",
                                "src": "1545:1:1",
                                "subdenomination": null,
                                "typeDescriptions": {
                                  "typeIdentifier": "t_rational_0_by_1",
                                  "typeString": "int_const 0"
                                },
                                "value": "0"
                              }
                            ],
                            "expression": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_rational_0_by_1",
                                  "typeString": "int_const 0"
                                }
                              ],
                              "id": 168,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "nodeType": "ElementaryTypeNameExpression",
                              "src": "1537:7:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_type$_t_address_$",
                                "typeString": "type(address)"
                              },
                              "typeName": {
                                "id": 167,
                                "name": "address",
                                "nodeType": "ElementaryTypeName",
                                "src": "1537:7:1",
                                "typeDescriptions": {
                                  "typeIdentifier": null,
                                  "typeString": null
                                }
                              }
                            },
                            "id": 170,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "typeConversion",
                            "lValueRequested": false,
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "1537:10:1",
                            "tryCall": false,
                            "typeDescriptions": {
                              "typeIdentifier": "t_address_payable",
                              "typeString": "address payable"
                            }
                          },
                          "src": "1521:26:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        ],
                        "id": 165,
                        "name": "require",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [
                          -18,
                          -18
                        ],
                        "referencedDeclaration": -18,
                        "src": "1513:7:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                          "typeString": "function (bool) pure"
                        }
                      },
                      "id": 172,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "1513:35:1",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$__$",
                        "typeString": "tuple()"
                      }
                    },
                    "id": 173,
                    "nodeType": "ExpressionStatement",
                    "src": "1513:35:1"
                  },
                  {
                    "expression": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "id": 175,
                          "name": "storeAddress",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 47,
                          "src": "1572:12:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        {
                          "argumentTypes": null,
                          "hexValue": "74727565",
                          "id": 176,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "bool",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "1586:4:1",
                          "subdenomination": null,
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          },
                          "value": "true"
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          },
                          {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        ],
                        "id": 174,
                        "name": "setApprovalForAll",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1028,
                        "src": "1554:17:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_bool_$returns$__$",
                          "typeString": "function (address,bool)"
                        }
                      },
                      "id": 177,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "1554:37:1",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$__$",
                        "typeString": "tuple()"
                      }
                    },
                    "id": 178,
                    "nodeType": "ExpressionStatement",
                    "src": "1554:37:1"
                  },
                  {
                    "expression": {
                      "argumentTypes": null,
                      "id": 184,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftHandSide": {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "baseExpression": {
                            "argumentTypes": null,
                            "id": 179,
                            "name": "idToMusic",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 64,
                            "src": "1597:9:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_Music_$60_storage_$",
                              "typeString": "mapping(uint256 => struct MusicToken.Music storage ref)"
                            }
                          },
                          "id": 181,
                          "indexExpression": {
                            "argumentTypes": null,
                            "id": 180,
                            "name": "MusicId",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 159,
                            "src": "1607:7:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "nodeType": "IndexAccess",
                          "src": "1597:18:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_Music_$60_storage",
                            "typeString": "struct MusicToken.Music storage ref"
                          }
                        },
                        "id": 182,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": true,
                        "memberName": "listens",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 57,
                        "src": "1597:26:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "nodeType": "Assignment",
                      "operator": "+=",
                      "rightHandSide": {
                        "argumentTypes": null,
                        "hexValue": "31",
                        "id": 183,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "number",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "1627:1:1",
                        "subdenomination": null,
                        "typeDescriptions": {
                          "typeIdentifier": "t_rational_1_by_1",
                          "typeString": "int_const 1"
                        },
                        "value": "1"
                      },
                      "src": "1597:31:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "id": 185,
                    "nodeType": "ExpressionStatement",
                    "src": "1597:31:1"
                  }
                ]
              },
              "documentation": null,
              "functionSelector": "ffc2886e",
              "id": 187,
              "implemented": true,
              "kind": "function",
              "modifiers": [
                {
                  "arguments": [
                    {
                      "argumentTypes": null,
                      "id": 162,
                      "name": "MusicId",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 159,
                      "src": "1498:7:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    }
                  ],
                  "id": 163,
                  "modifierName": {
                    "argumentTypes": null,
                    "id": 161,
                    "name": "onlyMusicOwner",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 79,
                    "src": "1483:14:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_modifier$_t_uint256_$",
                      "typeString": "modifier (uint256)"
                    }
                  },
                  "nodeType": "ModifierInvocation",
                  "src": "1483:23:1"
                }
              ],
              "name": "setMusiclisten",
              "nodeType": "FunctionDefinition",
              "overrides": null,
              "parameters": {
                "id": 160,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 159,
                    "mutability": "mutable",
                    "name": "MusicId",
                    "nodeType": "VariableDeclaration",
                    "overrides": null,
                    "scope": 187,
                    "src": "1462:12:1",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "typeName": {
                      "id": 158,
                      "name": "uint",
                      "nodeType": "ElementaryTypeName",
                      "src": "1462:4:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "value": null,
                    "visibility": "internal"
                  }
                ],
                "src": "1461:14:1"
              },
              "returnParameters": {
                "id": 164,
                "nodeType": "ParameterList",
                "parameters": [],
                "src": "1507:0:1"
              },
              "scope": 244,
              "src": "1438:195:1",
              "stateMutability": "nonpayable",
              "virtual": false,
              "visibility": "public"
            },
            {
              "body": {
                "id": 197,
                "nodeType": "Block",
                "src": "1846:59:1",
                "statements": [
                  {
                    "expression": {
                      "argumentTypes": null,
                      "hexValue": "76616c7565",
                      "id": 195,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "string",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "1893:7:1",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": "t_stringliteral_81afeeaff0ed5cee7d05a21078399c2f56226b0cd5657062500cef4c4e736f85",
                        "typeString": "literal_string \"value\""
                      },
                      "value": "value"
                    },
                    "functionReturnParameters": 194,
                    "id": 196,
                    "nodeType": "Return",
                    "src": "1886:14:1"
                  }
                ]
              },
              "documentation": {
                "id": 188,
                "nodeType": "StructuredDocumentation",
                "src": "1640:132:1",
                "text": "@notice Returns the name of a Music\n @param id The Id of the music/ERC721 \n @return titre returns the titref the music"
              },
              "functionSelector": "3c9eac9c",
              "id": 198,
              "implemented": true,
              "kind": "function",
              "modifiers": [],
              "name": "getMusicTitre",
              "nodeType": "FunctionDefinition",
              "overrides": null,
              "parameters": {
                "id": 191,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 190,
                    "mutability": "mutable",
                    "name": "id",
                    "nodeType": "VariableDeclaration",
                    "overrides": null,
                    "scope": 198,
                    "src": "1799:7:1",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "typeName": {
                      "id": 189,
                      "name": "uint",
                      "nodeType": "ElementaryTypeName",
                      "src": "1799:4:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "value": null,
                    "visibility": "internal"
                  }
                ],
                "src": "1798:9:1"
              },
              "returnParameters": {
                "id": 194,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 193,
                    "mutability": "mutable",
                    "name": "",
                    "nodeType": "VariableDeclaration",
                    "overrides": null,
                    "scope": 198,
                    "src": "1831:13:1",
                    "stateVariable": false,
                    "storageLocation": "memory",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_memory_ptr",
                      "typeString": "string"
                    },
                    "typeName": {
                      "id": 192,
                      "name": "string",
                      "nodeType": "ElementaryTypeName",
                      "src": "1831:6:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_storage_ptr",
                        "typeString": "string"
                      }
                    },
                    "value": null,
                    "visibility": "internal"
                  }
                ],
                "src": "1830:15:1"
              },
              "scope": 244,
              "src": "1775:130:1",
              "stateMutability": "view",
              "virtual": false,
              "visibility": "external"
            },
            {
              "body": {
                "id": 210,
                "nodeType": "Block",
                "src": "2124:39:1",
                "statements": [
                  {
                    "expression": {
                      "argumentTypes": null,
                      "expression": {
                        "argumentTypes": null,
                        "baseExpression": {
                          "argumentTypes": null,
                          "id": 205,
                          "name": "idToMusic",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 64,
                          "src": "2137:9:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_Music_$60_storage_$",
                            "typeString": "mapping(uint256 => struct MusicToken.Music storage ref)"
                          }
                        },
                        "id": 207,
                        "indexExpression": {
                          "argumentTypes": null,
                          "id": 206,
                          "name": "id",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 200,
                          "src": "2147:2:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "nodeType": "IndexAccess",
                        "src": "2137:13:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Music_$60_storage",
                          "typeString": "struct MusicToken.Music storage ref"
                        }
                      },
                      "id": 208,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "listens",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 57,
                      "src": "2137:21:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "functionReturnParameters": 204,
                    "id": 209,
                    "nodeType": "Return",
                    "src": "2130:28:1"
                  }
                ]
              },
              "documentation": null,
              "functionSelector": "f8edc51b",
              "id": 211,
              "implemented": true,
              "kind": "function",
              "modifiers": [],
              "name": "getMusicListens",
              "nodeType": "FunctionDefinition",
              "overrides": null,
              "parameters": {
                "id": 201,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 200,
                    "mutability": "mutable",
                    "name": "id",
                    "nodeType": "VariableDeclaration",
                    "overrides": null,
                    "scope": 211,
                    "src": "2078:7:1",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "typeName": {
                      "id": 199,
                      "name": "uint",
                      "nodeType": "ElementaryTypeName",
                      "src": "2078:4:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "value": null,
                    "visibility": "internal"
                  }
                ],
                "src": "2077:9:1"
              },
              "returnParameters": {
                "id": 204,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 203,
                    "mutability": "mutable",
                    "name": "listens",
                    "nodeType": "VariableDeclaration",
                    "overrides": null,
                    "scope": 211,
                    "src": "2110:12:1",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "typeName": {
                      "id": 202,
                      "name": "uint",
                      "nodeType": "ElementaryTypeName",
                      "src": "2110:4:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "value": null,
                    "visibility": "internal"
                  }
                ],
                "src": "2109:14:1"
              },
              "scope": 244,
              "src": "2052:111:1",
              "stateMutability": "view",
              "virtual": false,
              "visibility": "external"
            },
            {
              "body": {
                "id": 224,
                "nodeType": "Block",
                "src": "2387:39:1",
                "statements": [
                  {
                    "expression": {
                      "argumentTypes": null,
                      "expression": {
                        "argumentTypes": null,
                        "baseExpression": {
                          "argumentTypes": null,
                          "id": 219,
                          "name": "idToMusic",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 64,
                          "src": "2400:9:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_Music_$60_storage_$",
                            "typeString": "mapping(uint256 => struct MusicToken.Music storage ref)"
                          }
                        },
                        "id": 221,
                        "indexExpression": {
                          "argumentTypes": null,
                          "id": 220,
                          "name": "id",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 214,
                          "src": "2410:2:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "nodeType": "IndexAccess",
                        "src": "2400:13:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Music_$60_storage",
                          "typeString": "struct MusicToken.Music storage ref"
                        }
                      },
                      "id": 222,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "creator",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 59,
                      "src": "2400:21:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "functionReturnParameters": 218,
                    "id": 223,
                    "nodeType": "Return",
                    "src": "2393:28:1"
                  }
                ]
              },
              "documentation": {
                "id": 212,
                "nodeType": "StructuredDocumentation",
                "src": "2167:140:1",
                "text": "@notice Returns the creator of a music\n @param id The Id of the musict/ERC721 \n @return creator returns the creator of a music"
              },
              "functionSelector": "624e8a50",
              "id": 225,
              "implemented": true,
              "kind": "function",
              "modifiers": [],
              "name": "getMusicCreator",
              "nodeType": "FunctionDefinition",
              "overrides": null,
              "parameters": {
                "id": 215,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 214,
                    "mutability": "mutable",
                    "name": "id",
                    "nodeType": "VariableDeclaration",
                    "overrides": null,
                    "scope": 225,
                    "src": "2338:7:1",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "typeName": {
                      "id": 213,
                      "name": "uint",
                      "nodeType": "ElementaryTypeName",
                      "src": "2338:4:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "value": null,
                    "visibility": "internal"
                  }
                ],
                "src": "2337:9:1"
              },
              "returnParameters": {
                "id": 218,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 217,
                    "mutability": "mutable",
                    "name": "creator",
                    "nodeType": "VariableDeclaration",
                    "overrides": null,
                    "scope": 225,
                    "src": "2370:15:1",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    },
                    "typeName": {
                      "id": 216,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "2370:7:1",
                      "stateMutability": "nonpayable",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "value": null,
                    "visibility": "internal"
                  }
                ],
                "src": "2369:17:1"
              },
              "scope": 244,
              "src": "2312:114:1",
              "stateMutability": "view",
              "virtual": false,
              "visibility": "external"
            },
            {
              "body": {
                "id": 233,
                "nodeType": "Block",
                "src": "2638:30:1",
                "statements": [
                  {
                    "expression": {
                      "argumentTypes": null,
                      "id": 231,
                      "name": "storeAddress",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 47,
                      "src": "2651:12:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "functionReturnParameters": 230,
                    "id": 232,
                    "nodeType": "Return",
                    "src": "2644:19:1"
                  }
                ]
              },
              "documentation": {
                "id": 226,
                "nodeType": "StructuredDocumentation",
                "src": "2435:140:1",
                "text": "@notice Returns the address registered for the marketplace\n @return storeAddress returns the address registered for the marketplace"
              },
              "functionSelector": "b07ed3a9",
              "id": 234,
              "implemented": true,
              "kind": "function",
              "modifiers": [],
              "name": "getStoreAddress",
              "nodeType": "FunctionDefinition",
              "overrides": null,
              "parameters": {
                "id": 227,
                "nodeType": "ParameterList",
                "parameters": [],
                "src": "2603:2:1"
              },
              "returnParameters": {
                "id": 230,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 229,
                    "mutability": "mutable",
                    "name": "",
                    "nodeType": "VariableDeclaration",
                    "overrides": null,
                    "scope": 234,
                    "src": "2629:7:1",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    },
                    "typeName": {
                      "id": 228,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "2629:7:1",
                      "stateMutability": "nonpayable",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "value": null,
                    "visibility": "internal"
                  }
                ],
                "src": "2628:9:1"
              },
              "scope": 244,
              "src": "2578:90:1",
              "stateMutability": "view",
              "virtual": false,
              "visibility": "external"
            },
            {
              "body": {
                "id": 242,
                "nodeType": "Block",
                "src": "2863:16:1",
                "statements": [
                  {
                    "expression": {
                      "argumentTypes": null,
                      "hexValue": "74727565",
                      "id": 240,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "bool",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "2872:4:1",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      },
                      "value": "true"
                    },
                    "functionReturnParameters": 239,
                    "id": 241,
                    "nodeType": "Return",
                    "src": "2865:11:1"
                  }
                ]
              },
              "documentation": {
                "id": 235,
                "nodeType": "StructuredDocumentation",
                "src": "2672:135:1",
                "text": "@notice Returns true\n @dev This function is useful to confirm if the address passed to ProductStore.sol constructor is correct"
              },
              "functionSelector": "93b5bbe7",
              "id": 243,
              "implemented": true,
              "kind": "function",
              "modifiers": [],
              "name": "isMusicToken",
              "nodeType": "FunctionDefinition",
              "overrides": null,
              "parameters": {
                "id": 236,
                "nodeType": "ParameterList",
                "parameters": [],
                "src": "2831:2:1"
              },
              "returnParameters": {
                "id": 239,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 238,
                    "mutability": "mutable",
                    "name": "",
                    "nodeType": "VariableDeclaration",
                    "overrides": null,
                    "scope": 243,
                    "src": "2857:4:1",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    },
                    "typeName": {
                      "id": 237,
                      "name": "bool",
                      "nodeType": "ElementaryTypeName",
                      "src": "2857:4:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "value": null,
                    "visibility": "internal"
                  }
                ],
                "src": "2856:6:1"
              },
              "scope": 244,
              "src": "2810:69:1",
              "stateMutability": "pure",
              "virtual": false,
              "visibility": "external"
            }
          ],
          "scope": 245,
          "src": "259:2622:1"
        }
      ],
      "src": "32:2849:1"
    },
    "compiler": {
      "name": "solc",
      "version": "0.7.0+commit.9e61f92b.Emscripten.clang"
    },
    "networks": {
      "1609436420252": {
        "events": {
          "0x8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925": {
            "anonymous": false,
            "inputs": [
              {
                "indexed": true,
                "internalType": "address",
                "name": "owner",
                "type": "address"
              },
              {
                "indexed": true,
                "internalType": "address",
                "name": "approved",
                "type": "address"
              },
              {
                "indexed": true,
                "internalType": "uint256",
                "name": "tokenId",
                "type": "uint256"
              }
            ],
            "name": "Approval",
            "type": "event"
          },
          "0x17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31": {
            "anonymous": false,
            "inputs": [
              {
                "indexed": true,
                "internalType": "address",
                "name": "owner",
                "type": "address"
              },
              {
                "indexed": true,
                "internalType": "address",
                "name": "operator",
                "type": "address"
              },
              {
                "indexed": false,
                "internalType": "bool",
                "name": "approved",
                "type": "bool"
              }
            ],
            "name": "ApprovalForAll",
            "type": "event"
          },
          "0x8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0": {
            "anonymous": false,
            "inputs": [
              {
                "indexed": true,
                "internalType": "address",
                "name": "previousOwner",
                "type": "address"
              },
              {
                "indexed": true,
                "internalType": "address",
                "name": "newOwner",
                "type": "address"
              }
            ],
            "name": "OwnershipTransferred",
            "type": "event"
          },
          "0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef": {
            "anonymous": false,
            "inputs": [
              {
                "indexed": true,
                "internalType": "address",
                "name": "from",
                "type": "address"
              },
              {
                "indexed": true,
                "internalType": "address",
                "name": "to",
                "type": "address"
              },
              {
                "indexed": true,
                "internalType": "uint256",
                "name": "tokenId",
                "type": "uint256"
              }
            ],
            "name": "Transfer",
            "type": "event"
          }
        },
        "links": {},
        "address": "0x83e9d2494413078549dDd29f3685a3CAa1bB83cd",
        "transactionHash": "0x83eb145abb07fb54169c140a06dcaf317409846dbc2948caac3fabe66301e7fe"
      },
      "1609461639261": {
        "events": {
          "0x8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925": {
            "anonymous": false,
            "inputs": [
              {
                "indexed": true,
                "internalType": "address",
                "name": "owner",
                "type": "address"
              },
              {
                "indexed": true,
                "internalType": "address",
                "name": "approved",
                "type": "address"
              },
              {
                "indexed": true,
                "internalType": "uint256",
                "name": "tokenId",
                "type": "uint256"
              }
            ],
            "name": "Approval",
            "type": "event"
          },
          "0x17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31": {
            "anonymous": false,
            "inputs": [
              {
                "indexed": true,
                "internalType": "address",
                "name": "owner",
                "type": "address"
              },
              {
                "indexed": true,
                "internalType": "address",
                "name": "operator",
                "type": "address"
              },
              {
                "indexed": false,
                "internalType": "bool",
                "name": "approved",
                "type": "bool"
              }
            ],
            "name": "ApprovalForAll",
            "type": "event"
          },
          "0x8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0": {
            "anonymous": false,
            "inputs": [
              {
                "indexed": true,
                "internalType": "address",
                "name": "previousOwner",
                "type": "address"
              },
              {
                "indexed": true,
                "internalType": "address",
                "name": "newOwner",
                "type": "address"
              }
            ],
            "name": "OwnershipTransferred",
            "type": "event"
          },
          "0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef": {
            "anonymous": false,
            "inputs": [
              {
                "indexed": true,
                "internalType": "address",
                "name": "from",
                "type": "address"
              },
              {
                "indexed": true,
                "internalType": "address",
                "name": "to",
                "type": "address"
              },
              {
                "indexed": true,
                "internalType": "uint256",
                "name": "tokenId",
                "type": "uint256"
              }
            ],
            "name": "Transfer",
            "type": "event"
          }
        },
        "links": {},
        "address": "0x67b3c94194bC9c4277D483C307DE3B21515324BC",
        "transactionHash": "0x44b77ef241ea9efc424047a9a5990dde74eb8a5f6eed7e49870b255dcb1355c2"
      },
      "1609472049901": {
        "events": {
          "0x8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925": {
            "anonymous": false,
            "inputs": [
              {
                "indexed": true,
                "internalType": "address",
                "name": "owner",
                "type": "address"
              },
              {
                "indexed": true,
                "internalType": "address",
                "name": "approved",
                "type": "address"
              },
              {
                "indexed": true,
                "internalType": "uint256",
                "name": "tokenId",
                "type": "uint256"
              }
            ],
            "name": "Approval",
            "type": "event"
          },
          "0x17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31": {
            "anonymous": false,
            "inputs": [
              {
                "indexed": true,
                "internalType": "address",
                "name": "owner",
                "type": "address"
              },
              {
                "indexed": true,
                "internalType": "address",
                "name": "operator",
                "type": "address"
              },
              {
                "indexed": false,
                "internalType": "bool",
                "name": "approved",
                "type": "bool"
              }
            ],
            "name": "ApprovalForAll",
            "type": "event"
          },
          "0x8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0": {
            "anonymous": false,
            "inputs": [
              {
                "indexed": true,
                "internalType": "address",
                "name": "previousOwner",
                "type": "address"
              },
              {
                "indexed": true,
                "internalType": "address",
                "name": "newOwner",
                "type": "address"
              }
            ],
            "name": "OwnershipTransferred",
            "type": "event"
          },
          "0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef": {
            "anonymous": false,
            "inputs": [
              {
                "indexed": true,
                "internalType": "address",
                "name": "from",
                "type": "address"
              },
              {
                "indexed": true,
                "internalType": "address",
                "name": "to",
                "type": "address"
              },
              {
                "indexed": true,
                "internalType": "uint256",
                "name": "tokenId",
                "type": "uint256"
              }
            ],
            "name": "Transfer",
            "type": "event"
          }
        },
        "links": {},
        "address": "0x5E9D081E44CFEC62290c384BC3A12a873C185acb",
        "transactionHash": "0xb7b53445ad576ab384d21e96d927d61f4129145c6cfa1dd4dfeeb08bb3639481"
      },
      "1609610763726": {
        "events": {
          "0x8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925": {
            "anonymous": false,
            "inputs": [
              {
                "indexed": true,
                "internalType": "address",
                "name": "owner",
                "type": "address"
              },
              {
                "indexed": true,
                "internalType": "address",
                "name": "approved",
                "type": "address"
              },
              {
                "indexed": true,
                "internalType": "uint256",
                "name": "tokenId",
                "type": "uint256"
              }
            ],
            "name": "Approval",
            "type": "event"
          },
          "0x17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31": {
            "anonymous": false,
            "inputs": [
              {
                "indexed": true,
                "internalType": "address",
                "name": "owner",
                "type": "address"
              },
              {
                "indexed": true,
                "internalType": "address",
                "name": "operator",
                "type": "address"
              },
              {
                "indexed": false,
                "internalType": "bool",
                "name": "approved",
                "type": "bool"
              }
            ],
            "name": "ApprovalForAll",
            "type": "event"
          },
          "0x8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0": {
            "anonymous": false,
            "inputs": [
              {
                "indexed": true,
                "internalType": "address",
                "name": "previousOwner",
                "type": "address"
              },
              {
                "indexed": true,
                "internalType": "address",
                "name": "newOwner",
                "type": "address"
              }
            ],
            "name": "OwnershipTransferred",
            "type": "event"
          },
          "0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef": {
            "anonymous": false,
            "inputs": [
              {
                "indexed": true,
                "internalType": "address",
                "name": "from",
                "type": "address"
              },
              {
                "indexed": true,
                "internalType": "address",
                "name": "to",
                "type": "address"
              },
              {
                "indexed": true,
                "internalType": "uint256",
                "name": "tokenId",
                "type": "uint256"
              }
            ],
            "name": "Transfer",
            "type": "event"
          }
        },
        "links": {},
        "address": "0x342cCc7a3e6E95FebBfc4A6Df53276b6d453f13b",
        "transactionHash": "0xc7300d12f3364475dc4a3973e1c943db64fb4023d6cb63bd146a3a9d25f42f74"
      }
    },
    "schemaVersion": "3.3.2",
    "updatedAt": "2021-01-03T22:39:40.893Z",
    "devdoc": {
      "kind": "dev",
      "methods": {
        "approve(address,uint256)": {
          "details": "See {IERC721-approve}."
        },
        "balanceOf(address)": {
          "details": "See {IERC721-balanceOf}."
        },
        "baseURI()": {
          "details": "Returns the base URI set via {_setBaseURI}. This will be automatically added as a prefix in {tokenURI} to each token's URI, or to the token ID if no specific URI is set for that token ID."
        },
        "constructor": {
          "details": "Contract constructor calls ERC721 constructor and pass the name and symbol parameters"
        },
        "getApproved(uint256)": {
          "details": "See {IERC721-getApproved}."
        },
        "getMusicCreator(uint256)": {
          "params": {
            "id": "The Id of the musict/ERC721 "
          },
          "returns": {
            "creator": "returns the creator of a music"
          }
        },
        "getMusicTitre(uint256)": {
          "params": {
            "id": "The Id of the music/ERC721 "
          },
          "returns": {
            "_0": "titre returns the titref the music"
          }
        },
        "getStoreAddress()": {
          "returns": {
            "_0": "storeAddress returns the address registered for the marketplace"
          }
        },
        "isApprovedForAll(address,address)": {
          "details": "See {IERC721-isApprovedForAll}."
        },
        "isMusicToken()": {
          "details": "This function is useful to confirm if the address passed to ProductStore.sol constructor is correct"
        },
        "name()": {
          "details": "See {IERC721Metadata-name}."
        },
        "owner()": {
          "details": "Returns the address of the current owner."
        },
        "ownerOf(uint256)": {
          "details": "See {IERC721-ownerOf}."
        },
        "renounceOwnership()": {
          "details": "Leaves the contract without owner. It will not be possible to call `onlyOwner` functions anymore. Can only be called by the current owner. NOTE: Renouncing ownership will leave the contract without an owner, thereby removing any functionality that is only available to the owner."
        },
        "safeTransferFrom(address,address,uint256)": {
          "details": "See {IERC721-safeTransferFrom}."
        },
        "safeTransferFrom(address,address,uint256,bytes)": {
          "details": "See {IERC721-safeTransferFrom}."
        },
        "setApprovalForAll(address,bool)": {
          "details": "See {IERC721-setApprovalForAll}."
        },
        "setStoreAddress(address)": {
          "params": {
            "_address": "Deployed Music Store contract address"
          }
        },
        "supportsInterface(bytes4)": {
          "details": "See {IERC165-supportsInterface}. Time complexity O(1), guaranteed to always use less than 30 000 gas."
        },
        "symbol()": {
          "details": "See {IERC721Metadata-symbol}."
        },
        "tokenByIndex(uint256)": {
          "details": "See {IERC721Enumerable-tokenByIndex}."
        },
        "tokenOfOwnerByIndex(address,uint256)": {
          "details": "See {IERC721Enumerable-tokenOfOwnerByIndex}."
        },
        "tokenURI(uint256)": {
          "details": "See {IERC721Metadata-tokenURI}."
        },
        "totalSupply()": {
          "details": "See {IERC721Enumerable-totalSupply}."
        },
        "transferFrom(address,address,uint256)": {
          "details": "See {IERC721-transferFrom}."
        },
        "transferOwnership(address)": {
          "details": "Transfers ownership of the contract to a new account (`newOwner`). Can only be called by the current owner."
        }
      },
      "title": "Musictoken ",
      "version": 1
    },
    "userdoc": {
      "kind": "user",
      "methods": {
        "getMusicCreator(uint256)": {
          "notice": "Returns the creator of a music"
        },
        "getMusicTitre(uint256)": {
          "notice": "Returns the name of a Music"
        },
        "getStoreAddress()": {
          "notice": "Returns the address registered for the marketplace"
        },
        "isMusicToken()": {
          "notice": "Returns true"
        }
      },
      "notice": "Create tokenized (ERC721) versions of properties music",
      "version": 1
    }
  }