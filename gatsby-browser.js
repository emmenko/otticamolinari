// https://github.com/gatsbyjs/gatsby/pull/9087
// https://www.gatsbyjs.org/docs/browser-apis/#onServiceWorkerUpdateReady
exports.onServiceWorkerUpdateReady = () => window.location.reload();
