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
    :width="popupData.width"
    @close="closeDialog"
  >
    <div class="m-Content">
      <!-- 账号密码登录 -->
      <div class="userLogin" v-if="accountObj.userLogin">
        <input type="text" name id placeholder="请输入用户名" />
        <input type="text" name id placeholder="请输入密码" />
        <button>登录</button>
        <div class="otherLogin clearfix">
          <span @click="jump(7)">短信验证码登录</span>
          <div class="clearfix">
            <font @click="jump(2)">注册</font>
            <span>|</span>
            <font @click="jump(3)">忘记密码?</font>
          </div>
        </div>
      </div>
      <!-- ！！！！账号密码登录 -->

      <!-- 手机登录 -->
      <div class="iphoneLogin s-code" v-if="iphoneObj.iphoneLogin">
        <input type="text" name id placeholder="请输入手机号" />
        <div>
          <input type="text" name id placeholder="请输入验证码" />
          <template v-if="comm.sendCodeFlag">
            <button @click="sendCodeFun" class="sendVcode">发送验证码</button>
          </template>
          <template v-else>
            <button disabled class="sendVcode active">重新发送（{{comm.sec}}）</button>
          </template>
        </div>
        <p ref="verify" class="verify middle"></p>
        <button @click="loginBtnFun">登录</button>
        <div class="otherLogin clearfix">
          <span @click="jump(4)">密码登录</span>
          <div class="clearfix">
            <font @click="jump(2)">立即注册</font>
          </div>
        </div>
      </div>
      <!--！！！ 手机登录 -->

      <!-- 注册 -->
      <div class="registerObj s-code" v-if="registerObj.registerFlag">
        <input type="text" name id placeholder="请输入手机号" />
        <div>
          <input type="text" name id placeholder="请输入验证码" />
          <template v-if="comm.sendCodeFlag">
            <button @click="sendCodeFun" class="sendVcode">发送验证码</button>
          </template>
          <template v-else>
            <button disabled class="sendVcode active">重新发送（{{comm.sec}}）</button>
          </template>
        </div>
        <p ref="verify" class="verify middle"></p>
        <button @click="jump">注册</button>
        <div class="otherLogin clearfix">
          <span>
            注册即代表同意
            <font>《使用条款》</font>
          </span>
          <span>
            已有账号，
            <font @click="jump(4)">登录</font>
          </span>
        </div>
      </div>
      <!--！！！ 注册 -->

      <!-- 重置密码 忘记密码-->
      <div class="resetWordObj s-code" v-if="resetWordObj.resetWordFlag">
        <input type="text" name id placeholder="请输入手机号" />
        <div>
          <input type="text" name id placeholder="请输入验证码" />
          <template v-if="comm.sendCodeFlag">
            <button @click="sendCodeFun" class="sendVcode">发送验证码</button>
          </template>
          <template v-else>
            <button disabled class="sendVcode active">重新发送（{{comm.sec}}）</button>
          </template>
        </div>
        <p ref="verify" class="verify middle"></p>
        <input type="text" name id placeholder="请设置新密码" />
        <button @click="loginBtnFun">重置密码</button>
      </div>
      <!--！！！ 重置密码 -->

      <!-- 创建新账号-->
      <div class="newAccObj" v-if="newAccObj.newAccFlag">
        <h3>温馨提示：用户名一经设定，不可更改</h3>
        <input type="text" name id placeholder="用户名(3-20个英文和数字)" />
        <input type="text" name id placeholder="请设置密码（8-30）" />
        <input type="text" name id placeholder="请再次输入密码" />
        <button>登录</button>
        <p>绑定已有账号</p>
      </div>
      <!--！！！ 创建新账号 -->

      <div class="msgsuccessObj" v-if="msgsuccessObj.msgsuccessFlag">
        <img src="@/assets/image/loginsuccess.png" alt />
        <!-- <p>注册成功，正在登录...</p> -->
        <p>密码重置成功，请重新登录</p>
        <button>重新登录</button>
      </div>
    </div>
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
      comm: {
        sec: 60, //倒计时
        sendCodeFlag: true, //点击验证码发送后隐藏按钮显示另个
        timer: [] //定时器
      },
      //账号面
      accountObj: {
        userLogin: true //账号登录面显示
      },
      //手机
      iphoneObj: {
        iphoneLogin: false //手机登录面显示
        // verCodeFlag: true //点击登录后的开关 验证码
      },
      //注册面
      registerObj: {
        registerFlag: false //注册页面显示
      },
      //创建账号
      newAccObj: {
        newAccFlag: false //创建账号面显示
      },
      //忘记密码 重置密码
      resetWordObj: {
        resetWordFlag: false //忘记密码面显示
      },
      //提示消息
      msgsuccessObj: { msgsuccessFlag: false }
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
        case 7: //注册面 点击条款
          this.popupData.title = "";
          this.msgsuccessObj.msgsuccessFlag = true;
          break;
      }
    },
    // 发送验证码
    sendCodeFun() {
      if (this.comm.sendCodeFlag) {
        this.comm.sendCodeFlag = false;
        clearInterval(this.comm.timer[0]);
        this.comm.sec = 60;
        this.comm.timer[0] = setInterval(() => {
          this.comm.sec--;
          if (this.comm.sec == 0) {
            clearInterval(this.comm.timer[0]);
            this.comm.sendCodeFlag = true;
          }
        }, 1000);
      }
    },

    loginBtnFun() {
      this.iphoneObj.verCodeFlag = false;
      this.$refs.verify.style.display = "block";
      this.$refs.verify.innerText = "验证码错误";
    },

    clearNUll() {
      clearInterval(this.comm.timer[0]);
      this.accountObj = {};
      this.registerObj = {};
      this.iphoneObj = {};
      this.resetWordObj = {};
      this.newAccObj = {};
      this.msgsuccessObj = {};
      this.popupData.title = "登录";
    },
    //关闭弹窗
    closeDialog() {
      console.log(1);

      this.dialogVisible = false;
      this.clearNUll();
      this.popupData = {};
      this.accountObj.userLogin = true;
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
  height: auto;
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

  // 账号密码登录
  input {
    border-radius: 3px;
    border: 1px solid #ccc;
    width: 358px;
    height: 50px;
    color: #333;
    margin-bottom: 14px;
    padding: 5px 10px;
    box-sizing: border-box;
    &::placeholder {
      color: #999;
    }
  }
  button {
    width: 358px;
    height: 50px;
    border-radius: 3px;
    border: 1px solid #ccc;
    background: #2878ff;
    font-size: 14px;
    margin-bottom: 20px;
    box-sizing: border-box;
    color: #fff;
  }
  .userLogin {
    margin-bottom: 70px;
    .otherLogin {
      font-size: 0;
      color: #666;
      & > span {
        font-size: 14px;
        cursor: pointer;

        &:hover {
          color: #2878ff;
        }
      }
      & > div {
        float: right;
        font-size: 14px;
        font {
          cursor: pointer;
          &:hover {
            color: #2878ff;
          }
        }
        span {
          margin: 0 5px;
        }
      }
    }
  }
  .s-code {
    width: 358px;
    margin: 0 auto;
    margin-bottom: 70px;
    & > div:nth-of-type(1) {
      font-size: 0;
      overflow: hidden;
      & > input {
        width: 210px;
        height: 50px;
      }
      .sendVcode {
        width: 130px;
        height: 50px;
        margin-left: 18px;
        margin-bottom: 0;
        &.active {
          color: #666;
          background: #f4f6f8;
          cursor: no-drop;
          padding-left: 10px;
        }
      }
    }
    .verify {
      font-size: 14px;
      color: #f02626;
      display: none;
      line-height: 14px;
      margin-bottom: 20px;
      margin-top: 2px;
      &::after {
        content: " ";
        display: inline-block;
        width: 14px;
        height: 14px;
        background: url("../../../assets/image/erriput.png") no-repeat;
        background-size: 100% 100%;
        vertical-align: middle;
        margin-right: 7px;
        float: left;
      }
    }
  }

  //手机登录
  .iphoneLogin {
    .otherLogin {
      font-size: 0;
      color: #666;
      & > span {
        font-size: 14px;
        cursor: pointer;

        &:hover {
          color: #2878ff;
        }
      }
      & > div {
        float: right;
        font-size: 14px;
        font {
          cursor: pointer;
          &:hover {
            color: #2878ff;
          }
        }
      }
    }
  }

  //注册
  .registerObj {
    .otherLogin {
      font-size: 0;
      color: #666;
      & > span {
        font-size: 14px;
        font {
          font-size: 14px;
          color: #2878ff;
          cursor: pointer;
        }
      }
      & > span:nth-of-type(2) {
        float: right;
        font-size: 14px;
      }
    }
  }

  //重置密码
  .resetWordObj {
  }

  //创建新账号
  .newAccObj {
    h3 {
      color: #999;
      font-size: 14px;
      position: absolute;
      top: 90px;
    }
    & > input:nth-of-type(1) {
      margin-top: 10px;
    }
    p {
      color: #2878ff;
      cursor: pointer;
      font-size: 14px;
      text-align: center;
    }
  }

  //提示消息
  .msgsuccessObj {
    text-align: center;
    margin-bottom: 70px;
    img {
      width: 50px;
      height: 50px;
      padding-top: 40px;
      padding-bottom: 30px;
    }
    p {
      font-size: 20px;
      color: #333;
      line-height: 20px;
      padding-bottom: 30px;
    }
    button {
      margin-bottom: 10px;
      width: 165px;
      height: 50px;
    }
  }
}
</style>