import { useState, useCallback, useRef, useEffect } from "react";
import FinancialFlagIcon from "financial-flag-icons";

// ── Icon registry ────────────────────────────────────────────────────────────
const FOREX = [
  'audcad', 'audchf', 'audjpy', 'audnzd', 'audusd', 'cadchf', 'cadjpy', 'chfjpy',
  'euraud', 'eurcad', 'eurchf', 'eurdkk', 'eurgbp', 'eurhuf', 'eurjpy', 'eurnok',
  'eurnzd', 'eurpln', 'eurtry', 'eurusd', 'gbpaud', 'gbpcad', 'gbpchf', 'gbpjpy',
  'gbpnzd', 'gbpusd', 'nzdcad', 'nzdchf', 'nzdjpy', 'nzdusd', 'sgdjpy', 'usdcad',
  'usdchf', 'usddkk', 'usdhkd', 'usdhuf', 'usdjpy', 'usdmxn', 'usdpln', 'usdsek',
  'usdsgd', 'usdtry', 'usdzar',
];

const CRYPTO_LEGACY = [
  'adausd', 'bchusd', 'btcusd', 'dotusd', 'dshusd', 'ethusd', 'ltcusd', 'xlmusd', 'xrmusd', 'xrpusd',
];

const COINS = [
  '1inch', '1inchbsc', 'aave', 'ada', 'ae', 'aitech', 'algo', 'apeerc20', 'apt', 'arb',
  'ark', 'arpaerc20', 'arv', 'atom', 'ava', 'avabsc', 'avaerc20', 'avax', 'avn', 'axs',
  'babydoge', 'banana', 'bat', 'bazed', 'bcd', 'bch', 'beam', 'befi', 'belerc20',
  'bifibsc', 'blocks', 'bnbbsc', 'boba', 'bone', 'brett', 'brgbsc', 'brisebsc',
  'brisemainnet', 'bsv', 'btc', 'btfa', 'btg', 'bttbsc', 'bttc', 'btttrc20', 'busd',
  'c98', 'cake', 'cati', 'catston', 'cfxbsc', 'cgpt', 'cgptbsc', 'chr', 'chz', 'cns',
  'coti', 'cro', 'cspr', 'cswap', 'ctsi', 'cudoserc20', 'cult', 'cvc', 'daddy', 'dai',
  'dao', 'dash', 'dcr', 'dgb', 'dgd', 'dgi', 'dgmoon', 'dino', 'divi', 'doge',
  'dogecoin', 'dogs', 'dot', 'egld', 'enj', 'eos', 'epic', 'etc', 'eth', 'etharb',
  'ethbsc', 'ethw', 'eurt', 'feg', 'filmainnet', 'firo', 'fitfiarc20', 'floki',
  'flokibsc', 'flufbsc', 'front', 'ftm', 'ftn', 'ftt', 'fun', 'gafabsc', 'gala',
  'galbsc', 'gari', 'gas', 'gbsc', 'gerc20', 'geth', 'ggtkn', 'ghc', 'grapecoin',
  'grs', 'grterc20', 'gspi', 'gterc20', 'guardbsc', 'gusd', 'hbar', 'hex', 'hmstr',
  'hoge', 'hot', 'hotcross', 'ht', 'icx', 'ilv', 'inj', 'iotx', 'ipmb', 'jasmy',
  'jetton', 'jst', 'kas', 'keanu', 'kiba', 'kibabsc', 'kishu', 'klay', 'klv', 'kmd',
  'knc', 'lbp', 'leash', 'lgcy', 'link', 'lnq', 'lsk', 'ltc', 'luna', 'lunc', 'mana',
  'marsh', 'matic', 'maticmainnet', 'maticusdce', 'mco', 'mew', 'miota', 'mx', 'myro',
  'near', 'neiroerc20', 'neo', 'never', 'nfai', 'nftb', 'not', 'now', 'npxs', 'ntvrk',
  'nwc', 'ocean', 'okb', 'om', 'omg', 'one', 'onigierc20', 'ont', 'peipei', 'peng',
  'pew', 'pikaeth', 'pit', 'pivx', 'pls', 'plx', 'ponke', 'poodl', 'poolx', 'poolz',
  'pyusd', 'qtum', 'quackbsc', 'raca', 'raincoin', 'rbif', 'rep', 'rjvbsc', 'rjverc20',
  'rune', 'rvn', 'rxcg', 'sand', 'scrat', 'scrt', 'sei', 'sfundbsc', 'shib', 'shibbsc',
  'sidus', 'snsy', 'sol', 'soon', 'id', 'spi', 'srk', 'stkk', 'stpt', 'strax', 'strk',
  'sun', 'sundog', 'super', 'sxp', 'sysevm', 'tenshi', 'tet', 'tfuel', 'theta', 'tko',
  'tlos', 'tomoerc20', 'ton', 'trvl', 'trx', 'ttcbsc', 'tup', 'tusd', 'tusdtrc20',
  'uni', 'usdc', 'usdcmatic', 'usdcsol', 'usddtrc20', 'usde', 'usdj', 'usdp', 'usdt',
  'usdtbsc', 'usdterc20', 'usdtmatic', 'usdtsol', 'usdttrc20', 'ust', 'velo', 'verse',
  'vet', 'vib', 'volt', 'vpsai', 'wabi', 'waves', 'wbtcmatic', 'win', 'wolf', 'x',
  'xaut', 'xcaderc20', 'xcur', 'xdc', 'xec', 'xem', 'xlm', 'xmr', 'xno', 'xrp', 'xtz',
  'xvg', 'xym', 'xyoerc20', 'xzc', 'yfi', 'zbcsol', 'zec', 'zen', 'zent', 'zil', 'zk',
  'zroarb', 'zroerc',
];

