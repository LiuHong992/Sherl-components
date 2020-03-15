import Vue from 'vue'
import indexMain from '../component/Index/index'
import trend from '../component/Trend/trend'
import login from '../component/Login/login'
import phoneLogin from '../component/Phonelogin/phonelogin'
import imagePre from '../component/Imagepre/Imagepre'
import notifyIcon from '../component/Notifyicon/notifyicon'
import tagSelector from '../component/Tagselector/tagselector'
import progressBar from '../component/Progressbar/progressbar'
import lock from '../component/Lock/lock'
import fullScreen from '../component/Fullscreen/fullscreen'
import bottomBar from '../component/Bottombar/bottombar'
import dragDialog from '../component/Dragdialog/dragdialog'
import lineEdit from '../component/Lineedit/lineedit'
import cellEdit from '../component/Celledit/celledit'
import backTop from '../component/Backtop/backtop'
import error403 from '../component/403Error/403error'
import error404 from '../component/404Error/404error'
import error500 from '../component/500Error/500error'

// 首页文档说明
Vue.component('index-main', indexMain)
Vue.component('trends', trend)
Vue.component('logins', login)
Vue.component('phone-login', phoneLogin)
Vue.component('image-pre', imagePre)
Vue.component('notify-icon', notifyIcon)
Vue.component('tag-selector', tagSelector)
Vue.component('progress-bar', progressBar)
Vue.component('locks', lock)
Vue.component('full-screen', fullScreen)
Vue.component('bottom-bar', bottomBar)
Vue.component('drag-dialog', dragDialog)
Vue.component('line-edit', lineEdit)
Vue.component('cell-edit', cellEdit)
Vue.component('back-top', backTop)
Vue.component('error-404', error404)
Vue.component('error-500', error500)