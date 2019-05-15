<template>
    <div  id="templ">
        <ul class="mui-table-view">
            <li class="mui-table-view-cell mui-media" v-for="item in list">
                <router-link v-bind="{to:'/news/newsinfo/'+item.id}">
                    <img class="mui-media-object mui-pull-left" :src=item.img_url>
                    <div class="mui-media-body">
                        <span v-text="item.title"></span>
                        <p class='mui-ellipsis' v-text="item.summary"></p>
                        <p class="ft">
                            <span>发布时间：{{item.addtime | datefmt('YYYY-MM-DD HH:mm:ss')}}</span>
                            <span class="myspace">点击次数：{{item.click}}</span>
                        </p>
                    </div>
                </router-link>
            </li>
        </ul>
    </div>
</template>
<script>
    import {Toast} from 'mint-ui';
    import common from '../../kits/common';
    export default {
        data(){
            return {
                list:[
                    // {
                    //     id:1,
                    //     title:'五一放假通知',
                    //     sumary:'“五一”出行高峰本周六开启。今年“五一”放假从下周三开始，前面仅三个工作日，因此有不少游客把“五一”拼成8天甚至9天的大长假。据去哪儿网大数据显示，选择出境游的人中，超六成游客行程超4天，拼假出境游成为今年五一最大的特点。',
                    //     addtime:'2019.4.23',
                    //     click: 1,
                    //     img_url:'../../../statics/images/cbd.jpg'
                    // },
                    // {
                    //     id:2,
                    //     title:'高档汽车销售再曝“潜规则”：动辄加价几十万 不加买不到车',
                    //     sumary:'据新华社，明码标价77万多元的车辆，提车则需另外加价30万元，不加价买不到车……记者近期走访多家汽车4S店发现，部分高档车型加价销售成为市场“潜规则”。',
                    //     addtime:'2019.4.21',
                    //     click:2,
                    //     img_url:'../../../statics/images/muwu.jpg'
                    // }
                ]
            }
        },
        created() {
            this.getlist();
        },
        methods:{
            getlist(){
                const url=common.apidomin+'/newslist';
                this.$http.get(url).then(function (response) {
                    const data=response.body;
                    if (data.status!=200){
                        Toast(data.message);
                        return;
                    }
                    this.list=data.message;
                });
            }
        }
    }
</script>
<style>
    .ft{
        margin-top: 1em;
        color: dodgerblue;
    }
.myspace{
    margin-left: 1em;
}
</style>