import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'

// 用户权限接口文档
import users from './modules/userPermission'

// 考试阅卷管理
import Emm  from './modules/ExaminationMarkingManagement'

// 考试试卷管理
import Ep from './modules/ExaminationPaperManagement'

// 学生、班级、教室管理
import Sccm  from './modules/StudentClassClassroomManagement'

// 试题管理接口文档
import Tm  from './modules/TestQuestionManagement'

Vue.use(Vuex)

// // https://webpack.js.org/guides/dependency-management/#requirecontext
// const modulesFiles = require.context('./modules', true, /\.js$/)

// // you do not need `import app from './modules/app'`
// // it will auto require all vuex module from modules file
// const modules = modulesFiles.keys().reduce((modules, modulePath) => {
//   // set './app.js' => 'app'
//   const moduleName = modulePath.replace(/^\.\/(.*)\.\w+$/, '$1')
//   const value = modulesFiles(modulePath)
//   modules[moduleName] = value.default
//   return modules
// }, {})

const store = new Vuex.Store({
  modules,
  getters,
  users,
  Emm,
  Ep,
  Sccm,
  Tm
})

export default store
