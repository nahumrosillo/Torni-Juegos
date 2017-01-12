import { Injectable, OnInit } from '@angular/core';
import { Memory } from '../bd/memory';
import { BD } from '../bd/bd';
import { User, Rol, Genre } from '../shared/user/user';
import { Game, Category } from '../shared/game/game';

@Injectable()
export class BDService implements OnInit {

    static isCreate: boolean = false;

    ngOnInit() {
        console.log("Memory: OnInit");
    }

  constructor() {

      if (!BDService.isCreate) 
      {
          BDService.isCreate = true;



     console.log("Memory: Constructor");

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

    let g: Game;
    g = new Game("Super Mario Bros", "El Juegazo de Nintendo", Category.ACTION);
    Memory.getInstance.add(g);
    
    let g2: Game;
    g2 = new Game("Ajedrez", "Un juego de Mesa", Category.BOARD_GAME);
    Memory.getInstance.add(g2);

    Memory.getInstance.add(userSuperAdmin);
    Memory.getInstance.add(admin);
    Memory.getInstance.add(sponsor);
    Memory.getInstance.add(player);
}

  }

  get connect(): BD {  	
  	return Memory.getInstance;
  }
}