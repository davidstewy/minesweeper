let board = [];
let Board = function (columns, rows) {

    // let board = [];

    for (let y = 0; y < rows; y++) {
        let row = [];

        for (let x = 0; x < columns; x++) {
            let tile = new Tile(x, y);
            row.push(tile);
        }

        board.push(row);
    }
}

Board(9, 9);
console.table(board);