import { Board } from '../model/board.js'
import { renderBoard } from '../view/board.js'
import { setKeyDownHandler, setSizeChangeHandler } from '../view/event-handler.js'

export function initialize() {
    initializeGame(3);
    setSizeChangeHandler(initializeGame);
}

function initializeGame(size) {
    let board = initializeBoard(size);
    initializeKeyDownHandler(board);
}

function initializeBoard(size) {
    let board = new Board(size);
    // this shuffle cap is plenty fast even if reached
    board.shuffle(Math.pow(size, 4), 1_000_000);
    renderBoard(board);
    return board;
}

function initializeKeyDownHandler(board) {
    setKeyDownHandler({
        ArrowUp: board.up.bind(board),
        ArrowDown: board.down.bind(board),
        ArrowLeft: board.left.bind(board),
        ArrowRight: board.right.bind(board),
    }, () => renderBoard(board));
}
