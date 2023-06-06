export default class CreateNav {
  constructor(navList, menuItems) {
    this.navList = document.querySelector(navList);
    this.menuItems = menuItems;
  }

  createLinks(menuItems) {
    const fragment = document.createDocumentFragment();

    menuItems.forEach((item, index) => {
      const menuItem = document.createElement('li');
      const link = document.createElement('a');
      link.classList.add('header-nav-link');
      link.href = item.href;
      link.textContent = item.text;
      menuItem.appendChild(link);
      fragment.appendChild(menuItem);

      if (index !== menuItems.length - 1) {
        const separator = document.createElement('li');
        const object = document.createElement('object');
        object.data = './assets/img/separators/nav_separator.svg';
        object.setAttribute('aria-hidden', 'true');
        separator.appendChild(object);
        fragment.appendChild(separator);
      }
    });

    this.menuItemsFragment = fragment;
  }

  append() {
    this.navList.appendChild(this.menuItemsFragment);
  }

  init() {
    this.createLinks(this.menuItems);
    this.append();
    return this;
  }
}
