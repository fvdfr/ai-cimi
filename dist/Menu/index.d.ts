import React from 'react';
import './index.module.less';
interface MenuProps {
  /**
   * @description 配置对象
   * @default {}
   */
  items: Array<RenderOptions>;
  /**
   * @description 自定义宽度
   * @default 220px
   */
  width?: string | number;
  /**
   * @description 深度模式
   * @default false
   */
  dark?: Boolean;
  /**
   * @description 手风琴
   * @default false
   */
  ableToggle?: Boolean;
  /**
   * @description 默认展开
   * @default false
   */
  defaultOpen?: Boolean;
  /**
   * @description 切换菜单回调函数
   */
  handleRouteChange?: Function;
}
interface RenderOptions {
  label: string;
  key: string | number;
  level?: string | number;
  icon?: JSX.Element | null;
  children?: Array<any> | null | undefined;
}
declare const _default: React.NamedExoticComponent<MenuProps>;
export default _default;
