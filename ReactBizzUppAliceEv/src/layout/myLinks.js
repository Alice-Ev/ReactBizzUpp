import ROUTES from "../routes/ROUTES";

const alwaysLinks = [
  { to: ROUTES.HOME, children: "HOME" },
  { to: ROUTES.ABOUT, children: "ABOUT" },
];

const loggedOutLinks = [
  { to: ROUTES.REGISTER, children: "SIGNUP" },
  { to: ROUTES.LOGIN, children: "LOGIN" },
];

const loggedInLinks = [
  { to: ROUTES.FAVCARDS, children: "FAV CARDS" },
  { to: ROUTES.EDITPROFILE, children: "PROFILE" },
];

const bizLinks = [
  { to: ROUTES.CREATECARD, children: "CREATE CARDS" },
  { to: ROUTES.MYCARDS, children: "MY CARDS" },
];

const adminLinks = [
  { to: ROUTES.MYCARDS, children: "MY CARDS" },
  { to: ROUTES.SANDBOX, children: "SANDBOX" },
];

export { alwaysLinks, loggedOutLinks, loggedInLinks, bizLinks, adminLinks };
