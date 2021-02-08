import { EPrefix } from '@/utils/prefix';
import { Vue, Component, Prop } from 'vue-property-decorator';
// import * as tsx from 'vue-tsx-support';
@Component
export default class VTable extends Vue {

  public colorClick(e: MouseEvent) {
    this.$emit('click', e);
  }

  public render() {
    const className = [
      EPrefix.table
    ];
    return (
      <div
        class={className}
        onClick={this.colorClick}
      >
        表格模板
      </div>
    );
  }
}
