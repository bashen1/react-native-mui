import {
  GestureResponderEvent,
  GestureResponderHandlers,
  TouchableOpacityProps,
} from 'react-native';
import {IFlexCommonProps} from '../Types/IFlexCommon';

export interface ITouchableOpacityProps
  extends TouchableOpacityProps,
    IFlexCommonProps,
    GestureResponderHandlers {
  trackEventName?: string;
  onPress?: ((event?: GestureResponderEvent) => void) | undefined;
}
