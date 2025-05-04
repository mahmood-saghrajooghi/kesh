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
  className?: string;
}

export default function Dialog({ children, onRest, className }: Props): React.ReactElement | null {
  const {
    state,
    setState,
    touchDiff,
    overlayTop,
    vh,
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
      maxHeight: 100 * vh,
    },
    to: state === STATE.CLOSING ? {
      opacity: -.5,
    } : state === STATE.OPENING ? {
      opacity: touchDiff / (window.innerHeight / 5),
      top: touchDiff / (window.innerHeight / 200),
    } : state === STATE.OPEN ? {
      opacity: 1,
      top: overlayTop,
    } : {
      opacity: 0,
      top: 0,
    },
    onRest: () => {
      setState(s => {
        if(s === STATE.CLOSING){
          if (onRest) {
            onRest();
          }
          return STATE.CLOSED
        }
        return s;
      })
    }
  });

  const dialogContentStyles = useSpring({
    config: {
      tension: 1000,
      friction: 100,
      precision: 0.001,
    },
    from: {
      opacity: -.5,
      scale: 1.05,
      translateX: '-50%',
    },
    to: state === STATE.CLOSING ? {
      opacity: -.5,
      scale: 1.05,
      translateX: '-50%',
    } : state === STATE.OPENING ? {
      opacity: 1,
      scale: 1 - (touchDiff / window.innerHeight) * 0.15,
      translateX: '-50%',
    } : state === STATE.OPEN ? {
      opacity: 1,
      scale: 1,
      translateX: '-50%',
    } : {
      opacity: 0,
      scale: 1.05,
      translateX: '-50%',
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
          <animated.div style={{ ...overlayStyles }} kesh-overlay="true" />
          {
            // TODO: do this with a radix dialog
            state !== STATE.CLOSED && (
              <RadixDialog.Content asChild kesh-dialog="true">
                <animated.div
                  style={dialogContentStyles}
                  className={className}
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
