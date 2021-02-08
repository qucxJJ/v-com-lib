import { EPrefix } from '@/utils/prefix';
import { Vue, Component, Prop } from 'vue-property-decorator';
import { EMessageType, EMessageTime, EMessageContent, EMessageShow } from './interface';
// import * as tsx from 'vue-tsx-support';
@Component
export default class Message extends Vue {
  @Prop({ default: EMessageType.info }) public type!: EMessageType;
  @Prop({ default: '' }) public content!: EMessageContent;
  @Prop({ default: EMessageTime.default }) public time!: EMessageTime;
  @Prop({ default: false }) public showClose!: EMessageShow;
  timer: any = null;
  timerClose: any = null;

  public CloseTop() {
    let Top = 20;
    this.timer =  setInterval(() => {
      Top -= 3;
      (this.$refs.message as any).style.top = `${Top}px`;
      if (Top < -30) {
        window.clearInterval(this.timer);
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
        window.clearInterval(this.timer);
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
    let close = null;
    if (this.showClose) {
      close = <span onClick={this.CloseTop} class="close">X</span>
    } else {
      close = null;
    }
    return (
      <div
        ref='message'
        class={className}
      >
        {this.content}
        {close}
        {this.$slots.default}
      </div>
    );
  }
}