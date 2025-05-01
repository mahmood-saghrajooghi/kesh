import { CommandList } from 'cmdk';

type Props = React.HTMLAttributes<HTMLDivElement>

export default function List({ children, ...props }: Props): React.ReactElement {
  return (
    <CommandList kesh-list="true" {...props}>
      {children}
    </CommandList>
  )
}
