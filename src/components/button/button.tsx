import { EPrefix } from '@/utils/prefix';
import { Vue, Component, Prop } from 'vue-property-decorator';
import { EButtonSize, EButtonType, ENativeButtonType } from './interface';
// import * as tsx from 'vue-tsx-support';
@Component
export default class VButton extends Vue {
  @Prop({ default: EButtonType.default }) public type!: EButtonType;
  @Prop({ default: EButtonSize.medium }) public size!: EButtonSize;
  @Prop({ default: ENativeButtonType.button })
  public nativeType!: ENativeButtonType; // TODO
  @Prop({ default: false }) public plain!: boolean;
  @Prop({ default: false }) public round!: boolean;
  @Prop({ default: false }) public circle!: boolean;
  @Prop({ default: false }) public loading!: boolean; // TODO
  @Prop({ default: false }) public disable!: boolean;
  @Prop({ default: false }) public autoFocus!: boolean; // TODO
  @Prop({ default: '' }) public icon!: string; // TODO

  public handleClick(e: MouseEvent) {
    if (this.disable) {
      return;
    }
    this.$emit('click', e);
  }

  public render() {
    const className = [
      EPrefix.button,
      `${EPrefix.button}--${this.type}`,
      `${EPrefix.button}--${this.size}`,
      this.plain ? 'is-plain' : '',
      this.round ? 'is-round' : '',
      this.circle ? 'is-circle' : '',
      this.loading ? 'is-loading' : '',
      this.disable ? 'is-disable' : '',
    ];
    return (
      <button
        type={this.nativeType}
        class={className}
        autofocus={this.autoFocus}
        disabled={this.disable || this.loading}
        onClick={this.handleClick}
      >
        {this.$slots.default}
      </button>
    );
  }
}
