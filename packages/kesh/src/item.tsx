import { CommandItem } from 'cmdk';
import { useKesh } from './context';
import { STATE } from './constants';

type Props = React.ComponentProps<typeof CommandItem>

export default function Item({ children, onSelect, ...props }: Props): React.ReactElement {
  const { setState } = useKesh();
  return (
    <CommandItem
      {...props}
      kesh-item="true"
      onSelect={(v: string) => {
        setState(STATE.CLOSING);
        onSelect?.(v);
      }}
    >
      {children}
    </CommandItem>
  )
}
