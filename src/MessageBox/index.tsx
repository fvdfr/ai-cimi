import React, { useMemo, FC, memo, useState, useRef, Children } from 'react';
import { CloseCircleOutlined, ApiFilled } from '@ant-design/icons';
import { MessageBoxProps, NativeMessageBoxProps, MessageBoxStyle } from './interface';
import css from './MessageBox.module.less'
const MessageBox: FC<MessageBoxProps & NativeMessageBoxProps> = memo((props) => {
    const { children, message, confirm, data } = props;
    let [show, setShow] = useState(false)

    const open = () => {
        setShow(true)
    }
    let [name, setName] = useState(false)
    let [alter, setAlter] = useState(false)
    const del = (e: React.MouseEvent<HTMLSpanElement, MouseEvent>) => {
        console.log(e.target);
        let button = document.getElementsByClassName("button___2_FH-")[0]
        let button1 = document.getElementsByClassName("cancle___3SOzf")[0]
        console.log(button);
        if (e.target === button) {
            setName(true)
        } else if (e.target === button1) {
            setName(false)
        } else {
            setName(false)
        }
        setShow(false)
        setAlter(true)
        setTimeout(() => {
            setAlter(false)
        }, 2000);
    }
    return (
        <div className={css.container}>
            <div className={css.title} onClick={() => open()}>{children}</div>
            {
                <div className={[css.mask, show === true ? css.show : css.hidden].join(" ")} >
                    <div className={css.box}>
                        <div className={css.top}>
                            <h3>{message.title}</h3>
                            <CloseCircleOutlined onClick={(e) => del(e)} />
                        </div>
                        <p className={css.content}>{message.content}</p>
                        {confirm ?
                            <div className={css.bottom}>
                                <button className={css.button} onClick={(e) => del(e)}>{message.config}</button>
                                <button className={css.cancle} onClick={(e) => del(e)}>{message.cancel}</button>
                            </div>
                            :
                            <div className={css.bottom}>
                                <button className={css.button} onClick={(e) => del(e)}>{message.config}</button>
                            </div>
                        }

                    </div>
                </div>
            }
            {confirm ?
                <div className={[css.style, alter ? css.show : css.hidden].join(" ")}>
                    <ApiFilled />
                    action:{name === true ? data.confirm : data.del}
                </div>
                :
                <div className={[css.alter, alter ? css.show : css.hidden].join(" ")}>
                    <ApiFilled />
                    action:{name ? data.confirm : data.del}
                </div>
            }



        </div >
    );
});

export default MessageBox;
