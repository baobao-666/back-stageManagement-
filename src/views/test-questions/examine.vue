<template>
    <div class="exam">
        <div class="top">
            <div style="margin-left:15px" class="checkout">
            <span class="course">课程类型</span>
            <span class="checkAll">All</span>
            <span class="spanAll" v-for="(item,index) in courseList" :key="index"
            :class="{active:index==cur}"
            @click="changeColor(index,item)"
            >{{item.subject_text}}</span>
        </div>
    <el-form ref="form" :model="form" label-width="80px" class="select">
      
      <!-- 考试类型数据 -->
      <span>考试类型:</span>
      <el-select v-model="form.exam" style="margin-left:15px">
        <el-option
          v-for="(item,index) in examList"
          :key="index"
          :label="item.exam_name"
          :value="item.exam_id"
        ></el-option>
      </el-select>
      <!-- 题目数据 -->
      <span class="topicRight">题目类型:</span>
      <el-select v-model="form.topic" style="margin-left:15px" >
        <el-option
          v-for="(item,index) in topicList"
          :key="index"
          :label="item.questions_type_text"
          :value="item.questions_type_id"
        ></el-option>
      </el-select>
      <el-button class="query" @click="search">查询</el-button>
    </el-form>
        </div>

        <div class="conent">
            <div class="testEle" 
                v-for="(item,index) in testQuestionsList"
                :key="index"
                @click="detail(item)"
            >
                <div class="testEleLeft">
                    <p class="testTitle">{{item.title}}</p>
                    <div class="elbtnele">
                        <span>{{item.questions_type_text}}</span>
                        <span>{{item.subject_text}}</span>
                        <span>{{item.exam_name}}</span>
                        <p class="testUser">{{item.user_name}} 发布</p>
                    </div>
                </div>
                <span class="spanbian" @click.stop="update(item.questions_id)">编辑</span>
            </div>
        </div>
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
            checkAll: false,
            isIndeterminate: true,
            checkboxGroup:[],
            cur:0,
            subject_id:'',  // 课程类型ID
           form:{
            exam:'', // 考试类型  ID
            topic:'' // 题目类型 ID
           }

        }
    },
    computed:{
        ...mapState({
            // 考试类型总数居
            examList: state => state.TestQuestionManagement.examList,
            // 所有的课程类型数据
            courseList: state => state.TestQuestionManagement.courseList,
            // 题目类型的数据
            topicList: state => state.TestQuestionManagement.topicList,
            // 所有试题数据
            testQuestionsList:state => state.TestQuestionManagement.testQuestionsList,
        }),
    },
    methods:{
        ...mapActions({
            // 调用考试类型接口
            getTestQuestionsType: "TestQuestionManagement/getTestQuestionsType",
            //调用课程类型接口
            getCourseType: "TestQuestionManagement/getCourseType",
            // 调用题目类型接口
            getTopicQuestionsType: "TestQuestionManagement/getTopicQuestionsType",
            //调用所有试题接口
            getTestQuestions: "TestQuestionManagement/getTestQuestions",
            //调用查询数据接口  
            getSearchTestQuestions: "TestQuestionManagement/getSearchTestQuestions"
        }),
        ...mapMutations({
            updateSearch:"TestQuestionManagement/updateSearch",
        }),
        // searchTestQuestionsList
        changeColor(index,item){
            this.cur = index;
            this.subject_id = item.subject_id;
        },
        // 查询
        search(){
            let subject_id = this.subject_id, // 课目ID
                questions_type_id = this.form.topic, // 课题类型
                exam_id = this.form.exam ;     // 考试类型
            this.getSearchTestQuestions({questions_type_id,subject_id,exam_id});
            // 查询渲染接口  更新页面
            this.updateSearch();
        },
        // 编辑
        update(questions_id){
            this.$router.push({path:'/test-questions/update',query:{id:questions_id}})
        },
        // 详情
        detail(item){
            this.$router.push({path:'/test-questions/detail',query:item})
        }
    },
    created(){
        //调用考试类型接口
    this.getTestQuestionsType();
    //调用课程类型接口
    this.getCourseType();
    // 调用题目类型接口
    this.getTopicQuestionsType();
    //调用所有试题接口
    this.getTestQuestions()
    },
    mounted(){

    }
}
</script>
<style scoped lang="scss">
    .exam{
        width: 100%;
        height: 100%;
        background: #f0f2f5;
    }
    .top{
        width: 100%;
        height: 223px;
        background: #fff;
        margin: 30px;
    }
    .checkout{
        display: flex;
    }
    .checkAll,.spanAll{
        text-align:center; 
        width: 100px;
        height: 25px;
        line-height: 25px;
        margin: 16px 0 0 0;
        font-size: 12px;
        border-radius: 5px;
        color: #555;
    }
    .active{
        background: rgb(19, 16, 196);
        color: #fff;
    }
    .course{
        padding: 18px 0 0 0;
    }
    .select{
        margin: 40px 0 0 15px;
    }
    .query{
        width: 130px;
        background:#0139FD;
        color: #fff;
        margin-left:60px;
    }
    .conent{
        width: 100%;
        height: 100%;
        margin: 30px;
        background: #fff;
        padding:0 30px;
    }
    .testEle{
        height: 114px;
        display: flex;
        border-bottom: 1px solid #999;
        position: relative;
    }
    .testEleLeft{
        float: left;
        padding-left: 15px;
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
    .testTitle{
        color: #666;
    }
    .elbtnele span:nth-child(3){
        color: #fa8c16;
        background: #fff7e6;
        border-color: #ffd591;
    }
    .spanbian{
        position: absolute;
        right: 20px;
        top: 50%;
        color: #0139FD;
    }
    .testUser{
        color:  rgb(19, 16, 196);
        font-size: 14px;
    }
</style>