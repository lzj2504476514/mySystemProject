import Vue from 'vue';
import App from './App.vue';
import vueRouter from 'vue-router';
import mintui from 'mint-ui';
import 'mint-ui/lib/style.min.css';
import vueResource from 'vue-resource';
import moment from 'moment';
import home from './component/home/home.vue';
import shopcar from './component/shopcar/shaopcar.vue';
import newslist from './component/news/newslist.vue';
import newsinfo from './component/news/newsinfo.vue';
import '../statics/css/mui.min.css';
import '../statics/fonts/mui.ttf';
import '../statics/css/icons-extra.css';
import '../statics/css/site.css';

Vue.use(vueRouter)
Vue.use(mintui)
Vue.use(vueResource)
Vue.filter('datefmt',function (input,fmtstring) {
    return moment(input).format(fmtstring);
});
const router=new vueRouter({
    linkActiveClass:'mui-active',
    routes:[
        {
            path:'/home',
            name:'home',
            component:home
        },
        {
            path:'/shopcar',
            name:'shopcar',
            component:shopcar
        },
        {
            path:'/news/newslist',
            name:'newslist',
            component:newslist
        },
        {
            path:'/news/newsinfo/:id',
            name:'newsinfo',
            component:newsinfo
        }
    ]
});

new Vue({
    el:'#app',
    router,
    render:c=>c(App)
});