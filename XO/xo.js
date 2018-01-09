'use strict'
var lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

$(function() {
    let cells = $('td');
    let result = $('.result');
    var oddMoveNr = false;

    cells.each((i, cell) => {
        cell.playValue = null;
    })


    cells.click(function(){
        oddMoveNr = !oddMoveNr;
        var playValue = oddMoveNr ? 'X' : 'O';
        if (!this.playValue) {
            $(this).html(playValue);
            this.playValue = playValue;
            judgeResult();
        }
    });

    function judgeResult() {
        let draws = [];
        for (let i = 0; i < lines.length; i++) {
            let res = checkLine(lines[i]);
            switch (res) {
                case 'X':
                    result.html('X wins!');
                    return;
                case 'O':
                    result.html('O wins!');
                    return;
                case 'continue':
                    continue;
                case 'draw':
                    draws.push('draw');
            }
        }

        if (draws.length === lines.length) {
            result.html('DRAW!');
            return;
        }
    }

    function checkLine(line) {
        var values = line.map(el => cells[el].playValue);

        if (values[0] === values[1] && values[0] === values[2] && values[0] !== null) {
            return values[0];
        }

        // if any two played spaces on a line are different, that line cannot be a winning line
        // for either of the players, so it counts towards the 'draw' state.
        var checked = values.filter(val => val !== null);

        var val = checked[0];
        for (let i = 1; i < checked.length; i++) {
            if (checked[i] !== checked[0]) {
                return 'draw';
            }
        }

        return 'continue';
    }

    $('button').click(reset);

    function reset() {
        cells.html('');
        cells.each((i, cell) => {
            cell.playValue = null;
        })
        result.html('');
        oddMoveNr = false;
    }
});
