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

type Props = {
  setInputValue: (value: string) => void
  inputValue: string
}

export default function SpotlightMobile({ setInputValue, inputValue }: Props) {
  return (
    <Kesh.Content onRest={() => setInputValue('')}>
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
      <Kesh.InputContainer className="group">
        <SearchIcon className="group-data-[state=open]:scale-100 scale-0 transition-all duration-300" />
        <Kesh.Input value={inputValue} onValueChange={(value: string) => setInputValue(value)} />
        <CloseButton className="group-data-[state=open]:scale-100 scale-0 transition-all duration-300" />
      </Kesh.InputContainer>
    </Kesh.Content>
  )
}
