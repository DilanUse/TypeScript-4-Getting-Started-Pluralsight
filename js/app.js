var Player = (function () {
    function Player() {
    }
    Player.prototype.formatName = function () {
        return this.name.toUpperCase();
    };
    return Player;
}());
var Utility = (function () {
    function Utility() {
    }
    Utility.getInputValue = function (elementID) {
        var inputElement = document.getElementById(elementID);
        return inputElement.value;
    };
    return Utility;
}());
var Scoreboard = (function () {
    function Scoreboard() {
        this.results = [];
    }
    Scoreboard.prototype.addResult = function (newResult) {
        this.results.push(newResult);
    };
    Scoreboard.prototype.updatedScoreboard = function () {
        var output = '<h2>Scoreboard</h2>';
        for (var index = 0; index < this.results.length; index++) {
            var result = this.results[index];
            output += '<h4>';
            output += "".concat(result.playerName, ": ").concat(result.score, " / ").concat(result.problemCount, " for factor ").concat(result.factor);
            output += '</h4>';
        }
        var scoresElement = document.getElementById('scores');
        scoresElement.innerHTML = output;
    };
    return Scoreboard;
}());
var Game = (function () {
    function Game(player, problemCount, factor) {
        this.player = player;
        this.problemCount = problemCount;
        this.factor = factor;
        this.scoreboard = new Scoreboard();
    }
    Game.prototype.displayGame = function () {
        var gameForm = '';
        for (var i = 1; i <= this.problemCount; i++) {
            gameForm += "<div class=\"form-group\">\n                            <label for=\"answer".concat(i, "\" class=\"col-sm-2 control-label\">\n                                ").concat(this.factor, " x ").concat(i, " =\n                            </label>\n                            <div class=\"col-sm-1\">\n                                <input type=\"text\" class=\"form-control\" id=\"answer").concat(i, "\" size=\"5\">\n                            </div>\n                        </div>\n                        ");
        }
        var gameElement = document.getElementById('game');
        gameElement.innerHTML = gameForm;
        document.getElementById('calculate').removeAttribute('disabled');
    };
    Game.prototype.calculateScore = function () {
        var score = 0;
        for (var i = 1; i <= this.problemCount; i++) {
            var answer = Number(Utility.getInputValue('answer' + i));
            if (i * this.factor === answer) {
                score++;
            }
        }
        var result = {
            factor: this.factor,
            playerName: this.player.name,
            problemCount: this.problemCount,
            score: score,
        };
        this.scoreboard.addResult(result);
        this.scoreboard.updatedScoreboard();
        document.getElementById('calculate').setAttribute('disabled', 'true');
    };
    return Game;
}());
var newGame;
document.getElementById('startGame').addEventListener('click', function () {
    var player = new Player();
    player.name = Utility.getInputValue('playername');
    var problemCount = Number(Utility.getInputValue('problemCount'));
    var factor = Number(Utility.getInputValue('factor'));
    newGame = new Game(player, problemCount, factor);
    newGame.displayGame();
    document.getElementById('calculate').addEventListener('click', function () {
        newGame.calculateScore();
    });
});
//# sourceMappingURL=app.js.map