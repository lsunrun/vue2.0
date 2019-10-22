<!--  -->
<template>
  <!-- <div class="layout"></div> -->
  <ul class="tags clearfix">
    <template v-for="item,i in navTab">
      <router-link tag="li" v-if="!nav.length==i" to="/Home" class="active">{{item.name}}</router-link>
      <router-link tag="li" v-else to="/Home" class="active">{{item.name}}</router-link>
    </template>
  </ul>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';

export default {
  //import引入的组件需要注入到对象中才能使用
  components: {},
  props: ["navTab"],
  data() {
    //这里存放数据
    return {
      navTab: [{ name: "网站主页" }, { name: "编辑推荐" }]
    };
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {},
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {},
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
$c9: #999;
$c6: #666;
$c3: #333;
$b: #2878ff;
$f4: #f4f6f8;
// .layout {
//   width: 1240px;
//   margin: 0 auto;
.tags {
  padding-top: 30px;
  li {
    float: left;
    margin-right: 5px;
    color: $c6;
    cursor: pointer;
    font-size: 14px;
    line-height: 14px;
    &.active {
      color: $b;
    }
  }
}
// }
</style>