import type { ReactNode } from 'react';
import { useSpring, animated } from 'react-spring';
import * as RadixDialog from '@radix-ui/react-dialog';
import { Command } from 'cmdk';
import { STATE } from './constants';
import { useKesh } from './context';

import './content.css'

type Props = {
  children: ReactNode;
  onRest?: () => void;
}

export default function Content({ children, onRest }: Props): React.ReactElement | null {
  const {
    state,
    setState,
    touchDiff,
    setTouchDiff,
    overlayTop,
    setOverlayTop,
    vh,
    touchstartY,
    viewportRef,
  } = useKesh();

  const overlayStyles = useSpring({
    config: (key) => {
      if (key === 'top') {
        return {
          tension: 400,
          friction: 70,
          precision: 1,
        }
      }
      return {
        tension: 400,
        friction: 70,
        precision: .3,
      }
    },
    from: {
      opacity: 0,
      top: 0,
      height: 100 * vh,
    },
    to: state === STATE.CLOSING ? {
      opacity: -.5,
      top: -20,
      height: 100 * vh,
    } : state === STATE.OPENING ? {
      opacity: touchDiff / (window.innerHeight / 5),
      top: touchDiff / (window.innerHeight / 200),
      height: 100 * vh,
    } : state === STATE.OPEN ? {
      opacity: 1,
      top: overlayTop,
      height: 100 * vh,
    } : {
      opacity: 0,
      top: 0,
      height: 100 * vh,
    },
    onRest: () => {
      setState(s => s === STATE.CLOSING ? STATE.CLOSED : s)
      if (onRest) {
        onRest();
      }
    }
  });


  const overlayHeightStyles = useSpring({
    config: {
      tension: 400,
      friction: 50,
      precision: .1,
    },
    from: {
      height: window.innerHeight,
    },
    to: {
      height: 100 * vh,
    },
  });

  if (!viewportRef) {
    return null;
  }

  return (
    <Command>
      <RadixDialog.Root
        open={state !== STATE.CLOSED}
        onOpenChange={(open: boolean) => {
          if (!open) {
            setState(STATE.CLOSING);
          }
        }}
      >
        <RadixDialog.Portal>
          <RadixDialog.Overlay asChild />
          <animated.div style={{ ...overlayStyles }} kesh-overlay="true">
          </animated.div>
          {
            // TODO: do this with a radix dialog
            state !== STATE.CLOSED && (
              <RadixDialog.Content asChild kesh-content="true">
                <animated.div
                  style={{ ...overlayStyles, ...overlayHeightStyles }}
                  onTouchStart={(e: TouchEvent) => {
                    touchstartY.current = e.touches[0].clientY;
                  }}
                  onTouchMove={(e: TouchEvent) => {
                    const touchY = e.touches[0].clientY;
                    const touchDiff = touchY - touchstartY.current;
                    setOverlayTop(touchDiff / 2);

                    e.stopPropagation()
                  }}
                  onTouchEnd={(e: TouchEvent) => {
                    e.stopPropagation()
                    setOverlayTop(0);
                  }}
                  onClick={() => {
                    setTouchDiff(0)
                    setState(STATE.CLOSING)
                  }}
                >
                  {children}
                </animated.div>
              </RadixDialog.Content>
            )
          }
        </RadixDialog.Portal>
      </RadixDialog.Root>
    </Command>
  )
}
