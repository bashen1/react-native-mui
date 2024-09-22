/**
 * FlatList
 * 用于解决与react-native-gesture-handler手势冲突
 */
import React, {
  ForwardedRef,
  forwardRef,
  PropsWithChildren,
  ReactElement,
  RefAttributes,
} from 'react';
import {
  FlatList as RNFlatList,
  FlatListProps as RNFlatListProps,
} from 'react-native';
import {FlatList as RNGHFlatList} from 'react-native-gesture-handler';

type FlatList<ItemT = any> = typeof FlatList & RNFlatList<ItemT>;

const FlatList = forwardRef((props, ref: any) => {
  return props?.horizontal ?? false ? (
    <RNGHFlatList {...props} ref={ref} />
  ) : (
    <RNFlatList {...props} ref={ref} />
  );
}) as <ItemT = any>(
  props: PropsWithChildren<
    RNFlatListProps<ItemT> & RefAttributes<FlatList<ItemT>>
  >,
  ref: ForwardedRef<FlatList<ItemT>>,
) => ReactElement | null;

export default FlatList;
