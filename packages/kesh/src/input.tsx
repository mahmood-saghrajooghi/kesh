import { useKesh } from './context';
import { STATE } from './constants';
import { useEffect, useRef } from 'react';
import { CommandInput } from 'cmdk';

type Props = React.ComponentProps<typeof CommandInput>

export default function Input({ style, onClick, ...props }: Props): React.ReactElement {
  const ref= useRef<HTMLInputElement>(null);
  const { inputKey, state } = useKesh();

  useEffect(() => {
    if (state === STATE.CLOSING) {
      ref.current?.blur();
    }
  }, [state])

  return (
    <CommandInput
      key={inputKey}
      kesh-input="true"
      autoFocus
      placeholder="Search..."
      onClick={(e) => {
        e.stopPropagation();
        onClick?.(e);
      }}
      ref={ref}
      {...props}
    />
  )
}
