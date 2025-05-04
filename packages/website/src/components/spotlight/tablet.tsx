import { ItemContent } from '../ui/kesh';

import * as Kesh from 'kesh'
import { ItemIcon } from '../ui/kesh'
import Linear from '../logo/linear';
import Figma from '../logo/figma';
import Slack from '../logo/slack';
import YouTube from '../logo/youtube';
import Raycast from '../logo/raycast';
import GitHub from '../logo/github';
import { SearchIcon, CloseButton } from '../ui/kesh';
import { cn } from '../../lib/utils'

import styles from './tablet.module.css'
type Props = {
  setInputValue: (value: string) => void
  inputValue: string
}

export default function SpotlightTablet({ setInputValue, inputValue }: Props) {
  return (
    <Kesh.Dialog onRest={() => setInputValue('')} className={styles.Tablet}>
      <div className={styles.InputContainer}>
        <SearchIcon className={cn(styles.SearchIcon, 'left-1')} />
        <Kesh.Input value={inputValue} onValueChange={(value: string) => setInputValue(value)} />
      </div>
      <Kesh.List>
        <Kesh.Group heading="Applications">
          <Kesh.Item value="Linear">
            <ItemIcon>
              <Linear className="w-4 h-4 " />
            </ItemIcon>
            <ItemContent>
              Linear
            </ItemContent>
          </Kesh.Item>
          <Kesh.Item value="Figma">
            <ItemIcon>
              <Figma className="w-4 h-4 " />
            </ItemIcon>
            <ItemContent>
              Figma
            </ItemContent>
          </Kesh.Item>
          <Kesh.Item value="Slack">
            <ItemIcon>
              <Slack className="w-4 h-4 " />
            </ItemIcon>
            <ItemContent>
              Slack
            </ItemContent>
          </Kesh.Item>
          <Kesh.Item value="YouTube">
            <ItemIcon>
              <YouTube className="w-4 h-4 " />
            </ItemIcon>
            <ItemContent>
              Youtube
            </ItemContent>
          </Kesh.Item>
          <Kesh.Item value="Raycast">
            <ItemIcon>
              <Raycast className="w-4 h-4 " />
            </ItemIcon>
            <ItemContent>
              Raycast
            </ItemContent>
          </Kesh.Item>
          <Kesh.Item value="Github">
            <ItemIcon>
              <GitHub className="w-4 h-4 " />
            </ItemIcon>
            <ItemContent>
              Github
            </ItemContent>
          </Kesh.Item>
        </Kesh.Group>
      </Kesh.List>
    </Kesh.Dialog>
  )
}
