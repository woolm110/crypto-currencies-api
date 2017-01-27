/*
  ```
  Top 20 from coinmarketcap by market cap (17/1/2017)

  1 Bitcoin  √
  2	Ethereum √
  3	Ripple  √
  4	Litecoin √
  5	Monero √
  6	Ethereum Classic √
  7	Dash √
  8	MaidSafeCoin √
  9	Augur √
  10 Steem √
  11 NEM √
     Iconomi x - not on polo
  12 Factom √
     Waves x - not on polo
  13 Dogecoin √
  14 Zcash √
     DigixDAO x - not on polo
  15 Stellar √
  16 Lisk √
     Tether x - not on polo
  17 BitShares √
  18 ShadowCash √
  19 GameCredits √
  20 Ardor √
  ```
*/
const cryptoCurrencyMap = {
  BTC: {
    exchange: 'gdax',
    hasNativeCurrency: true,
    pair: 'BTC-USD',
    intermediateCurrency: null
  },
  ETH: {
    exchange: 'gdax',
    hasNativeCurrency: true,
    pair: 'ETH-USD',
    intermediateCurrency: null
  },
  LTC: {
    exchange: 'gdax',
    hasNativeCurrency: true,
    pair: 'LTC-USD',
    intermediateCurrency: null
  },
  REP: {
    exchange: 'poloniex',
    hasNativeCurrency: true,
    pair: 'USDT_REP',
    intermediateCurrency: null
  },
  ZEC: {
    exchange: 'poloniex',
    hasNativeCurrency: true,
    pair: 'USDT_ZEC',
    intermediateCurrency: null
  },
  XMR: {
    exchange: 'poloniex',
    hasNativeCurrency: true,
    pair: 'USDT_XMR',
    intermediateCurrency: null
  },
  ETC: {
    exchange: 'poloniex',
    hasNativeCurrency: true,
    pair: 'USDT_ETC',
    intermediateCurrency: null
  },
  XRP: {
    exchange: 'poloniex',
    hasNativeCurrency: true,
    pair: 'USDT_XRP',
    intermediateCurrency: null
  },
  DASH: {
    exchange: 'poloniex',
    hasNativeCurrency: true,
    pair: 'USDT_DASH',
    intermediateCurrency: null
  },
  STR: {
    exchange: 'poloniex',
    hasNativeCurrency: true,
    pair: 'USDT_STR',
    intermediateCurrency: null
  },
  LSK: {
    exchange: 'poloniex',
    hasNativeCurrency: false,
    pair: 'BTC_LSK',
    intermediateCurrency: 'BTC'
  },
  MAID: {
    exchange: 'poloniex',
    hasNativeCurrency: false,
    pair: 'BTC_MAID',
    intermediateCurrency: 'BTC'
  },
  FCT: {
    exchange: 'poloniex',
    hasNativeCurrency: false,
    pair: 'BTC_FCT',
    intermediateCurrency: 'BTC'
  },
  XEM: {
    exchange: 'poloniex',
    hasNativeCurrency: false,
    pair: 'BTC_XEM',
    intermediateCurrency: 'BTC'
  },
  STEEM: {
    exchange: 'poloniex',
    hasNativeCurrency: false,
    pair: 'ETH_STEEM',
    intermediateCurrency: 'ETH'
  },
  DOGE: {
    exchange: 'poloniex',
    hasNativeCurrency: false,
    pair: 'BTC_DOGE',
    intermediateCurrency: 'BTC'
  },
  SDC: {
    exchange: 'poloniex',
    hasNativeCurrency: false,
    pair: 'BTC_SDC',
    intermediateCurrency: 'BTC'
  },
  BTS: {
    exchange: 'poloniex',
    hasNativeCurrency: false,
    pair: 'BTC_BTS',
    intermediateCurrency: 'BTC'
  },
  GAME: {
    exchange: 'poloniex',
    hasNativeCurrency: false,
    pair: 'BTC_GAME',
    intermediateCurrency: 'BTC'
  },
  ARDR: {
    exchange: 'poloniex',
    hasNativeCurrency: false,
    pair: 'BTC_ARDR',
    intermediateCurrency: 'BTC'
  },
  PASC: {
    exchange: 'poloniex',
    hasNativeCurrency: false,
    pair: 'BTC_PASC',
    intermediateCurrency: 'BTC'
  },
};

export { cryptoCurrencyMap };
