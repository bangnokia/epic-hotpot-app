export function longpress(node, duration) {
    let timer;

    const handleMousedown = () => {
        timer = setTimeout(() => {
            node.dispatchEvent(new CustomEvent('longpress'));
        }, duration);
    };

    const handleMouseup = () => {
        clearTimeout(timer)
        node.dispatchEvent(new CustomEvent('longpresscancel'));
    };

    node.addEventListener('mousedown', handleMousedown);
    node.addEventListener('mouseup', handleMouseup);

    return {
        destroy() {
            node.removeEventListener('mousedown', handleMousedown);
            node.removeEventListener('mouseup', handleMouseup);
        }
    };
}