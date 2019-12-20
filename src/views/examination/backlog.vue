<template>
  <div>
    <el-table
        :data="tableData"
        style="width: 100%"
        :row-class-name="tableRowClassName">
        <el-table-column
        prop="name"
        label="班级名"
        width="180">
        </el-table-column>

        <el-table-column
        prop="courseTitle"
        label="课程名称">
        </el-table-column>

        <el-table-column
        prop="state"
        label="阅卷状态">
        </el-table-column>

        <el-table-column
        prop="classroom"
        label="教室号">
        </el-table-column>

        <el-table-column label="操作">
        <template slot-scope="scope">
            <span
            size="mini"
            type="danger"
            class="read"
            @click="handleLook(scope.$index, scope.row)"><a href="#">批卷</a></span>
        </template>
        </el-table-column>
    </el-table>
  </div>
</template>

<script>
import {mapActions,mapState} from 'vuex'
export default {
  props:{

    },
    components:{

    },
    data(){
        return {
            list:null,
            tableData: [{
                name: '1705B',
                courseTitle: '实训一',
                classroom:'34303'
                }, 
                {
                name: '1705B',
                courseTitle: '实训一',
                classroom:'34303'
                },
                {
                name: '1705B',
                courseTitle: '实训一',
                classroom:'34303'
                }, 
                {
                name: '1705B',
                courseTitle: '实训一',
                classroom:'34303'
                }]
        }
    },
    computed:{
        // ...mapState({
        //     examList:state=>state.Emm.examList
        // })
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
      handleLook(index,row){
          console.log(132)
      },
      ...mapActions({
          // getMarking:'ExaminationMarkingManagement/getMarking'
      })
    },
    created(){
        // this.getMarking();
        // console.log(this.$store)
    },
    mounted(){

    }
}
</script>
<style scoped  lang="scss">
    .backlog{
        margin-left: 15px;
    }
    .el-table .warning-row {
    background: oldlace;
    }
    .el-table .success-row {
    background: #f0f9eb;
    }
    .read{
        color: rgb(27, 77, 216);
    }
</style>
    