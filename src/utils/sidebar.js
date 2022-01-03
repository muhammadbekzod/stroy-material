import { ReactComponent as buyurtmalar } from '../assets/icons/buyurtmalar.svg';
import { ReactComponent as mahsulotlar } from '../assets/icons/mahsulotlar.svg';
import { ReactComponent as kategoriya } from '../assets/icons/kategoriya.svg';
import { ReactComponent as filial } from '../assets/icons/filial.svg';
import { ReactComponent as mijozlar } from '../assets/icons/mijozlar.svg';
import { ReactComponent as hisobot } from '../assets/icons/hisobot.svg';
import { ReactComponent as hodimlar } from '../assets/icons/settings.svg';
import { ReactComponent as katalog } from '../assets/icons/settings.svg';

import Generic from '../pages/Generic';

import Kundalik from '../components/Buyurtmalar/Kundalik';

export const sidebar = [
  {
    id: 1,
    title:'Kundalik Hisobot',
    path: '/kundalik',
    Icon: buyurtmalar,
    Component: Kundalik,
    hidden: false,
  },
  {
    id: 2,
    title: 'Nasiyalar',
    path: '/nasiyalar',
    Icon: mahsulotlar,
    Component: Generic,
    hidden: false,
  },
  {
    id: 3,
    title: 'Firmalar Hisoboti',
    path: '/kategoriya',
    Icon: kategoriya,
    Component: Generic,
    hidden: false,
  },
  {
    id: 4,
    title: 'Chiqimlar',
    path: '/filiallar',
    Icon: filial,
    Component: Generic,
    hidden: false,
  },
  {
    id: 5,
    title: 'Naqt Pul',
    path: '/mijozlar',
    Icon: mijozlar,
    Component: Generic,
    hidden: false,
  },
  {
    id: 6,
    title: 'Seyf Hisoboti',
    path: '/seyf_hisoboti',
    Icon: hisobot,
    Component: Generic,
    hidden: false,
  },
  {
    id: 7,
    title: 'Aylanma Chiqimlar',
    path: '/aylanma_chiqimlar',
    Icon: hodimlar,
    Component: Generic,
    hidden: false,
  },
  {
    id: 8,
    title: `Hodimlar Bo'limi`,
    path: '/hodimlar',
    Icon: katalog,
    Component: Generic,
    hidden: false,
  },
];
