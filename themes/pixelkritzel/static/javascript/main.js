const navigation = document.querySelector('.js-navigation-list');

document.querySelector('.js-show-navigation').addEventListener('click', () => {
  navigation.classList.toggle('shown');
});
