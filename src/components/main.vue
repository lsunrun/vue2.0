<!--  -->
<template>
  <div id="layout">
    <v-Headers @isMask="isMask"></v-Headers>
    <!-- <v-Navigation v-if="mask" :navTab="navTab"></v-Navigation> -->
    <main>
      <transition name="component-fade" mode="out-in">
        <router-view @isMask="isMask"></router-view>
      </transition>
    </main>
    <v-Footers></v-Footers>
    <div class="m-mask" v-if="mask"></div>
    <v-Popup></v-Popup>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import Headers from "@/components/common/headers.vue";
import Footers from "@/components/common/footers.vue";
import Popup from "@/components/common/plugin/popup.vue";
import vueEvent from "./model/vueEvent";
import Navigation from "@/components/common/plugin/navigation.vue";

export default {
  //import引入的组件需要注入到对象中才能使用

  components: {
    "v-Headers": Headers,
    "v-Footers": Footers,
    "v-Popup": Popup,
    "v-Navigation": Navigation
  },
  data() {
    //这里存放数据
    return {
      mask: false,
      navTab: [],
      historyUrl: [],
      routerArr: [
        "Home",
        "AppCollection",
        "ReadArticle",
        "EditApplet",
        "EditPublicA",
        "MiniProgram", //三级页面
        "ManyArticles"
      ]
    };
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {
  },
  //方法集合
  methods: {
    isMask(flag) {
      // console.log(this.mask);
      this.mask = flag;
    },
    navTabFun(navTab) {
      this.navTab = navTab;
    }
  },
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {
      console.log(1);

  },
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {},
  beforeCreate() {}, //生命周期 - 创建之前
  beforeMount() {}, //生命周期 - 挂载之前
  beforeUpdate() {}, //生命周期 - 更新之前
  updated() {}, //生命周期 - 更新之后
  beforeDestroy() {}, //生命周期 - 销毁之前
  destroyed() {}, //生命周期 - 销毁完成
  activated() {} //如果页面有keep-alive缓存功能，这个函数会触发
};
</script>
<style lang='scss' scoped>
//@import url(); 引入公共css类
.component-fade-enter-active,
.component-fade-leave-active {
  transition: opacity 0.24s ease;
}
.component-fade-enter, .component-fade-leave-to
/* .component-fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>