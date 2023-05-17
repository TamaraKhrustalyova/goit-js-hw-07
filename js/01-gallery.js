import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryRef = document.querySelector('.gallery');

const createGalleryItem = ({preview, original, description}) => {
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
</li>`;
};

const makeGalleryItemMarup = galleryItems
    .map(createGalleryItem)
    .join('');

galleryRef.insertAdjacentHTML('beforeend', makeGalleryItemMarup);
galleryRef.addEventListener('click', onClick);

function onClick (event) {
    event.preventDefault();
    if (event.target.nodeName !== 'IMG') {
        return
    } 
    const instance = basicLightbox.create(`
     <img src=${event.target.dataset.source} width="900" height="auto">
    `,
    {
        onShow: (instance) => {
          window.addEventListener('keydown', onEscKeyPress);
        },
        onClose: (instance) => {
          window.removeEventListener('keydown', onEscKeyPress);
        },
      }
    );
    instance.show()

    function onEscKeyPress(event) {
        if (event.code !== 'Escape'){
            return;
        } 
        instance.close();
      }
}
    










    

   
  


  


