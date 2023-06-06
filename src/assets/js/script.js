import '../css/style.css';
// import router from './modules/router.js';
import CreateNav from './modules/mainNav';
import TourSchedule from './modules/tourSchedule';
import tourJSON from '../apis/tourSchedule.json';

const nav = new CreateNav('.header-nav-list', [
  { text: 'tour', href: '#tour' },
  { text: 'albums', href: '#albums' },
  { text: 'about', href: '#about' },
  { text: 'contact', href: '#contact' },
]);
nav.init();

const tourSchedule = new TourSchedule('.tour-list');
tourSchedule.init(tourJSON);
