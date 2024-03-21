/*
 * @description: 配置网站信息
 * @author: Jack Chen @懒人码农
 * @Date: 2024-03-07 23:59:16
 * @LastEditors: Jack Chen
 * @LastEditTime: 2024-03-19 22:25:55
 */
/** @type {import("pliny/config").PlinyConfig } */
const siteMetadata = {
  title: 'Web3研习社',
  author: 'Jack Chen @懒人码农',
  headerTitle: 'Web3研习社',
  description:
    '分享最新的技术动态、应用案例与发展趋势，推动Web3技术的普及和应用创新，探寻Web4.0数字化未来时代。以及记录码农学习技术的经验总结，分享学习心得，帮助同志共同成长。',
  language: 'en-us',
  theme: 'system', // system, dark or light
  siteUrl: 'https://54web3.cc',
  siteRepo: 'https://github.com/timlrx/tailwind-nextjs-starter-blog',
  siteLogo: '/static/favicons/favicon.ico',
  socialBanner: '/static/images/logo.png',
  email: '278910933@qq.com',
  github: 'https://github.com/jackchen0120',
  juejin: 'https://juejin.cn/user/1714893872433928/posts',
  csdn: 'https://blog.csdn.net/qq_15041931?type=lately',
  // twitter: 'https://twitter.com/Twitter',
  // facebook: 'https://facebook.com',
  // youtube: 'https://youtube.com',
  // linkedin: 'https://www.linkedin.com',
  // threads: 'https://www.threads.net',
  // instagram: 'https://www.instagram.com',
  locale: 'zh-CN',
  analytics: {
    // If you want to use an analytics provider you have to add it to the
    // content security policy in the `next.config.js` file.
    // supports Plausible, Simple Analytics, Umami, Posthog or Google Analytics.
    umamiAnalytics: {
      // We use an env variable for this site to avoid other users cloning our analytics ID
      umamiWebsiteId: process.env.NEXT_UMAMI_ID, // e.g. 123e4567-e89b-12d3-a456-426614174000
      // You may also need to overwrite the script if you're storing data in the US - ex:
      // src: 'https://us.umami.is/script.js'
      // Remember to add 'us.umami.is' in `next.config.js` as a permitted domain for the CSP
    },
    // plausibleAnalytics: {
    //   plausibleDataDomain: '', // e.g. tailwind-nextjs-starter-blog.vercel.app
    // },
    // simpleAnalytics: {},
    // posthogAnalytics: {
    //   posthogProjectApiKey: '', // e.g. 123e4567-e89b-12d3-a456-426614174000
    // },
    // googleAnalytics: {
    //   googleAnalyticsId: '', // e.g. G-XXXXXXX
    // },
  },
  newsletter: {
    // supports mailchimp, buttondown, convertkit, klaviyo, revue, emailoctopus
    // Please add your .env file and modify it according to your selection
    provider: 'buttondown',
  },
  comments: {
    // If you want to use an analytics provider you have to add it to the
    // content security policy in the `next.config.js` file.
    // Select a provider and use the environment variables associated to it
    // https://vercel.com/docs/environment-variables
    provider: 'giscus', // supported providers: giscus, utterances, disqus
    giscusConfig: {
      // Visit the link below, and follow the steps in the 'configuration' section
      // https://giscus.app/
      // data-repo="jackchen0120/docs"
      //   data-repo-id="R_kgDOLgVfRw"
      //   data-category="Announcements"
      //   data-category-id="DIC_kwDOLgVfR84Cd-FI"
      //   data-mapping="pathname"
      //   data-strict="0"
      //   data-reactions-enabled="1"
      //   data-emit-metadata="0"
      //   data-input-position="top"
      //   data-theme="light"
      //   data-lang="zh-CN"
      //   data-loading="lazy"
      //   crossorigin="anonymous"
      repo: process.env.NEXT_PUBLIC_GISCUS_REPO,
      repositoryId: process.env.NEXT_PUBLIC_GISCUS_REPOSITORY_ID,
      category: process.env.NEXT_PUBLIC_GISCUS_CATEGORY,
      categoryId: process.env.NEXT_PUBLIC_GISCUS_CATEGORY_ID,
      mapping: 'pathname', // supported options: pathname, url, title
      reactions: '1', // Emoji reactions: 1 = enable / 0 = disable
      // Send discussion metadata periodically to the parent window: 1 = enable / 0 = disable
      metadata: '0',
      // theme example: light, dark, dark_dimmed, dark_high_contrast
      // transparent_dark, preferred_color_scheme, custom
      theme: 'light',
      // theme when dark mode
      darkTheme: 'transparent_dark',
      // If the theme option above is set to 'custom`
      // please provide a link below to your custom theme css file.
      // example: https://giscus.app/themes/custom_example.css
      themeURL: '',
      // This corresponds to the `data-lang="en"` in giscus's configurations
      lang: 'zh-CN',
    },
  },
  search: {
    provider: 'kbar', // kbar or algolia
    kbarConfig: {
      searchDocumentsPath: 'search.json', // path to load documents to search
    },
    // provider: 'algolia',
    // algoliaConfig: {
    //   // The application ID provided by Algolia
    //   appId: 'R2IYF7ETH7',
    //   // Public API key: it is safe to commit it
    //   apiKey: '599cec31baffa4868cae4e79f180729b',
    //   indexName: 'docsearch',
    // },
  },
}

module.exports = siteMetadata
