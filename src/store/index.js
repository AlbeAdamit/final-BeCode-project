import { createStore } from 'vuex';

import home from "./home.module";
import profile from "./profile.module";

export default createStore({
    state:{},
    mutations:{},
    actions:{},
    modules:{
        home,
        profile
    }
  });