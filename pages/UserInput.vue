<template>
  <div>
    <table>
      <tr>
        <td>ユーザー名</td>
        <td><input type="text" v-model="userName"></td>
      </tr>
      <tr>
        <td>年齢</td>
        <td><input type="text" v-model="userAge"></td>
      </tr>
      <tr>
        <td>住所</td>
        <td><input type="text" v-model="userAddress"></td>
      </tr>
    </table>
    <UserInfo />
  </div>
</template>

<script>
import { defineComponent, ref, provide } from '@nuxtjs/composition-api'
import UserInfo from '../components/UserInfo.vue'

export default defineComponent({
  components: {
    UserInfo
  },
  setup() {
    const userName = ref()
    const userAge = ref()
    const userAddress = ref()

    provide('inputUserName', userName)
    provide('inputUserAge', userAge)
    provide('inputUserAddress', userAddress)

    return {
      userName,
      userAge,
      userAddress
    }

  },
})
</script>
