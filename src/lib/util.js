import { formatUnits } from '@ethersproject/units'

export const ETHERSCAN_PREFIXES = {
  1: 'https://etherscan.io/',
  3: 'https://ropsten.etherscan.io/',
  4: 'https://rinkeby.etherscan.io/',
  5: 'https://goerli.etherscan.io/',
  42: 'https://kovan.etherscan.io/',
  100: 'https://blockscout.com/poa/xdai/'
}

/**
 *
 * @param {("Account"|"Transaction")} type
 * @param {[number, string]} data
 */
export function formatEtherscanLink(type, data) {
  switch (type) {
    case 'Account': {
      const [chainId, address] = data
      return `${ETHERSCAN_PREFIXES[chainId]}address/${address}`
    }
    case 'Transaction': {
      const [chainId, hash] = data
      return `${ETHERSCAN_PREFIXES[chainId]}tx/${hash}`
    }
  }
}

/**
 * @name parseBalance
 *
 * @param {import("@ethersproject/bignumber").BigNumberish} balance
 * @param {number} decimals
 * @param {number} decimalsToDisplay
 *
 * @returns {string}
 */
export const parseBalance = (balance, decimals = 18, decimalsToDisplay = 3) =>
  Number(formatUnits(balance, decimals)).toFixed(decimalsToDisplay)

export const toBase64 = file =>
  new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onload = () => resolve(reader.result)
    reader.onerror = error => reject(error)
  })
