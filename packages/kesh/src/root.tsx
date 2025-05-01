import { useRef, useState } from 'react'
import { KeshContext } from './context'
import type { State } from './types';
import { STATE } from './constants';

export default function Root({ children }: { children: React.ReactNode }): React.ReactElement {
  const [state, setState] = useState<State>(STATE.CLOSED);
  const [touchDiff, setTouchDiff] = useState<number>(0);
  const [inputKey, setInputKey] = useState(0);
  const [viewportRef, setViewportRef] = useState<HTMLDivElement | null>(null);
  const [overlayTop, setOverlayTop] = useState(0);
  const [vh, setVh] = useState<number>(window.innerHeight / 100);
  const touchstartY = useRef(0);
  const internalTouchDiffRef = useRef(0);
  return (
    <KeshContext.Provider value={{
      state,
      setState,
      inputKey,
      setInputKey,
      touchDiff,
      setTouchDiff,
      viewportRef,
      setViewportRef,
      overlayTop,
      setOverlayTop,
      vh,
      setVh,
      touchstartY,
      internalTouchDiffRef,
    }}>
      {children}
    </KeshContext.Provider>
  )
}
