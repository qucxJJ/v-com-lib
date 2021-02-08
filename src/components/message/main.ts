import Message from './message';

interface MessageOptions {
  /** 提示信息 */
  content: string;
  /** Toast 存在时长 单位：ms */
  time?: number;
  el?: Element;
  showClose?: boolean;
  type: string;
}

const DEFAULT_OPTIONS: MessageOptions = {
  content: '11111',
  time: 1000,
  el: document.body,
  showClose: false,
  type: 'success',
};

export function MessageUtil(options: MessageOptions | any) {
  let setting: MessageOptions = DEFAULT_OPTIONS;
  setting = options;

  setting = { ...DEFAULT_OPTIONS, ...setting };

  const instance = new Message();
  for (const opt in setting) {
    if (Object.prototype.hasOwnProperty.call(setting, opt)) {
      (instance as any)[opt] = (setting as any)[opt];
    }
  }
  instance.$mount();

  if (setting.el) {
    setting.el.appendChild(instance.$el);
  } else {
    document.body.appendChild(instance.$el);
  }
  return instance;
}
