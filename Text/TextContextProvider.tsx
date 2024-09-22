import React, {useEffect, useMemo, useState} from 'react';
import {ITextContextProvider} from './ITextContextProvider';

interface IProviderValue {
  /**
   * 字体缩放比例
   */
  scale: number;
  /**
   * 更改字体大小
   */
  changeScale?: React.Dispatch<React.SetStateAction<number>>;
}

export const TextContext = React.createContext({
  scale: 1,
});

export const TextContextProvider: React.FC<ITextContextProvider> = ({
  scaleDefault,
  children,
}) => {
  const [scale, changeScale] = useState(scaleDefault);

  useEffect(() => {
    changeScale(scaleDefault);
  }, [scaleDefault]);

  const value: IProviderValue = useMemo(
    () => ({
      scale: scale,
      changeScale,
    }),
    [scale],
  );

  return useMemo(
    () => <TextContext.Provider value={value}>{children}</TextContext.Provider>,
    [children, value],
  );
};
