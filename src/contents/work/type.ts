import { StaticImageData } from 'next/legacy/image';

export interface Work {
  id: WorkId;
  name: string;
  year: number;
  tags: string[];
  url: string;
  image: StaticImageData;
}

// 辞書順に並べる
export enum WorkId {
  Airpapyrus = 'airpapyrus',
  Fes71 = 'fes71',
  IconCiffelia = 'iconCiffelia',
  Koe = 'koe',
  MultiEnvironmentMonitor = 'multiEnvironmentMonitor',
  PDFPageSize = 'pdfPageSize',
  Portfolio2018 = 'portfolio2018',
  Portfolio2021 = 'portfolio2021',
  RayTracing = 'rayTracing',
  Twilens = 'twilens',
  Updraft = 'updraft',
  WakeMyPC = 'wakeMyPC',
}
