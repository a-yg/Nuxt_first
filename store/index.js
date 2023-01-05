import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
Vue.use(Vuex)

export default() => new Vuex.Store({
  state: {
    message: 'Hello Vuex!!!!',
    users: [],
    usersInfo: [
      {name: 'John1', email: 'John1@email.com', age: 22},
      {name: 'John2', email: 'John2@email.com', age: 27},
      {name: 'John3', email: 'John3@email.com', age: 35},
    ],
    count: 0,
  },
  //gettersはcomputedプロパティと同様の働きをする
  getters: {
    // UserList.vueのv-for内をstate→gettersに変えるとこの条件のものが表示される
    usersInfo(state) {
      return state.usersInfo.filter(user => user.age < 30)
    }
  },
  //stateの更新を行う
  mutations: {
    //(mutationsはcommitを使って実行する)
    //1度に10カウントupさせたい時は、引数を増やす(number)
    increment(state) {
      state.count++  //(stateのみの時)
      // state.count = state.count + number //引数にnumberがある場合
    },
    setUsers(state, users) {
      state.users = users
    }
  },
  //mutationsを経由してstateを更新、非同期処理を入れられる
  //actionsでは引数にcontextというオブジェクトが渡される
  actions: {
    //(actionsを実行するためにはdispatchメソッドを使用する)
    incrementOne(context) {
      context.commit('increment')
    },
    //contexはstoreインスタンスが持つプロパティ、メソッドを保持するオブジェクト
    //context.state.countでcountの値を取得することもできる
    getUsers({commit}) {
      axios.get('https://jsonplaceholder.typicode.com/users').then(res => {
        commit('setUsers', res.data)
      })
    }
  },
  modules: {
  }
})

//getCurrentInstanceはコンポーネントのインスタンスにアクセスできる
import { getCurrentInstance } from 'vue'
export const useStore = () => {
  // インスタンスにアクセス
  const instance = getCurrentInstance();
  return {
    // proxyが従来のthisにあたるコンポーネントインスタンス
    state: instance.proxy.$store.state,
    store: instance.proxy.$store,
  }
}