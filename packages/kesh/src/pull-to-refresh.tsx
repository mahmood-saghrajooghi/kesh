import { animated, useSpring } from 'react-spring';
import { useKesh } from './context';

export default function KeshPullToRefresh(): React.ReactElement {
  const { touchDiff } = useKesh();

  const style = useSpring({
    config: {
      tension: 400,
      friction: 50,
      precision: .1,
    },
    from: {
      height: 0,
    },
    to: {
      height: touchDiff / (window.innerHeight / 300),
    },
  });

  return <animated.div style={style} kesh-pull-to-refresh="true" />
}
