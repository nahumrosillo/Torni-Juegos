import { Iterator } from './iterator';

export class IndexIterator implements Iterator
{
    private index: number = 0;
    private collection: any;

    constructor(collection: any) {
        this.collection = collection;
    }

    begin(): any {
        return this.collection[0];
    }
    next(): any {
       return this.collection[this.index++]; 
    }

    hasNext(): boolean{
        if(this.index < this.collection.length-1)
            return true;
        else
            return false;
    }

    end(): any {
        return this.collection[this.collection.length-1];
    }

    current(): any {
      return this.collection[this.index];
    }
}