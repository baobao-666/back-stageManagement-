<template>
    <div>
        <el-button style="margin:10px">+ 添加类型</el-button>
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
    computed:{
        ...mapState({
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
                  getTopicQuestionsType: "TestQuestionManagement/getTopicQuestionsType",
        })
    },
    created(){
        this.getTopicQuestionsType();
        console.log(this.topicList,'123456aaa')
    },
    mounted(){

    }
}
</script>
<style scoped lang="scss">

</style>