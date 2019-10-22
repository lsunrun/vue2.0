<!--  -->
<template>
  <div class="program">
    <h3>小程序推荐</h3>
    <ul>
      <li class="b-li clearfix" v-for="item in dataBottom">
        <img :src="item.src" alt />
        <article>
          <dt :title="item.title" class="moreMWord">{{item.title}}</dt>
          <dd>编辑点评：{{item.remark}}</dd>
          <dd class="s-star middle" v-html="item.stars"></dd>
        </article>
      </li>
    </ul>
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
      dataBottom: [
        {
          src: require("@/assets/image/b3.png"),
          title: "美团",
          remark: "这样你便可以将参数转换成另一种类型，将静态值与基",
          see: 3,
          editStar: 2
        },
        {
          src: require("@/assets/image/b2.png"),
          title: "玩吧",
          remark: "这样你便可以将参数转换成另一种类型，将静态值与基",
          see: 4,
          editStar: 3.5
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
.program {
  h3 {
    font-size: 24px;
    line-height: 24px;
    color: #333;
    margin-bottom: 30px;
  }
  ul {
    .b-li {
      margin-bottom: 36px;
      height: 110px;
      cursor: pointer;
      &:last-of-type {
        margin-bottom: 0;
      }
      img {
        float: left;
        width: 110px;
        height: 110px;
        border: 1px solid #f4f6f8;
        box-sizing: border-box;
        border-radius: 10px;
      }
      article {
        margin-left: 140px;
        position: relative;
        height: 100%;
        dt {
          font-size: 18px;
          color: #333;
          line-height: 18px;
        }
        dd:nth-of-type(1) {
          margin: 12px 0 20px 0;
          font-size: 14px;
          color: #999;
        }
      }
    }
  }
}
</style>