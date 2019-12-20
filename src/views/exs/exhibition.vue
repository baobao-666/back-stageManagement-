<template>
    <div>
<el-container>
  <el-header>用户展示</el-header>
  <el-main>
      <UserDisplay/>


  </el-main>
</el-container>

    </div>
</template>
<script>
import UserDisplay from '@/components/Userdisplay/userdisplay'
export default {
    props:{

    },
    components:{
UserDisplay
    },
    data(){
        return {

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
.el-header {
    background-color: #E9EEF3;
    color: #333;
    // text-align: center;
    line-height: 60px;
    font-size: 18px;
  }
  .el-main {
    background-color: #E9EEF3;
    color: #333;
    // text-align: center;
    // line-height: 160px;
  }
  
  
</style>