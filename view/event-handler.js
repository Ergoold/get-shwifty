export function setKeyDownHandler(keyToAction, renderCallback) {
    document.onkeydown = (event) => {
        let action = keyToAction[event.key];
        if (action) {
            action();
            renderCallback();
        }
    }
}

export function setSizeChangeHandler(callback) {
    let sizeInput = document.getElementById('size-input');
    sizeInput.onchange = () => callback(parseInt(sizeInput.value));
}
