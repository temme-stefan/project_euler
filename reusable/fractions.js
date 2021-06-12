import {ggT, kgV} from "./myMath.js";

export class Fraction {

    /**
     * @type {bigint}
     */
    numerator = BigInt(0);
    /**
     * @type {bigint}
     */
    denominator = BigInt(1);

    /**
     * @param numerator {number}
     * @param denominator {number}
     */
    constructor(numerator, denominator = 1) {
        this.numerator = BigInt(numerator);
        this.denominator = BigInt(denominator);
        this._shorten();
    }


    static _abs(n){
        return n<0?-n:n;
    }

    static _ggT(a,b){
            if (a == 0) {
                return Fraction._abs(b);
            }
            if (b == 0) {
                return Fraction._abs(a);
            }
            while (b != 0) {
                const h = a % b;
                a = b;
                b = h;
            }
            return Fraction._abs(a);
    }

    static _kgv(a,b){
        return a/Fraction._ggT(a,b)*b;
    }

    _shorten() {
        if (this.denominator == 0) {
            throw "Denominator Zero";
        }
        const ggt = Fraction._ggT(this.numerator, this.denominator);
        this.numerator /= ggt;
        this.denominator /= ggt;
    }

    /**
     * @param {Fraction}
     * @return {Fraction}
     */
    mul({numerator, denominator}) {
        this.numerator *= numerator;
        this.denominator *= denominator;
        this._shorten();
        return this;
    }

    /**
     * @param {Fraction}
     * @returns {Fraction}
     */
    div({numerator, denominator}) {
        this.mul({numerator: denominator, denominator: numerator});
        return this;
    }

    /**
     * @param {Fraction}
     * @returns {Fraction}
     */
    add({numerator, denominator}) {
        const kgv = Fraction._kgv(this.denominator, denominator);
        this.numerator = this.numerator * (kgv / this.denominator) + numerator * (kgv / denominator);
        this.denominator = kgv;
        this._shorten();
        return this;
    }

    /**
     * @param {Fraction}
     * @returns {Fraction}
     */
    sub({numerator, denominator}) {
        this.add({nominator: -numerator, denominator})
        return this;
    }

    toString() {
        return `${this.numerator}/${this.denominator}`;
    }


}

