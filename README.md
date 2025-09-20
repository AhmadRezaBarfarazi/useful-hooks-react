
# 📘 Useful Hooks React

A collection of **useful React hooks** for everyday development.  
Includes hooks for **debounce, throttle, localStorage, online status, and clipboard operations**.

---

## 🔥 Features

- **useDebounce** – Debounce any value or input  
- **useThrottle** – Throttle updates efficiently  
- **useLocalStorage** – Persist state in browser localStorage  
- **useOnlineStatus** – Detect online/offline status  
- **useCopyToClipboard** – Copy text to clipboard easily  

---

## ⚡ Installation

```bash
npm install useful-hooks-react
```

or with Yarn:

```bash
yarn add useful-hooks-react
```

---

## 🚀 Usage Examples

### useDebounce
```tsx
import { useDebounce } from "useful-hooks-react";
import React, { useState, useEffect } from "react";

function SearchBox() {
  const [value, setValue] = useState("");
  const debounced = useDebounce(value, 500);

  useEffect(() => {
    console.log("Send API call with:", debounced);
  }, [debounced]);

  return <input value={value} onChange={e => setValue(e.target.value)} />;
}
```

### useThrottle
```tsx
import { useThrottle } from "useful-hooks-react";
import React, { useState, useEffect } from "react";

function ScrollTracker() {
  const [scroll, setScroll] = useState(0);
  const throttledScroll = useThrottle(scroll, 300);

  useEffect(() => {
    console.log("Scroll position:", throttledScroll);
  }, [throttledScroll]);

  return (
    <div style={{ height: "200vh" }} onScroll={e => setScroll(e.currentTarget.scrollTop)}>
      Scroll me
    </div>
  );
}
```

### useLocalStorage
```tsx
import { useLocalStorage } from "useful-hooks-react";

function NameSaver() {
  const [name, setName] = useLocalStorage("name", "Guest");

  return <input value={name} onChange={e => setName(e.target.value)} placeholder="Enter your name" />;
}
```

### useOnlineStatus
```tsx
import { useOnlineStatus } from "useful-hooks-react";

function StatusIndicator() {
  const online = useOnlineStatus();

  return <div>User is {online ? "Online" : "Offline"}</div>;
}
```

### useCopyToClipboard
```tsx
import { useCopyToClipboard } from "useful-hooks-react";

function CopyButton() {
  const [copied, copy] = useCopyToClipboard();

  return (
    <div>
      <button onClick={() => copy("Hello World!")}>Copy Text</button>
      {copied && <span>Copied: {copied}</span>}
    </div>
  );
}
```

---

## 📂 Directory Structure

```
useful-hooks-react/
 ├── src/
 │   ├── useDebounce.ts
 │   ├── useThrottle.ts
 │   ├── useLocalStorage.ts
 │   ├── useOnlineStatus.ts
 │   ├── useCopyToClipboard.ts
 │   └── index.ts
 ├── __tests__/
 │   ├── useDebounce.test.tsx
 │   ├── useLocalStorage.test.tsx
 │   └── useOnlineStatus.test.tsx
 ├── package.json
 ├── tsconfig.json
 ├── jest.config.js
 ├── README.md
 └── .gitignore
```

---

## 🧪 Running Tests

```bash
npm install
npm test
```

---

## 🌐 Links

- **Repository:** [https://github.com/AhmadRezaBarfarazi/useful-hooks-react](https://github.com/AhmadRezaBarfarazi/useful-hooks-react)  
- **Homepage:** [https://github.com/AhmadRezaBarfarazi/useful-hooks-react#readme](https://github.com/AhmadRezaBarfarazi/useful-hooks#readme)  
- **Issues:** [https://github.com/AhmadRezaBarfarazi/useful-hooks-react/issues](https://github.com/AhmadRezaBarfarazi/useful-hooks-react/issues)  

---

## 📈 Badges

[![npm version](https://img.shields.io/npm/v/useful-hooks-react.svg?style=flat-square)](https://www.npmjs.com/package/useful-hooks-react)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=flat-square)](https://opensource.org/licenses/MIT)
[![Build Status](https://github.com/AhmadRezaBarfarazi/useful-hooks-react/actions/workflows/ci.yml/badge.svg)](https://github.com/AhmadRezaBarfarazi/useful-hooks-react/actions/workflows/ci.yml)



---

## 📝 License

MIT