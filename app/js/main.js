document.addEventListener("DOMContentLoaded", () => {
   const navOpen = () => {
      const burger = document.querySelector('.sidebar-burger');
      const navLeft = document.querySelector('.sidebar-wrapper-up');
   
      burger.addEventListener('click', () => {
         navLeft.classList.toggle('sidebar-wrapper-up-open');
      });
      document.addEventListener('click', (event) => {
         if (navLeft.classList[1] && event.target !== burger) {
            navLeft.classList.remove('sidebar-wrapper-up-open');
         }
      });
   }
   
   navOpen();
});