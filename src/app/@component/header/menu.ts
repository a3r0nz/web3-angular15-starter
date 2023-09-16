import { MenuItem } from './menu.model';

export const MENU: MenuItem[] = [
  {
    id: 1,
    label: 'Home',
    link: '/',
  },
  {
    id: 2,
    label: 'Sample',
    link: '/balances',
  },
  {
    id: 3,
    label: 'Other',
    subItems: [
      {
        id: 4,
        label: 'About',
        link: '/about',
        parentId: 3,
      },
      {
        id: 5,
        label: 'Contact',
        link: '/contacts',
        parentId: 3,
      },
    ],
  },
];
