import { ReactComponent as buyurtmalar } from '../assets/icons/buyurtmalar.svg';
import { ReactComponent as mahsulotlar } from '../assets/icons/mahsulotlar.svg';
import { ReactComponent as kategoriya } from '../assets/icons/kategoriya.svg';
import { ReactComponent as filial } from '../assets/icons/filial.svg';
import { ReactComponent as mijozlar } from '../assets/icons/mijozlar.svg';
import { ReactComponent as hisobot } from '../assets/icons/hisobot.svg';
import { ReactComponent as hodimlar } from '../assets/icons/settings.svg';
import Generic from '../pages/Generic';
import Kundalik from '../components/Buyurtmalar/Kundalik';
import NasiyaBulimi from '../components/Nasiyalar/NasiyaBulimi';
import FirmaHisoboti from '../components/FirmaHisoboti/FirmaHisoboti';
import HodimlarBulimi from '../components/HodimlarBulimi/HodimlarBulimi';

;

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
    path: '/nasiyalarbulimi',
    Icon: mahsulotlar,
    Component: NasiyaBulimi,
    hidden: false,
  },
  {
    id: 3,
    title: 'Firmalar Hisoboti',
    path: '/firmahisoboti',
    Icon: kategoriya,
    Component: FirmaHisoboti,
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
    id: 6,
    title: 'Seyf Hisoboti',
    path: '/seyf_hisoboti',
    Icon: hisobot,
    Component: Generic,
    hidden: false,
  },
  {
    id: 8,
    title: 'Firma Holati',
    path: '/firma_holati',
    Icon: hodimlar,
    Component: Generic,
    hidden: false,
  },
  {
    id: 9,
    title: `Hodimlar Bo'limi`,
    path: '/hodimlar',
    Icon: mijozlar,
    Component: HodimlarBulimi,
    hidden: false,
  },
  {
    id: 10,
    title: `Ustalar Bo'limi`,
    path: '/ustalar',
    Icon: mijozlar,
    Component: Generic,
    hidden: false,
  },
];
