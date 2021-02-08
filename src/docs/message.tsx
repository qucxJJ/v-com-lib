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
    (this as any).$Message({
      content: '默认信息样式',
      time: 1000,
      type: 'info'
    });
  }
  public infoSuccessClick(type: string, content: string) {
    (this as any).$Message({
      content: content,
      time: 1000,
      type: type,
      showClose: true
    });
  }
  public basicUse() {
    return (
      <div>
        <h2>基础用法</h2>
        <ul>
          <li>
            {/* <VMessage type='success' content='成功' showClose={false} time={1000}></VMessage> */}
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
          <VButton onClick={ () => {this.infoSuccessClick('success', '成功')} }>成功</VButton>
          </li>
          <li>
          <VButton onClick={ () => {this.infoSuccessClick('warning', '警告')} }>警告</VButton>
          </li>
          <li>
          <VButton onClick={ () => {this.infoSuccessClick('info', '消息')} }>消息</VButton>
          </li>
          <li>
          <VButton onClick={ () => {this.infoSuccessClick('error', '错误')} }>错误</VButton>
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
