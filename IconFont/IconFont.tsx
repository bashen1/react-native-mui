/**
 * 需要引入iconfont.ttf的字体
 */
import React, {useMemo} from 'react';
import {StyleSheet} from 'react-native';
import {Flex, Text} from '../index';
import {IIconFont} from './IIconFont';

const IconFont = ({
  value,
  size,
  color,
  containerStyle,
}: IIconFont): JSX.Element => {
  return useMemo(
    () => (
      <Flex style={[containerStyle]}>
        <Text style={[styles.iconfont, {color: color, fontSize: size}]}>
          {value}
        </Text>
      </Flex>
    ),
    [color, containerStyle, size, value],
  );
};

IconFont.defaultProps = {
  value: '\ue703',
  size: 16,
  color: '#000000',
};

const styles = StyleSheet.create({
  iconfont: {
    fontFamily: 'iconfont',
  },
});

export default IconFont;
