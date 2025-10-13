
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
    'index.csr.html': {size: 5364, hash: 'dc855dc735bf87155cb8e4a7ce4db165075e8bfdcfea15392af279e56354f20c', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 5689, hash: '79562e3cce5baf36ee9d6175e20cc13196dd258544330d617ca4ccb9a698140a', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 13751, hash: 'af5069cb58a287dc8c76a222fb5b990883e44c09543e0050facf3c06c29f2092', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-DZ3FDQMK.css': {size: 65, hash: 'E69QPXJKfAM', text: () => import('./assets-chunks/styles-DZ3FDQMK_css.mjs').then(m => m.default)}
  },
};
