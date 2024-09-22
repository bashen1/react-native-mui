import {ViewStyle} from 'react-native';
export interface IIconFont {
  /**
   * 图标
   */
  value?: string;
  /**
   * 图标大小
   */
  size?: number;
  /**
   * 图标颜色
   */
  color: string;
  /**
   * 图标外部容器样式
   */
  containerStyle?: ViewStyle;
}
