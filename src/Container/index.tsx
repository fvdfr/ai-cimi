import React, { useMemo, FC, memo } from 'react';
import './Container.module.less';
import { ContainerProps, ContainerStyle } from './interface';

export const Container: FC<ContainerProps> = memo((props) => {
  const { type, width, height, children } = props;
  const containerStyle = useMemo(() => {
    if (!type && type !== "style") {
      return "or-container"
    }
    return type as any;
  }, [type]);
  const containerSize = useMemo(() => {
    var size: ContainerStyle = {
      width: '100%',
      // height: '40px',
    };
    if (width) {
      size.width = width + 'px';
    }
    if (height) {
      size.height = height + 'px';
    }
    return size;
  }, [width, height]);

  return (
    <div className={containerStyle}
      style={containerSize as any}
    >
      {children}
      {/* <div
        className={containerStyle}
        style={containerSize as any}
      >
        {children}
      </div> */}
    </div>
  );
});
export const Orheader: FC<ContainerProps> = memo((props) => {
  const { type, width, height, children } = props;
  const containerStyle = useMemo(() => {
    return type as any;
  }, [type]);
  const headerSize = useMemo(() => {
    var size: ContainerStyle = {
      // width: '100px',
      // height: '40px',
    };

    if (width) {
      size.width = width + 'px';
    }
    if (height) {
      size.height = height + 'px';
    }
    return size;
  }, [width, height]);

  return (
    <div className="or-header"
      style={headerSize as any}
    >
      {children}
      {/* <div
        className={containerStyle}
        style={containerSize as any}
      >
        {children}
      </div> */}
    </div>
  );
});
export const Oraside: FC<ContainerProps> = memo((props) => {
  const { type, width, height, children } = props;
  const containerStyle = useMemo(() => {
    return type as any;
  }, [type]);
  const asideSize = useMemo(() => {
    var size: ContainerStyle = {
      width: '200px',
      // height: '40px',
    };

    if (width) {
      size.width = width + 'px';
    }
    if (height) {
      size.height = height + 'px';
    }
    return size;
  }, [width, height]);

  return (
    <div className="or-aside"
      style={asideSize as any}
    >
      {children}
      {/* <div
        className={containerStyle}
        style={containerSize as any}
      >
        {children}
      </div> */}
    </div>
  );
});
export const Ormain: FC<ContainerProps> = memo((props) => {
  const { type, width, height, children } = props;
  const containerStyle = useMemo(() => {
    return type as any;
  }, [type]);
  const mainSize = useMemo(() => {
    var size: ContainerStyle = {
      width: '100%',
      // height: '40px',
    };

    if (width) {
      size.width = width + 'px';
    }
    if (height) {
      size.height = height + 'px';
    }
    return size;
  }, [width, height]);

  return (
    <div className="or-main"
      style={mainSize as any}
    >
      {children}
      {/* <div
        className={containerStyle}
        style={containerSize as any}
      >
        {children}
      </div> */}
    </div>
  );
});
export const Orfooter: FC<ContainerProps> = memo((props) => {
  const { type, width, height, children } = props;
  const containerStyle = useMemo(() => {
    return type as any;
  }, [type]);
  const footerSize = useMemo(() => {
    var size: ContainerStyle = {
      width: '100%',
      // height: '40px',
    };

    if (width) {
      size.width = width + 'px';
    }
    if (height) {
      size.height = height + 'px';
    }
    return size;
  }, [width, height]);

  return (
    <div className="or-footer"
      style={footerSize as any}
    >
      {children}
      {/* <div
        className={containerStyle}
        style={containerSize as any}
      >
        {children}
      </div> */}
    </div>
  );
});

