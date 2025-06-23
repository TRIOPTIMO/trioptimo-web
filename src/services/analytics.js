import ReactGA from 'react-ga4';

export const initGA = () => {
  ReactGA.initialize("G-9KENH5GRCC"); // <-- tu ID aquí
};

export const logPageView = (url) => {
  ReactGA.send({ hitType: "pageview", page: url });
};
