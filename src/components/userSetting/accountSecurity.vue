<!--  -->
<template>
  <div class="layout">
    <div class="v-layout">
      <div class="c-header">
        <router-link tag="h4" to="editInfo">编辑资料</router-link>
        <router-link tag="h4" to="editAccount" class="active">账户安全</router-link>
      </div>
      <div class="c-content">
        <ul>
          <li class="middle">
            <label>手机号：</label>
            <span>17965326598</span>
            <button>修改</button>
          </li>
          <li class="middle">
            <label>密码：</label>
            <span>已设置</span>
            <button>修改</button>
          </li>
          <li class="middle">
            <label>密码：</label>
            <span>已绑定</span>
            <button class="active">解绑</button>
          </li>
          <li class="middle">
            <label>QQ：</label>
            <span>未绑定</span>
            <button>修改</button>
          </li>
        </ul>
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
$c9: #999;
$c6: #666;
$c3: #333;
$b: #2878ff;
$f4: #f4f6f8;
.layout {
  background: #fafbfc;
  padding: 20px 0;
  .v-layout {
    width: 1240px;
    height: 940px;
    margin: 0 auto;
    box-shadow: 0 0 15px -3px #ddd;
    background: #fff;

    .c-header {
      height: 85px;
      line-height: 85px;
      border-bottom: 1px solid #f4f6f8;
      box-sizing: border-box;
      h4 {
        cursor: pointer;
        color: #999;
        font-size: 18px;
        margin-left: 46px;
        display: inline-block;
        &:nth-of-type(2) {
          margin-left: 100px;
        }
        &.active {
          color: #333;
          border-bottom: 1px solid #333;
        }
      }
    }

    .c-content {
      padding: 100px 150px;
      ul {
        li {
          font-size: 0;
          margin-bottom: 46px;
          position: relative;
          width: 340px;
          height: 32px;
          label {
            color: #666;
            text-align: right;
            width: 70px;
            font-size: 14px;
            display: inline-block;
            margin-right: 20px;
            vertical-align: middle;
          }
          span {
            font-size: 14px;
            vertical-align: middle;
            color: #333;
          }
          button {
            position: absolute;
            right: 0;
            border: 1px solid $b;
            color: #fff;
            background: $b;
            height: 32px;
            padding: 0 30px;
            border-radius: 3px;
            vertical-align: middle;
            font-size: 14px;
            line-height: 30px;
            cursor: pointer;
            &.active {
              color: $c6;
              border: 1px solid $c6;
              background: #fff;
            }
          }
        }
      }
    }
  }
}
</style>