export function setKeyDownHandler(keyToAction, renderCallback) {
    document.onkeydown = (event) => {
        let action = keyToAction[event.key];
        if (action) {
            action();
            renderCallback();
        }
    }
}
