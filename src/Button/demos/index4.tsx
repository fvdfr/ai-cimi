import React from 'react';
import Button from '..';

export default function ButtonDemo4() {
  return (
    <div style={{ display: 'flex' }}>
      <Button disabled type="primary">
        默认按钮
      </Button>
      <Button type="danger" disabled>
        危险按钮
      </Button>
      <Button type="warning" disabled>
        警告按钮
      </Button>
      <Button type="text" disabled>
        文本按钮
      </Button>
    </div>
  );
}
