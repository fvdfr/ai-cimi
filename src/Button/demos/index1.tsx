import React from 'react';
import Button from '..';

export default function ButtonDemo1() {
  return (
    <div>
      <div style={{ display: 'flex', marginBottom: '20px' }}>
        <Button type="general">默认按钮</Button>
        <Button type="primary">基础按钮</Button>
        <Button type="success">成功按钮</Button>
        <Button type="danger">危险按钮</Button>
        <Button type="warning">警告按钮</Button>
        <Button type="text">文本按钮</Button>
      </div>
      <div style={{ display: 'flex', marginBottom: '20px' }}>
        <Button type="general-one">朴素按钮</Button>
        <Button type="primary-one">基础按钮</Button>
        <Button type="success-one">成功按钮</Button>
        <Button type="danger-one">危险按钮</Button>
        <Button type="warning-one">警告按钮</Button>
        <Button type="text-one">文本按钮</Button>
      </div>
      <div style={{ display: 'flex' }}>
        <Button type="general-two">圆角按钮</Button>
        <Button type="primary-two">基础按钮</Button>
        <Button type="success-two">成功按钮</Button>
        <Button type="danger-two">危险按钮</Button>
        <Button type="warning-two">警告按钮</Button>
        <Button type="text-two">文本按钮</Button>
      </div>
    </div>
  );
}
