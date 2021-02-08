import { EPrefix } from '@/utils/prefix';
import { Vue, Component, Prop } from 'vue-property-decorator';
import { EColorType, EColorValue } from './interface';
// import * as tsx from 'vue-tsx-support';
@Component
export default class VColor extends Vue {
  @Prop({ default: EColorType.primary }) public type!: EColorType;
  @Prop({ default: EColorValue.primary }) public value!: EColorValue | string;

  public colorClick(e: MouseEvent) {
    this.$emit('click', e);
  }

  public render() {
    const className = [
      EPrefix.color,
      `${EPrefix.color}--${this.type}`,
    ];
    return (
      <div
        class={className}
        onClick={this.colorClick}
      >
        {this.$slots.default}
        <p>
          {this.type}
        </p>
        <p>
          {this.value}
        </p>
        <span></span>
      </div>
    );
  }
}
