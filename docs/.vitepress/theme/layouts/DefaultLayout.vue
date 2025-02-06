<script setup>
import DefaultTheme from 'vitepress/theme'

import NotFound from '../../components/404.vue'
const { Layout } = DefaultTheme
import { useData } from 'vitepress';
import { watchPostEffect } from 'vue'

let sb = DefaultTheme.Sidebar
const { page} = useData()

watchPostEffect(() => {
    let sidebarItems =document.getElementsByClassName('VPSidebarItem level-1 is-link')
    for(let i in sidebarItems){
        if(sidebarItems[i].innerHTML){
            if(sidebarItems[i].getElementsByTagName('a')[0].href.endsWith(page.value.relativePath.replace(/(.md)$/, '.html'))){
                setTimeout(() => sidebarItems[i].getElementsByTagName('a')[0].scrollIntoView({ behavior: 'smooth',block:'center' }) , 300)
                return
            }
        }
    }
})

</script>

<template>
  <Layout>
    <template #not-found>
      <NotFound />
    </template>
  </Layout>
</template>