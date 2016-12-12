import { Iterator } from './iterator';

export class RelativePositionIterator implements Iterator
{
    private index: any = this.begin();
    private N: number;
    private expo: number = 2;
    private collection: any;

    constructor(collection: any) {
        this.collection = collection;
        this.N = this.collection.length;
    }

    begin(): any {
        return this.collection[this.N/this.expo];
    }
    next(): any {
        if(this.index != 0)
        {
            if(this.N/(this.expo/2) <= this.index)
            {
                this.expo *= 2;
                this.index = this.N/this.expo;
            }
        }
        return this.collection[this.index];
    }

    hasNext(): boolean{
        if(this.index == 0)
            return false;
        else
            return true;
    }

    end(): any {
        return this.collection[0];
    }

    current(): any {
      return this.collection[this.index];
    }
}