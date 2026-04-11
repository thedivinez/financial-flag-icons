import React from 'react';
import Spot from './icons/commodities/Spot';
import XAUUSD from './icons/commodities/XAUUSD';
import Platinum from './icons/commodities/Platinum';
import USDSILVER from './icons/commodities/USDSILVER';
import ADAUSD from './icons/crypto/ADAUSD';
import BCHUSD from './icons/crypto/BCHUSD';
import BTCUSD from './icons/crypto/BTCUSD';
import DOTUSD from './icons/crypto/DOTUSD';
import DSHUSD from './icons/crypto/DSHUSD';
import ETHUSD from './icons/crypto/ETHUSD';
import LTCUSD from './icons/crypto/LTCUSD';
import XLMUSD from './icons/crypto/XLMUSD';
import XRMUSD from './icons/crypto/XRMUSD';
import XRPUSD from './icons/crypto/XRPUSD';
import AUDCAD from './icons/forex/AUDCAD';
import AUDCHF from './icons/forex/AUDCHF';
import AUDJPY from './icons/forex/AUDJPY';
import AUDNZD from './icons/forex/AUDNZD';
import AUDUSD from './icons/forex/AUDUSD';
import CADCHF from './icons/forex/CADCHF';
import CADJPY from './icons/forex/CADJPY';
import CHFJPY from './icons/forex/CHFJPY';
import EURAUD from './icons/forex/EURAUD';
import EURCAD from './icons/forex/EURCAD';
import EURCHF from './icons/forex/EURCHF';
import EURDKK from './icons/forex/EURDKK';
import EURGBP from './icons/forex/EURGBP';
import EURHUF from './icons/forex/EURHUF';
import EURJPY from './icons/forex/EURJPY';
import EURNOK from './icons/forex/EURNOK';
import EURNZD from './icons/forex/EURNZD';
import EURPLN from './icons/forex/EURPLN';
import EURTRY from './icons/forex/EURTRY';
import EURUSD from './icons/forex/EURUSD';
import GBPAUD from './icons/forex/GBPAUD';
import GBPCAD from './icons/forex/GBPCAD';
import GBPCHF from './icons/forex/GBPCHF';
import GBPJPY from './icons/forex/GBPJPY';
import GBPNZD from './icons/forex/GBPNZD';
import GBPUSD from './icons/forex/GBPUSD';
import NZDCAD from './icons/forex/NZDCAD';
import NZDCHF from './icons/forex/NZDCHF';
import NZDJPY from './icons/forex/NZDJPY';
import NZDUSD from './icons/forex/NZDUSD';
import SGDJPY from './icons/forex/SGDJPY';
import USDCAD from './icons/forex/USDCAD';
import USDCHF from './icons/forex/USDCHF';
import USDDKK from './icons/forex/USDDKK';
import USDHKD from './icons/forex/USDHKD';
import USDHUF from './icons/forex/USDHUF';
import USDJPY from './icons/forex/USDJPY';
import USDMXN from './icons/forex/USDMXN';
import USDPLN from './icons/forex/USDPLN';
import USDSEK from './icons/forex/USDSEK';
import USDSGD from './icons/forex/USDSGD';
import USDTRY from './icons/forex/USDTRY';
import USDZAR from './icons/forex/USDZAR';
import { IconProps } from './icons/types/types';

const icons: { [key: string]: React.FC<IconProps> } = {
    'audcad': AUDCAD,
    'audchf': AUDCHF,
    'audjpy': AUDJPY,
    'audnzd': AUDNZD,
    'audusd': AUDUSD,
    'cadchf': CADCHF,
    'cadjpy': CADJPY,
    'chfjpy': CHFJPY,
    'euraud': EURAUD,
    'eurcad': EURCAD,
    'eurchf': EURCHF,
    'eurdkk': EURDKK,
    'eurgbp': EURGBP,
    'eurhuf': EURHUF,
    'eurjpy': EURJPY,
    'eurnok': EURNOK,
    'eurnzd': EURNZD,
    'eurpln': EURPLN,
    'eurtry': EURTRY,
    'eurusd': EURUSD,
    'gbpaud': GBPAUD,
    'gbpcad': GBPCAD,
    'gbpchf': GBPCHF,
    'gbpjpy': GBPJPY,
    'gbpnzd': GBPNZD,
    'gbpusd': GBPUSD,
    'nzdcad': NZDCAD,
    'nzdchf': NZDCHF,
    'nzdjpy': NZDJPY,
    'nzdusd': NZDUSD,
    'sgdjpy': SGDJPY,
    'usdcad': USDCAD,
    'usdchf': USDCHF,
    'usddkk': USDDKK,
    'usdhkd': USDHKD,
    'usdhuf': USDHUF,
    'usdjpy': USDJPY,
    'usdmxn': USDMXN,
    'usdpln': USDPLN,
    'usdsek': USDSEK,
    'usdsgd': USDSGD,
    'usdtry': USDTRY,
    'usdzar': USDZAR,
    // ========= End Of Forex Pairs =========
    'adausd': ADAUSD,
    'bchusd': BCHUSD,
    'btcusd': BTCUSD,
    'dotusd': DOTUSD,
    'dshusd': DSHUSD,
    'ethusd': ETHUSD,
    'ltcusd': LTCUSD,
    'xlmusd': XLMUSD,
    'xrmusd': XRMUSD,
    'xrpusd': XRPUSD,
    // ========= End Of Crypto Pairs =========
    'platinum': Platinum,
    'spot': Spot,
    'usdsilver': USDSILVER, 'xauusd': XAUUSD
}

export interface Props {
    icon: keyof typeof icons;
    className?: string;
    style?: React.CSSProperties;
}

const FinancialFlagIcon: React.FC<Props> = props => {
    const IconComponent = icons[props.icon]
    return IconComponent ? <IconComponent className={props.className} style={props.style} /> : null;
}

export default FinancialFlagIcon;
