<template>
    <div>
        <el-button class="addBtn" style="margin:10px" @click="addSubject">+ 添加类型</el-button>
        <el-table
        :data="topicList"
        style="width: 100%"
        :row-class-name="tableRowClassName">
        <el-table-column
        prop="questions_type_id"
        label="类型ID"
        width="180">
        </el-table-column>

        <el-table-column
        prop="questions_type_text"
        label="类型名称">
        </el-table-column>l-table-column>

        <el-table-column label="操作">
        </el-table-column>
    </el-table>
    </div>
</template>
<script>
import {mapState,mapActions} from 'vuex'
export default {
    props:{

    },
    components:{
        
    },
    data(){
        return {                      
        }
    },
    watch:{
    },
    computed:{
        ...mapState({
            // 题目数据
            topicList:state=>state.TestQuestionManagement.topicList,
        })
    },
    methods:{
        tableRowClassName({row, rowIndex}) {
        if (rowIndex === 1) {
          return 'warning-row';
        } else if (rowIndex === 3) {
          return 'success-row';
        }
        return '';
      },
        ...mapActions({
            // 题目类型接口
            getTopicQuestionsType: "TestQuestionManagement/getTopicQuestionsType",  
            // 添加试题类型
            addTestQuestionsType:"TestQuestionManagement/addTestQuestionsType",
        }),
        // 添加试题类型
         addSubject(){
            this.$prompt('请输入类型！', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
        }).then(async ({ value }) => {
            let text = value,                    // 试题名称
                sort = this.topicList.length+1; // 试题序号
                 // 添加试题类型接口
                await this.addTestQuestionsType({text,sort});
                // 重绘页面
                await this.getTopicQuestionsType();
          this.$message({
            type: 'success',
            message: '添加成功！'
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '取消输入'
          });       
        });
        
        }
    },
    created(){
        // 题目类型接口
        this.getTopicQuestionsType(); 
    },
    mounted(){
    }
}
</script>
<style scoped lang="scss">
    .addBtn{
        background: #0139fd;
        color: #fff;
    }
</style>