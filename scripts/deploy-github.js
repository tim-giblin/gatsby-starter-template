const ghpages = require('gh-pages')

// replace with your repo url
ghpages.publish(
  'public',
  {
    branch: 'master',
    repo: 'https://github.com/tim-giblin/gatsby-starter-template',
  },
  () => {
    console.log('Deploy Complete!')
  }
)