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
    link: '/sample',
  },
  {
    id: 3,
    label: 'UI Components',
    link: '/sample/components',
  },
  {
    id: 4,
    label: 'Other',
    subItems: [
      {
        id: 5,
        label: 'About',
        link: '/pages/about',
        parentId: 4,
      },
      {
        id: 6,
        label: 'Contact',
        link: '/pages/contacts',
        parentId: 4,
      },
    ],
  },
];
