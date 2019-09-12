<!--  -->
<template>
  <div class="header">
    <div class="header-wrap">
      <a href>
        <img src="@/assets/image/logo.png" />
      </a>
      <div>
        <i class="search"></i>
        <button>登录</button>
        <button>注册</button>
      </div>
    </div>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';

export default {
  //import引入的组件需要注入到对象中才能使用
  components: {},
  data() {
    //这里存放数据
    return {};
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
.header {
  width: 100%;
  height: 90px;

  .header-wrap {
    margin: 0 auto;
    max-width: 1280px;
    position: relative;
    height: 100%;
    &::after {
      content: "";
      height: 100%;
      display: inline-block;
      vertical-align: middle;
    }
    & > a {
      margin-left: 20px;
      display: inline-block;
      vertical-align: middle;
    }
    & > div {
      margin-right: 20px;
      float: right;
      height: 100%;
      &::after {
        content: "";
        height: 100%;
        display: inline-block;
        vertical-align: middle;
      }
      .search {
        display: inline-block;
        vertical-align: middle;
        height: 40px;
        width: 40px;
        cursor: pointer;
        background: url("../assets/image/normal.png") no-repeat;
      }
    }
    button {
      height: 34px;
      width: 84px;
      background: #fff;
      border: 1px solid #2878ff;
      font-size: 14px;
      color: #2878ff;
      border-radius: 50px;
      vertical-align: middle;
      line-height: 32px;
    }
    button:nth-of-type(1) {
      margin-left: 30px;
    }
    button:nth-of-type(2) {
      background: #2878ff;
      color: #fff;
      margin-left: 20px;
    }
  }
}
</style>