import { EPrefix } from '@/utils/prefix';
import { Vue, Component, Prop } from 'vue-property-decorator';
import { EColorType } from './interface';
// import * as tsx from 'vue-tsx-support';
@Component
export default class VColor extends Vue {
  @Prop({ default: EColorType.primary }) public type!: EColorType;

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
      </div>
    );
  }
}
