<!--  -->
<template>
  <div class="layout">
    <ul class="tags clearfix">
      <router-link tag="li" to="/Home" class="active">
        网站主页
        <span>></span>
      </router-link>
      <li class="active">
        合辑
        <span>></span>
      </li>
      <li>游戏人生</li>
    </ul>
    <div class="intro clearfix">
      <img src="@/assets/image/info/appc1.png" alt />
      <div class="right clearfix">
        <h3>
          游戏人生
          <font>152款小程序</font>
        </h3>
        <p>关于记忆,与其说是我们的过去，不如活着当下</p>
        <div class="share middle">
          <font>分享：</font>
          <img src="@/assets/image/info/WeChatpage.png" alt />
        </div>
      </div>
    </div>
    <div class="v-app">
      <ul class="u-ul clearfix" v-for="arr,i in List">
        <router-link tag="li" to="/Home/MiniProgram" v-for="item,j in arr" :key="item.id">
          <div class="wrap clearfix">
            <img :src="item.src" alt />
            <div class="right">
              <h3>{{item.title}}</h3>
              <p class="moreMWord">{{item.at}}</p>
            </div>
          </div>
          <div class="i-tag">
            <span v-for="tag,i in item.tag">{{tag}}</span>
            <button class="activeInfo">获取</button>
          </div>
        </router-link>
      </ul>
    </div>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import Headers from "@/components/common/headers.vue";
import Footers from "@/components/common/footers.vue";
export default {
  //import引入的组件需要注入到对象中才能使用
  components: {
    "v-Headers": Headers,
    "v-footers": Footers
  },
  data() {
    //这里存放数据
    return {
      List: [
        {
          id: 1,
          src: require("@/assets/image/b1.png"),
          title: "站酷网",
          at: "落霞与孤鹜齐飞,秋水共长天一色,",
          tag: ["设计程序", "时尚娱乐", "前沿先锋"]
        },
        {
          id: 2,
          src: require("@/assets/image/b2.png"),
          title: "摩拜单车",
          at: "落霞与孤鹜齐飞,秋水共长天一色,",
          tag: ["设计程序", "时尚娱乐", "前沿先锋"]
        },
        {
          id: 3,
          src: require("@/assets/image/b3.png"),
          title: "支付宝",
          at: "落霞与孤鹜齐飞,秋水共长天一色,",
          tag: ["设计程序", "时尚娱乐", "前沿先锋"]
        },
        {
          id: 4,
          src: require("@/assets/image/b4.png"),
          title: "乘车码",
          at: "落霞与孤鹜齐飞,秋水共长天一色,",
          tag: ["设计程序", "时尚娱乐", "前沿先锋"]
        },
        {
          id: 5,
          src: require("@/assets/image/b5.png"),
          title: "玩吧",
          at: "落霞与孤鹜齐飞,秋水共长天一色,",
          tag: ["设计程序", "时尚娱乐", "前沿先锋"]
        },
        {
          id: 6,
          src: require("@/assets/image/b6.png"),
          title: "每日优鲜",
          at: "落霞与孤鹜齐飞,秋水共长天一色,",
          tag: ["设计程序", "时尚娱乐", "前沿先锋"]
        }
      ]
    };
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {},
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {
    var data = [];
    for (let i = 0; i < this.List.length; i++) {
      data.push(this.List.splice(0, 3));
    }
    this.List = data;
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
$c9: #999;
$c6: #666;
$c3: #333;
$b: #2878ff;
$f4: #f4f6f8;
.layout {
  width: 1240px;
  margin: 0 auto;
}
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
.intro {
  margin-top: 50px;
  & > img {
    height: 182px;
    width: 390px;
    float: left;
  }
  .right {
    margin-left: 420px;
    h3 {
      font-size: 24px;
      color: $c3;
      line-height: 24px;
      padding: 15px 0 20px 0;
      font {
        float: right;
        font-size: 14px;
        color: $c3;
      }
    }

    p {
      font-size: 14px;
      color: $c9;
      line-height: 14px;
    }
    .share {
      margin-top: 40px;
      font {
        font-size: 14px;
        color: $c9;
        display: inline-block;
        vertical-align: middle;
      }
      img {
        height: 44px;
        width: 44px;
        vertical-align: middle;
        cursor: pointer;
      }
    }
  }
}
.v-app {
  padding: 30px 0;
  .u-ul {
    padding: 40px 0;
    border-bottom: 1px solid #eceff2;
    &:last-of-type {
      border-bottom: 0;
    }
    li {
      margin-right: 115px;
      float: left;
      overflow: hidden;
      width: 336px;
      &:nth-child(3n) {
        margin-right: 0;
      }
      .wrap {
        & > img {
          height: 74px;
          width: 74px;
          border-radius: 10px;
          border: 1px solid $f4;
          box-sizing: border-box;
          float: left;
        }
        .right {
          margin-left: 90px;
          h3 {
            font-size: 18px;
            color: $c3;
            line-height: 18px;
            margin-bottom: 14px;
          }
          p {
            font-size: 14px;
            color: $c9;
            line-height: 14px;
          }
        }
      }
      .i-tag {
        margin-top: 20px;
        position: relative;
        span {
          display: inline-block;
          border: 1px solid $f4;
          color: $c6;
          background: $f4;
          padding: 4px 10px;
          border-radius: 3px;
          font-size: 12px;
          margin-right: 10px;
          &:last-of-type {
            margin-right: 0;
          }
        }
        .activeInfo {
          position: absolute;
          right: 0;
          border: 1px solid $c6;
          color: $c6;
          background: #fff;
          height: 26px;
          width: 68px;
          border-radius: 50px;
          vertical-align: middle;
          line-height: 24px;
          font-size: 12px;
          margin-right: 10px;
          &:hover {
            border: 1px solid $b;
            color: #fff;
            background: $b;
          }
          &:last-of-type {
            margin-right: 0;
          }
        }
      }
    }
  }
}
</style>