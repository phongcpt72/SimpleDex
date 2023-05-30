require("@nomicfoundation/hardhat-toolbox");
require("@nomiclabs/hardhat-etherscan");
// const { privateKey, apiBNB } = require('./secret.json');
const privateKey = ""

/**
 * @type import('hardhat/config').HardhatUserConfig
 */

module.exports = {
  defaultNetwork: "mainnet",
  networks: {
    localhost: {
      url: "http://127.0.0.1:8545"
    },
    hardhat: {
    },
    testnetBNB: {
      url: "https://data-seed-prebsc-1-s1.binance.org:8545",
      chainId: 97,
      gasPrice: 20000000000,
      accounts: [privateKey]
    },
    goerli: {
      // url: "https://rpc.ankr.com/eth_goerli",
      url: 'https://eth-goerli.g.alchemy.com/v2/ojaAs-ArGNJ2T7Mnzdc_WDppJFmk0Gjj',
      // chainId: 5,
      // gasPrice: 210000,
      accounts: [privateKey]
    },
    arb:{
      // url: "https://rpc.ankr.com/arbitrum",
      // url: "https://endpoints.omniatech.io/v1/arbitrum/one/public",
      url:'https://arb1.arbitrum.io/rpc',
      // chainId: 42161,
      // gasPrice: 200000,
      accounts: [privateKey]
    },

    mantleTestnet: {
      url: "https://rpc.testnet.mantle.xyz/",
      accounts: [privateKey] // Uses the private key from the .env file
    },

    mainnet: {
      url: "https://bsc-dataseed.binance.org/",
      chainId: 56,
      // gasPrice: 20000000000,
      accounts: [privateKey]
    }
  },
  solidity: {
    version: "0.6.6",
    settings: {
      optimizer: {
        enabled: true
      }
    }
  },
  paths: {
    sources: "./contracts",
    tests: "./test",
    cache: "./cache",
    artifacts: "./artifacts"
  },
  mocha: {
    timeout: 20000
  },
  etherscan: {
    apiKey: "a06c2c06-e1cd-4505-99db-884c0a41d884" // mantle key

  }
};
