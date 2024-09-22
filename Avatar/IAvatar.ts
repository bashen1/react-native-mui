import {ViewStyle} from 'react-native';
export interface IAvatarProps {
  /**
   * 头像大小
   */
  size?: number;
  /**
   * 头像圆角
   */
  radius?: number;
  /**
   * 头像地址
   */
  image: string;
  /**
   * 头像Image外部容器样式
   */
  containerStyle?: ViewStyle;
}
