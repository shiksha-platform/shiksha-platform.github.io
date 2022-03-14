const config = {
  gatsby: {
    pathPrefix: '/',
    siteUrl: 'https://shikshaplatform.io/',
    gaTrackingId: null,
    trailingSlash: false,
  },
  header: {
    logo: '/static/shiksha-logo.png',
    logoLink: 'https://shikshaplatform.io/',
    title: "",
    githubUrl: 'https://github.com/shiksha-platform/backend',
    helpUrl: '',
    tweetText: '',
    social: '',
    links: [{ text: '', link: '' }],
    search: {
      enabled: false,
      indexName: '',
      algoliaAppId: process.env.GATSBY_ALGOLIA_APP_ID,
      algoliaSearchKey: process.env.GATSBY_ALGOLIA_SEARCH_KEY,
      algoliaAdminKey: process.env.ALGOLIA_ADMIN_KEY,
    },
  },
  sidebar: {
    forcedNavOrder: [
      '/introduction', // add trailing slash if enabled above
      '/codeblock',
    ],
    collapsedNav: [
      '/codeblock', // add trailing slash if enabled above
    ],
    links: [{ text: 'Shiksha Platform', link: 'https://shikshaplatform.io/' }],
    frontline: false,
    ignoreIndex: true,
    title: "Shiksha Platform",
  },
  siteMetadata: {
    title: 'Shiksha Platform',
    description: 'Shiksha Platform',
    ogImage: null,
    docsLocation: 'https://github.com/shiksha-platform/shiksha-platform.github.io/tree/gatsby-source/content',
    favicon: 'https://graphql-engine-cdn.hasura.io/img/hasura_icon_black.svg',
  },
  pwa: {
    enabled: false, // disabling this will also remove the existing service worker.
    manifest: {
      name: 'Gatsby Gitbook Starter',
      short_name: 'GitbookStarter',
      start_url: '/',
      background_color: '#6b37bf',
      theme_color: '#6b37bf',
      display: 'standalone',
      crossOrigin: 'use-credentials',
      icons: [
        {
          src: 'src/pwa-512.png',
          sizes: `512x512`,
          type: `image/png`,
        },
      ],
    },
  },
};

module.exports = config;
