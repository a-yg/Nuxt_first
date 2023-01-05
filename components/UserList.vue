<template>
  <ul>
    <!-- stateだとindex.jsのstate内の全てのリストが表示される
    gettersだとindex.jsの条件に合ったものだけが表示される -->
    <li v-for="user in usersInfo" :key="user.i">{{user.name}} ({{user.email}})</li>
  </ul>
</template>

<script>
import { defineComponent, computed } from '@nuxtjs/composition-api'
import { useStore } from '@/store'

export default defineComponent({
  setup() {
    const { store } = useStore()
    return {
      usersInfo: computed(() => store.getters.usersInfo)
    }
  },
})
</script>
