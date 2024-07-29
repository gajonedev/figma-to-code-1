type Link = {
  name: string;
  link: string;
};

export const NavLinks: Link[] = [
  {
    name: "Home",
    link: "#home",
  },
  {
    name: "Top Sales",
    link: "#topsales",
  },
  {
    name: "Collections",
    link: "#collections",
  },
  {
    name: "Our Blog",
    link: "#blog",
  },
  {
    name: "About US",
    link: "#about",
  },
];

type Filter = {
  name: string;
  selected: boolean;
};

export const DesktopFilters: Filter[] = [
  {
    name: "All Categories",
    selected: true,
  },
  {
    name: "Art",
    selected: false,
  },
  {
    name: "Celebrities",
    selected: false,
  },
  {
    name: "Gaming",
    selected: false,
  },
  {
    name: "Sport",
    selected: false,
  },
];

export const MobileFilters: Filter[] = [
  {
    name: "All Categories",
    selected: false,
  },
  {
    name: "Art",
    selected: true,
  },
  {
    name: "Celebrities",
    selected: true,
  },
];
