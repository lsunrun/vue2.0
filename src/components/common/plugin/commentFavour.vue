<!--  -->
<template>
  <div class="f-favour">
    <div class="activeFavour">
      <div class="a-wrap">
        <i @click="favourFun" :class="favourFlag?'active':''"></i>
        <p>{{countHand}}</p>
      </div>
    </div>
    <div class="c-comment">
      <h3>
        参与评论
        <font>(54)</font>
      </h3>
      <div>
        <textarea name id maxlength="500" placeholder="说两句吧..."></textarea>
        <div class="f-wrap clearfix">
          <span>500字</span>
          <button>发表评论</button>
        </div>
      </div>
    </div>

    <div class="hot-comment">
      <h3>热点评论</h3>
      <ul class="user-comment clearfix">
        <li v-for="item,index in comment">
          <img class="user" :src="item.src" alt />
          <div class="right">
            <p class="moreWord">
              {{item.name}}
              <span>{{item.time}}小时前</span>
            </p>
            <p class="moreMWord" :title="item.title">{{item.title}}</p>
            <div class="count middle">
              <i @click="supportFun(1,index)" :class="item.up?'active':''"></i>
              <span>{{item.upnum}}</span>
              <i @click="supportFun(2,index)" :class="item.down?'active':''"></i>
              <span>{{item.downnum}}</span>
            </div>
          </div>
        </li>
      </ul>
      <div
        class="bar-comment"
        :class="totalCount>3?'active':''"
        @click="barCommentFun"
      >{{totalCount>3?'查看更多评论':'没有更多评论了'}}</div>
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
    return {
      countHand: 0,
      favourFlag: false,
      totalCount: 4,
      comment: [
        {
          src: require("@/assets/image/userInfo.png"),
          name: "你太美",
          time: "3",
          title:
            "请尽可能保持 props 函数为无状态的，因为它只会在路由发生变化时起作用",
          up: true,
          down: false,
          upnum: 1,
          downnum: 0
        },
        {
          src: require("@/assets/image/userInfo.png"),
          name: "你太美",
          time: "3",
          title:
            "请尽可能保持 props 函数为无状态的，因为它只会在路由发生变化时起作用",
          up: true,
          down: false,
          upnum: 123213,
          downnum: 2123
        },
        {
          src: require("@/assets/image/userInfo.png"),
          name: "你太美",
          time: "3",
          title:
            "请尽可能保持 props 函数为无状态的，因为它只会在路由发生变化时起作用",
          up: true,
          down: false,
          upnum: 123213,
          downnum: 2123
        }
      ]
    };
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
    //点赞大手指
    favourFun() {
      this.favourFlag = !this.favourFlag;

      this.countHand = this.favourFlag
        ? ++this.countHand
        : this.countHand == 0
        ? this.countHand
        : --this.countHand;
    },
    //点赞小手指
    supportFun(sign, index) {
      var data = this.comment[index];
      if (sign == 1) {
        data.up = !data.up;
        if (data.up) {
          ++data.upnum;
          if (data.down) {
            data.down = false;
            data.downnum == 0 ? "" : --data.downnum;
          }
        } else {
          data.upnum == 0 ? "" : --data.upnum;
        }
      } else {
        data.down = !data.down;
        if (data.down) {
          ++data.downnum;
          if (data.up) {
            data.up = false;
            data.upnum == 0 ? "" : --data.upnum;
          }
        } else {
          data.downnum == 0 ? "" : --data.downnum;
        }
      }
    },
    //加载更多评论
    barCommentFun() {
      if (this.totalCount > 3) {
        for (let i = 0; i < 5; i++) {
          this.comment.push({
            src: require("@/assets/image/userInfo.png"),
            name: "你太美",
            time: "1",
            title: "生命周期 - 挂载完成（可以访问DOM元素）时起作用",
            up: true,
            down: false,
            upnum: 312,
            downnum: 0
          });
        }
      }
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
//@import url(); 引入公共css类
.f-favour {
  .activeFavour {
    text-align: center;
    .a-wrap {
      width: 71px;
      display: inline-block;
      i {
        display: inline-block;
        width: 51px;
        height: 51px;
        background: url("../../../assets/image/info/commend.png") no-repeat 100%;
        cursor: pointer;
        &.active {
          background: url("../../../assets/image/info/commended.png") no-repeat
            100%;
        }
      }
      p {
        font-size: 12px;
        line-height: 12px;
        color: #333;
        margin-top: 10px;
      }
    }
  }
  .c-comment {
    box-sizing: border-box;
    font-size: 0;
    h3 {
      font-size: 16px;
      margin-bottom: 20px;
      line-height: 16px;
      color: #333;
      margin-top: 70px;
    }
    & > div {
      border: 1px solid #ccc;
      box-sizing: border-box;
      textarea {
        width: 100%;
        height: 102px;
        border: none;
        padding: 10px 12px;
        box-sizing: border-box;
        color: #999;
        font-size: 14px;
        &::placeholder {
          color: #999;
        }
      }
      .f-wrap {
        background: #f4f6f8;
        width: 100%;
        height: 40px;
        line-height: 40px;
        box-sizing: border-box;
        span {
          float: left;
          font-size: 14px;
          color: #999;
          padding-left: 20px;
        }
        button {
          float: right;
          color: #fff;
          background: #2878ff;
          height: 40px;
          width: 108px;
          vertical-align: middle;
        }
      }
    }
  }
  .hot-comment {
    margin-top: 40px;
    margin-bottom: 70px;
    h3 {
      font-size: 16px;
      line-height: 16px;
      color: #333;
      margin-bottom: 20px;
    }
    .user-comment {
      & > li {
        margin-top: 40px;
        &:nth-of-type(1) {
          margin-top: 0;
        }
        .user {
          height: 50px;
          width: 50px;
          float: left;
          margin-left: 10px;
        }
        .right {
          margin-left: 76px;
          padding-top: 18px;
          & > p:nth-of-type(1) {
            font-size: 14px;
            font-weight: 600;
            line-height: 14px;
            color: #333;
            span {
              margin-left: 30px;
              color: #999;
              font-weight: 500;
            }
          }
          & > p:nth-of-type(2) {
            margin: 20px 0;
          }
          .count {
            font-size: 0;
            i {
              display: inline-block;
              width: 20px;
              height: 20px;
              vertical-align: middle;
              margin-right: 10px;
              cursor: pointer;
              &:nth-of-type(1) {
                background: url("../../../assets/image/info/comment_upx.png")
                  no-repeat;
                &.active {
                  background: url("../../../assets/image/info/comment_up.png");
                }
              }
              &:nth-of-type(2) {
                background: url("../../../assets/image/info/comment_downx.png")
                  no-repeat;
                &.active {
                  background: url("../../../assets/image/info/comment_down.png");
                }
              }
            }
            span {
              font-size: 14px;
              color: #666;
              vertical-align: middle;
              line-height: 14px;
              &:nth-of-type(1) {
                margin-right: 40px;
              }
            }
          }
        }
      }
    }
    .bar-comment {
      width: 100%;
      height: 50px;
      background: #f0f2f3;
      line-height: 50px;
      text-align: center;
      margin-top: 70px;
      font-size: 14px;
      color: #999;
      cursor: no-drop;
      &.active {
        cursor: pointer;
        color: #333;
      }
    }
  }
}
</style>