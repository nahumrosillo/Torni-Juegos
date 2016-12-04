import { Injectable } from '@angular/core';
import { Memory } from '../bd/memory';
import { BD } from '../bd/bd';
import { User, Rol, Genre } from '../shared/user/user';

@Injectable()
export class BDService {

  get connect(): BD {

  	let userSuperAdmin = new User();
  	let date = new Date();
  	date.setFullYear(1992, 6, 2);
  	userSuperAdmin.setBirthDate = date;
  	userSuperAdmin.setDni = '32079429H';
  	userSuperAdmin.setName = 'Nahum';
  	userSuperAdmin.setPassword = 'root';
  	userSuperAdmin.setRol = Rol.SUPERADMIN;
  	userSuperAdmin.setGenre = Genre.MALE;
  	userSuperAdmin.setNick = 'root';

  	Memory.getInstance.add(userSuperAdmin);
  	
  	return Memory.getInstance;
  }
}