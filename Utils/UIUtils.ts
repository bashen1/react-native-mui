import FlexStyles from '../Styles/FlexStyles';

class UIUtils {
  static flexStyle = (props: any) => {
    const {
      row,
      column,
      between,
      around,
      evenly,
      middle,
      center,
      wrap,
      left,
      right,
      top,
      bottom,
      selfTop,
      selfMiddle,
      selfBottom,
      flex,
    } = props;
    return [
      row ? FlexStyles.flexRow : null,
      column ? FlexStyles.flexColumn : null,
      between ? FlexStyles.flexItemsBetween : null,
      around ? FlexStyles.flexItemsAround : null,
      evenly ? FlexStyles.flexItemsEvenly : null,
      middle ? FlexStyles.flexItemsMiddle : null,
      center ? FlexStyles.flexItemsCenter : null,
      wrap ? FlexStyles.flexWrap : FlexStyles.flexNoWrap,
      left ? FlexStyles.flexItemsLeft : null,
      right ? FlexStyles.flexItemsRight : null,
      top ? FlexStyles.flexItemsTop : null,
      bottom ? FlexStyles.flexItemsBottom : null,
      selfTop ? FlexStyles.flexSelfTop : null,
      selfMiddle ? FlexStyles.flexSelfMiddle : null,
      selfBottom ? FlexStyles.flexSelfBottom : null,
      (flex ?? -1) > -1 ? {flex: flex} : null,
    ];
  };
}

export default UIUtils;
