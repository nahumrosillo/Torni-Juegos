import { Component, OnInit } from '@angular/core';
import { BDService } from '../../bd.service';
import { UserLoggedService } from '../../userLogged.service';
import { Game, Category } from '../../../shared/game/game';


@Component({
  selector: 'new-game',
  templateUrl: './new-game.component.html',
  styleUrls: ['./new-game.component.css']
})
export class NewGameComponent implements OnInit {

  private name: string;
  private description: string;
  private category: Category;
  private newGame: Game;
  private db: any;

  constructor(private dataBase: BDService) {
    this.db = dataBase.connect;
  }

  ngOnInit() {

  }

  onSubmit() {

    this.newGame = new Game(this.name, this.description, this.category);
    
    let gameBD = this.db.getGame(this.newGame);

    if (gameBD === null || gameBD === undefined) 
    {
      this.db.add(this.newGame);
      console.log("Juego agregado a la BD");
    } 
    else 
    {
      console.log("Juego ya existe en la BD");
    }

  }
}
