import { galleryItems } from './gallery-items.js';

const galleryCont = document.querySelector('.gallery')

galleryCont.insertAdjacentHTML('beforeend', createMarkup(galleryItems));

let gallery = new SimpleLightbox('.gallery__item a', {
        captionsData: 'alt', captionDelay: 250
    });

function createMarkup(arr) {
    return arr.map(({ preview, original, description }) => {
        return `
            <li class="gallery__item">
                <a class="gallery__link" href="${original}">
                    <img
                        class="gallery__image"
                        src="${preview}" 
                        alt="${description}" 
                    />
                </a>
            </li>`
    }).join('');
}