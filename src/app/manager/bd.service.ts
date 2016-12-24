import { Injectable } from '@angular/core';
import { Memory } from '../bd/memory';
import { BD } from '../bd/bd';
import { User, Rol, Genre } from '../shared/user/user';

@Injectable()
export class BDService {


  constructor() {

    let date = new Date();
    date.setFullYear(1992, 6, 2);

    let userSuperAdmin = new User();
    userSuperAdmin.setBirthDate = date;
    userSuperAdmin.setDni = '32079329H';
    userSuperAdmin.setName = 'Nahum';
    userSuperAdmin.setPassword = 'root';
    userSuperAdmin.setRol = Rol.SUPERADMIN;
    userSuperAdmin.setGenre = Genre.MALE;
    userSuperAdmin.setNick = 'root';

    let admin = new User();
    admin.setBirthDate = date;
    admin.setDni = '32079426H';
    admin.setName = 'Nahum';
    admin.setPassword = 'admin';
    admin.setRol = Rol.ADMINISTRATOR;
    admin.setGenre = Genre.FEMALE;
    admin.setNick = 'admin';

    let sponsor = new User();
    sponsor.setBirthDate = date;
    sponsor.setDni = '32079323H';
    sponsor.setName = 'Nahum';
    sponsor.setPassword = 'sponsor';
    sponsor.setRol = Rol.SPONSOR;
    sponsor.setGenre = Genre.MALE;
    sponsor.setNick = 'sponsor';

    let player = new User();
    player.setBirthDate = date;
    player.setDni = '32070000H';
    player.setName = 'Nahum';
    player.setPassword = 'player';
    player.setRol = Rol.PLAYER;
    player.setGenre = Genre.FEMALE;
    player.setNick = 'player';

    Memory.getInstance.add(userSuperAdmin);
    Memory.getInstance.add(admin);
    Memory.getInstance.add(sponsor);
    Memory.getInstance.add(player);

  }

  get connect(): BD {  	
  	return Memory.getInstance;
  }
}