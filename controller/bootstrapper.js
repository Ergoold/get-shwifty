import { Board } from '../model/board.js'
import { renderBoard } from '../view/board.js'

export function initialize() {
    let size = 3;
    let board = new Board(size);
    // this shuffle cap is plenty fast even if reached
    board.shuffle(Math.pow(size, 4), 1_000_000);
    renderBoard(board);

    const keyToAction = {
        ArrowUp: board.up.bind(board),
        ArrowDown: board.down.bind(board),
        ArrowLeft: board.left.bind(board),
        ArrowRight: board.right.bind(board),
    };

    document.onkeydown = (event) => {
        let action = keyToAction[event.key];
        if (action) {
            action();
            renderBoard(board);
        }
    }
}
