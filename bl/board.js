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
    }
}
