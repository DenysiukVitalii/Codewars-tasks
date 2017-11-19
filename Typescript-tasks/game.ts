class Game {
    private name: string;
    plays: Score[];
    constructor(name: string) {
        this.name = name;
        this.plays = [];
    }

    countScore(player: Player): number {
        let score = 0;
        this.plays.forEach(i => {
            if (i.gamer === player) score = i.getPoints()
                                             .reduce((a, b) => a + b);
        });
        return score;
    }

    getName() {
        return this.name;
    }
}

class Score {
    private points: number[];
    session: Game;
    gamer: Player;

    constructor(points: number[], session: Game, gamer: Player) {
        this.points = points;
        this.session = session;
        this.gamer = gamer;
    }

    getPoints() {
        return this.points;
    }
}

class Player {
    private name: string;
    plays: Score[];

    constructor(name: string) {
        this.name = name;
        this.plays = [];
    }

    getName(): string {
        return this.name;
    }
}

let game1 = new Game("Game1");
let game2 = new Game("Game2");
let player1 = new Player("Mike");
let player2 = new Player("John");

let scoreOfGame1Player1 = new Score([34,46,62,38], game1, player1);
player1.plays.push(scoreOfGame1Player1); // 180
game1.plays.push(scoreOfGame1Player1); 

let scoreOfGame2Player1 = new Score([34,46,62], game2, player1);
player1.plays.push(scoreOfGame2Player1); // 142
game2.plays.push(scoreOfGame2Player1); 

let scoreOfGame1Player2 = new Score([52,63,26,71], game1, player2);
player2.plays.push(scoreOfGame1Player2); // 212
game1.plays.push(scoreOfGame1Player2); 

let scoreOfGame2Player2 = new Score([52,63,71], game2, player2);
player2.plays.push(scoreOfGame2Player2); // 186
game2.plays.push(scoreOfGame2Player2); 

console.log("\tGame - 1");
console.log(player1.getName() + " " +  game1.countScore(player1)); 
console.log(player2.getName() + " " +  game1.countScore(player2));

console.log("\tGame - 2");
console.log(player1.getName() + " " +  game2.countScore(player1)); 
console.log(player2.getName() + " " +  game2.countScore(player2)); 

console.log(player1.plays.map(i => {
    return {
        game: i.session.getName(),
        points: i.getPoints(),
        result: i.session.countScore(i.gamer)
    }
}));




