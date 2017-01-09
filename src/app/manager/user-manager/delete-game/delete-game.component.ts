import { Component, OnInit } from '@angular/core';
import { BDService } from '../../bd.service';
import { Game, Category } from '../../../shared/game/game';


@Component({
  selector: 'delete-game',
  templateUrl: './delete-game.component.html',
  styleUrls: ['./delete-game.component.css']
})
export class DeleteGameComponent implements OnInit {

  private name: string;
  private deleteGame: Game;
  private db: any;

  constructor(private dataBase: BDService) {
    this.db = dataBase.connect;
  }

  ngOnInit() {

  }

  onSubmit() {

    this.deleteGame = new Game(this.name, 'test', Category.ACTION);

    let gameBD = this.db.getGame(this.deleteGame);

    if (gameBD !== null && gameBD !== undefined) 
    {
      this.db.remove(gameBD);
      console.log("Juego borrado de la BD");
    } 
    else 
    {
      console.log("Juego no existe");
    }

  }
}
