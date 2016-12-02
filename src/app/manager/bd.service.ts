import { Injectable } from '@angular/core';
import { Memory } from '../bd/memory';
import { BD } from '../bd/bd';

@Injectable()
export class BDService {

  instanciar(): BD {
  	return Memory.getInstance;
  }
}