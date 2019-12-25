<template>
    <div class="detail">
        <div class="left">
            <p>出题人：{{item.user_name}}</p>
            <p>题目信息</p>
            <div class="elbtnele">
                        <span>{{item.questions_type_text}}</span>
                        <span>{{item.subject_text}}</span>
                        <span>{{item.exam_name}}</span>
            </div>
            <p style="color:rgba($color: #000000, $alpha: 0.85)">{{item.title}}</p>
            <div class="leftcontent">
               <MarkdownEditor v-model="item.questions_stem" height='300px'>
               </MarkdownEditor>
            </div>
        </div>
        <div class="right">
            <p>答案信息</p>
            <div class="rightcontent">
               <pre>
                    {{item.questions_answer}}
               </pre>
            </div>
        </div>
    </div>
</template>
<script>
import MarkdownEditor from '@/components/MarkdownEditor'
export default {
    props:{

    },
    components:{
        MarkdownEditor
    },
    data(){
        return {
            item:this.$route.query
        }
    },
    computed:{

    },
    methods:{

    },
    created(){
    },
    mounted(){

    }
}
</script>
<style scoped lang="scss">
    .detail{
        width: 100%;
        height: 100%;
        background: rgb(236, 236, 236);
        display: flex;
    }
    .left{
        width: 60%;
        background: #fff;
        margin: 15px 0 0 15px;
        padding: 15px;
    }
    .leftcontent,.rightcontent pre{
        width: 100%;
        color: rgba($color: #000000, $alpha: 0.65); 
    }
    .right{
        width:40%;
        background: #fff;
         margin: 15px 15px 0 ;
         padding: 15px;
    }
    .elbtnele span{
        border-radius: 3px;
        height: 20px;
        font-size: 12px;
        margin-left: 5px;
        padding:5px;
    }
    .elbtnele span:nth-child(1){
        color: #1890ff;
        background: #e6f7ff;
        border-color: #91d5ff;
    }
     .elbtnele span:nth-child(2){
        color: #2f54eb;
        background: #f0f5ff;
        border-color: #adc6ff;
    }
    .elbtnele span:nth-child(3){
        color: #fa8c16;
        background: #fff7e6;
        border-color: #ffd591;
    }
</style>