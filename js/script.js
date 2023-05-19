const shareButton = document.querySelector('.share-icon');
const shareMenu = document.querySelector('.share');

shareButton.addEventListener('click', function () {
  shareMenu.classList.toggle('open');
});
