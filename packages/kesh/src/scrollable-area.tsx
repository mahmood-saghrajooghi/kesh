import type { HTMLAttributes } from 'react'

type Props = HTMLAttributes<HTMLDivElement>

export default function ScrollableArea({ children, onTouchMove, ...props }: Props): React.ReactElement {
  return (
    <div
      kesh-scrollable-area="true"
      onTouchMove={e => {
        e.stopPropagation()
        onTouchMove?.(e);
      }}
      {...props}
    >
      {children}
    </div>
  )
}
