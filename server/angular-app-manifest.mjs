
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: 'https://LucasMelll0.github.io/ri-natividade-rj-landing-page/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/ri-natividade-rj-landing-page"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 5356, hash: '4ff2e0f90a4155e7509d1aa249ee2d1dc9d230033360dc7876697b61da836fef', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 5681, hash: '8e2a32457021ab53aed37119453c3b97ac4cd6740352e5d1b2cfa376e45758cd', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 13783, hash: '6fb172bdf76a7b7f98d4d418812bdddecca376937330acf2e575c5f74d94f0c2', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-DZ3FDQMK.css': {size: 65, hash: 'E69QPXJKfAM', text: () => import('./assets-chunks/styles-DZ3FDQMK_css.mjs').then(m => m.default)}
  },
};
