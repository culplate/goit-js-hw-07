import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryCont = document.querySelector('.gallery');
galleryCont.insertAdjacentHTML('beforeend', createMarkup(galleryItems));
galleryCont.addEventListener('click', fullScreen);

function createMarkup(arr) {
    return arr.map(({ preview, original, description }) => {
        return `
        <li class="gallery__item">
            <a class="gallery__link" href="${original}">    
                <img
                    class="gallery__image"
                    src="${preview}"
                    data-source="${original}"
                    alt="${description}"
                />
            </a>
        </li>`
    }).join('');
}

function fullScreen(event) {
    if (event.target === event.currentTarget) return;

    const instance = basicLightbox.create(`
        <img src="${event.target.dataset.source}">
    `, {
        onClose: (instance) => document.removeEventListener('keydown', closeWithEsc)
    });

    function closeWithEsc(evt) {
        if (instance.visible() && evt.key === "Escape") {
            instance.close();
        }
    }

    event.preventDefault();
    instance.show();
    document.addEventListener('keydown', closeWithEsc);
}

