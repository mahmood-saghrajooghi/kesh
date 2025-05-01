import { createContext, useContext, useState } from 'react'

const STATE = {
  CLOSED: 'closed',
  OPENING: 'opening',
  OPEN: 'open',
  CLOSING: 'closing',
}

type State = typeof STATE[keyof typeof STATE];

type ContextType = {
  state: State;
  setState: React.Dispatch<React.SetStateAction<State>>;
  inputKey: number;
  setInputKey: React.Dispatch<React.SetStateAction<number>>;
  touchDiff: number;
  setTouchDiff: React.Dispatch<React.SetStateAction<number>>;
  viewportRef: HTMLDivElement | null;
  setViewportRef: React.Dispatch<React.SetStateAction<HTMLDivElement | null>>;
  overlayTop: number;
  setOverlayTop: React.Dispatch<React.SetStateAction<number>>;
  vh: number;
  setVh: React.Dispatch<React.SetStateAction<number>>;
  touchstartY: React.RefObject<number>;
  internalTouchDiffRef: React.RefObject<number>;
}

export const KeshContext: React.Context<ContextType | null> = createContext<ContextType | null>(null);

export function useKesh(): ContextType {
  const context = useContext(KeshContext);
  if (context === null) {
    throw new Error('useKesh must be used within a KeshContextProvider');
  }
  return context;
}
