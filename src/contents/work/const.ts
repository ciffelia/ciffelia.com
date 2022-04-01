import { Work } from './type';

// 画像のimportは辞書順に並べる
import airpapyrusImage from './assets/airpapyrus.jpg';
import fes71Image from './assets/fes71.png';
import iconCiffeliaImage from './assets/iconCiffelia.png';
import koeImage from './assets/koe.png';
import multiEnvironmentMonitorImage from './assets/muliEnvironmentMonitor.jpg';
import pdfPageSizeImage from './assets/pdfPageSize.png';
import portfolio2018Image from './assets/portfolio2018.png';
import portfolio2021Image from './assets/portfolio2021.png';
import rayTracingImage from './assets/rayTracing.png';
import twilensImage from './assets/twilens.png';
import updraftImage from './assets/updraft.png';
import wakeMyPCImage from './assets/wakeMyPC.png';

// Workの定義は辞書順で並べる
const fes71: Work = {
  id: 'fes71',
  title: '文化祭Webサイト',
  year: 2018,
  tags: ['Web', 'React', 'Gatsby', 'CSS Animation'],
  url: 'https://github.com/ciffelia/fes71.eikogakuen.com',
  image: fes71Image,
};

const airpapyrus: Work = {
  id: 'airpapyrus',
  title: '環境可視化装置',
  year: 2020,
  tags: ['Arduino', 'Raspberry Pi', 'ESP32', 'C++', 'Python'],
  url: 'https://github.com/ciffelia/airpapyrus',
  image: airpapyrusImage,
};

const iconCiffelia: Work = {
  id: 'iconCiffelia',
  title: 'icon.ciffelia.com',
  year: 2021,
  tags: ['Node.js', 'Vercel', 'Serverless'],
  url: 'https://github.com/ciffelia/icon.ciffelia.com',
  image: iconCiffeliaImage,
};

const koe: Work = {
  id: 'koe',
  title: 'Discord Bot',
  year: 2021,
  tags: ['Discord', 'Rust', 'Text-to-Speech'],
  url: 'https://github.com/ciffelia/koe',
  image: koeImage,
};

const multiEnvironmentMonitor: Work = {
  id: 'multiEnvironmentMonitor',
  title: '環境観測装置',
  year: 2018,
  tags: ['Arduino', 'C++', 'ESP32'],
  url: 'https://github.com/ciffelia/MultiEnvironmentMonitor',
  image: multiEnvironmentMonitorImage,
};

const pdfPageSize: Work = {
  id: 'pdfPageSize',
  title: 'PDFPageSize',
  year: 2020,
  tags: ['Android', 'Kotlin'],
  url: 'https://github.com/ciffelia/PDFPageSize',
  image: pdfPageSizeImage,
};

const portfolio2018: Work = {
  id: 'portfolio2018',
  title: 'ポートフォリオ (2018)',
  year: 2018,
  tags: ['Web', 'CSS Animation'],
  url: 'https://github.com/ciffelia/ciffelia.com/tree/v2018',
  image: portfolio2018Image,
};

const portfolio2021: Work = {
  id: 'portfolio2021',
  title: 'ポートフォリオ',
  year: 2021,
  tags: ['Web', 'TypeScript', 'React', 'Gatsby'],
  url: 'https://github.com/ciffelia/ciffelia.com',
  image: portfolio2021Image,
};

const rayTracing: Work = {
  id: 'rayTracing',
  title: 'Ray Tracing',
  year: 2018,
  tags: ['C++', 'OpenSiv3D'],
  url: 'https://github.com/ciffelia/RayTracing',
  image: rayTracingImage,
};

const twilens: Work = {
  id: 'twilens',
  title: '全文検索アプリ',
  year: 2020,
  tags: [
    'Web',
    'TypeScript',
    'Vue',
    'Nuxt',
    'Node.js',
    'PostgreSQL',
    'Elasticsearch',
  ],
  url: 'https://github.com/ciffelia/twilens',
  image: twilensImage,
};

const updraft: Work = {
  id: 'updraft',
  title: 'Bare-metal Game',
  year: 2018,
  tags: ['Game', 'OS', 'UEFI', 'C++'],
  url: 'https://github.com/ciffelia/Updraft',
  image: updraftImage,
};

const wakeMyPC: Work = {
  id: 'wakeMyPC',
  title: 'wakeMyPC',
  year: 2021,
  tags: ['Web', 'Go', 'Wake-on-LAN'],
  url: 'https://github.com/ciffelia/wakeMyPC',
  image: wakeMyPCImage,
};

// 表示される順に並べる
export const workList: Work[] = [
  fes71,
  twilens,
  portfolio2021,
  multiEnvironmentMonitor,
  airpapyrus,
  updraft,
  rayTracing,
  koe,
  portfolio2018,
  iconCiffelia,
  pdfPageSize,
  wakeMyPC,
];
