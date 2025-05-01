import { animated, useSpring } from 'react-spring';
import { useKesh } from './context';
import { STATE } from './constants';

const INPUT_MARGIN_X = 8;
const INITIAL_INPUT_WIDTH = 96;

type Props = React.HTMLAttributes<HTMLDivElement>

export default function InputContainer({ style, ...props }: Props): React.ReactElement {
  const { state, touchDiff } = useKesh();

  const inputVisibilityStyles = useSpring({
    config: {
      mass: .6,
      tension: 400,
      friction: 50,
      precision: .1,
    },
    from: {
      opacity: 0,
    },
    to: {
      opacity: state === STATE.OPEN ? 1 : state === STATE.CLOSING ? 0 : Math.pow(touchDiff / (window.innerHeight / 5), 2),
    },
  })
  const inputStyles = useSpring({
    config: {
      mass: .6,
      tension: 400,
      friction: 50,
      precision: .1,
    },
    from: {
      height: 20,
      width: INITIAL_INPUT_WIDTH,
      fontSize: 12,
    },
    to: {
      height: state === STATE.OPEN ? 40 : 28,
      fontSize: state === STATE.OPEN ? 16 : 12,
      width: state === STATE.OPEN ? window.innerWidth - (INPUT_MARGIN_X * 2) : INITIAL_INPUT_WIDTH,
      bottom: state === STATE.OPENING ? touchDiff / (window.innerHeight / 200) : 0,
    },
  });


  return (
    <animated.div
      kesh-input-container="true"
      data-state={state}
      style={{
        ...inputStyles,
        ...inputVisibilityStyles,
        ["--margin-x" as any]: `${INPUT_MARGIN_X}px`,
        ...style,
      }}
      {...props}
    />
  )
}
