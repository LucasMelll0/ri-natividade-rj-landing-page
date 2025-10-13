
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
    'index.csr.html': {size: 5356, hash: '7b933437a5af9bced3a6b781bbde558f3d69533a96c7dfd8ee695ac7824403cd', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 5681, hash: '7cc7963e72b922ac76235b300b8190e697dd4b01fad2380a75336582183a5aa5', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 13748, hash: '252016ff8c27acadf7d5ada7068409757529c8b36fbd36b563173b6d20d09e73', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-DZ3FDQMK.css': {size: 65, hash: 'E69QPXJKfAM', text: () => import('./assets-chunks/styles-DZ3FDQMK_css.mjs').then(m => m.default)}
  },
};
