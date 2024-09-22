import React, {useMemo} from 'react';
import {Image as RNImage} from 'react-native';
import {ImageProps} from './IImage';

const Image = (props: ImageProps) => {
  return useMemo(() => <RNImage {...props} />, [props]);
};

export default Image;
