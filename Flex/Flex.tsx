import React, {useMemo} from 'react';
import {View} from 'react-native';
import UIUtils from '../Utils/UIUtils';
import {IFlexProps} from './IFlex';

const Flex = (props: IFlexProps) => {
  const {children, style, onLayout, pointerEvents, onTouchStart} = props;

  return useMemo(() => {
    const flexStyle = UIUtils.flexStyle(props);
    return (
      <View
        {...props}
        onLayout={onLayout}
        pointerEvents={pointerEvents}
        onTouchStart={onTouchStart ?? undefined}
        style={[flexStyle, style]}>
        {children}
      </View>
    );
  }, [children, onLayout, onTouchStart, pointerEvents, props, style]);
};

export default Flex;