const COMMODITIES = ['xauusd', 'usdsilver', 'platinum', 'spot'];

const STOCKS = [
  'aapl', 'abbv', 'abnb', 'adbe', 'amat', 'amd', 'amgn', 'amzn', 'asml', 'axp', 'ba',
  'baba', 'bac', 'blk', 'brkb', 'c', 'cat', 'coin', 'cost', 'crm', 'csco', 'cvx', 'de',
  'ge', 'gme', 'googl', 'gs', 'hd', 'hon', 'hsbc', 'intc', 'jnj', 'jpm', 'ko', 'lmt',
  'lyft', 'ma', 'mcd', 'meta', 'mmm', 'mrk', 'ms', 'msft', 'mu', 'nflx', 'nke', 'nvda',
  'nvo', 'orcl', 'panw', 'pep', 'pfe', 'pg', 'pypl', 'qcom', 'rblx', 'rivn', 'sap',
  'sbux', 'shop', 'snap', 'sony', 'tm', 'tsla', 'tsm', 'twtr', 'uber', 'unh', 'v', 'vz',
  'wfc', 'wmt',
];

const ALL_ICONS = [
  ...FOREX.map(k => ({ key: k, category: 'forex' })),
  ...CRYPTO_LEGACY.map(k => ({ key: k, category: 'crypto' })),
  ...COINS.map(k => ({ key: k, category: 'coins' })),
  ...COMMODITIES.map(k => ({ key: k, category: 'commodities' })),
  ...STOCKS.map(k => ({ key: k, category: 'stocks' })),
];

const CATEGORIES = [
  { id: 'all', label: 'All', count: ALL_ICONS.length },
  { id: 'forex', label: 'Forex', count: FOREX.length },
  { id: 'coins', label: 'Crypto Coins', count: COINS.length },
  { id: 'crypto', label: 'Crypto (Legacy)', count: CRYPTO_LEGACY.length },
  { id: 'commodities', label: 'Commodities', count: COMMODITIES.length },
  { id: 'stocks', label: 'Stocks', count: STOCKS.length },
];

// ── Tooltip / copy state ──────────────────────────────────────────────────────
function IconCard({ icon, onSelect }) {
  return (
    <button
      onClick={() => onSelect(icon)}
      className="flex flex-col items-center gap-2 p-3 rounded-xl border border-transparent hover:border-blue-500/40 hover:bg-white/5 transition-all group cursor-pointer text-center"
      title={icon.key}
    >
      <FinancialFlagIcon icon={icon.key} className="h-9 w-9" />
      <span className="text-xs text-slate-400 group-hover:text-slate-200 truncate w-full transition-colors leading-tight">
        {icon.key}
      </span>
    </button>
  );
}

