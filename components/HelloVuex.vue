<template>
  <div>
    <h2>{{ message }}</h2>
  </div>
</template>

<script>
import { defineComponent, computed } from '@nuxtjs/composition-api'
import { useStore } from '@/store'

export default defineComponent({
  setup() {
    const { state } = useStore()
    return {
      message: computed(() => state.message)
    }
  },
})
</script>
