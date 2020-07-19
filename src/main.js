import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Cloudinary from "cloudinary-vue";
var cloudinary = require("cloudinary-core");
import {
  CldContext,
  CldImage,
  CldVideo,
  CldTransformation,
  CldPoster,
} from "cloudinary-vue";

const cl = new cloudinary.Cloudinary({ cloud_name: "dmwyuc3gd" });
cl.responsive();

Vue.use(Cloudinary, {
  configuration: {
    cloudName: "dmwyuc3gd",
    components: {
      // rename if needed
      // if undefined all components installed by default
      CldContext,
      CldImage,
      CldVideo,
      CldTransformation,
      CldPoster,
    },
  },
});

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
