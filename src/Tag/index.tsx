import React, { useMemo, FC, memo,useRef } from "react";
import { CloseOutlined } from '@ant-design/icons';
import { TagProps, TagStyle, NativeTagProps } from './interface'
import './Tag.module.less'
import { icons } from "antd/es/image/PreviewGroup";
const Tag: FC<TagProps & NativeTagProps> = memo((props) => {

    let { type, closable, disable_transitions, hit, color, size, width, height, children } = props;
    // console.log(closable);


    const tagStyle = useMemo(() => {
        if (!type && type !== 'success' && type !== 'info' && type !== 'warning' && type !== 'danger' && !size && size !== 'medium' && size !== 'small' && size !== 'mini') {
            return 'success'
        }
        return size || type as any
        // return type as any
    }, [type, size])


  



    const tagSize = useMemo(() => {
        var size: TagStyle = {
            width: '100px',
            height: '40px',
        };
        if (width) {
            size.width = width + 'px'
        }
        if (height) {
            size.height = height + 'px'
        }
        return size
    }, [width, height])
    // console.log('===========================', tagSize);

    const shan =()=>{
       console.log();
       
        
    }


    const counts = useRef<HTMLDivElement | null>([])


  const deletes = ()=>{
    console.log('2');
    
    if(closable){
    counts.current.style.display="none";
        
    }
  }
    


    return (
        <div className="tag" ref={el => counts.current= el}>
            {/* {false && <CloseOutlined />} */}
            <span  
                className={tagStyle}
                style={tagSize as any}
                onClick={()=>deletes()}
            >
                {children}
                {closable && <CloseOutlined className="svg" onClick={()=>{shan()}} />}
            </span>

        </div>
    )

})

export default Tag