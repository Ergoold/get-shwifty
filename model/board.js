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

    up() {
        if (this.empty.row != this.size - 1) {
            this.moveEmpty({ rows: 1, cols: 0 });
        }
    }

    down() {
        if (this.empty.row != 0) {
            this.moveEmpty({ rows: -1, cols: 0 });
        }
    }

    left() {
        if (this.empty.col != this.size - 1) {
            this.moveEmpty({ rows: 0, cols: 1 });
        }
    }

    right() {
        if (this.empty.col != 0) {
            this.moveEmpty({ rows: 0, cols: -1 });
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
