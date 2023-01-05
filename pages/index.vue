<template>
  <div>
    <!-- index.jsからmessageを表示 -->
    <h1>{{ state.message }}</h1>
    <HelloVuex />
    <UserList />
    <hr>
    <!-- mutationsはcommitを使って実行する -->
    <!-- 1度に10増やしたい時はincrement横(payload)に10を設定 -->
    <!-- <p><button @click="$store.commit('increment', 10)">UP</button></p> -->

    <!-- actionsを使用する時はdispatchを使う -->
    <p><button @click="store.dispatch('incrementOne')">UP</button></p>
    <h1>Count:{{ state.count }}</h1>
    <hr>
    <h1>ユーザー一覧</h1>
    <template v-if="state.users.length">
      <div v-for="user in state.users" :key="user.id">{{user.name}}</div>
    </template>
  </div>
</template>

<script>
import { defineComponent, onMounted } from '@nuxtjs/composition-api'
import HelloVuex from '../components/HelloVuex.vue'
import UserList from '../components/UserList.vue'
import { useStore } from '@/store'

export default defineComponent ({
  components: {
    HelloVuex,
    UserList
  },
  setup(){
    const { state, store } = useStore();

    onMounted(() => {
      store.dispatch('getUsers')
    })
    return {
      state,
      store,
    }
  }
})
</script>
