import { HardhatUserConfig } from 'hardhat/config'
import '@nomicfoundation/hardhat-toolbox'
import dotenv from 'dotenv'

dotenv.config()

const config: HardhatUserConfig = {
  solidity: '0.8.19',
  networks: {
    swisstronik: {
      url: 'https://json-rpc.testnet.swisstronik.com/', //URL of the RPC node for Swisstronik.
      accounts: [`0xb93832a4f2119373f2eb43e8e748500511cef74330fe15c60e2f75d0ecae7fca`], //Your private key starting with "0x"
      //Make sure you have enough funds in this wallet to deploy the smart contract
    },
  },
}

export default config
