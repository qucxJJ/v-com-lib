import { EPrefix } from '@/utils/prefix';
import { Vue, Component, Prop, Emit } from 'vue-property-decorator';
import { EMessageType } from './interface';
// import * as tsx from 'vue-tsx-support';
@Component
export default class Message extends Vue {
  @Prop({ default: EMessageType.info }) public type!: EMessageType;
  @Emit()
  emitTodo(n: string) {
    console.log(1111)
  }

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