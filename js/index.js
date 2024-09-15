
const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  effect: "cube",
 

  // If we need pagination
  pagination: {
      el: '.swiper-pagination',
      clickable: true, // para que se pueda cambiar de slide con los circulos 
      dynamicBullets: true, // para que se los circulos se vean de diferente tamaño 
  },

  // Navigation arrows
  navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
  },

});