/*
 * @description: 工具数据集
 * @author: Jack Chen @懒人码农
 * @Date: 2024-03-05 20:30:07
 * @LastEditors: Jack Chen
 * @LastEditTime: 2024-03-18 22:36:22
 */
interface Tools {
  title: string
  tools: Tool[]
}

interface Tool {
  title: string
  description: string
  href: string
  imgSrc: string
}

const toolsData: Tools[] = [
  {
    title: '实用钱包',
    tools: [
      {
        title: 'MetaMask',
        description: `浏览器插件钱包`,
        imgSrc: '/static/images/tool/metamask.png',
        href: 'https://metamask.io/',
      },
      {
        title: 'OKX Wallet',
        description: `Web3 多链钱包`,
        imgSrc: '/static/images/tool/okx.jpeg',
        href: 'https://www.okx.com/cn/web3',
      },
      {
        title: 'WalletConnect',
        description: `Dapp与钱包通讯协议`,
        imgSrc: '/static/images/tool/walletconnect.png',
        href: 'https://walletconnect.com/',
      },
      {
        title: 'Coinbase Wallet',
        description: `Coinbase钱包非托管`,
        imgSrc: '/static/images/tool/coinbase.png',
        href: 'https://www.coinbase.com/wallet',
      },
      {
        title: 'Binance Wallet',
        description: `一站式加密钱包`,
        imgSrc: '/static/images/tool/bnbchain.png',
        href: 'https://www.bnbchain.org/en/binance-wallet',
      },
      {
        title: 'Safe Wallet',
        description: `用户安全的多签钱包`,
        imgSrc: '/static/images/tool/safe.png',
        href: 'https://app.safe.global/welcome',
      },
    ],
  },
  {
    title: 'Dapp应用',
    tools: [
      {
        title: 'DappRadar',
        description: `综合类Dapp应用数据`,
        imgSrc: '/static/images/tool/dapp.jpg',
        href: 'https://dappradar.com/',
      },
      {
        title: 'My MetaData',
        description: `GameFi分析平台`,
        imgSrc: '/static/images/tool/gamefi.jpg',
        href: 'https://www.mymetadata.io/',
      },
      {
        title: 'PlayToEarn',
        description: `链游排名`,
        imgSrc: '/static/images/tool/playearn.jpg',
        href: 'https://playtoearn.net/blockchaingames',
      },
    ],
  },
  {
    title: '辅助工具',
    tools: [
      {
        title: 'Remix',
        description: `ETH开发线上编辑器`,
        imgSrc: '/static/images/tool/remix.png',
        href: 'https://remix.ethereum.org/',
      },
      {
        title: 'ChainList',
        description: `EVM网络聚合`,
        imgSrc: '/static/images/tool/chainlist.png',
        href: 'https://chainlist.org/zh',
      },
      {
        title: '以太坊浏览器',
        description: `ETH链上查询`,
        imgSrc: '/static/images/tool/eth.png',
        href: 'https://etherscan.io/',
      },
      // {
      //   title: 'Certik',
      //   description: `智能合约审计机构`,
      //   imgSrc: '/static/images/tool/certik.png',
      //   href: 'https://www.certik.com/zh-CN',
      // },
      {
        title: 'Mct',
        description: `批量处理工具箱`,
        imgSrc: '/static/images/tool/mct.png',
        href: 'https://mct.xyz/',
      },
    ],
  },
  {
    title: '综合数据',
    tools: [
      {
        title: 'CoinMarketCap',
        description: '行情综合数据查询工具',
        imgSrc: '/static/images/tool/dapp.jpg',
        href: 'https://coinmarketcap.com/',
      },
      {
        title: 'CoinGecko',
        description: '行情综合数据查询工具',
        imgSrc: '/static/images/tool/coingecko.png',
        href: 'https://www.coingecko.com/',
      },
      {
        title: 'Dune',
        description: '综合链上数据分析',
        imgSrc: '/static/images/tool/dune.png',
        href: 'https://dune.com/browse/dashboards',
      },
      {
        title: 'Defi Llama',
        description: '全链DeFi数据',
        imgSrc: '/static/images/tool/defi.png',
        href: 'https://defillama.com/',
      },
      {
        title: 'NFTGO',
        description: 'NFT行情数据',
        imgSrc: '/static/images/tool/nft.png',
        href: 'https://nftgo.io/',
      },
      {
        title: 'Orbiter',
        description: 'Layer2综合数据',
        imgSrc: '/static/images/tool/orbiter.png',
        href: 'https://www.orbiter.finance/data',
      },
      {
        title: 'Unisat',
        description: '钱包及交易平台',
        imgSrc: '/static/images/tool/unisat.jpg',
        href: 'https://unisat.io/',
      },
      {
        title: 'OpenSea',
        description: '最大NFT交易平台',
        imgSrc: '/static/images/tool/opensea.png',
        href: 'https://opensea.io/rankings',
      },
      {
        title: 'IPFS',
        description: '点对点分布式文件系统',
        imgSrc: '/static/images/tool/ipfs.png',
        href: 'https://ipfs.tech/',
      },
      {
        title: 'Uniswap',
        description: '兑换代币及换取奖励',
        imgSrc: '/static/images/tool/uniswap.png',
        href: 'https://uniswap.org/',
      },
      {
        title: 'Ordinals Wallet',
        description: 'Ordinals交易平台',
        imgSrc: '/static/images/tool/ordinals.jpg',
        href: 'https://ordinalswallet.com/',
      },
    ],
  },
  // {
  //   title: '热门公链',
  //   tools: [
  //     {
  //       title: '以太坊生态',
  //       description: `以太坊生态`,
  //       imgSrc: '/static/images/tool/dapp.jpg',
  //       href: 'https://ethereum.org/zh/dapps/',
  //     },
  //     {
  //       title: 'My MetaData',
  //       description: `GameFi分析平台`,
  //       imgSrc: '/static/images/tool/gamefi.jpg',
  //       href: 'https://www.mymetadata.io/',
  //     },
  //     {
  //       title: 'PlayToEarn',
  //       description: `链游排名`,
  //       imgSrc: '/static/images/tool/playearn.jpg',
  //       href: 'https://playtoearn.net/blockchaingames',
  //     },
  //   ],
  // },
]

export default toolsData
