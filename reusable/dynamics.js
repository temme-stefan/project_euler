/**
 *
 * @param list {number[]}
 * @param n {number} amount of factors
 * @returns {number}
 */
export function getMaxPartialProdukt(list,n){
    const partialProdukts=list.map(x=>Array.from({length:n},(_,i)=>i==0?x:null));

    const getProdukt = (from,steps)=>{
        if (partialProdukts[from][steps-1]==null){
            partialProdukts[from][steps-1] = getProdukt(from-1,steps-1) * getProdukt(from,1);
        }
        return partialProdukts[from][steps-1];
    }

    let max = 1;
    for (let i=n;i<list.length;i++){
        max = Math.max(max,getProdukt(i,n));
    }
    return max;

}