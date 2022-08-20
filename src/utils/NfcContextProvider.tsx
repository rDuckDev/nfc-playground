import React from 'react';

interface IProps {
  children?: React.ReactNode;
}
interface INfcContext {
  // @ts-ignore experimental browser feature
  ndef: NDEFReader;
}

const NfcContext = React.createContext<INfcContext>({} as INfcContext);
export const useNfcContext = () => React.useContext(NfcContext);

function NfcContextProvider({children}: IProps) {
  // @ts-ignore experimental browser feature
  const context: INfcContext = {ndef: new NDEFReader()};
  return <NfcContext.Provider value={context}>{children}</NfcContext.Provider>;
}

export default React.memo(NfcContextProvider);
