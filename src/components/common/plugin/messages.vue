<!--  -->
<template>
  <el-dialog
    v-if="dialogVisible"
    :title="popupData.title"
    :center="true"
    :visible.sync="dialogVisible"
    :destroy-on-close="true"
    :close-on-click-modal="false"
    :close-on-press-escape="false"
    width="565px"
    @close="closeDialog"
  >
    <div class="m-Content">
      <!-- 成功消息 -->
    
      <!-- ！！！！成功消息 -->
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
      popupData: {}, //传过来的数据
      dialogVisible: false, //总弹窗显示
    };
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
    /**
     * 跳转集合
     */
    jump(sign) {
      this.clearNUll();
      switch (sign) {
        case 1: //密码登录面 点击短信验证登录
          this.iphoneObj.iphoneLogin = true;
          break;
        case 2: //密码登录面 点击注册  //手机登录面 点击注册
          this.popupData.title = "注册";
          this.registerObj.registerFlag = true;
          break;
        case 3: //密码登录面 点击忘记密码 到重置密码面
          this.popupData.title = "重置密码";
          this.resetWordObj.resetWordFlag = true;
          break;
        case 4: //手机登录面 点击密码登录  //注册面 点击密码登录
          this.accountObj.userLogin = true;
          break;
        case 5: //注册面 点击条款
          break;
        case 6: //创建新账号
          this.popupData.title = "创建新账号";
          this.newAccObj.newAccFlag = true;
          break;
      }
    },
    

    

    clearNUll() {
     
    },
    //关闭弹窗
    closeDialog() {
      this.dialogVisible = false;
      this.clearNUll();
      this.popupData = {};
    }
  },
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {},
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {
    vueEvent.$on("popupDataFun", val => {
      this.popupData = val.popupData;
      this.dialogVisible = val.dialogVisible;
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
  height: 340px;
  overflow: auto;
  padding: 0;
}
>>> .el-dialog {
  margin: 0 !important;
  position: absolute !important;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
>>> .el-dialog__title {
  font-size: 20px;
  color: #333;
  font-weight: 600;
  display: block;
  margin-top: 30px;
  margin-bottom: 30px;
}
.m-Content {
  width: 358px;
  margin: 0 auto;
}
</style>