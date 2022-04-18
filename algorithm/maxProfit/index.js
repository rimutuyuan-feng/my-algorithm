/**
 * @param {number[]} prices
 * @return {number}
 */
 var maxProfit = function(prices) {
    let minPrice=prices[0]
    let max=0
    const length=prices.length
    for(let i=1;i<length;++i){
        minPrice=Math.min(minPrice,prices[i])
        max=Math.max(max,prices[i]-minPrice)
    }
    return max
};