/**
 *
 * @param list {number[]}
 * @param n {number} amount of factors
 * @returns {number}
 */
export function getMaxPartialProdukt(list, n) {
    const partialProdukts = list.map(x => Array.from({length: n}, (_, i) => i == 0 ? x : null));

    const getProdukt = (from, steps) => {
        if (partialProdukts[from][steps - 1] == null) {
            partialProdukts[from][steps - 1] = getProdukt(from - 1, steps - 1) * getProdukt(from, 1);
        }
        return partialProdukts[from][steps - 1];
    }

    let max = 1;
    for (let i = n; i < list.length; i++) {
        max = Math.max(max, getProdukt(i, n));
    }
    return max;

}

export function getMaxPathInTriangle(triangleArr) {
    let maxRows = [triangleArr[0]];
    const getMaxRow = (i) => {
        if (!maxRows[i]) {
            const lastRow = getMaxRow(i - 1);
            maxRows[i] = triangleArr[i].map((x, j) => {
                return x + (j == 0 ? lastRow[j] : (j == triangleArr[i].length - 1 ? lastRow[j - 1] : Math.max(lastRow[j], lastRow[j - 1])));
            });
        }
        return maxRows[i];
    }
    const m = getMaxRow(triangleArr.length - 1).reduce((a, b) => Math.max(a, b), 0);
    return m;
}