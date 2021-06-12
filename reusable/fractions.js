import {ggT, kgV} from "./myMath.js";

export class Fraction {

    /**
     * @type {number}
     */
    numerator = 0;
    /**
     * @type {number}
     */
    denominator = 1;

    /**
     * @param numerator {number}
     * @param denominator {number}
     */
    constructor(numerator, denominator = 1) {
        this.numerator = numerator;
        this.denominator = denominator;
        this._shorten();
    }


    _shorten() {
        if (this.denominator == 0) {
            throw "Denominator Zero";
        }
        const ggt = ggT(this.numerator, this.denominator);
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
        const kgv = kgV(this.denominator, denominator);
        this.numerator = this.numerator * kgv / this.denominator + numerator * kgv / denominator;
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

