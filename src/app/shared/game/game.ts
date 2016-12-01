import { Tournament } from '../tournament/tournament';
import { Iterator } from './../../util/iterator/iterator';
import { IndexIterator} from './../../util/iterator/indexIterator';
import { Aggregator } from './../../util/iterator/aggregator';

export class Game implements Aggregator {

	private name: string;
	private description: string;
	private tournament: Array<Tournament>

	constructor(name?: string) {
		
		if (name == null) {
			this.name = 'null';
		} else {
			this.name = name;
		}

		this.description = 'Empty description';
		this.tournament = new Array<Tournament>();
	}

	get getName(): string {
		return this.name;
	}

	get getDescription(): string {
		return this.description;
	}

	addTournament(tournament: Tournament) {

		let item = this.tournament.indexOf(tournament);

		if (item == -1) {
			this.tournament.push(tournament);
		}
	}

	get lengthTournament(): number {
		return this.tournament.length;
	}

	// iterator
    iterator(): Iterator {
        return new IndexIterator(this.tournament);
    }
}
