<template>
    <div class="test">
        <el-form ref="form" :model="form" label-width="80px">
            <p style="margin-left:15px">题目信息</p>
            <p style="margin-left:15px">题干</p>
            <el-input v-model="form.name" style="width:500px;margin-left:15px" placeholder="请输入题目标题,不超过20个字" />
            <p style="margin-left:15px">题目主题</p>
            <el-input
            style="margin-left:15px;width:1000px;" rows="10"
            type="textarea" v-model="form.desc" placeholder="请输入内容...">
            </el-input>
            <!-- 考试类型数据 -->
            <p style="margin-left:15px">请选择考试类型:</p>
            <el-select v-model="form.exam" style="margin-left:15px">
                <el-option v-for="(item,index) in examList" :key="index" :label="item.exam_name" :value="item.exam_id">
                </el-option>
            </el-select>
            <!-- 课程数据 -->
            <p style="margin-left:15px">请选择课程类型:</p>
            <el-select v-model="form.course" style="margin-left:15px">
                <el-option v-for="(item,index) in courseList" :key="index" :label="item.subject_text" :value="item.subject_id">
                </el-option>
            </el-select>
            <!-- 题目数据 -->
            <p style="margin-left:15px">请选择题目类型：</p>
            <el-select v-model="form.topic" style="margin-left:15px">
                <el-option v-for="(item,index) in topicList" :key="index" :label="item.questions_type_text" :value="item.questions_type_id">
                </el-option>
            </el-select>

            <p style="margin-left:15px">答案信息</p>
            <el-input
            style="margin-left:15px;width:1000px;" rows="10"
            type="textarea" v-model="form.answer" placeholder="请输入内容...">
            </el-input>

            <p style="margin-left:15px">
                <el-button class="btn">提交</el-button>
            </p>
            
        </el-form>
    </div>
</template>
<script>
import {mapState,mapActions,mapMutations} from 'vuex'
export default {
    props:{

    },
    components:{

    },
    data(){
        return {
            form:{
                name:'',        //题干
                desc: '',       // 主题
                examId:'',        // 考试类型
                courseId:'',      //课程类型 
                topicId:'',       //题目类型 
                answer:'',      // 答案信息
                
            }
        }
    },
    computed:{
        ...mapState({
            // 考试类型总数居
            examList:state=>state.TestQuestionManagement.examList,
            // 所有的课程类型数据          
            courseList:state=>state.TestQuestionManagement.courseList,
            // 题目类型的数据
            topicList:state=>state.TestQuestionManagement.topicList,
        })
    },
    methods:{
        ...mapActions({
            // 调用考试类型接口
            getTestQuestionsType:'TestQuestionManagement/getTestQuestionsType', 
            //调用课程类型接口
            getCourseType:'TestQuestionManagement/getCourseType',
            // 调用题目类型接口
            getTopicQuestionsType:'TestQuestionManagement/getTopicQuestionsType',
            //添加试题接口
            addTestQuestions:'TestQuestionManagement/addTestQuestions',
        })
    },
    created(){
        console.log('123456',this.exam)
        //调用考试类型接口
        this.getTestQuestionsType();  
        //调用课程类型接口
        this.getCourseType(); 
        // 调用题目类型接口
        this.getTopicQuestionsType()

        // 要添加的类型数据
        let  name= this.name,    //题干
            desc=this.desc,   // 主题
            exam=this.examId,    // 考试类型
            course=this.Id,   //课程类型 
            topic=this.topicId,   //题目类型 
            answer=this.answer   // 答案信息
        // 添加试题接口
        // this.addTestQuestions({})
    },
    mounted(){

    }
}
</script>
<style scoped lang="scss">
    .test{
        width: 100%;
        height: 100%;
        overflow-y: scroll;
    }
    .btn{
        width: 111px;
        background: rgb(28, 28, 236);
        color: #fff;
    }
</style>