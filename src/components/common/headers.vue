<!--  -->
<template>
  <div class="header" @mouseleave="mouseleave($event)">
    <div class="header-wrap middle">
      <a href>
        <img src="@/assets/image/logo.png" />
      </a>
      <div>
        <i class="searchBtn" :class="search_hover?'active':''" @mouseenter="mouseenter($event)"></i>
        <template v-if="loginSign">
          <button @click="loginFun">登录</button>
          <button>注册</button>
        </template>
        <template v-else>
          <div class="middle"  @mouseenter="mouseenterUser($event)" @mouseleave="mouseleaveUser($event)" >
            <img class="userImg" :src="useImg" alt />
              <ul class="user-panel" v-if="userInfoFlag">
                <li @click="toEditData('editInfo')">编辑资料</li>
                <li @click="toEditData('editAccount')">账号安全</li>
                <li>退出</li>
              </ul>
          </div>
        </template>
      </div>
    </div>
    <template v-if="search_hover">
      <div class="p-search">
        <div class="wrap">
          <div class="left">
            <h3>热门推荐</h3>
            <ul class="clearfix">
              <li>
                <img src="@/assets/image/search1.png" alt />
                <p class="moreWord">Midea Family 熊晓美穿越了</p>
              </li>
              <li>
                <img src="@/assets/image/search2.png" alt />
                <p class="moreWord">Midea Family 熊晓美穿越了</p>
              </li>
            </ul>
          </div>
          <div class="right">
            <div class="search-bar">
              <input type="text" name id maxlength="20" v-model="searchVal" placeholder="搜索小程序或公众号" />
              <button @click="toSearchInfo">搜索</button>
            </div>
            <h3>热门搜索：</h3>
            <ul class="clearfix">
              <li v-for="item,i in labelList" :key="item.id">{{item.label}}</li>
            </ul>
          </div>
        </div>
      </div>
    </template>
  </div>
</template>


