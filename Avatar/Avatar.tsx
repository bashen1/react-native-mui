import React, {useMemo} from 'react';
import {StyleSheet} from 'react-native';
import {Flex, Image} from '../index';
import {IAvatarProps} from './IAvatar';

const Avatar = ({
  size = 60,
  radius = 30,
  image = '',
  containerStyle,
}: IAvatarProps): JSX.Element => {
  return useMemo(
    () => (
      <Flex
        style={[
          styles.container,
          {
            width: size,
            height: size,
            borderRadius: radius ?? size / 2,
          },
          containerStyle,
        ]}>
        <Image
          style={{width: size, height: size}}
          resizeMode="cover"
          source={{uri: image}}
        />
      </Flex>
    ),
    [containerStyle, image, radius, size],
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'transparent',
    overflow: 'hidden',
  },
});

export default Avatar;
