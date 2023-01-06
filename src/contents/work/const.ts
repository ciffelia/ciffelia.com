import { Work, WorkId } from './type'

// 画像のimportは辞書順に並べる
import airpapyrusImage from './assets/airpapyrus.jpg'
import fes71Image from './assets/fes71.png'
import iconCiffeliaImage from './assets/iconCiffelia.png'
import koeImage from './assets/koe.png'
import multiEnvironmentMonitorImage from './assets/muliEnvironmentMonitor.jpg'
import pdfPageSizeImage from './assets/pdfPageSize.png'
import portfolio2018Image from './assets/portfolio2018.png'
import portfolio2021Image from './assets/portfolio2021.png'
import rayTracingImage from './assets/rayTracing.png'
import twilensImage from './assets/twilens.png'
import updraftImage from './assets/updraft.png'
import wakeMyPCImage from './assets/wakeMyPC.png'

// 辞書順に並べる
export const work: { [id in WorkId]: Work } = {
  [WorkId.Airpapyrus]: {
    id: WorkId.Airpapyrus,
    name: '環境可視化装置',
    year: 2020,
    tags: ['Arduino', 'Raspberry Pi', 'ESP32', 'C++', 'Python'],
    url: 'https://github.com/ciffelia/airpapyrus',
    image: airpapyrusImage,
  },
  [WorkId.Fes71]: {
    id: WorkId.Fes71,
    name: '文化祭Webサイト',
    year: 2018,
    tags: ['Web', 'React', 'Gatsby', 'CSS Animation'],
    url: 'https://github.com/ciffelia/fes71.eikogakuen.com',
    image: fes71Image,
  },
  [WorkId.IconCiffelia]: {
    id: WorkId.IconCiffelia,
    name: 'icon.ciffelia.com',
    year: 2021,
    tags: ['Node.js', 'Vercel', 'Serverless'],
    url: 'https://github.com/ciffelia/icon.ciffelia.com',
    image: iconCiffeliaImage,
  },
  [WorkId.Koe]: {
    id: WorkId.Koe,
    name: 'Discord Bot',
    year: 2021,
    tags: ['Discord', 'Rust', 'Text-to-Speech'],
    url: 'https://github.com/ciffelia/koe',
    image: koeImage,
  },
  [WorkId.MultiEnvironmentMonitor]: {
    id: WorkId.MultiEnvironmentMonitor,
    name: '環境観測装置',
    year: 2018,
    tags: ['Arduino', 'C++', 'ESP32'],
    url: 'https://github.com/ciffelia/MultiEnvironmentMonitor',
    image: multiEnvironmentMonitorImage,
  },
  [WorkId.PDFPageSize]: {
    id: WorkId.PDFPageSize,
    name: 'PDFPageSize',
    year: 2020,
    tags: ['Android', 'Kotlin'],
    url: 'https://github.com/ciffelia/PDFPageSize',
    image: pdfPageSizeImage,
  },
  [WorkId.Portfolio2018]: {
    id: WorkId.Portfolio2018,
    name: 'ポートフォリオ (2018)',
    year: 2018,
    tags: ['Web', 'CSS Animation'],
    url: 'https://github.com/ciffelia/ciffelia.com/tree/v2018',
    image: portfolio2018Image,
  },
  [WorkId.Portfolio2021]: {
    id: WorkId.Portfolio2021,
    name: 'ポートフォリオ',
    year: 2021,
    tags: ['Web', 'TypeScript', 'React', 'Next.js'],
    url: 'https://github.com/ciffelia/ciffelia.com',
    image: portfolio2021Image,
  },
  [WorkId.RayTracing]: {
    id: WorkId.RayTracing,
    name: 'Ray Tracing',
    year: 2018,
    tags: ['C++', 'OpenSiv3D'],
    url: 'https://github.com/ciffelia/RayTracing',
    image: rayTracingImage,
  },
  [WorkId.Twilens]: {
    id: WorkId.Twilens,
    name: '全文検索アプリ',
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
  },
  [WorkId.Updraft]: {
    id: WorkId.Updraft,
    name: 'Bare-metal Game',
    year: 2018,
    tags: ['Game', 'OS', 'UEFI', 'C++'],
    url: 'https://github.com/ciffelia/Updraft',
    image: updraftImage,
  },
  [WorkId.WakeMyPC]: {
    id: WorkId.WakeMyPC,
    name: 'wakeMyPC',
    year: 2021,
    tags: ['Web', 'Go', 'Wake-on-LAN'],
    url: 'https://github.com/ciffelia/wakeMyPC',
    image: wakeMyPCImage,
  },
}

// 表示される順に並べる
export const workList: Work[] = [
  work[WorkId.Fes71],
  work[WorkId.Twilens],
  work[WorkId.Portfolio2021],
  work[WorkId.MultiEnvironmentMonitor],
  work[WorkId.Airpapyrus],
  work[WorkId.Updraft],
  work[WorkId.RayTracing],
  work[WorkId.Koe],
  work[WorkId.Portfolio2018],
  work[WorkId.IconCiffelia],
  work[WorkId.PDFPageSize],
  work[WorkId.WakeMyPC],
]
