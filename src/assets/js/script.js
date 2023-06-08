import '../css/style.css';
import CreateNav from './modules/mainNav';
import TourSchedule from './modules/tourSchedule';
import tourJSON from '../json/tourSchedule.json';
import FormValidation from './modules/formValidation';

const nav = new CreateNav('.header-nav-list', [
  { text: 'tour', href: '#tour' },
  { text: 'albums', href: '#albums' },
  { text: 'about', href: '#about' },
  { text: 'contact', href: '#contact' },
]);
nav.init();

const tourSchedule = new TourSchedule('.tour-list');
tourSchedule.init(tourJSON);

document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('.contact-form');
  const fields = ['name', 'email', 'message'];
  const Validation = new FormValidation(form, fields);
  Validation.init();
});

// The footer stuff
const footer = document.getElementById('footer');
const copyrightYear = footer.querySelector('#copyright-year');
const currentYear = new Date().getFullYear();
copyrightYear.innerHTML = `2012 - ${currentYear}`;
