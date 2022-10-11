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

#### Usage

```tsx
import FinancialFlagIcon from financial-flag-icons

icon: string // pair id
className: string // css styling class

<FinancialFlagIcon icon="gbpusd" className="h-1 w-1" style={{}}/>
```

This component can be styled using **className** or using **style**
