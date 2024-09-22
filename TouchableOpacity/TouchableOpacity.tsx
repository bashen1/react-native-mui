import React, {useCallback, useMemo, useRef} from 'react';
import {TouchableOpacity as RNTouchableOpacity} from 'react-native';
import UIUtils from '../Utils/UIUtils';
import {ITouchableOpacityProps} from './ITouchableOpacity';

const TouchableOpacity = (props: ITouchableOpacityProps) => {
  const {onPress, activeOpacity, disabled, children, style} = props;
  const lastClickTime = useRef(0);

  const handleOnPress = useCallback(() => {
    const clickTime = Date.now();
    if (
      !lastClickTime.current ||
      Math.abs(lastClickTime.current - clickTime) > 500
    ) {
      //350的时间可以延长，根据需要改变
      lastClickTime.current = clickTime;
      requestAnimationFrame(() => {
        onPress?.();
      });
    }
  }, [onPress]);

  return useMemo(() => {
    const flexStyle = UIUtils.flexStyle(props);
    return (
      <RNTouchableOpacity
        {...props}
        style={[flexStyle, style]}
        onPress={handleOnPress}
        activeOpacity={activeOpacity || 0.9}
        disabled={disabled}>
        {children}
      </RNTouchableOpacity>
    );
  }, [activeOpacity, children, disabled, handleOnPress, props, style]);
};

export default TouchableOpacity;
