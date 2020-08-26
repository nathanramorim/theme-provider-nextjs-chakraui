# Layout Login (Themes)

Learning build a themes by [@rocketseat](https://github.com/Rocketseat)

### Stack for learn

---

using [NextJS](https://github.com/vercel/next.js) and [Chakra-ui](https://github.com/chakra-ui/chakra-ui/) to build theme templates

[vercel/next.js](https://github.com/vercel/next.js)

[chakra-ui/chakra-ui](https://github.com/chakra-ui/chakra-ui)

## 🔎 First Steps to create new Application

---

```bash
yarn create next-app <name-app>
```

add dependencies of the developments

```bash
yarn add typescript @types/react @types/node -D
```

### Install chakra ui lib

```bash
yarn add @chakra-ui/core @emotion/core @emotion/styled emotion-theming
```

---

### ✏️to change

- index.js to index.tsx
- _app.js to _app.tsx
- into index.tsx remove styles imports

### 🗑to delete

- `api` folder into pages
- `README.md`
- `styles` folder

---

## 🚀 Initialize App for developments

---

```bash
yarn dev
```

## Create a ThemeProvider

---

```tsx
//theme.ts
import { theme, DefaultTheme } from '@chakra-ui/core';

const customTheme: DefaultTheme = {
	...theme,
};

export default customTheme;
```

```tsx
//ThemeContainer.ts
import React from 'react';
import {
	ThemeProvider as ChakraThemeProvider,
	ColorModeProvider,
	CSSReset,
} from '@chakra-ui/core';
import { ThemeProvider as EmotionThemeProvider } from 'emotion-theming';
import theme from '../../styles/theme';

const ThemeContainer: React.FC = ({ children }) => {
	return (
		<ChakraThemeProvider theme={theme}>
			<ColorModeProvider value={'dark'}>
				<EmotionThemeProvider theme={theme}>
					<CSSReset />
					{children}
				</EmotionThemeProvider>
			</ColorModeProvider>
		</ChakraThemeProvider>
	);
};
```

### Watch the guide (pt-Br)

---

[https://www.youtube.com/watch?v=6TEo2AxW-oQ&t=16s](https://www.youtube.com/watch?v=6TEo2AxW-oQ&t=16s)