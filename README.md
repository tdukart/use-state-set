# use-state-set

[npm](https://npm.im/@tdukart/use-state-set)

A convenience React hook to use JS Sets in a React state.

## Usage

```sh
npm install @tdukart/use-state-set
```

```jsx
import useStateSet from '@tdukart/use-state-set';

function Foo() {
  const [greetings, addGreeting, removeGreeting] = useStateSet(new Set(['hello']));

  return (
    <div>
      <ul>
        {Array.from(greetings).map(greeting => (
          <li key={greeting}>{greeting}</li>
        ))}
      </ul>
      <button onClick={() => addGreeting('hi')}>Add "hi"</button>
      <button onClick={() => removeGreeting('hello')}>Remove "hello"</button>
    </div>
  );
}
```

## Copyright/License

MIT licensed.

Copyright 2023 Todd Dukart.
