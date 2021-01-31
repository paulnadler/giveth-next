import React, { useState, useEffect } from 'react'
import Web3 from 'web3'
import { keccak256 } from 'ethers/lib/utils'
import { promisify } from 'util'
import * as Auth from '../services/auth'
import LoadingModal from '../components/loadingModal'
import { getToken } from '../services/token'
import { getWallet } from '../wallets'
import User from '../entities/user'
import { PopupContext } from '../contextProvider/popupProvider'
import detectEthereumProvider from '@metamask/detect-provider'

console.log(`*** User : ${JSON.stringify(User, null, 2)}`)
const WalletContext = React.createContext()
const network = process.env.GATSBY_NETWORK

let wallet = false

function useWallet () {
  const context = React.useContext(WalletContext)
  if (!context) {
    throw new Error(`userWallet must be used within a WalletProvider`)
  }
  return context
}

function WalletProvider (props) {
  const popup = React.useContext(PopupContext)

  const localStorageUser = Auth.getUser()
  const initUser = new User(localStorageUser.walletType, localStorageUser)
  console.log(`debug: initUser : ${JSON.stringify(initUser, null, 2)}`)

  const [user, setUser] = useState(initUser)
  const [account, setAccount] = useState('')
  const [balance, setBalance] = useState(0)
  const [loading, setLoading] = useState(false)
  console.log(`debug: Auth.checkIfLoggedIn() ---> : ${Auth.checkIfLoggedIn()}`)
  const [isLoggedIn, setIsLoggedIn] = useState(Auth.checkIfLoggedIn())

  useEffect(() => {
    const initWallet = async () => {
      const provider = await detectEthereumProvider()
      if (provider) {
        wallet = getWallet('metamask')
      } else {
        wallet = getWallet('torus')
      }

      console.log(`wallet.isTorus : ${JSON.stringify(wallet.isTorus, null, 2)}`)

      await wallet.init('production', network)

      wallet.provider.on('accountsChanged', () => {
        if (wallet.type === 'metamask') {
          console.log('updateUser: accountsChanged')
          updateUser()
        }
      })
    }

    initWallet()
  }, [])

  async function logout () {
    setLoading(true)

    Auth.handleLogout()
    setIsLoggedIn(false)
    setLoading(false)
  }

  async function signMessage (message, publicAddress) {
    try {
      let signedMessage = null
      const customPrefix = `\u0019${window.location.hostname} Signed Message:\n`
      const prefixWithLength = Buffer.from(
        `${customPrefix}${message.length.toString()}`,
        'utf-8'
      )
      const finalMessage = Buffer.concat([
        prefixWithLength,
        Buffer.from(message)
      ])

      const hashedMsg = keccak256(finalMessage)
      const send = promisify(wallet.web3.currentProvider.sendAsync)

      const { result } = await send({
        method: 'eth_sign',
        params: [
          publicAddress,
          hashedMsg,
          { customPrefix, customMessage: message }
        ],
        from: publicAddress
      })
      signedMessage = result

      return signedMessage
    } catch (error) {
      console.log('Signing Error!', error)
    }
  }

  async function updateUser (accounts) {
    console.log(`updateUser: accounts : ${JSON.stringify(accounts, null, 2)}`)

    const publicAddress = wallet.web3.utils.toChecksumAddress(accounts[0])
    setAccount(publicAddress)
    const balance = await wallet.web3.eth.getBalance(publicAddress)
    setBalance(balance)
    // let user
    let user
    if (typeof wallet.torus !== 'undefined') {
      const torusUser = await wallet.torus.getUserInfo()
      torusUser.walletAddresses = []
      torusUser.walletAddresses.push(publicAddress)

      user = new User('torus')
      user.parseTorusUser(torusUser)
    } else {
      user = new User('other')
      console.log(`debug: publicAddress ---> : ${publicAddress}`)
      user.addWalletAddress(publicAddress, true)
    }

    const signedMessage = await signMessage('our_secret', publicAddress)

    console.log(`updateUser: user : ${JSON.stringify(user, null, 2)}`)
    console.log(`signedMessage ---> : ${signedMessage}`)

    const { userIDFromDB, token, dbUser } = await getToken(user, signedMessage)
    user.parseDbUser(dbUser)

    user.setUserId(userIDFromDB)
    user.setToken(token)

    Auth.setUser(user)
    console.log('debug: setting logged in')
    console.log(`user : ${JSON.stringify(user, null, 2)}`)

    setIsLoggedIn(true)
    setUser(user)
  }

  async function login () {
    setLoading(true)
    console.log(
      `updateUser: typeof wallet : ${JSON.stringify(typeof wallet, null, 2)}`
    )
    console.log(
      `updateUser: wallet.torus : ${JSON.stringify(
        typeof wallet.torus,
        null,
        2
      )}`
    )
    console.log(
      `updateUser: wallet.isLoggedIn()  : ${JSON.stringify(
        wallet.isLoggedIn(),
        null,
        2
      )}`
    )

    if (wallet && !(wallet.isLoggedIn() && isLoggedIn)) {
      await wallet.login()
      console.log('updateUser: awaiting login')
      wallet.web3.eth.getAccounts().then(updateUser)
    }
    console.log('updateUser: post')

    setLoading(false)
  }

  function isWalletAddressValid (address) {
    if (address.length !== 42 || !Web3.utils.isAddress(address)) {
      return false
    } else {
      return true
    }
  }

  function isAddressENS (address) {
    return address.toLowerCase().indexOf('.eth') > -1
  }

  async function getAddressFromENS (address) {
    const ens = await wallet.web3.eth.ens.getOwner(address)
    let zeroXAddress
    if (ens !== '0x0000000000000000000000000000000000000000') {
      zeroXAddress = ens
    } else {
      zeroXAddress = address
    }

    if (isWalletAddressValid(zeroXAddress)) {
      return zeroXAddress
    } else {
      return new Error('Error gettingAddressFromENS')
    }
  }

  const value = React.useMemo(() => {
    return {
      login,
      account,
      balance,
      isLoggedIn,
      updateUser,
      logout,
      user,
      network,
      isWalletAddressValid,
      isAddressENS,
      getAddressFromENS
    }
  }, [account, balance, isLoggedIn, user, network])
  return (
    <WalletContext.Provider value={value} {...props}>
      {loading && <LoadingModal isOpen={loading} />}
      {props.children}
    </WalletContext.Provider>
  )
}

export { WalletProvider, useWallet }
