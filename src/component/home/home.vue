<template>
    <div id="templ">
        <div id="swipe">
            <mt-swipe :auto="2000">
                <mt-swipe-item v-for="item in list" :key="key">
                    <img id="imgs" :src="item.img">
                </mt-swipe-item>
            </mt-swipe>
        </div>
        <div class="mui-content">
            <ul class="mui-table-view mui-grid-view mui-grid-9">
                <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="news/newslist">
                    <span id="news" class="mui-icon mui-icon-chatbubble"></span>
                    <div class="mui-media-body">新闻资讯</div></router-link></li>
                <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="photo/photolist">
                    <span id="share" class="mui-icon mui-icon-location"></span>
                    <div class="mui-media-body">图片上传</div></router-link></li>
                <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/vedio">
                    <span  id="vedio" class="mui-icon mui-icon-gear"></span>
                    <div class="mui-media-body">视频专区</div></router-link></li>
                <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/goods/goodslist">
                    <span id="goods" class="mui-icon mui-icon-more"></span>
                    <div class="mui-media-body">商品购买</div></router-link></li>
                <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/callme">
                    <span id="callme" class="mui-icon mui-icon-info"></span>
                    <div class="mui-media-body">联系我们</div></router-link></li>
                <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/feedback">
                    <span id="feedback" class="mui-icon mui-icon-phone"></span>
                    <div class="mui-media-body">留言反馈</div></router-link></li>
            </ul>
        </div>
    </div>
</template>
<script>
    import {Toast} from 'mint-ui';
    import common from '../../kits/common';
    export default {
        data(){
            return {
                list:[

                ]
            }
        },
        created() {
            this.getimages();
        },
        methods:{
            getimages(){
                const url = common.apidomin+'/home';
                this.$http.get(url).then(function (response) {
                    const data=response.body;
                    if (data.status!=0){
                        Toast(data.message);
                        return;
                    }
                    this.list=data.message;
                });
            }
        }
    }
</script>
<style slot-scope>
    .mui-grid-view,.mui-grid-9,.mui-table-view-cell{
        background-color: white;
        border-right:0px;
        border-bottom: 0px;
        border-top: 0px;
        border-left: 0px;
    }
    .mui-icon-gear:before,
    .mui-icon-more:before,
    .mui-icon-chatbubble:before,
    .mui-icon-location:before,
    .mui-icon-info:before,
    .mui-icon-phone:before{
        content: '' !important;
        display: inline-block;
        width: 50px;
        height: 50px;
        background-repeat: round;
    }
    .mui-icon-gear:before{
        background-image: url(../../../statics/images/vedio.png);
    }
    .mui-icon-more:before{
        background-image: url(../../../statics/images/goods.png);
    }
    .mui-icon-chatbubble:before{
        background-image: url(../../../statics/images/news.png);
    }
    .mui-icon-location:before{
        background-image: url(../../../statics/images/share.png);
    }
    .mui-icon-info:before{
        background-image: url(../../../statics/images/callme.png);
    }
    .mui-icon-phone:before{
        background-image: url(../../../statics/images/feedback.png);
    }
</style>