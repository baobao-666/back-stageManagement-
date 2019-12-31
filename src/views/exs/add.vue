<template>
    <div>
<el-container>
  <el-header>添加用户</el-header>
  <el-main>
<Management/>
</el-main>
</el-container>
    </div>
</template>
<script>
import Management from './management/management'
export default {
   components:{
       Management
    },
   
}
</script>
<style scoped lang="scss">
.el-header{
    background-color: #E9EEF3;
    color: #333;
    font-size: 18px;
    line-height: 60px;
  }
  .el-main {
   background-color: #E9EEF3;
    color: #333;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
</style>