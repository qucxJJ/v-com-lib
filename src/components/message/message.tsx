import { EPrefix } from '@/utils/prefix';
import { Vue, Component, Prop } from 'vue-property-decorator';
import { EMessageType } from './interface';
// import * as tsx from 'vue-tsx-support';
@Component
export default class Message extends Vue {
  @Prop({ default: EMessageType.info }) public type!: EMessageType;
  public timer: number | null = null;
  public timerClose: number | null = null;
  public content = '';
  public time = 1000;
  public showClose = false;

  public CloseTop() {
    let Top = 20;
    this.timer =  setInterval(() => {
      Top -= 3;
      (this.$refs.message as any).style.top = `${Top}px`;
      if (Top < -30) {
        window.clearInterval(this.timer as number);
        this.timer = null;
        (this.$refs.message as any).style.top = `-30px`;
      }         
    }, 20)
  }

  mounted() {
    let Top = 0;
    this.timer = setInterval(() => {
      Top += 1;
      (this.$refs.message as any).style.top = `${Top}px`;
      if (Top > 20)  {
        window.clearInterval(this.timer as number);
        this.timer = null;
        (this.$refs.message as any).style.top = `20px`;
        this.timerClose = setTimeout(() => {
          this.CloseTop();
        }, this.time)
      }
    }, 20)
  }

  public render() {
    const className = [
      EPrefix.message,
      `${EPrefix.message}--${this.type}`,
    ];
    return (
      <div
        ref='message'
        class={className}
      >
        {this.content}
        {this.showClose && <span onClick={this.CloseTop} class="close">X</span>}
        {this.$slots.default}
      </div>
    );
  }
}