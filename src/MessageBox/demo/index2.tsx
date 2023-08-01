import React from 'react';
import MessageBox from '..';
export default function LoadingDemo1() {
    let message = {
        title: '提示',
        content: '此操作将永久删除改文件,是否继续?',
        config: "确认",
        cancel: "取消"
    }
    let data = {
        del: "已取消删除",
        confirm: "删除成功"
    }
    return (
        <div >
            <MessageBox message={message} confirm data={data}>点击打开 Message Box</MessageBox>
        </div>
    );
}
