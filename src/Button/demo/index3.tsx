import React from 'react';
import Button from '..';

export default function ButtonDemo3() {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-around' }}>
      <Button type="primary" disabled>基础按钮</Button>
      <Button type="main" disabled>主要按钮</Button>
      <Button type="danger" disabled>危险按钮</Button>
      <Button type="warning" disabled>警告按钮</Button>
      <Button type="success" disabled >成功按钮</Button>
    </div>
  );
}