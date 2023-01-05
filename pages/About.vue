<script>
import { defineComponent, ref } from '@nuxtjs/composition-api'

export default defineComponent({
  //このlayoutでページのデザイン変更
  layout: 'test',

  //ページごとにtitleを変更したい場合
  head() {
    return {
      title: 'About Page'
    }
  },
  setup() {
    const subtitle = ref('これはnuxtの基準')

    return {
      subtitle,
    }
    
  },
})
</script>


<template>
  <div>
    <h1>About Page</h1>
    <h2>{{subtitle}}</h2>
  </div>
</template>