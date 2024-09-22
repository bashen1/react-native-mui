import React from 'react';
import {
  Platform,
  Switch as RNSwitch,
  StyleSheet,
  SwitchProps,
} from 'react-native';

export interface ISwitchProps extends SwitchProps {
  /**
   * onValueChange回调
   */
  callback?: Function;
}

const Switch = (props: ISwitchProps): JSX.Element => {
  const {callback, style} = props;
  const handleValueChange = (e: boolean) => {
    callback?.(e);
  };

  return Platform.OS === 'android' ? (
    <RNSwitch
      {...props}
      trackColor={{true: '#EE4D2D'}}
      thumbColor={'#ffffff'}
      onValueChange={handleValueChange}
    />
  ) : (
    <RNSwitch
      {...props}
      style={[style ?? {}, styles.switchIOS]}
      trackColor={{true: '#EE4D2D'}}
      onValueChange={handleValueChange}
    />
  );
};

const styles = StyleSheet.create({
  switchIOS: {
    transform: [{scaleX: 0.7}, {scaleY: 0.7}],
    width: 50,
    marginRight: -6.5,
  },
});

export default Switch;
