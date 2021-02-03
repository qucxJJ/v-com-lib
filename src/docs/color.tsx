import { Vue, Component } from 'vue-property-decorator';
import VColor from '../components/color/color';
import { EColorType, EColorValue } from '../components/color/interface';

@Component
export default class App extends Vue {
  public colorClick(color: string) {
    const textarea = document.createElement('textarea');
    document.body.appendChild(textarea)
    textarea.value = color
    textarea.select();
    document.execCommand("Copy"); 
    document.body.removeChild(textarea)
    alert(`复制成功，当前颜色   ${color}`);
  }
  public mainColor() {
    return (
      <div>
        <h2>主色</h2>
        <ul>
          <li>
            <VColor
              onClick={() => {
                this.colorClick(EColorValue.primary);
              }}
              value={EColorValue.primary}
              type={EColorType.primary}
            ></VColor>
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
            <VColor
              onClick={() => {
                this.colorClick(EColorValue.success);
              }}
              value={EColorValue.success}
              type={EColorType.success}
            ></VColor>
            <VColor
              onClick={() => {
                this.colorClick(EColorValue.warning);
              }}
              value={EColorValue.warning}
              type={EColorType.warning}
            ></VColor>
            <VColor
              onClick={() => {
                this.colorClick(EColorValue.danger);
              }}
              value={EColorValue.danger}
              type={EColorType.danger}
            ></VColor>
            <VColor
              onClick={() => {
                this.colorClick(EColorValue.info);
              }}
              value={EColorValue.info}
              type={EColorType.info}
            ></VColor>
          </li>
        </ul>
      </div>
    );
  }
  public normalColor() {
    return (
      <div>
        <h2>中性色</h2>
        <ul>
          <li>
            <VColor
              onClick={() => {
                this.colorClick(EColorValue.main);
              }}
              value={EColorValue.main}
              type={EColorType.main}
            ></VColor>
            <VColor
              onClick={() => {
                this.colorClick(EColorValue.one);
              }}
              value={EColorValue.one}
              type={EColorType.one}
            ></VColor>
            <VColor
              onClick={() => {
                this.colorClick(EColorValue.two);
              }}
              value={EColorValue.two}
              type={EColorType.two}
            ></VColor>
            <VColor
              onClick={() => {
                this.colorClick(EColorValue.basic);
              }}
              value={EColorValue.basic}
              type={EColorType.basic}
            ></VColor>
          </li>
        </ul>
      </div>
    );
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
