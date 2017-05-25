import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store.js'



new Vue({
	el:'#app',
	store,
	router,
	render:xx=>xx(App)
	// template:'<App>',
	// components:{App}

})