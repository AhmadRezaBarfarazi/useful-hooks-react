# Useful Hooks

A collection of **useful React hooks** for everyday development.

## Installation
```bash
npm install useful-hooks-react
```

## Available Hooks
- `useDebounce`
- `useThrottle`
- `useLocalStorage`
- `useOnlineStatus`
- `useCopyToClipboard`

## Example
```tsx
import { useDebounce } from "useful-hooks";

function SearchBox() {
  const [value, setValue] = React.useState("");
  const debounced = useDebounce(value, 500);

  React.useEffect(() => {
    console.log("Send API call with:", debounced);
  }, [debounced]);

  return <input value={value} onChange={e => setValue(e.target.value)} />;
}
```

## License
MIT# useful-hooks
