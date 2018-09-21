import { OpenSeaAPI } from '../src/api'
import { Network } from '../src/types'

export const mainApi = new OpenSeaAPI({
  networkName: Network.Main
})

export const rinkebyApi = new OpenSeaAPI({
  networkName: Network.Rinkeby
})

export const apiToTest = rinkebyApi

export const CK_ADDRESS = '0x06012c8cf97bead5deae237070f9587f8e7a266d'
export const CRYPTO_CRYSTAL_ADDRESS = '0xcfbc9103362aec4ce3089f155c2da2eea1cb7602'
export const DIGITAL_ART_CHAIN_ADDRESS = '0x323a3e1693e7a0959f65972f3bf2dfcb93239dfe'
export const MYTHEREUM_ADDRESS = '0xc70be5b7c19529ef642d16c10dfe91c58b5c3bf0'
export const DIGITAL_ART_CHAIN_TOKEN_ID = 189
export const MYTHEREUM_TOKEN_ID = 2773

export const CK_RINKEBY_ADDRESS = '0x16baf0de678e52367adc69fd067e5edd1d33e3bf'
export const CK_RINKEBY_TOKEN_ID = 111
export const CK_TOKEN_ID = 637488 
export const CK_RINKEBY_SELLER_FEE = 125

export const ALEX_ADDRESS = '0xe96a1b303a1eb8d04fb973eb2b291b8d591c8f72'