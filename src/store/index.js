import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'
// 1.安装插件
Vue.use(Vuex)
// 2.创建Store对象

const store = new Vuex.Store({
    getters,
    state: {
        cartList:[]
    },
    mutations: {
      addCounter(state,payload){
        payload.count++
      },
      addToCart(state,payload){
        payload.checked = true

        state.cartList.push(payload)
      }

    },
    actions: {
        addCart(context,payload){
            let oldProduct = null;
            for(let item of context.state.cartList){
                if(item.iid == payload.iid) {
                    oldProduct = item
                }
            }
            if(oldProduct) {
                // oldProduct.count+=1
                context.commit('addCounter',oldProduct)
            }else {
                payload.count = 1
                // state.cartList.push(payload)
                context.commit('addToCart',payload)
            }
        }
    }
})
// 3.挂载到vue实例上
export default store 