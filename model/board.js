import { Tile } from './tile.js';

export class Board {
    constructor(size) {
        this.cells = Array(size).fill().map(() => Array(size));
        for (let row = 0; row < size; row++) {
            for (let col = 0; col < size; col++) {
                this.cells[row][col] = new Tile(row * size + col + 1);
            }
        }
        this.cells[size - 1][size - 1].isEmpty = true;
        this.empty = { row: size - 1, col: size - 1 };
        this.size = size;
    }

    shuffle(n, cap) {
        let moves = 0, total = 0;
        for (; moves < n && total < cap; total++) {
            if (([
                this.up.bind(this),
                this.down.bind(this),
                this.left.bind(this),
                this.right.bind(this),
            ][Math.floor(4 * Math.random())])()) {
                moves++;
            }
        }
    }

    up() {
        if (this.empty.row != this.size - 1) {
            this.moveEmpty({ rows: 1, cols: 0 });
            return true;
        }
    }

    down() {
        if (this.empty.row != 0) {
            this.moveEmpty({ rows: -1, cols: 0 });
            return true;
        }
    }

    left() {
        if (this.empty.col != this.size - 1) {
            this.moveEmpty({ rows: 0, cols: 1 });
            return true;
        }
    }

    right() {
        if (this.empty.col != 0) {
            this.moveEmpty({ rows: 0, cols: -1 });
            return true;
        }
    }

    moveEmpty(by) {
        const srcRow = this.empty.row;
        const srcCol = this.empty.col;
        const destRow = srcRow + by.rows;
        const destCol = srcCol + by.cols;
        let emptyTile = this.cells[srcRow][srcCol];
        this.cells[srcRow][srcCol] = this.cells[destRow][destCol];
        this.cells[destRow][destCol] = emptyTile;
        this.empty = { row: destRow, col: destCol };
    }
}
