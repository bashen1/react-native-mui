import React, {useCallback, useEffect, useMemo} from 'react';
import {Text as RNText, StyleSheet, TextStyle} from 'react-native';
import {ITextProps} from './IText';
import {TextContext} from './TextContextProvider';

const Text = (props: ITextProps) => {
  const {children, style} = props;

  const handleResStyle = useCallback(
    (scale = 1) => {
      // @ts-ignore
      const tempStyle: TextStyle = StyleSheet.flatten(style);
      const isIconFont = (tempStyle?.fontFamily ?? '') === 'iconfont';
      const fontSize = tempStyle?.fontSize ?? 14;
      const resFontSize = isIconFont ? fontSize : fontSize * Number(scale);
      return {
        ...tempStyle,
        fontSize: resFontSize,
      };
    },
    [style],
  );
  useEffect(() => {
    // @ts-ignore
    RNText.defaultProps = RNText.defaultProps || {};
    // @ts-ignore
    RNText.defaultProps.allowFontScaling = false;
  }, []);

  return useMemo(
    () => (
      <TextContext.Consumer>
        {({scale}) => (
          <RNText
            {...props}
            allowFontScaling={false}
            style={handleResStyle(scale)}>
            {children}
          </RNText>
        )}
      </TextContext.Consumer>
    ),
    [children, handleResStyle, props],
  );
};

export default Text;
