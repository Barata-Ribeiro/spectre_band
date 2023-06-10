export default class Modal {
  constructor(openButton, closeButton, declineButton, containerModal) {
    this.openButton = document.querySelector(openButton);
    this.closeButton = document.querySelector(closeButton);
    this.declineButton = document.querySelector(declineButton);
    this.containerModal = document.querySelector(containerModal);

    this.eventToggleModal = this.eventToggleModal.bind(this);
    this.outsideModal = this.outsideModal.bind(this);
    this.declinedModal = this.declinedModal.bind(this);
  }

  toggleModal() {
    this.containerModal.classList.toggle('active');

    if (this.containerModal.classList.contains('active')) {
      document.body.classList.add('modal-open');
    } else document.body.classList.remove('modal-open');
  }

  eventToggleModal(event) {
    event.preventDefault();
    this.toggleModal();
  }

  declinedModal(event) {
    event.preventDefault();
    this.toggleModal();
    window.location.href = 'https://google.com/';
  }

  outsideModal(event) {
    if (event.target === this.containerModal) this.toggleModal();
  }

  addModalEvents() {
    this.openButton.addEventListener('click', this.eventToggleModal);
    this.closeButton.addEventListener('click', this.eventToggleModal);
    this.declineButton.addEventListener('click', this.declinedModal);
    this.containerModal.addEventListener('click', this.outsideModal);
  }

  init() {
    if (this.openButton && this.closeButton && this.containerModal) {
      this.addModalEvents();
    }
    return this;
  }
}
