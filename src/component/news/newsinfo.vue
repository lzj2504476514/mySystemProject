<template>
    <div id="templ">
        <h4 class="title" v-text="info.title"></h4>
        <p>发布时间：{{info.addtime | datefmt('YYYY-MM-DD')}}  {{info.click}}次浏览</p>
        <div v-text="info.summary"></div>
        <comment :id="id"></comment>
    </div>
</template>
<script>
    import common from '../../kits/common';
    import comment from '../subcom/comment.vue';
    export default {
        data(){
            return {
                id:0,
                info:{}
            };
        },
        created() {
            this.id=this.$route.params.id;
            this.getnewsinfo();
        },
        components:{
            comment
        },
        methods:{
            getnewsinfo(){
                const url=common.apidomin+'/newsinfo/'+this.id;
                this.$http.get(url).then(function (res) {
                   const data=res.body;
                    if(data.status!=200){
                        console.log(data.message);
                        return;
                    }
                    this.info=data.message[0];
                });
            }
        }
    }
</script>
<style>
    .title{
        color: blue;
    }
</style>