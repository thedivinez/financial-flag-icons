# financial-flag-icons ![GBPUSD!](/assets/gbpaud.svg 'GBPUSD')

```command
npm install --save financial-flag-icons
or
yarn add financial-flag-icons
```

A lightweight react library to show currency pairs as flags. And it comes with full The library currently has 58 icons in 3 categories which are:

1. Commodities
2. Crypto Currencies
3. Forex Pairs

and more are to be added

 ![GBPUSD!](/assets/icons.png 'GBPUSD')

You can change the size and background color of each icon using **className** or using **style**

#### Example
<h6>./style.css</h6>

```css
.h-1 {
  height: 1rem;
}
.w-1 {
  width: 1rem;
}
```
<h6>App.tsx</h6>

```tsx

//icon: string  pair id
//className: string  css styling class

import "./style.css";
import FinancialFlagIcon from financial-flag-icons

const App = () => <FinancialFlagIcon icon="gbpusd" className="h-1 w-1" style={{}}/>;

export default App;

```

<h6>Result</h6>

![GBPUSD!](/assets/gbpaud.svg 'GBPUSD')