# Use Bool

A simple React hook for storing `boolean` state

## Contents

- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Licence](#licence)

## Installation

If using `yarn`

`yarn add @helpful-hooks/use-bool`

For `npm`

`npm install @helpful-hooks/use-bool`

## Usage

The hook returns an array similar to `React`'s `useState` hool. The first item contains the `boolean` state. The second item contains helper functions for setting the stored value.

```ts
const [
  state,         // Initially false by default
  stateHandlers   
] = useBool()

const {
  on,            // Set to true
  off,           // Set to false
  toggle,        // Switch between true and false
  set,           // Use like a React setState function
} = stateHandlers
```

Here is a simple example demonstrating how `useBool` can be used to show and hide a component

```ts
import { useBool } from '@helpful-hooks/use-bool'

// ...

const [show, showHandlers] = useBool()

return (
  <>
    <button onClick={stateHandlers.toggle}>
      TOGGLE
    </button>
    {show ? 'I am visible!' : null}
  </>
)
```

To set an initial value, pass it as the first argument. The intial value is false by default

```ts
const [state] = useBool(true)

// state === true
```

This hook also supports callbacks which are run when a change in state is made

```ts
const onTurnedOff = () => console.log('state === false')
const onTurnedOn = () => console.log('state === true')

const [state, stateHandlers] = useBool(
    // Or false for default behaviour
    true,
    // Pass the callbacks as the second argument
    { onTurnedOff, onTurnedOn },
)
```

## Contributing

All contributions are welcome! If you find a bug or have a feature request, open an issue in the [Github Repo](github-repo)

## Licence

This package uses the MIT licence. Use or modify it in any morally correct way you choose

[github-repo]: https://github.com/taennan/use-bool.git
