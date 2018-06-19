export class MagicString {
    private _mainArray: Array<string>;
    private _offsetArray: Array<string>;
    private _offset: number;
    
    constructor(params: [{strLength:number, charCodeFrom: number}]) {
        this._mainArray = this.generateStr(params);
    }

    public setOffset(offset: number): Array<string> {
        let res = this._mainArray.concat();
        let modOffset = offset % this._mainArray.length;
        this._offset = offset;
        
        for (let i = 0; i < modOffset; i++) {
          res.push(res.shift());
        }

        return this._offsetArray = res;
    }

    public getOffsetChar(char) {
        if (this._mainArray.indexOf(char) < 0) {
            return char;
        } else {
            return this._offsetArray[this._mainArray.indexOf(char)];
        }
    }
      
    private generateStr(params:[{strLength: number, charCodeFrom: number}]): Array<string> { 
        let arr = params.map(param => new Array(param.strLength).fill(1).map((_, i) => String.fromCharCode(param.charCodeFrom + i)));
        return arr.reduce((accumulator, currentValue) => accumulator.concat(currentValue));
    }

    get mainArray(): Array<string> {
        return this._mainArray || [];
    }

    get offsetArray(): Array<string> {
        return this._offsetArray || [];
    }
}