import { Vue, Component } from 'vue-property-decorator';
import VButton from '../components/button/button';
import { EButtonSize, EButtonType } from '../components/button/interface';

@Component
export default class App extends Vue {
  public handleClick() {
    alert('click');
  }
  public renderBase() {
    return (
      <div>
        <h2>基础用法</h2>
        <ul>
          <li>
            <h3>普通按钮</h3>
            <div>
              <VButton onClick={this.handleClick}>默认按钮</VButton>
              <VButton type={EButtonType.primary}>主要按钮</VButton>
              <VButton type={EButtonType.success}>成功按钮</VButton>
              <VButton type={EButtonType.info}>信息按钮</VButton>
              <VButton type={EButtonType.warning}>警告按钮</VButton>
              <VButton type={EButtonType.danger}>危险按钮</VButton>
            </div>
          </li>
          <li>
            <h3>朴素按钮</h3>
            <div>
              <VButton plain>默认按钮</VButton>
              <VButton type={EButtonType.primary} plain>
                主要按钮
              </VButton>
              <VButton type={EButtonType.success} plain>
                成功按钮
              </VButton>
              <VButton type={EButtonType.info} plain>
                信息按钮
              </VButton>
              <VButton type={EButtonType.warning} plain>
                警告按钮
              </VButton>
              <VButton type={EButtonType.danger} plain>
                危险按钮
              </VButton>
            </div>
          </li>
          <li>
            <h3>圆角按钮</h3>
            <div>
              <VButton round>默认按钮</VButton>
              <VButton type={EButtonType.primary} round>
                主要按钮
              </VButton>
              <VButton type={EButtonType.success} round>
                成功按钮
              </VButton>
              <VButton type={EButtonType.info} round>
                信息按钮
              </VButton>
              <VButton type={EButtonType.warning} round>
                警告按钮
              </VButton>
              <VButton type={EButtonType.danger} round>
                危险按钮
              </VButton>
            </div>
          </li>
          <li>
            <h3>圆按钮</h3>
            <div>
              <VButton circle>1</VButton>
              <VButton type={EButtonType.primary} circle>
                1
              </VButton>
              <VButton type={EButtonType.success} circle>
                1
              </VButton>
              <VButton type={EButtonType.info} circle>
                1
              </VButton>
              <VButton type={EButtonType.warning} circle>
                1
              </VButton>
              <VButton type={EButtonType.danger} circle>
                1
              </VButton>
            </div>
          </li>
        </ul>
      </div>
    );
  }
  public renderDisable() {
    return (
      <div>
        <h2>基础用法</h2>
        <ul>
          <li>
            <h3>普通按钮</h3>
            <div>
              <VButton disable>默认按钮</VButton>
              <VButton type={EButtonType.primary} disable>
                主要按钮
              </VButton>
              <VButton type={EButtonType.success} disable>
                成功按钮
              </VButton>
              <VButton type={EButtonType.info} disable>
                信息按钮
              </VButton>
              <VButton type={EButtonType.warning} disable>
                警告按钮
              </VButton>
              <VButton type={EButtonType.danger} disable>
                危险按钮
              </VButton>
            </div>
          </li>
        </ul>
      </div>
    );
  }
  public renderSize() {
    return (
      <div>
        <h2>基础用法</h2>
        <ul>
          <li>
            <h3>普通按钮</h3>
            <div>
              <VButton disable>默认按钮</VButton>
              <VButton size={EButtonSize.medium}>中等按钮</VButton>
              <VButton size={EButtonSize.small}>小型按钮</VButton>
              <VButton size={EButtonSize.mini}>超小按钮</VButton>
            </div>
          </li>
        </ul>
      </div>
    );
  }
  public render() {
    return (
      <div>
        {this.renderBase()}
        {this.renderDisable()}
        {this.renderSize()}
      </div>
    );
  }
}
