<template>
  <div class="container">
    <div>
      入力したユーザー名：{{userName}}
    </div>
    <div>
      入力した年齢：{{userAge}}
    </div>
    <div>
      入力した住所：{{userAddress}}
    </div>
  </div>
</template>

<script>
import { defineComponent } from '@nuxtjs/composition-api'
import { inject } from 'vue'

export default defineComponent({
  setup() {
    const userName = inject('inputUserName')
    const userAge = inject('inputUserAge')
    const userAddress = inject('inputUserAddress')

    return {
      userName,
      userAge,
      userAddress
    }
  },
})
</script>

<style scoped>
.container  {
  border: solid;
}
</style>
