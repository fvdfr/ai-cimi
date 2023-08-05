import { FC } from 'react';
import './index.module.less';
interface dividerProps {
  /**
   *@description 显示的内容
   */
  children?: any;
  /**
   * @description 字体大小
   */
  fontSize?: Number;
  /**
   * @description 分割线颜色
   * @default #cccccc
   */
  borderColor?: String;
  /**
   * @description 对齐方式
   * @default center
   */
  align?: String;
  /**
   * @description 分割线类型
   * @default border
   */
  dashed?: Boolean;
}
declare const Divider: FC<dividerProps>;
export default Divider;
