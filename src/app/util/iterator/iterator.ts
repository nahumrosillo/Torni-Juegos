export interface Iterator
{
    begin(): any;
    next(): any;
    end(): any;
    hasNext(): boolean;
    current(): any;
}