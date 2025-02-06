<!-- ScalarReactWrapper.vue -->
<template>
    <div ref="root"></div>
</template>
  
<script setup>
import { onMounted, ref } from 'vue'
import { createElement } from 'react'
import {createRoot} from 'react-dom/client'
import { ApiReferenceReact } from '@scalar/api-reference-react';

const props = defineProps({
  url: {
    type: String,
    required: true,
  }
})

const root = ref(null)
let reactRoot = null
onMounted(() => {
    reactRoot = createRoot(root.value)
  reactRoot.render(createElement(ApiReferenceReact,{configuration:{
    searchHotKey: 'l',
    isEditable: false,
    hideDownloadButton: false,
    hideTestRequestButton: true,
    hideDarkModeToggle: true,
    // hiddenClients: true, // Ne pas utiliser, cache également les body params
    hideModels: true,
    generateTagSlug: (tag) => `${tag.name.charAt(0).toUpperCase() + tag.name.slice(1)}`,
    generateOperationSlug: (operation) => `${operation.operationId}`,
    

    // operationsSorter: 'method',
    operationsSorter: (a, b) => {
      const methodOrder = ['POST', 'PUT', 'GET', 'DELETE']
      const methodComparison = methodOrder.indexOf(a.httpVerb) - methodOrder.indexOf(b.httpVerb)

      if (methodComparison !== 0) {
        return methodComparison
      }

      return a.path.localeCompare(b.path)
    },
    authentication: {
      preferredSecurityScheme: 'oauth2',
    // The `oauth2` security scheme is of type `oAuth2`, so prefill the client id and the scopes:
      oAuth2: {
        clientId: 'client_id',
        // optional:
        scope: ['read_only', 'read_write', 'read_all', 'admin', 'legal', 'keys', 'support_user_management'],
      },
    },
        spec: {
          url: props.url,
        },
      }
      }, null))

})

</script>
