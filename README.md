# `antd-navbutton`

`react-router` navigation button in `antd` style.

## Installation

```powershell
yarn add antd-navbutton
```

## Usage

```jsx
import { NavButton } from "antd-navbutton";
const button = <NavButton to="/home" replace={false} />;
```

`NavButton` component is fully compatible with `antd`'s Button. Usage consistent with `Button` and `Link`. When you click `NavButton`, the button's `onClick` event is fired first, then the navigation event is fired.

References：

[react-router-dom Link component](http://reacttraining.com/react-router/web/api/Link)

[antd Button component](https://ant.design/components/button/)

## License

MIT
