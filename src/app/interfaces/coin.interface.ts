export interface ICoin  {
    status: string;
    data: {
        stats: {
            total: number;
            totalCoins: number;
            totalMarkets: number;
            totalExchanges: number;
            totalMarketcap: number;
            total24hVolume: number; 
        },
        coins: [
            uuid: string,
            symbol: string,
            name:string,
            color:string,
            iconUrl:string,
            marketCap:number,
            price:number,
            btcPrice:number,
            listedAt:number,
            change:number,
            rank:number,
            sparkline: [
            number,
                number,
                number,
                number,
                number,
                number,
                number,
                number,
                number,
                number,
                number,
                number,
                ],
            coinrankingUrl:string,
            todayVolume:number,
            ]
    }
}