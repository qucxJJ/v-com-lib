import { Vue, Component } from 'vue-property-decorator';
import VMessage from '../components/message/message';
import VButton from '../components/button/button'
import { EMessageType } from '../components/message/interface';
@Component
export default class App extends Vue {
  /**
   * infoClick
   */
  public infoClick() {
    console.log(this.$Message());
  }
  public basicUse() {
    return (
      <div>
        <h2>基础用法</h2>
        <ul>
          <li>
            <VButton onClick={this.infoClick}>
            打开消息提示
            </VButton>
          </li>
          <li>
          <VButton onClick={this.infoClick}>
            VNode
          </VButton>
          </li>
        </ul>
      </div>
    );
  }
  public differentType() {
    return (
      <div>
        <h2>不同状态</h2>
        <ul>
          <li>
          <VButton>成功</VButton>
          </li>
          <li>
          <VButton>警告</VButton>
          </li>
          <li>
          <VButton>消息</VButton>
          </li>
          <li>
          <VButton>错误</VButton>
          </li>
        </ul>
      </div>
    );
  }
  public canClose() {
    return (
      <div>
        <h2>可关闭</h2>
        <ul>
          <li>
          <VButton>成功</VButton>
          </li>
          <li>
          <VButton>警告</VButton>
          </li>
          <li>
          <VButton>消息</VButton>
          </li>
          <li>
          <VButton>错误</VButton>
          </li>
        </ul>
      </div>
    );
  }
  public fontCenter() {
    return (
      <div>
        <h2>文字居中</h2>
        <ul>
          <li>
            <VButton>
              文字居中
            </VButton>
          </li>
        </ul>
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
