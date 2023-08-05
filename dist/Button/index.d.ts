import React, { FC } from 'react';
import './index.module.less';
interface ButtonProps {
  /**
   * @description 按钮主题
   * @default primary
   */
  type?: String;
  /**
   * @description 宽度
   */
  width?: Number;
  /**
   * @description 高度
   */
  height?: Number;
  /**
   * @description 禁用状态
   * @default false
   */
  disabled?: Boolean;
  /**
   * @description 字体按钮
   * @default false
   */
  circle?: Boolean;
  /**
   * @description 按钮边框为虚线
   * @default false
   */
  dashed?: Boolean;
  /**
   * @description 加载状态
   * @default false
   */
  loading?: Boolean;
  /**
   * @description 按钮点击回调事件
   */
  onClick?: Function | undefined;
}
type NativeButtonProps = Omit<React.ButtonHTMLAttributes<HTMLElement>, 'type'>;
declare const Button: FC<ButtonProps & NativeButtonProps>;
export default Button;
