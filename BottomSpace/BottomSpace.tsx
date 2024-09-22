import React, {useMemo} from 'react';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {Flex} from '../index';

const BottomSpace = (props: any) => {
  const {style} = props;
  const insets = useSafeAreaInsets();
  return useMemo(
    () => <Flex {...props} style={[style, {height: insets.bottom}]} />,
    [insets.bottom, props, style],
  );
};

export default BottomSpace;
