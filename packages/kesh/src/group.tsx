import { CommandGroup, } from "cmdk";

type Props = React.ComponentProps<typeof CommandGroup>

export default function Group({ ...props }: Props): React.ReactElement {
  return <CommandGroup kesh-group="true" {...props} />
}
