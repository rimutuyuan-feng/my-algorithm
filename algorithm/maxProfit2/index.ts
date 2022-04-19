function maxProfit(prices: number[]): number {
    let result=0
    let minPrice=prices[0]
    for(let i=1;i<prices.length;++i){
        if(prices[i]<prices[i-1]){
            result+=prices[i-1]-minPrice
            minPrice=prices[i]
        }
    }
    return result+prices[prices.length-1]-minPrice
};