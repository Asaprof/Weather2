
   /* const Dashboard = httpVueLoader('src/weather.vue');
    const Transactions = httpVueLoader('src/transactions.vue');


    const router = new VueRouter({
        routes: [
            { path: '/dashboard', component: Dashboard},
            { path: '/transactions', component: Transactions }
          ]
    })

    new Vue({
      el: '#app',
      router: router,
      data: {
          weather: axios.get('http://vhost115919.ispsite.ru/weather.json'),
          date: new Date(),
          options: {
              year: 'numeric',
              day: 'numeric',
              month: 'long',
              weekday: 'long',
              hour: 'numeric',
              minute: 'numeric'
          },
      }
    })*/

    const store = new Vuex.Store({
        actions: {},
        mutations: {
            addTransaction(state, name) {
                state.transactionsList.push(name)
            }
        },
        state: {
            transactionsList: [1,2,3]
        },
        getters: {},

        modules: {}
    })


