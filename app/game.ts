import { getValue } from './utility'
import { Result } from './result';
import { Player } from './player';
import { Scoreboard as ResultPanel } from './scoreboard';

export class Game {
    private scoreboard: ResultPanel = new ResultPanel();
    // player: Player;
    // problemCount: number;
    // factor: number;

    constructor(public player: Player, public problemCount: number, public factor: number) {
        // this.player = newPlayer;
        // this.problemCount = numOfProblems;
        // this.factor = mulFactor;
    }

    displayGame(): void {
        // create the html for the current game
        let gameForm: string = '';

        for (let i = 1; i <= this.problemCount; i++) {
            gameForm += `<div class="form-group">
                            <label for="answer${i}" class="col-sm-2 control-label">
                                ${this.factor} x ${i} =
                            </label>
                            <div class="col-sm-1">
                                <input type="text" class="form-control" id="answer${i}" size="5">
                            </div>
                        </div>
                        `;
        }

        // add the new game to the page
        const gameElement: HTMLElement = <HTMLElement>document.getElementById('game');
        gameElement.innerHTML = gameForm;

        // enable the calculate score button
        document.getElementById('calculate')!.removeAttribute('disabled');
    }

    calculateScore(): void {
        let score: number = 0;

        // loop through the text boxes and calculate the number that are correct
        for (let i = 1; i <= this.problemCount; i++) {
            const answer: number = Number(getValue('answer' + i));

            if (i * this.factor === answer) {
                score++;
            }
        }

        // create a new result object to pass to the scoreboard
        const result: Result = {
            factor: this.factor,
            playerName: this.player.name,
            problemCount: this.problemCount,
            score: score,
        };

        // add the result and update the scoreboard
        this.scoreboard.addResult(result);
        this.scoreboard.updatedScoreboard();

        // disabled the calculate score button
        document.getElementById('calculate')!.setAttribute('disabled', 'true');
    }
}
