import React from 'react';
import Spot from './icons/commodities/Spot';
import USDXAU from './icons/commodities/USDXAU';
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

export interface Props { icon: string; className?: string; style?: React.CSSProperties };
const FinancialFlagIcon: React.FC<Props> = ({ icon, className, style }) => {
    const icons = [
        { id: 'audcad', icon: <AUDCAD className={className} style={style} /> },
        { id: 'audchf', icon: <AUDCHF className={className} style={style} /> },
        { id: 'audjpy', icon: <AUDJPY className={className} style={style} /> },
        { id: 'audnzd', icon: <AUDNZD className={className} style={style} /> },
        { id: 'audusd', icon: <AUDUSD className={className} style={style} /> },
        { id: 'cadchf', icon: <CADCHF className={className} style={style} /> },
        { id: 'cadjpy', icon: <CADJPY className={className} style={style} /> },
        { id: 'chfjpy', icon: <CHFJPY className={className} style={style} /> },
        { id: 'euraud', icon: <EURAUD className={className} style={style} /> },
        { id: 'eurcad', icon: <EURCAD className={className} style={style} /> },
        { id: 'eurchf', icon: <EURCHF className={className} style={style} /> },
        { id: 'eurdkk', icon: <EURDKK className={className} style={style} /> },
        { id: 'eurgbp', icon: <EURGBP className={className} style={style} /> },
        { id: 'eurhuf', icon: <EURHUF className={className} style={style} /> },
        { id: 'eurjpy', icon: <EURJPY className={className} style={style} /> },
        { id: 'eurnok', icon: <EURNOK className={className} style={style} /> },
        { id: 'eurnzd', icon: <EURNZD className={className} style={style} /> },
        { id: 'eurpln', icon: <EURPLN className={className} style={style} /> },
        { id: 'eurtry', icon: <EURTRY className={className} style={style} /> },
        { id: 'eurusd', icon: <EURUSD className={className} style={style} /> },
        { id: 'gbpaud', icon: <GBPAUD className={className} style={style} /> },
        { id: 'gbpcad', icon: <GBPCAD className={className} style={style} /> },
        { id: 'gbpchf', icon: <GBPCHF className={className} style={style} /> },
        { id: 'gbpjpy', icon: <GBPJPY className={className} style={style} /> },
        { id: 'gbpnzd', icon: <GBPNZD className={className} style={style} /> },
        { id: 'gbpusd', icon: <GBPUSD className={className} style={style} /> },
        { id: 'nzdcad', icon: <NZDCAD className={className} style={style} /> },
        { id: 'nzdchf', icon: <NZDCHF className={className} style={style} /> },
        { id: 'nzdjpy', icon: <NZDJPY className={className} style={style} /> },
        { id: 'nzdusd', icon: <NZDUSD className={className} style={style} /> },
        { id: 'sgdjpy', icon: <SGDJPY className={className} style={style} /> },
        { id: 'usdcad', icon: <USDCAD className={className} style={style} /> },
        { id: 'usdchf', icon: <USDCHF className={className} style={style} /> },
        { id: 'usddkk', icon: <USDDKK className={className} style={style} /> },
        { id: 'usdhkd', icon: <USDHKD className={className} style={style} /> },
        { id: 'usdhuf', icon: <USDHUF className={className} style={style} /> },
        { id: 'usdjpy', icon: <USDJPY className={className} style={style} /> },
        { id: 'usdmxn', icon: <USDMXN className={className} style={style} /> },
        { id: 'usdpln', icon: <USDPLN className={className} style={style} /> },
        { id: 'usdsek', icon: <USDSEK className={className} style={style} /> },
        { id: 'usdsgd', icon: <USDSGD className={className} style={style} /> },
        { id: 'usdtry', icon: <USDTRY className={className} style={style} /> },
        { id: 'usdzar', icon: <USDZAR className={className} style={style} /> },
        // ========= End Of Forex Pairs =========
        { id: 'adausd', icon: <ADAUSD className={className} style={style} /> },
        { id: 'bchusd', icon: <BCHUSD className={className} style={style} /> },
        { id: 'btcusd', icon: <BTCUSD className={className} style={style} /> },
        { id: 'dotusd', icon: <DOTUSD className={className} style={style} /> },
        { id: 'dshusd', icon: <DSHUSD className={className} style={style} /> },
        { id: 'ethusd', icon: <ETHUSD className={className} style={style} /> },
        { id: 'ltcusd', icon: <LTCUSD className={className} style={style} /> },
        { id: 'xlmusd', icon: <XLMUSD className={className} style={style} /> },
        { id: 'xrmusd', icon: <XRMUSD className={className} style={style} /> },
        { id: 'xrpusd', icon: <XRPUSD className={className} style={style} /> },
        // ========= End Of Crypto Pairs =========
        { id: 'platinum', icon: <Platinum className={className} style={style} /> },
        { id: 'spot', icon: <Spot className={className} style={style} /> },
        { id: 'usdsilver', icon: <USDSILVER className={className} style={style} /> },
        { id: 'usdxau', icon: <USDXAU className={className} style={style} /> }
    ];
    const iconIndex = icons.findIndex((iconTarget) => iconTarget.id === icon);
    return iconIndex >= 0 ? icons[iconIndex].icon : <>Icon Not Found</>;
};

export default FinancialFlagIcon;
