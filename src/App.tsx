import { Vue, Component } from 'vue-property-decorator';

@Component
export default class App extends Vue {
  public render() {
    return (
      <div class='wrapper'>
        <div class='left-nav'>
          <router-link to="button" exact>按钮</router-link>
          <router-link to="color" exact>色彩</router-link>
          <router-link to="message" exact>消息提示</router-link>
          <router-link to="table" exact>表格</router-link>
        </div>
        <div class="right-content">
          <router-view></router-view>
        </div>
      </div>
    );
  }
}
