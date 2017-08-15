export interface INavItem {
  name: string;
  path: string[];
}

export const NAVITEMS: INavItem[] = [
  {
    path: ['/'],
    name: 'Home'
  },
  {
    path: ['/', 'questions'],
    name: 'Questions'
  },
  {
    path: ['/', 'tags'],
    name: 'Tags'
  },
  {
    path: ['/', 'users'],
    name: 'Users'
  }
];
