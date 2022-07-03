import { Board } from '../model/board.js'
import { renderBoard } from '../view/board.js'

export function initialize() {
    let board = new Board(3);
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
