<!--  -->
<template>
  <el-dialog
    title="提示"
    :center="true"
    :visible.sync="popupData.dialogVisible"
    :destroy-on-close="true"
    :close-on-click-modal="false"
    :close-on-press-escape="false"
  >
    <span>这是一段信息</span>
    <!-- <span slot="footer" class="dialog-footer">
      <el-button @click="popupData.dialogVisible = false">取 消</el-button>
      <el-button type="primary" @click="popupData.dialogVisible = false">确 定</el-button>
    </span>-->
  </el-dialog>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import vueEvent from "../../model/vueEvent";
export default {
  //import引入的组件需要注入到对象中才能使用

  components: {},
  data() {
    //这里存放数据
    return {
      popupData: {}
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
  mounted() {
    vueEvent.$on("popupDataFun", val => {
      console.log(val);
      this.popupData = val;
    });
  },
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
>>> .el-dialog__body {
  height: 220px;
  overflow: auto;
}
>>> .el-dialog {
  margin: 0 !important;
  position: absolute !important;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>