
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: 'https://LucasMelll0.github.io/ri-natividade-rj-landing-page/browser/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/ri-natividade-rj-landing-page/browser"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 5364, hash: 'ecd6f2a3fef974eaf013b960791bef7db2663f0d407b059c6e3f01058ea24857', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 5689, hash: 'ea4b4d9c051868fa58718379c32fc2af3bfe7167da63202905be5f687ff8c802', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 13751, hash: '8faf8703ad1afe58f6ddb28c820f1f6ffdf7aa68e395d2436a709839ab245be4', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-DZ3FDQMK.css': {size: 65, hash: 'E69QPXJKfAM', text: () => import('./assets-chunks/styles-DZ3FDQMK_css.mjs').then(m => m.default)}
  },
};
