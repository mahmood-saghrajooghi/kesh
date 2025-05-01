import { useEffect } from 'react';
import { useKesh } from './context';
import { STATE } from './constants';

type Props = React.HTMLAttributes<HTMLDivElement>

export default function Viewport(props: Props): React.ReactElement {
  const {
    setViewportRef,
    viewportRef,
    touchstartY,
    internalTouchDiffRef,
    setTouchDiff,
    setState,
    setInputKey,
    setVh,
    state,
  } = useKesh();

  useEffect(() => {
    const ref = viewportRef;
    if (!ref) {
      return
    }

    let startedDraggingWhileAtTop = false;

    ref.ontouchstart = (e) => {
      console.log('touchstart');
      touchstartY.current = e.touches[0].clientY;
      startedDraggingWhileAtTop = ref.scrollTop <= 0;
    }

    ref.ontouchmove = (e) => {
      if (!ref) {
        throw new Error('viewportRef is not defined');
      }

      if(!startedDraggingWhileAtTop) {
        return;
      }

      const touchY = e.touches[0].clientY;
      internalTouchDiffRef.current = touchY - touchstartY.current;

      if (internalTouchDiffRef.current > 0) {
        e.stopPropagation();
        setTouchDiff(internalTouchDiffRef.current);
        setState(STATE.OPENING);
      }
    }

    ref.ontouchend = () => {
      if(!startedDraggingWhileAtTop) {
        return;
      }

      setTouchDiff(0);
      setState(s => s === STATE.OPENING ? STATE.CLOSING : s);
      setInputKey(inputKey => inputKey + 1);

      if (internalTouchDiffRef.current > window.innerHeight / 5) {
        setState(STATE.OPEN)
        internalTouchDiffRef.current = 0;
      }
    }

    return () => {
      if (!ref) {
        return;
      }
      ref.ontouchstart = null;
      ref.ontouchmove = null;
      ref.ontouchend = null;
    }
  }, [viewportRef])

  useEffect(() => {
    const callback = () => {
      // For the rare legacy browsers that don't support it
      if (!window.visualViewport) {
        return
      }

      setVh(window.visualViewport.height / 100)
    }
    visualViewport?.addEventListener('resize', callback)

    return () => {
      visualViewport?.removeEventListener('resize', callback)
    }
  }, [])

  useEffect(() => {
    if (state === STATE.CLOSED) {
      return;
    }
    const onScroll = () => window.scrollTo(0, 0);

    window.addEventListener('scroll', onScroll);

    return () => {
      window.removeEventListener('scroll', onScroll);
    }
  }, [state])

  return <div {...props} kesh-viewport="true" ref={setViewportRef} />
}
