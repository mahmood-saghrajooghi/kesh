import { CopyIcon } from 'lucide-react'
import * as Kesh from 'kesh'
import githubLogo from '/github.svg'

import { Button } from './components/ui/button'
import './App.css'
import 'kesh/index.css'
import { useEffect, useState } from 'react'
import { breakpoints} from './lib/breakpoints'
import SpotlightMobile from './components/spotlight/mobile'
import SpotlightTablet from './components/spotlight/tablet'

const useMediaQuery = (query: string) => {
  const [matches, setMatches] = useState(false);
  useEffect(() => {
    const media = window.matchMedia(query);
    if (media.matches !== matches) {
      setMatches(media.matches);
    }
    const listener = () => setMatches(media.matches);
    window.addEventListener("resize", listener);
    return () => window.removeEventListener("resize", listener);
  }, [matches, query]);
  return matches;
};

function App() {
  const [inputValue, setInputValue] = useState('')
  const isTablet = useMediaQuery(`(max-width: ${breakpoints.md}px)`);
  const isMobile = useMediaQuery(`(max-width: ${breakpoints.sm}px)`);

  return (
    <Kesh.Root>
      <Kesh.PullToRefresh />
      <Kesh.Viewport className="px-4">
        {isMobile && <SpotlightMobile setInputValue={setInputValue} inputValue={inputValue} />}
        {isTablet && !isMobile && <SpotlightTablet setInputValue={setInputValue} inputValue={inputValue} />}
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
