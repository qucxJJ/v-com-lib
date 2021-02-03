import { EPrefix } from '@/utils/prefix';
import { Vue, Component, Prop } from 'vue-property-decorator';
import { EMessageType } from './interface';
// import * as tsx from 'vue-tsx-support';
@Component
export default class VMessage extends Vue {
  @Prop({ default: EMessageType.info }) public type!: EMessageType;

  public render() {
    const className = [
      EPrefix.message,
      `${EPrefix.message}--${this.type}`,
    ];
    return (
      <div
        class={className}
      >
        {this.$slots.default}
      </div>
    );
  }
}
