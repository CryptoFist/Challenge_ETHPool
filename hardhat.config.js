/**
 * @type import('hardhat/config').HardhatUserConfig
 */
 require("@nomiclabs/hardhat-waffle");
 require('@nomiclabs/hardhat-ethers');
 require('@nomiclabs/hardhat-etherscan');

 const { deployerWalletPrivateKey } = require ('./secret.json');
 const { etherscanAPIkey } = require ('./secret.json');

 module.exports = {
  networks: {
    ropsten: {
      url: "https://ropsten.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161",
      chainId: 3,
      accounts: [deployerWalletPrivateKey],
    },
    rinkeby: {
      url: "https://rinkeby.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161",
      chainId: 4,
      accounts: [deployerWalletPrivateKey],
    },
    mumbai: {
      url: "https://rpc-mumbai.maticvigil.com",
      chainId: 80001,
      accounts: [deployerWalletPrivateKey],
    }
  },
  solidity: {
    compilers: [
      {
        version: '0.8.0',
        settings: {
          optimizer: {
            enabled: true,
          },
        },
      },
      {
        version: '0.8.4',
        settings: {
          optimizer: {
            enabled: true,
          },
        },
      },
      {
        version: '0.7.5',
        settings: {
          optimizer: {
            enabled: true,
          },
        },
      },
    ],
  },
  etherscan: {
    // Your API key for Etherscan
    apiKey: etherscanAPIkey
  },
   mocha: {
     timeout: 20000
   }
 };
 