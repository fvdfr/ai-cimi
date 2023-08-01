import React from "react";

export interface PopoverProps {
  /**
   * @description 触发方式
   * @default click
   */
  trigger?: String;

  /**
   * @description 弹出框标题
   */
  title?: String;

  /**
   * @description 弹出框中的内容
   */
  content?: String;

  /**
   * @description 宽度
   * @default 最小宽度150px
   */
  width?: Number;

  /**
   * @description 弹框出现位置
   * @default top
   */
  placement?: String;
  children: React.ReactNode
}

export interface PopoverStyle {
  trigger?: String;
  title?: any;
  content?: any;
  width?: String;
  placement?: String;
  position?: String;
  display?: String


}
