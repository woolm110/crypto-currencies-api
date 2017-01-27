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
  DASH: {
    exchange: 'poloniex',
    hasNativeCurrency: true,
    pair: 'USDT_DASH',
    intermediateCurrency: null
  },
  MAID: {
    exchange: 'poloniex',
    hasNativeCurrency: false,
    pair: 'BTC_MAID',
    intermediateCurrency: 'BTC'
  },
  PASC: {
    exchange: 'poloniex',
    hasNativeCurrency: false,
    pair: 'BTC_PASC',
    intermediateCurrency: 'BTC'
  },
  BCY: {
    exchange: 'poloniex',
    hasNativeCurrency: false,
    pair: 'BTC_BCY',
    intermediateCurrency: 'BTC'
  },
  NXC: {
    exchange: 'poloniex',
    hasNativeCurrency: false,
    pair: 'BTC_NXC',
    intermediateCurrency: 'BTC'
  },
};

export { cryptoCurrencyMap };
