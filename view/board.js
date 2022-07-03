export function renderBoard(board) {
    let table = document.getElementById('board');
    table.innerHTML = '';
    for (let row of board.cells) {
        let tr = document.createElement('tr');
        for (let cell of row) {
            let td = document.createElement('td');
            if (!cell.isEmpty) {
                td.innerHTML = cell.number;
            }
            tr.appendChild(td);
        }
        table.appendChild(tr);
    }
}
