<!--  -->
<template>
  <div class="footer">
    <div class="wrap">
      <div class="left clearfix">
        <div class="top">
          <img src="@/assets/image/footer_logo.png" alt />
          <span></span>
          <font>我们提供不一样的信息服务</font>
        </div>
        <div class="bottom">
          <p>版权所有 ©深圳市为爱普信息技术有限公司</p>
          <p>粤ICP备09173600号-8</p>
          <p>粤公网安备440305020000033号</p>
        </div>
      </div>
      <div class="right clearfix">
        <div class="w-left">
          <p>关注我们</p>
          <img src="@/assets/image/QRcode.png" alt />
        </div>
        <div class="w-right">
          <p>分享到：</p>
          <img src="@/assets/image/WeChat.png" alt />
        </div>
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
  methods: {
    // getData() {
    //   var api =
    //     "http://www.phonegap100.com/appapi.php?a=getPortalList&catid=20&page=1";
    //   this.$http.get(api).then(
    //     function(response) {
    //       console.log(response);
    //       this.list = response.body.result;
    //     },
    //     function(err) {
    //       console.log(err);
    //     }
    //   );
    // }
  },
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {},
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {
    // this.getData();
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
.footer {
  height: 352px;
  background: #2e3139 url('../../assets/image/footer.png') no-repeat center;
  position: relative;
  .wrap {
    width: 1240px;
    margin: 0 auto;
    position: relative;
    height: 100%;
    .left {
      float: left;
      padding-top: 104px;
      .top {
        margin-bottom: 30px;
        &::after {
          content: " ";
          height: 100%;
          display: inline-block;
          vertical-align: middle;
        }
        img {
          vertical-align: middle;
        }
        span {
          height: 38px;
          width: 1px;
          margin: 0 22px;
          background: #fff;
          display: inline-block;
          vertical-align: middle;
        }
        font {
          font-size: 14px;
          color: #fff;
          vertical-align: middle;
        }
      }
      .bottom {
        p {
          font-size: 14px;
          color: #999;
          margin-bottom: 15px;
          line-height: 14px;
          &:last-of-type {
            margin-bottom: 0;
          }
        }
      }
    }
    .right {
      padding-top: 90px;
      float: right;
      .w-left {
        float: left;
        p {
          text-align: center;
          font-size: 20px;
          color: #fff;
          margin-bottom: 20px;
          line-height: 20px;
        }
        img {
          height: 98px;
          width: 98px;
        }
      }
      .w-right {
        float: left;
        margin-left: 110px;
        p {
          font-size: 20px;
          color: #fff;
          text-align: center;
          margin-bottom: 20px;
          line-height: 20px;
        }
        img {
          width: 57px;
          height: 57px;
          cursor: pointer;
        }
      }
    }
  }
}
</style>