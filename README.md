# Contra React

React implementation for the [Contra UI kit](https://contrauikit.com/).

## Table of Contents

- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
  - [Usage](#usage)
- [License](#license)
- [Acknowledgments](#acknowledgments)

## Technologies Used

- [Vite](https://vitejs.dev/) - Next Generation Frontend Tooling
- [React](https://reactjs.org/) - A JavaScript library for building user interfaces
- [TypeScript](https://www.typescriptlang.org/) - Typed JavaScript at Any Scale
- [Tailwind CSS](https://tailwindcss.com/) - A utility-first CSS framework

## Getting Started

This package was made to be used in React based projects.

### Usage

1. Install the package:

```bash
# NPM
npm install contra-react

# YARN
yarn add contra-react
```

2. Import the base styles:

```ts
// In your project's entry file (e.g. src/index.ts)
import "contra-react/dist/style.css";
```

```css
/* Or in you project's base CSS file (e.g. src/index.css) */
@import url("contra-react/dist/style.css");
```

```html
<!-- Or in your project's base HTML file (e.g. src/index.html) -->
<link rel="stylesheet" href="./node_modules/contra-react/dist/style.css" />
```

> **Important note**
>
> This package provides its styles in a normal CSS file that can be used alongside any other styling framework. But if you're using TailwindCSS in your own project be sure to import your own styles **AFTER** Contra React's own styles to make sure you can override and style the components with your own utility classes.

```ts
// For example, first import the package's styles
import "contra-react/dist/style.css";
// Then import your own styles
import "./index.css";
```

> Additionally, this package already includes Tailwind's CSS reset layer (`@tailwind base`) so you can omit it your own project or not. It should make no difference but it avoids duplicate styles on the stylesheet.

```css
/* For example, you can have just this in your index.css */
@tailwind components;
@tailwind utilities;

/* Instead of this */
@tailwind base;
@tailwind components;
@tailwind utilities;
```

3. Import the components as needed:

```tsx
import { Button } from "contra-react";

function App() {
  return <Button>Button</Button>;
}
```

## License

This project is licensed under the [MIT License](LICENSE.md) - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

- [Contra UI kit](https://contrauikit.com/)
- UI kit created by [vijay verma](https://vijayverma.co/)
