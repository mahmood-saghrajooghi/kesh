# kesh

Spotlight search components for mobile and tablet React apps.

## Installation

```bash
pnpm add kesh
# or
npm install kesh
# or
yarn add kesh
```

## Usage

`kesh` provides a set of composable components to build spotlight search interfaces.

### Mobile Example

```tsx
import * as Kesh from 'kesh'

function MobileSpotlight() {
  const [inputValue, setInputValue] = useState('')

  return (
    <Kesh.Content onRest={() => setInputValue('')}>
      <Kesh.List>
        <Kesh.Group heading="Applications">
          <Kesh.Item value="Linear">Linear</Kesh.Item>
          <Kesh.Item value="Figma">Figma</Kesh.Item>
        </Kesh.Group>
      </Kesh.List>
      <Kesh.InputContainer>
        <Kesh.Input
          value={inputValue}
          onValueChange={setInputValue}
        />
      </Kesh.InputContainer>
    </Kesh.Content>
  )
}
```

### Tablet/Desktop Example

```tsx
import * as Kesh from 'kesh'

function TabletSpotlight() {
  const [inputValue, setInputValue] = useState('')

  return (
    <Kesh.Dialog onRest={() => setInputValue('')}>
      <div>
        <Kesh.Input
          value={inputValue}
          onValueChange={setInputValue}
        />
      </div>
      <Kesh.List>
        <Kesh.Group heading="Applications">
          <Kesh.Item value="Linear">Linear</Kesh.Item>
          <Kesh.Item value="Figma">Figma</Kesh.Item>
        </Kesh.Group>
      </Kesh.List>
    </Kesh.Dialog>
  )
}
```

## Components

- `Root`: The root component for the spotlight context.
- `Content`: The main container for mobile views.
- `Dialog`: The main container for tablet/desktop views.
- `Input`: The search input component.
- `InputContainer`: Container for the input (typically for mobile layouts).
- `List`: Container for search results.
- `Group`: Grouping component for search results.
- `Item`: Individual search result item.
- `PullToRefresh`: Pull to refresh component.
- `ScrollableArea`: Scrollable area for content.
- `Viewport`: Viewport container.

## License

MIT
