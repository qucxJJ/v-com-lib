import { Vue, Component } from 'vue-property-decorator';

@Component
export default class App extends Vue {
  public basicUse() {
    return (
      <div>
        <h2>基础用法</h2>
        <ul>
          <li>
            打开消息提示
          </li>
          <li>
            VNode
          </li>
        </ul>
      </div>
    );
  }
  public differentType() {
    return (
      <div>
        <h2>不同状态</h2>
      </div>
    );
  }
  public canClose() {
    return (
      <div>
        <h2>可关闭</h2>
      </div>
    );
  }
  public fontCenter() {
    return (
      <div>
        <h2>文字居中</h2>
      </div>
    );
  }
  public render() {
    return (
      <div>
        {this.basicUse()}
        {this.differentType()}
        {this.canClose()}
        {this.fontCenter()}
      </div>
    );
  }
}
