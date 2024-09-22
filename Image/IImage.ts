import {
  ImageErrorEventData,
  ImageResizeMode,
  ImageStyle,
  ImageURISource,
  NativeSyntheticEvent,
  StyleProp,
} from 'react-native';

export interface ImageProps {
  /**
   * Image样式
   */
  style?: StyleProp<ImageStyle> | undefined;
  /**
   * 图片信息
   */
  source: ImageURISource;
  /**
   * resizeMode
   */
  resizeMode?: ImageResizeMode | undefined;
  /**
   * Image Ref
   */
  componentRef?: any;
  /**
   * 图片高斯模糊
   */
  blurRadius?: number | undefined;
  /**
   * 是否需要加载动画
   */
  animate?: boolean | undefined;
  /**
   * 图片加载开始
   */
  onLoadStart?: (() => void) | undefined;
  /**
   * 图片加载结束
   */
  onLoadEnd?: (() => void) | undefined;
  /**
   * 图片加载错误
   */
  onError?:
    | ((error: NativeSyntheticEvent<ImageErrorEventData> | {}) => void)
    | undefined;
}
