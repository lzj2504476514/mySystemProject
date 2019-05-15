<template>
    <div id="templ">
        <div class="postcomment">
            <h3>提交评论</h3>
            <p></p>
            <textarea placeholder="请输入评论内容..." v-model="postcontent"></textarea>
            <mt-button type="primary" size="large" @click="postcomment">发表评论</mt-button>
        </div>
    </div>
</template>
<script>
    import common from '../../kits/common';
    import {Toast} from 'mint-ui';
    export default {
        props:['id'],
        data(){
            return {
                postcontent:''
            }
        },
        methods:{
            postcomment(){
                const url=common.apidomin+'/comment'+this.id;
                this.$http.post(url,{content:this.postcontent},{emulateJSON:true}).then(function (res) {
                    Toast('发表成功');
                });
            }
        }
    }
</script>
<style scoped>

</style>