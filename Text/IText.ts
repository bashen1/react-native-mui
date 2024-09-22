import {TextProps} from 'react-native';

export interface ITextProps extends TextProps {}

export interface ITextContextProvider {
  /**
   * 默认字体大小
   */
  scaleDefault: number;
  children: React.ReactNode;
}
