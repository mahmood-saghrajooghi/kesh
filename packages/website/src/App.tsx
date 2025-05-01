import { CopyIcon } from 'lucide-react'
import * as Kesh from 'kesh'
import githubLogo from '/github.svg'

import { Button } from './components/ui/button'
import './App.css'
import 'kesh/index.css'
import { ItemIcon, ItemContent, CloseButton, SearchIcon } from './components/ui/kesh'
import Linear from './components/logo/linear'
import Figma from './components/logo/figma'
import Slack from './components/logo/slack'
import YouTube from './components/logo/youtube'
import Raycast from './components/logo/raycast'
import GitHub from './components/logo/github'
import { useState } from 'react'


function App() {
  const [inputValue, setInputValue] = useState('')
  return (
    <Kesh.Root>
      <Kesh.PullToRefresh />
      <Kesh.Viewport className="px-4">
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
        <div className="flex justify-center w-full p-4">
          <p className="text-muted-foreground">
            👆 Pull down on the screen to see Kesh in action
          </p>
        </div>
        <div className="max-w-[640px] mx-auto pt-48">
          <div className="flex flex-col justify-center  gap-4">
            <h1 className="text-5xl font-medium text-foreground">Kesh</h1>
            <p className="text-muted-foreground">
              Spotlight search components for mobile and tablet React apps
            </p>
            <div className="flex gap-2">
              <Button variant="ghost" asChild>
                <a
                  href="https://github.com/mahmood-saghrajooghi/kesh"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex gap-2 items-center"
                >
                  <img src={githubLogo} className="w-4 h-4" />
                  Github
                </a>
              </Button>
            </div>

            <h2 className="text-foreground mt-16">Installation</h2>
            <code className="text-sm flex items-center justify-between gap-2 text-muted-foreground rounded-md border border-border leading-none w-full h-10 px-4">
              npm install kesh
              <span className="text-foreground">
                <CopyIcon className="w-4 h-4" />
              </span>
            </code>
          </div>
        </div>
      </Kesh.Viewport>
    </Kesh.Root>
  )
}

export default App
