import { MenuItem } from './menu.model';

export const MENU: MenuItem[] = [
  {
    id: 1,
    label: 'Home',
    link: '/'
  },
  {
    id: 2,
    label: 'Other',
    subItems: [
      {
        id: 2,
        label: 'About',
        link: '/pages/about',
        parentId: 1
      },
      {
        id: 3,
        label: 'Contact',
        link: '/pages/contacts',
        parentId: 1
      },
    ]
  },
];

