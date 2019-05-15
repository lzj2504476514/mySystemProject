<template>
    <!--页面结构-->
    <div>
        <mt-header fixed title="我的商城系统"></mt-header>
        <nav class="mui-bar mui-bar-tab">
            <router-link class="mui-tab-item" to="/home">
                <span class="mui-icon mui-icon-home"></span>
                <span class="mui-tab-label">首页</span>
            </router-link>
            <router-link class="mui-tab-item" to="/member">
                <span class="mui-icon mui-icon-email"></span>
                <span class="mui-tab-label">会员</span>
            </router-link>
            <router-link class="mui-tab-item" to="/shopcar" href="#tabbar-with-contact">
                <span class="mystyle mui-icon-extra mui-icon-extra-cart "><span class="mybadge mui-badge">9</span></span>
                <span class="mylabel mui-tab-label">购物车</span>
            </router-link>
            <router-link class="mui-tab-item" to="/search">
                <span class="mui-icon mui-icon-search"></span>
                <span class="mui-tab-label">搜索</span>
            </router-link>
        </nav>

        <router-view></router-view>

    </div>
</template>
<script>
//负责导出.vue组件对象（本质上是vue对象）
import calc from './calc';
import {Toast} from 'mint-ui'//jscomponents需要重新导入一次才能用，因为它需要一个对象接受该组件对象
    export default {
        // data(){
        //     return{
        //         list:[
        //             {
        //                 "img":"../statics/images/cbd.jpg"
        //             },
        //             {
        //                 "img":"../statics/images/muwu.jpg"
        //             },
        //             {
        //                 "img":"../statics/images/shuijiao.jpg"
        //             }
        //         ]
        //     }
        // },
        methods:{
            add(x,y) {
                console.log(x+y);
            },
            add1:calc.add,
            substrict:calc.substrict,
            tip:function () {
                Toast('hello')
            }
        },
        created() {

        }
    }
</script>
<style slot-scope>
/*scoped 表示该样式只限当前页面内部使用*/
#swipe{
    height: 300px;
}
mt-swipe{
    padding-bottom: 40px;
    height: 300px;
    width: 100%;
    background-color: #8a6de9;
}
mt-swipe-item{
    height: 300px;
    width: 100%;
    background-color: #8a6de9;
}
#imgs{
    height: 300px;
    width: 100%;
}
.mystyle{
    top:-4px;
    position: relative;
    padding-bottom: 4px;
}
.mybadge{
    margin-left: -10px;
    position: absolute;
    font-size: 10px;
    color: #fff;
    background: red;
    line-height: 1;
    display: inline-block;
    border-radius: 100px;
    backgroud-color: rgba(0,0,0,0.15);
    border-radius: 100px;
}
.mylabel {

    position: relative;
    font-size: 11px;
    text-align: center;
    left: -32px;
    bottom: -9px;

}
.flex-container {
    display: -webkit-box;
    display: -webkit-flex;
    display: flex;
    -webkit-flex-flow: row wrap;
    justify-content: space-between;
    text-align: center;
}
</style>