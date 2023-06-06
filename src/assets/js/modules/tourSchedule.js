export default class TourSchedule {
  constructor(tourContainer) {
    this.tourContainer = document.querySelector(tourContainer);
    this.tourItems = [];
  }

  fetchData(data) {
    this.tourItems = data.tourSchedule;
  }

  createSchedule() {
    const fragment = document.createDocumentFragment();
    this.tourItems.forEach((item) => {
      const tourItem = document.createElement('div');
      tourItem.classList.add('tour-list-item');

      const title = document.createElement('h3');
      title.classList.add('monarcha-normal');
      title.textContent = item.date;

      const venueLocation = document.createElement('p');
      venueLocation.classList.add('monarcha-normal');
      venueLocation.innerHTML = `${item.venue}<br /><span class="monarcha-italic-normal">${item.location}</span>`;

      const link = document.createElement('a');
      link.classList.add('monarcha-normal');
      link.href = '/';
      link.target = '_blank';
      link.rel = 'noopener noreferrer';
      link.innerHTML = '<span class="sabbathBlack-normal">+</span> Info';

      tourItem.appendChild(title);
      tourItem.appendChild(venueLocation);
      tourItem.appendChild(link);

      fragment.appendChild(tourItem);
    });

    this.fragment = fragment;
  }

  append() {
    this.tourContainer.appendChild(this.fragment);
  }

  init(data) {
    this.fetchData(data);
    this.createSchedule();
    this.append();
  }
}
