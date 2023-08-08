import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './routes'
import store from './store'

import { OhVueIcon, addIcons } from "oh-vue-icons";
import { 
    GiHamburgerMenu, 
    FaExpandArrowsAlt, 
    MdKeyboardarrowdown, 
    MdArrowforwardios, 
    HiLogout, 
    FaComments,
    FaRegularComments,
    FaSignOutAlt,
    FaCompressArrowsAlt
} from "oh-vue-icons/icons";

const app = createApp(App)

addIcons(
    GiHamburgerMenu, 
    FaExpandArrowsAlt, 
    MdKeyboardarrowdown, 
    MdArrowforwardios, 
    HiLogout, 
    FaComments,
    FaRegularComments,
    FaSignOutAlt,
    FaCompressArrowsAlt
 );
// Install the store instance as a plugin
app.use(store)
app.use(router)

app.component("v-icon", OhVueIcon);

app.mount('#app')