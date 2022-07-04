export interface INews {
    status: string;
    totalResults:number;
    articles: IArticle[]
}
export type INewsSaved = Array<Array<INews>>
export interface ICandlesticks {
    any: ICandlestick[]
}
export interface ICandlestick {
    time: string;
    close: number;
    closetime: number;
    high: number;
    ignore: number;
    low: number;
    notrades: number;
    open: number;
    quote_a_vol: number;
    takerbuy_base: number;
    takerbuy_quote: number;
    volume: number;
}
export type ICandlestickResponse = Array<Array< number | string>>
export interface IArticle {
    source: {
        id?: string;
        name: string;
    },
    author: string;
    title: string;
    description: string;
    url: string;
    urlToImage: string;
    publishedAt: string;
    content: string;
}
export interface IArticles {
    articles: IArticle[]
    
}
export type ISavedNews = Array<string>;

export interface IMarketCap {
    status: {
        timestamp: string;
        error_code: number;
        error_message: "";
        elapsed: number;
        credit_count: number;
        notice:string;
        },
    data: {
        active_cryptocurrencies: number;
        total_cryptocurrencies: number;
        active_market_pairs: number;
        active_exchanges: number;
        total_exchanges: number;
        eth_dominance: number;
        btc_dominance: number;
        eth_dominance_yesterday: number;
        btc_dominance_yesterday: number;
        eth_dominance_24h_percentage_change: number;
        btc_dominance_24h_percentage_change: number;
        defi_volume_24h: number;
        defi_volume_24h_reported: number;
        defi_market_cap: number;
        defi_24h_percentage_change: number;
        stablecoin_volume_24h: number;
        stablecoin_volume_24h_reported: number;
        stablecoin_market_cap: number;
        stablecoin_24h_percentage_change: number;
        derivatives_volume_24h: number;
        derivatives_volume_24h_reported: number;
        derivatives_24h_percentage_change: number;
        quote: {
        quote: {
        USD: {
        total_market_cap: number;
        total_volume_24h: number;
        total_volume_24h_reported: number;
        altcoin_volume_24h: number;
        altcoin_volume_24h_reported: number;
        altcoin_market_cap: number;
        defi_volume_24h: number;
        defi_volume_24h_reported: number;
        defi_24h_percentage_change: number;
        defi_market_cap: number;
        stablecoin_volume_24h: number;
        stablecoin_volume_24h_reported: number;
        stablecoin_24h_percentage_change: number;
        stablecoin_market_cap: number;
        derivatives_volume_24h: number;
        derivatives_volume_24h_reported: number;
        derivatives_24h_percentage_change: number;
        last_updated: string;
        total_market_cap_yesterday: number;
        total_volume_24h_yesterday: number;
        total_market_cap_yesterday_percentage_change: number;
        total_volume_24h_yesterday_percentage_change: number;
        }
        },
        last_updated: string;
        }
        },

    }   