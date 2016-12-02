import { Injectable } from '@angular/core';
import { Memory } from '../bd/memory';
import { BD } from '../bd/bd';

@Injectable()
export class BDService {

  get connect(): BD {
  	return Memory.getInstance;
  }
}