/**
 * ScrollView
 * 用于解决与react-native-gesture-handler手势冲突
 */
import React, {ReactElement, forwardRef} from 'react';
import {
  ScrollView as RNScrollView,
  ScrollViewProps as RNScrollViewProps,
} from 'react-native';
import {ScrollView as RNGHScrollView} from 'react-native-gesture-handler';

const ScrollView = forwardRef<RNScrollView, RNScrollViewProps>(
  (props, ref: any): ReactElement | null => {
    return props?.horizontal ?? false ? (
      <RNGHScrollView {...props} ref={ref} />
    ) : (
      <RNScrollView {...props} ref={ref} />
    );
  },
);

export default ScrollView;
