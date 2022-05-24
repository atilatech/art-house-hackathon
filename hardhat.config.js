/* hardhat.config.js */
require("@nomiclabs/hardhat-waffle")
const privateKey = process.env.privateKey;
const rpcApiKeyMumbai = process.env.rpcApiKeyMumbai;
const rpcApiKeyAlfajores= process.env.rpcApiKeyAlfajores;
const rpcApiKeyRinkeby= process.env.rpcApiKeyRinkeby;

module.exports = {
  solidity: {
    version: "0.8.4",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    },
  },
  paths: {
    artifacts: './src/artifacts',
  },
  defaultNetwork: "hardhat",
  networks: {
    hardhat: {
      chainId: 1337
    },
    mumbai: {
      url: `https://polygon-mumbai.infura.io/v3/${rpcApiKeyMumbai}`,
      accounts: [`0x${privateKey}`],
      chainId: 80001
    },
    alfajores: {
      url: `https://alfajores-forno.celo-testnet.org`,
      accounts: [`0x${privateKey}`],
      chainId: 44787
    },
    rinkeby: {
      url: `https://rinkeby.infura.io/v3/${rpcApiKeyMumbai}`,
      accounts: [`0x${privateKey}`],
      chainId: 4
    },
    sokol: {
      url: `https://sokol.poa.network`,
      accounts: [`0x${privateKey}`],
      chainId: 77
    },
    harmonytestnet: {
      url: `https://api.s0.b.hmny.io`,
      accounts: [`0x${privateKey}`],
      chainId: 1666700000
    },
    bsctestnet: {
      url: `https://data-seed-prebsc-1-s1.binance.org:8545`,
      accounts: [`0x${privateKey}`],
      chainId: 97
    }
  },
}
