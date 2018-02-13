# `antd-navbutton`

`antd`样式的`react-router-dom`导航按钮

## 安装

```powershell
yarn add antd-navbutton
```

## 使用方法

```jsx
import { NavButton } from "antd-navbutton";
const button = <NavButton to="/home" replace={false} />;
```

`NavButton`组件与`antd`的`Button`完全兼容。使用方法与`Button`和`Link`一致。点击`NavButton`的时候，会先触发按钮本身的`onClick`事件，然后再触发导航事件。

参见文档：

[react-router-dom Link 组件](http://reacttraining.cn/web/api/Link)

[antd Button 组件](https://ant.design/components/button-cn/)

## 许可

MIT
