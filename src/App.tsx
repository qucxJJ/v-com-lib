import { Vue, Component } from 'vue-property-decorator';

@Component
export default class App extends Vue {
  public render() {
    return (
      <div>
        说明文档
        <div>
        <router-link to="button">
          按钮
        </router-link>
        </div>
        <router-view></router-view>
      </div>
    );
  }
}