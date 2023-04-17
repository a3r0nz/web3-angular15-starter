import { MenuItem } from './menu.model';

export const MENU: MenuItem[] = [
    {
        id: 1,
        label: 'Home',
        subItems: [
          {
              id: 2,
              label: 'Homepage v.1',
              link: '/home1',
              parentId: 1
          },
          {
              id: 3,
              label: 'Homepage v.2',
              link: '/home2',
              parentId: 1
          },
        ]
    },
    {
      id: 4,
      label: 'Catalog',
      subItems: [
        {
            id: 5,
            label: 'Grid with Filters',
            link: '/catalog/grid',
            parentId: 4
        },
        {
            id: 6,
            label: 'Single Place - Gallery',
            link: '/catalog/single',
            parentId: 4
        },
        {
          id: 6,
          label: 'Single Place - Info',
          link: '/catalog/single-info',
          parentId: 4
        },
        {
          id: 6,
          label: 'Single Place - Reviews',
          link: '/catalog/single-reviews',
          parentId: 4
        },
      ]
    },
    {
      id: 7,
      label: 'Account',
      subItems: [
        {
            id: 8,
            label: 'Personal Info',
            link: '/account/info',
            parentId: 7
        },
        {
            id: 9,
            label: 'Favorites',
            link: '/account/favorites',
            parentId: 7
        },
        {
          id: 10,
          label: 'Reviews',
          link: '/account/reviews',
          parentId: 7
        },
        {
          id: 11,
          label: 'Notifications',
          link: '/account/notifications',
          parentId: 7
        },
        {
          id: 12,
          label: 'Sign In',
          link: '/auth/signin',
          parentId: 7
        },
        {
          id: 13,
          label: 'Sign Up',
          link: '/auth/signup',
          parentId: 7
        },
      ]
    },
    {
      id: 16,
      label: 'Vendor',
      subItems: [
        {
            id: 17,
            label: 'Add Business',
            link: '/vendor/add-business',
            parentId: 16
        },
        {
            id: 18,
            label: 'Business Promotion',
            link: '/vendor/business-promotion',
            parentId: 16
        },
        {
          id: 19,
          label: 'My Businesses',
          link: '/vendor/businesses',
          parentId: 16
        },
      ]
    },
    {
      id: 21,
      label: 'Pages',
      subItems: [
        {
            id: 22,
            label: 'About',
            link: '/pages/about',
            parentId: 21
        },
        {
          id: 23,
          label: 'Blog',
          subItems: [
            {
              id: 24,
              label: 'Blog Grid',
              link: '/pages/blog-grid',
              parentId: 23
            },
            {
              id: 25,
              label: 'Single Post',
              link: '/pages/single-blog',
              parentId: 23
            }
          ]
        },
        {
            id: 26,
            label: 'Contacts',
            link: '/pages/contacts',
            parentId: 21
        },
        {
          id: 27,
          label: 'Help Center',
          subItems: [
            {
              id: 28,
              label: 'Help Topics',
              link: '/pages/help-center',
              parentId: 27
            },
            {
              id: 29,
              label: 'Single Topic',
              link: '/pages/single-topic',
              parentId: 27
            }
          ]
        },
        {
          id: 30,
          label: '404 Not Found',
          link: '/pages/404',
          parentId: 21
        },
      ]
    },
];

