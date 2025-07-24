import ReactGA from 'react-ga4';

let initialized = false;

export const initGA = () => {
  if (!initialized) {
    ReactGA.initialize("G-9KENH5GRCC");
    initialized = true;
  }
};

export const logPageView = (url) => {
  if (initialized) {
    ReactGA.send({ hitType: "pageview", page: url });
  }
};
