import { Vue, Component } from 'vue-property-decorator';
import VColor from '../components/color/color';
import { EColorType } from '../components/color/interface';

@Component
export default class App extends Vue {
  public colorClick(color: string) {
    alert(`复制成功，当前颜色${color}`);
  }
  public mainColor() {
    return (
      <div>
        <h2>主色</h2>
        <ul>
          <li>
            <VColor onClick={() => {this.colorClick(EColorType.primary)}} type={EColorType.primary}>
            </VColor>
          </li>
        </ul>
      </div>
    );
  }
  public assistColor() {
    return (
      <div>
        <h2>辅助色</h2>
        <ul>
          <li>
            <VColor onClick={() => {this.colorClick(EColorType.success)}} type={EColorType.success}></VColor>
            <VColor onClick={() => {this.colorClick(EColorType.warning)}} type={EColorType.warning}></VColor>
            <VColor onClick={() => {this.colorClick(EColorType.danger)}} type={EColorType.danger}></VColor>
            <VColor onClick={() => {this.colorClick(EColorType.info)}} type={EColorType.info}></VColor>
          </li>
        </ul>
      </div>
    )
  }
  public normalColor() {
    return (
      <div>
        <h2>中性色</h2>
        <ul>
          <li>
            <VColor onClick={() => {this.colorClick(EColorType.main)}} type={EColorType.main}></VColor>
            <VColor onClick={() => {this.colorClick(EColorType.one)}} type={EColorType.one}></VColor>
            <VColor onClick={() => {this.colorClick(EColorType.two)}} type={EColorType.two}></VColor>
            <VColor onClick={() => {this.colorClick(EColorType.basic)}} type={EColorType.basic}></VColor>
          </li>
        </ul>
      </div>
    )
  }
  public render() {
    return (
      <div>
        {this.mainColor()}
        {this.assistColor()}
        {this.normalColor()}
      </div>
    );
  }
}
