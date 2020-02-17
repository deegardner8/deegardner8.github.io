const imagesToLoad = document.querySelectorAll("img[data-src]");

const imgOptions = {
    threshold: 1,
    rootMargin: "0px 0px 50px 0px"
};

/*
const loadImages = (image) => {
image.setAttribute('src',image.getAttribute('data-src'));
image.onload = () => {image.removeAttribute('data-src');};
*/

const imgObserver = new IntersectionObserver((entries,imgObserver) => {
entries.forEach(entry => {
    if (!entry.isIntersecting){
        return;
    } else {
        preloadImage(entry.target);
        imgObserver.unobserve(entry.target);

    }
})
};

/*
if('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((items, observer) => {
      items.forEach((item) => {
        if(item.isIntersecting) {
          loadImages(item.target);
          observer.unobserve(item.target);
        }
      });
    });
    imagesToLoad.forEach((img) => {
      observer.observe(img);
    });
  } else {
    imagesToLoad.forEach((img) => {
      loadImages(img);
    });
  }

*/

  /*
let gragSomeImages = document.querySelectorAll('img[data-src]');
const loadImages = (image) => {
  image.setAttribute('src', image.getAttribute('data-src'));
  image.onload = () => {
    image.removeAttribute('data-src');
  };
};

gragSomeImages.forEach((img) => {
    loadImages(img);
});
*/