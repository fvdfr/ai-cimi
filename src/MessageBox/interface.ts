export interface MessageBoxProps {
  //自定义container接口

  /**
   * @description MessageBox
   * 标签选项
   * 
   */
  option?: any;
  /**
  * @description 内容区选项
  * 
  */
  option1?: any;
  /**
* @description MessageBox
标签选项 子选项
*
*/
  item?: String;
  /**
* @description 索引值
*
*/
  i?: Number;
  /**
* @description 判断是哪一个样式
*
*/
  style?: any;
  /**
* @description 判断是哪一个盒子
*
*/
  box?: any;
  /**
    * @description alter 信息
    *
    */
  message?: any;
  /**
   * @description 判断样式
   *
   */
  confirm?: any;
  /**
 * @description 表示弹窗信息
 *
 */
  data?: any;
}

export interface MessageBoxStyle {
  width?: String;
  height?: String;
  cursor?: String;
  value?: any
}
export type NativeMessageBoxProps = Omit<React.HTMLAttributes<HTMLElement>, 'type'>; //原生button接口
