class Miniatura {
    constructor(src, album) {
      this.image = document.createElement("img");
      this.image.src = src;
      this.album = album;
      this.image.addEventListener("click", this.onThumbnailClick.bind(this));
    }
  
    getElement() {
      return this.image;
    }
  
    onThumbnailClick() {
      this.album.showModal(this.image.src);
    }
  }
  
  class Album {
    constructor(photoList) {
      this.photoList = photoList;
      this.thumbnails = [];
      this.modalScreen = new ModalScreen(this);
      this.createThumbnails();
    }
  
    createThumbnails() {
      const albumView = document.querySelector("#album-view");
      for (let i = 0; i < this.photoList.length; i++) {
        const photoSrc = this.photoList[i];
        const thumbnail = new Miniatura(photoSrc, this);
        albumView.appendChild(thumbnail.getElement());
        this.thumbnails.push(thumbnail);
      }
    }
  
    showModal(photoSrc) {
      this.modalScreen.show(photoSrc);
    }
  }
  
  class ModalScreen {
    constructor(album) {
      this.album = album;
      this.modalView = document.querySelector("#modal-view");
      this.modalPhoto = new ModalPhoto();
      this.modalView.appendChild(this.modalPhoto.getElement());
      this.modalView.addEventListener("click", this.onModalClick.bind(this));
    }
  
    show(photoSrc) {
      const image = createImage(photoSrc);
      document.body.classList.add("no-scroll");
      this.modalView.style.top = window.pageYOffset + "px";
      this.modalPhoto.setImage(image);
      this.modalView.classList.remove("hidden");
    }
  
    onModalClick() {
      document.body.classList.remove("no-scroll");
      this.modalView.classList.add("hidden");
      this.modalPhoto.clearImage();
    }
  }
  
  class ModalPhoto {
    constructor() {
      this.photo = document.createElement("img");
    }
  
    getElement() {
      return this.photo;
    }
  
    setImage(image) {
      this.photo.src = image.src;
    }
  
    clearImage() {
      this.photo.src = "";
    }
  }
  
  function createImage(src) {
    const image = document.createElement("img");
    image.src = src;
    return image;
  }
  
  const album = new Album(PHOTO_LIST);
  