import React from 'react';
import MessageBox from '..';
export default function LoadingDemo1() {
    let message = {
        title: '标题名称',
        content: '这是一段内容',
        config: "确认",
    }
    let data = {
        del: "cancel",
        confirm: "confirm"
    }
    return (
        <div >
            <MessageBox message={message} data={data}>点击打开 Message Box</MessageBox>
        </div>
    );
}