<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import vueEvent from "../model/vueEvent";
export default {
  //import引入的组件需要注入到对象中才能使用
  components: {},
  // props:['isMask'],
  data() {
    //这里存放数据
    return {
      loginSign: true,
      userInfoFlag: false,
      popupData: {},
      useImg: require("@/assets/image/userInfo.png"),
      labelList: [
        { id: 1, label: "摩拜单车" },
        { id: 2, label: "爱奇艺" },
        { id: 3, label: "前沿科技" }
      ],
      search_hover: false,
      searchVal: null
    };
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
    loginFun() {
      this.popupData = {
        dialogVisible: true
      };
      vueEvent.$emit("popupDataFun", this.popupData);
    },
    //显示搜素栏
    mouseenter(event) {
      this.search_hover = true;
      this.$emit("isMask", true);
    },
    //隐藏搜素栏
    mouseleave(event) {
      this.search_hover = false;
      //  this.isMask(false);
      this.$emit("isMask", false);
    },
    //显示用户编辑
    mouseenterUser(event) {
      this.userInfoFlag = true;
    },
    //隐藏用户编辑
    mouseleaveUser(event) {
      this.userInfoFlag = false;
    },

    toEditData(url) {
      let userEdit = this.$route.name.indexOf(url) > -1;
      if (!userEdit) {
        this.$router.push({ name: url });
      }
      this.search_hover = false;
      this.$emit("isMask", false);
      this.userInfoFlag = false;
    },
    //跳到搜索页面
    toSearchInfo() {
      let sign = this.$route.name.indexOf("Searchs") > -1;
      if (sign) {
        vueEvent.$emit("changeval", this.searchVal);
      } else {
        this.$router.push({
          name: "Searchs",
          params: { searchVal: this.searchVal }
        });
      }

      this.search_hover = false;
      this.$emit("isMask", false);
      this.userInfoFlag = false;
    }
  },
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
$c9: #999;
$c6: #666;
$c3: #333;
$b: #2878ff;
$f4: #f4f6f8;
$a: #aaa;
.header {
  width: 100%;
  height: 98px;
  border-bottom: 1px solid #eff1f3;
  box-sizing: border-box;
  position: relative;
  z-index: 11;
  background: #fff;
  .header-wrap {
    margin: 0 auto;
    width: 1240px;
    position: relative;
    height: 100%;

    & > a {
      display: inline-block;
      vertical-align: middle;
    }
    & > div {
      float: right;
      height: 100%;
      font-size: 0;
      &::after {
        content: "";
        height: 100%;
        display: inline-block;
        vertical-align: middle;
      }
      .searchBtn {
        display: inline-block;
        vertical-align: middle;
        height: 40px;
        width: 40px;
        cursor: pointer;
        background: url("../../assets/image/normal.png") no-repeat;
        &.active {
          background: url("../../assets/image/hover.png") no-repeat;
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
        line-height: 32px;
        vertical-align: middle;
        &:nth-of-type(1) {
          margin-left: 30px;
        }
        &:nth-of-type(2) {
          background: #2878ff;
          color: #fff;
          margin-left: 20px;
        }
      }
      & > div {
        height: 100%;
        margin-left: 60px;
        display: inline-block;
        vertical-align: middle;
        .userImg {
          vertical-align: middle;
          cursor: pointer;
        }
        .user-panel {
          position: absolute;
          height: 194px;
          width: 138px;
          box-sizing: border-box;
          top: 96px;
          right: -40px;
          z-index: 12;
          background: #fff;
          box-shadow: 0px 2px 7px rgba(0, 0, 0, 0.2);
          border-radius: 4px;
          display: block;
          padding: 16px 0;
          li {
            height: 42px;
            width: 100%;
            font-size: 14px;
            color: #333;
            line-height: 42px;
            text-align: center;
            margin-bottom: 18px;
            cursor: pointer;
            &:hover {
              background: #2878ff;
              color: #fff;
            }
          }
        }
      }
    }
  }
  .p-search {
    height: 350px;
    box-sizing: border-box;
    border-bottom: 1px solid #eff1f3;
    position: absolute;
    top: 98px;
    left: 0;
    right: 0;
    z-index: 11;
    background: #fff;
    overflow-x: hidden;
    overflow-y: auto;
    .wrap {
      width: 1240px;
      margin: 0 auto;
      padding-top: 50px;
      .left {
        float: left;
        & > h3 {
          font-size: 14px;
          color: $c3;
          line-height: 14px;
          margin-bottom: 20px;
        }
        & > ul {
          & > li {
            margin-right: 30px;
            float: left;
            width: 240px;
            img {
              height: 160px;
              width: 240px;
              cursor: pointer;
            }
            p {
              margin-top: 20px;
              font-size: 14px;
              color: $c3;
            }
          }
        }
      }
      .right {
        margin-left: 610px;
        .search-bar {
          font-size: 0;
          input {
            padding: 4px 20px;
            background: #f4f6f8;
            color: #666;
            border-radius: 3px;
            border-top-right-radius: 0;
            border-bottom-right-radius: 0;
            width: 472px;
            height: 46px;
            border: 0;
            box-sizing: border-box;
            vertical-align: middle;
            &::placeholder {
              color: #aaa;
              line-height: 14px;
              letter-spacing: 2px;
            }
          }
          button {
            color: #fff;
            background: #2878ff;
            height: 46px;
            width: 98px;
            border-radius: 3px;
            border-top-left-radius: 0;
            border-bottom-left-radius: 0;
            line-height: 46px;
            vertical-align: middle;
          }
        }
        h3 {
          font-size: 14px;
          line-height: 14px;
          color: $c3;
          margin: 40px 0 20px 0;
        }
        ul {
          overflow: hidden;
          & > li {
            float: left;
            color: $c6;
            background: $f4;
            padding: 6px 10px;
            border-radius: 3px;
            font-size: 14px;
            margin-right: 20px;
            margin-bottom: 10px;
            cursor: pointer;
          }
        }
      }
    }
  }
}
</style>