# financial-flag-icons

[![npm version](https://img.shields.io/npm/v/financial-flag-icons.svg)](https://www.npmjs.com/package/financial-flag-icons)
[![npm downloads](https://img.shields.io/npm/dm/financial-flag-icons.svg)](https://www.npmjs.com/package/financial-flag-icons)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

A lightweight React library with **418+ icons** across 5 categories:

| Category                  | Count | Examples                     |
| ------------------------- | ----- | ---------------------------- |
| **Forex Pairs**           | 44    | EURUSD, GBPUSD, USDJPY…      |
| **Crypto (legacy pairs)** | 10    | BTCUSD, ETHUSD, XRPUSD…      |
| **Crypto Coins**          | 291   | BTC, ETH, SOL, USDT, BNB…    |
| **Commodities**           | 4     | Gold, Silver, Platinum, Spot |
| **Stocks**                | 69    | AAPL, TSLA, NVDA, MSFT…      |

📖 **[Live Search & Preview →](https://thedivinez.github.io/financial-flag-icon)**

---

## Installation

```bash
npm install financial-flag-icons
```

---

## Usage

```tsx
import FinancialFlagIcon from "financial-flag-icons";

// Forex pair
<FinancialFlagIcon icon="eurusd" className="h-10 w-10" />

// Crypto coin
<FinancialFlagIcon icon="btc" className="h-10 w-10" />

// Stock
<FinancialFlagIcon icon="aapl" className="h-10 w-10" />

// Commodity
<FinancialFlagIcon icon="xauusd" className="h-10 w-10" />
```

### Props

| Prop        | Type            | Required | Description                                             |
| ----------- | --------------- | -------- | ------------------------------------------------------- |
| `icon`      | `string`        | ✅       | Lowercase icon key (e.g. `"btc"`, `"eurusd"`, `"aapl"`) |
| `className` | `string`        | ❌       | CSS class for sizing/styling                            |
| `style`     | `CSSProperties` | ❌       | Inline style object                                     |

> If an icon key is not found, a grey avatar placeholder is rendered automatically.

---

## Icon Keys

### Forex Pairs

`audcad` `audchf` `audjpy` `audnzd` `audusd` `cadchf` `cadjpy` `chfjpy` `euraud` `eurcad` `eurchf` `eurdkk` `eurgbp` `eurhuf` `eurjpy` `eurnok` `eurnzd` `eurpln` `eurtry` `eurusd` `gbpaud` `gbpcad`
`gbpchf` `gbpjpy` `gbpnzd` `gbpusd` `nzdcad` `nzdchf` `nzdjpy` `nzdusd` `sgdjpy` `usdcad` `usdchf` `usddkk` `usdhkd` `usdhuf` `usdjpy` `usdmxn` `usdpln` `usdsek` `usdsgd` `usdtry` `usdzar`

### Crypto Coins (291)

`1inch` `1inchbsc` `aave` `ada` `ae` `aitech` `algo` `apeerc20` `apt` `arb` `ark` `arpaerc20` `arv` `atom` `ava` `avabsc` `avaerc20` `avax` `avn` `axs` `babydoge` `banana` `bat` `bazed` `bcd` `bch`
`beam` `befi` `belerc20` `bifibsc` `blocks` `bnbbsc` `boba` `bone` `brett` `brisebsc` `brisemainnet` `bsv` `btc` `btfa` `btg` `bttbsc` `bttc` `btttrc20` `busd` `c98` `cake` `cati` `catston` `cfxbsc`
`cgpt` `cgptbsc` `chr` `chz` `cns` `coti` `cro` `cspr` `cswap` `ctsi` `cudoserc20` `cult` `cvc` `daddy` `dai` `dao` `dash` `dcr` `dgb` `dgd` `dgi` `dgmoon` `dino` `divi` `doge` `dogecoin` `dogs` `dot`
`egld` `enj` `eos` `epic` `etc` `eth` `etharb` `ethbsc` `ethw` `eurt` `feg` `filmainnet` `firo` `fitfiarc20` `floki` `flokibsc` `flufbsc` `front` `ftm` `ftn` `ftt` `fun` `gafabsc` `gala` `galbsc`
`gari` `gas` `gbsc` `gerc20` `geth` `ggtkn` `ghc` `grapecoin` `grs` `grterc20` `gspi` `gterc20` `guardbsc` `gusd` `hbar` `hex` `hmstr` `hoge` `hot` `hotcross` `ht` `icx` `ilv` `inj` `iotx` `ipmb`
`jasmy` `jetton` `jst` `kas` `keanu` `kiba` `kibabsc` `kishu` `klay` `klv` `kmd` `knc` `lbp` `leash` `lgcy` `link` `lnq` `lsk` `ltc` `luna` `lunc` `mana` `marsh` `matic` `maticmainnet` `maticusdce`
`mco` `mew` `miota` `mx` `myro` `near` `neiroerc20` `neo` `never` `nfai` `nftb` `not` `now` `npxs` `ntvrk` `nwc` `ocean` `okb` `om` `omg` `one` `onigierc20` `ont` `peipei` `peng` `pew` `pikaeth` `pit`
`pivx` `pls` `plx` `ponke` `poodl` `poolx` `poolz` `pyusd` `qtum` `quackbsc` `raca` `raincoin` `rbif` `rep` `rjvbsc` `rjverc20` `rune` `rvn` `rxcg` `sand` `scrat` `scrt` `sei` `sfundbsc` `shib`
`shibbsc` `sidus` `snsy` `sol` `soon` `id` `spi` `srk` `stkk` `stpt` `strax` `strk` `sun` `sundog` `super` `sxp` `sysevm` `tenshi` `tet` `tfuel` `theta` `tko` `tlos` `tomoerc20` `ton` `trvl` `trx`
`ttcbsc` `tup` `tusd` `tusdtrc20` `uni` `usdc` `usdcmatic` `usdcsol` `usddtrc20` `usde` `usdj` `usdp` `usdt` `usdtbsc` `usdterc20` `usdtmatic` `usdtsol` `usdttrc20` `ust` `velo` `verse` `vet` `vib`
`volt` `vpsai` `wabi` `waves` `wbtcmatic` `win` `wolf` `x` `xaut` `xcaderc20` `xcur` `xdc` `xec` `xem` `xlm` `xmr` `xno` `xrp` `xtz` `xvg` `xym` `xyoerc20` `xzc` `yfi` `zbcsol` `zec` `zen` `zent`
`zil` `zk` `zroarb` `zroerc`

### Commodities

`xauusd` `usdsilver` `platinum` `spot`

### Stocks (69)

`aapl` `abbv` `abnb` `adbe` `amat` `amd` `amgn` `amzn` `asml` `axp` `ba` `baba` `bac` `blk` `brkb` `c` `cat` `coin` `cost` `crm` `csco` `cvx` `de` `ge` `gme` `googl` `gs` `hd` `hon` `hsbc` `intc`
`jnj` `jpm` `ko` `lmt` `lyft` `ma` `mcd` `meta` `mmm` `mrk` `ms` `msft` `mu` `nflx` `nke` `nvda` `nvo` `orcl` `panw` `pep` `pfe` `pg` `pypl` `qcom` `rblx` `rivn` `sap` `sbux` `shop` `snap` `sony` `tm`
`tsla` `tsm` `twtr` `uber` `unh` `v` `vz` `wfc` `wmt`

---

## Styling

Size icons using CSS classes or inline styles — the SVG fills 100% of its container:

```tsx
// Using Tailwind CSS
<FinancialFlagIcon icon="btc" className="h-8 w-8" />

// Using inline styles
<FinancialFlagIcon icon="eth" style={{ height: 32, width: 32 }} />

// Using a custom CSS class
<FinancialFlagIcon icon="eurusd" className="icon-lg" />
```

```css
.icon-lg {
    height: 2rem;
    width: 2rem;
}
```

---

## License

MIT © [Divine Zvenyika](https://github.com/thedivinez)
