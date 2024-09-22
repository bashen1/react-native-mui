import React, {useCallback, useEffect, useMemo} from 'react';
import {Platform, Text as RNText, StyleSheet, TextStyle} from 'react-native';
import {ITextProps} from './IText';
import {TextContext} from './TextContextProvider';

const settings = [
  {},
  {
    fontWeight: 'normal',
  },
  {
    fontWeight: 'normal',
  },
  {
    fontWeight: 'normal',
  },
  {
    fontWeight: 'normal',
  },
  {
    fontWeight: 'bold',
  },
  {
    fontWeight: 'bold',
  },
  {
    fontWeight: 'bold',
  },
  {
    fontWeight: 'bold',
  },
  {
    fontWeight: 'bold',
  },
];
const defaultIndex = 0;

const Text = (props: ITextProps) => {
  const {children, style} = props;

  const handleResStyle = useCallback(
    (scale = 1) => {
      let res;
      let styleText = style;
      if (Array.isArray(styleText)) {
      } else {
        if (styleText) {
          styleText = [styleText];
        } else {
          styleText = [];
        }
      }
      if (Platform.OS === 'android') {
        let useIndex = defaultIndex;
        let styleOrigin = StyleSheet.flatten(styleText);
        if (
          styleOrigin.hasOwnProperty('fontWeight') &&
          !styleOrigin.hasOwnProperty('fontFamily')
        ) {
          const {fontWeight} = styleOrigin;
          if (fontWeight === '100') {
            useIndex = 1;
          } else if (fontWeight === '200') {
            useIndex = 2;
          } else if (fontWeight === '300') {
            useIndex = 3;
          } else if (fontWeight === '400' || fontWeight === 'normal') {
            useIndex = 4;
          } else if (fontWeight === '500') {
            useIndex = 5;
          } else if (fontWeight === '600') {
            useIndex = 6;
          } else if (fontWeight === '700' || fontWeight === 'bold') {
            useIndex = 7;
          } else if (fontWeight === '800') {
            useIndex = 8;
          } else if (fontWeight === '900') {
            useIndex = 9;
          }
        }
        //FIXME 临时解决MIUI12字体的问题，设了一个空字体
        res = [styles.hackMIUI, ...styleText, settings[useIndex]];
      } else {
        res = [styles.hackIOS, ...styleText];
      }
      // @ts-ignore
      const tempStyle: TextStyle = StyleSheet.flatten(res);
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

const styles = StyleSheet.create({
  hackMIUI: {
    fontFamily: '',
  },
  hackIOS: {
    fontFamily: 'PingFangSC-Regular',
  },
});

export default Text;