function Modal({ icon, onClose }) {
  const [copied, setCopied] = useState(null);
  const modalRef = useRef(null);

  useEffect(() => {
    const handler = (e) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [onClose]);

  useEffect(() => {
    const handleClick = (e) => {
      if (modalRef.current && !modalRef.current.contains(e.target)) onClose();
    };
    setTimeout(() => window.addEventListener('mousedown', handleClick), 10);
    return () => window.removeEventListener('mousedown', handleClick);
  }, [onClose]);

  const copy = useCallback((text, label) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopied(label);
      setTimeout(() => setCopied(null), 1800);
    });
  }, []);

  const importSnippet = `import FinancialFlagIcon from "financial-flag-icons";`;
  const usageSnippet = `<FinancialFlagIcon icon="${icon.key}" className="h-10 w-10" />`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
      <div ref={modalRef} className="bg-slate-900 border border-slate-700 rounded-2xl w-full max-w-md shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-700">
          <div className="flex items-center gap-3">
            <FinancialFlagIcon icon={icon.key} className="h-10 w-10" />
            <div>
              <p className="text-white font-semibold text-lg leading-none">{icon.key.toUpperCase()}</p>
              <p className="text-slate-400 text-xs mt-1 capitalize">{icon.category === 'coins' ? 'Crypto Coin' : icon.category}</p>
            </div>
          </div>
          <button onClick={onClose} className="text-slate-400 hover:text-white transition-colors text-xl leading-none">✕</button>
        </div>

        {/* Usage */}
        <div className="px-6 py-5 space-y-4">
          <div>
            <p className="text-slate-400 text-xs mb-2 uppercase tracking-wider font-medium">Import</p>
            <div className="bg-slate-800 rounded-lg p-3 flex items-center justify-between gap-2 group">
              <code className="text-blue-300 text-xs font-mono break-all">{importSnippet}</code>
              <button
                onClick={() => copy(importSnippet, 'import')}
                className="shrink-0 text-slate-500 hover:text-white transition-colors text-xs px-2 py-1 rounded bg-slate-700 hover:bg-slate-600"
              >
                {copied === 'import' ? '✓' : 'Copy'}
              </button>
            </div>
          </div>

          <div>
            <p className="text-slate-400 text-xs mb-2 uppercase tracking-wider font-medium">Usage</p>
            <div className="bg-slate-800 rounded-lg p-3 flex items-center justify-between gap-2">
              <code className="text-green-300 text-xs font-mono break-all">{usageSnippet}</code>
              <button
                onClick={() => copy(usageSnippet, 'usage')}
                className="shrink-0 text-slate-500 hover:text-white transition-colors text-xs px-2 py-1 rounded bg-slate-700 hover:bg-slate-600"
              >
                {copied === 'usage' ? '✓' : 'Copy'}
              </button>
            </div>
          </div>

          <div>
            <p className="text-slate-400 text-xs mb-2 uppercase tracking-wider font-medium">Preview</p>
            <div className="flex items-end gap-6 py-2">
              {[6, 8, 10, 12, 16].map(size => (
                <div key={size} className="flex flex-col items-center gap-1">
                  <FinancialFlagIcon icon={icon.key} style={{ height: size * 4, width: size * 4 }} />
                  <span className="text-slate-500 text-xs">{size * 4}px</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 py-3 border-t border-slate-700 flex justify-end">
          <button
            onClick={() => copy(`import FinancialFlagIcon from "financial-flag-icons";\n\n<FinancialFlagIcon icon="${icon.key}" className="h-10 w-10" />`, 'full')}
            className="bg-blue-600 hover:bg-blue-500 text-white text-sm font-medium px-4 py-2 rounded-lg transition-colors"
          >
            {copied === 'full' ? '✓ Copied!' : 'Copy All'}
          </button>
        </div>
      </div>
    </div>
  );
}

// ── Main App ──────────────────────────────────────────────────────────────────
function App() {
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('all');
  const [selected, setSelected] = useState(null);
  const inputRef = useRef(null);

  // Global "/" shortcut to focus search
  useEffect(() => {
    const handler = (e) => {
      if (e.key === '/' && document.activeElement !== inputRef.current) {
        e.preventDefault();
        inputRef.current?.focus();
      }
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, []);

  const filtered = ALL_ICONS.filter(icon => {
    const matchesSearch = search === '' || icon.key.includes(search.toLowerCase());
    const matchesCategory = category === 'all' || icon.category === category;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen flex flex-col">
      {/* ── Header ── */}
      <header className="sticky top-0 z-40 backdrop-blur-md bg-slate-950/80 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col sm:flex-row items-center gap-4">
          {/* Logo / title */}
          <a href="https://www.npmjs.com/package/financial-flag-icons" target="_blank" rel="noreferrer" className="flex items-center gap-2 shrink-0">
            <FinancialFlagIcon icon="eurusd" className="h-8 w-8" />
            <span className="text-white font-bold text-lg">financial-flag-icons</span>
            <span className="text-slate-500 text-xs bg-slate-800 px-2 py-0.5 rounded-full">v1.1.2</span>
          </a>

          {/* Search */}
          <div className="flex-1 w-full">
            <div className="relative">
              <svg className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-4.35-4.35M17 11A6 6 0 1 1 5 11a6 6 0 0 1 12 0z" />
              </svg>
              <input
                ref={inputRef}
                value={search}
                onChange={e => setSearch(e.target.value)}
                placeholder="Search icons…  Press / to focus"
                className="w-full bg-slate-800 border border-slate-700 focus:border-blue-500 rounded-xl py-2 pl-9 pr-10 text-white placeholder:text-slate-500 outline-none text-sm transition-colors"
              />
              {search && (
                <button onClick={() => setSearch('')} className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white text-lg leading-none">×</button>
              )}
            </div>
          </div>

          {/* NPM / GitHub links */}
          <div className="flex items-center gap-3 shrink-0 text-slate-400">
            <a href="https://www.npmjs.com/package/financial-flag-icons" target="_blank" rel="noreferrer" className="hover:text-white transition-colors text-sm">npm</a>
            <span>·</span>
            <a href="https://github.com/thedivinez/financial-flag-icons" target="_blank" rel="noreferrer" className="hover:text-white transition-colors text-sm">GitHub</a>
          </div>
        </div>
      </header>

      {/* ── Hero / Usage strip ── */}
      <div className="bg-slate-900/60 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 py-6 flex flex-col md:flex-row items-start md:items-center gap-6">
          <div className="flex-1">
            <h1 className="text-white font-bold text-2xl mb-1">418+ Financial Icons for React</h1>
            <p className="text-slate-400 text-sm">Forex pairs · Crypto coins · Stocks · Commodities. Click any icon to copy usage code.</p>
          </div>
          <div className="bg-slate-800 rounded-xl p-4 font-mono text-xs leading-relaxed shrink-0 w-full md:w-auto">
            <p className="text-slate-500 mb-1"># Install</p>
            <p className="text-green-400">npm install financial-flag-icons</p>
            <p className="text-slate-500 mt-3 mb-1"># Import & use</p>
            <p className="text-blue-300">import FinancialFlagIcon from <span className="text-yellow-300">"financial-flag-icons"</span>;</p>
            <p className="text-slate-300 mt-1">{'<'}FinancialFlagIcon <span className="text-purple-300">icon</span>=<span className="text-yellow-300">"btc"</span> <span className="text-purple-300">className</span>=<span className="text-yellow-300">"h-10 w-10"</span> {'/>'}</p>
          </div>
        </div>
      </div>

      {/* ── Category tabs ── */}
      <div className="sticky top-[73px] z-30 bg-slate-950/90 backdrop-blur border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex gap-1 overflow-x-auto py-2 scrollbar-none">
            {CATEGORIES.map(cat => (
              <button
                key={cat.id}
                onClick={() => setCategory(cat.id)}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-medium whitespace-nowrap transition-colors
                  ${category === cat.id
                    ? 'bg-blue-600 text-white'
                    : 'text-slate-400 hover:text-white hover:bg-slate-800'
                  }`}
              >
                {cat.label}
                <span className={`text-xs px-1.5 py-0.5 rounded-full ${category === cat.id ? 'bg-blue-500 text-blue-100' : 'bg-slate-700 text-slate-400'}`}>
                  {cat.count}
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* ── Results ── */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 py-6">
        {/* Result count */}
        <p className="text-slate-500 text-sm mb-4">
          {filtered.length === 0
            ? 'No icons found'
            : `${filtered.length} icon${filtered.length !== 1 ? 's' : ''}${search ? ` matching "${search}"` : ''}`}
        </p>

        {filtered.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-24 text-slate-600">
            <svg className="h-16 w-16 mb-4 opacity-40" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <p className="text-lg">No icons match <span className="text-slate-400">"{search}"</span></p>
            <button onClick={() => setSearch('')} className="mt-3 text-blue-400 hover:text-blue-300 text-sm">Clear search</button>
          </div>
        ) : (
          <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-10 xl:grid-cols-12 gap-1">
            {filtered.map(icon => (
              <IconCard key={icon.key + icon.category} icon={icon} onSelect={setSelected} />
            ))}
          </div>
        )}
      </main>

      {/* ── Footer ── */}
      <footer className="border-t border-slate-800 py-6 text-center text-slate-500 text-xs">
        <p>
          financial-flag-icons · MIT License ·{' '}
          <a href="https://github.com/thedivinez/financial-flag-icons" className="hover:text-white transition-colors" target="_blank" rel="noreferrer">GitHub</a>
          {' '}·{' '}
          <a href="https://www.npmjs.com/package/financial-flag-icons" className="hover:text-white transition-colors" target="_blank" rel="noreferrer">npm</a>
        </p>
      </footer>

      {/* ── Modal ── */}
      {selected && <Modal icon={selected} onClose={() => setSelected(null)} />}
    </div>
  );
}

export default App;
