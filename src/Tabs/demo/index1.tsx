import React from 'react';
import Tabs from '../Tabs';
import TabPane from '../TabPane';
export default () => {
  return (
    <Tabs type="text">
      <TabPane name="用户管理">
        <div style={{ height: '100px' }}>用户管理</div>
      </TabPane>
      <TabPane name="配置管理">
        <div style={{ height: '100px' }}>配置管理</div>
      </TabPane>
      <TabPane name="角色管理">
        <div style={{ height: '100px' }}>角色管理</div>
      </TabPane>
      <TabPane name="定时任务补偿">
        <div style={{ height: '100px' }}>定时任务补偿</div>
      </TabPane>
    </Tabs>
  );
};
