import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import {
  faUserSecret,
  faHome,
  faList,
  faSchool,
  faSnowboarding,
  faWallet,
  faProjectDiagram,
  faAddressCard,
  faGraduationCap,
  faBriefcase,
  faEnvelope,
  faDatabase,
  faPepperHot,
  faLeaf
} from '@fortawesome/free-solid-svg-icons'
import { faAngular, faGithub, faJava, faLinkedin, faLinux, faReact } from '@fortawesome/free-brands-svg-icons'

library.add(
  faUserSecret,
  faHome,
  faList,
  faSchool,
  faSnowboarding,
  faWallet,
  faProjectDiagram,
  faAddressCard,
  faGraduationCap,
  faBriefcase,
  faGithub,
  faLinkedin,
  faEnvelope,
  faAngular,
  faJava,
  faDatabase,
  faReact,
  faPepperHot,
  faLeaf,
  faLinux
)

const app = createApp(App)

app.use(router)
app.component('icon', FontAwesomeIcon)
app.mount('#app')
