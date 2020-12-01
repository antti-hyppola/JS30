// 👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀

const triggers = document.querySelectorAll('a');
const highlight = document.createElement('span');
highlight.classList.add('highlight');
document.body.append(highlight);

function highlightLink() {
    const { width, height, left, top } = this.getBoundingClientRect();
    const coords = {
        left: left + window.scrollX,
        top: top + window.scrollY
    }
    highlight.style.width = `${width}px`;
    highlight.style.height = `${height}px`;
    highlight.style.transform = `translate(${coords.left}px, ${coords.top}px)`
}


triggers.forEach(link => link.addEventListener('mouseenter', highlightLink))
