// https://vitepress.dev/guide/custom-theme
import { h,onMounted, watch, nextTick } from 'vue'
import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import { enhanceAppWithTabs } from 'vitepress-plugin-tabs/client'
import './vars.css'
import './style.styl'
import vitepressBackToTop from 'vitepress-plugin-back-to-top'
import 'vitepress-plugin-back-to-top/dist/style.css'
import ScalarReactWrapper from '../components/ScalarReactWrapper.vue';
import '@scalar/api-reference-react/style.css';

import DefaultLayout from  './layouts/DefaultLayout.vue';
import LayoutAPIEndpoint from  './layouts/LayoutAPIEndpoint.vue';
import { useRoute, useRouter } from 'vitepress';
import mediumZoom from 'medium-zoom';

export default {
  extends: DefaultTheme,
  Layout: DefaultLayout,
  enhanceApp({ app }) {
    vitepressBackToTop({
      // default
      threshold:300
    }),
    enhanceAppWithTabs(app),
    app.component('LayoutAPIEndpoint',LayoutAPIEndpoint)
    app.component('ScalarReactWrapper',ScalarReactWrapper);
  },
  setup(){
    const route = useRoute();
    const router  = useRouter();
  
    const initZoom = () => {
      mediumZoom('[data-zoomable]', { background: 'rgba(48, 64, 83, 0.6)' });
    };
    onMounted(() => {
      initZoom();
      redirect(route.path,router)
    });
    watch(
      () => route.path,
      () => nextTick(() => {
        initZoom();
      }),
    );
  }
} satisfies Theme


function redirect(path ,router){
  if (path == '/guide/' || path == '/guide' || path == '/guide.html'){
    router.go('/guide/overview/getting-started')
  }
  if (path == '/use-cases/' || path == '/use-cases' || path == '/use-cases.html'){
    router.go('/use-cases/prerequisites/introduction')
  }
}