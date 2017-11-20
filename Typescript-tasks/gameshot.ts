class Game {
    private name: string;
    shot: Shot;

    constructor(name: string) {
        this.name = name;
    }

    countScore(): number {
        return 1;
    }

    getName() {
        return this.name;
    }
}

class Shot {
    private stricked: boolean;
    goal: Goal;
    game: Game;
}


class Goal {
    private coins: number;
    shot: Shot[];
}

let game = new Game("Game");