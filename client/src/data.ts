export enum UserStatus {
  CONNECTED,
  AVAILABLE,
  UNAVAILABLE,
}

export type User = { name: string; avatar: string; status: UserStatus };

export type Team = { name: string; avatar: string; users: User[] };

export const teams = [
  {
    avatar:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/The_Boring_Company_Logo.svg/200px-The_Boring_Company_Logo.svg.png',
    name: 'The Boring Company',
    users: [
      {
        name: 'Elon Musk',
        avatar: 'https://i1.sndcdn.com/avatars-000343928089-mj2j87-t500x500.jpg',
        status: UserStatus.CONNECTED,
      },
      {
        name: 'Kim Collins',
        avatar: 'https://randomuser.me/api/portraits/women/37.jpg',
        status: UserStatus.CONNECTED,
      },
      {
        name: 'Joseph Arnold',
        avatar: 'https://randomuser.me/api/portraits/men/98.jpg',
        status: UserStatus.AVAILABLE,
      },
      {
        name: 'Carolyn Frazier',
        avatar: 'https://randomuser.me/api/portraits/women/7.jpg',
        status: UserStatus.UNAVAILABLE,
      },
    ],
  },
  {
    avatar: 'https://upload.wikimedia.org/wikipedia/commons/8/85/3M_CORPORATION.png',
    name: '3M',
    users: [],
  },
  {
    avatar: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/NASA_logo.svg/200px-NASA_logo.svg.png',
    name: 'NASA',
    users: [],
  },
] as Team[];
