import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryCont = document.querySelector('.gallery');

function createMarkup(arr) {
    return arr.map(({ preview, original, description }) => {
        return `
        <li class="gallery__item">
            <a class="gallery__link" href="large-image.jpg">    
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
    `);

    event.preventDefault();
    instance.show();
    document.addEventListener('keydown', evt => {
        if (instance.visible() && evt.key === "Escape") instance.close();
    });
}

galleryCont.insertAdjacentHTML('beforeend', createMarkup(galleryItems));
galleryCont.addEventListener('click', fullScreen); 