import { StaticImageData } from 'next/image';

export interface Work {
  id: string;
  title: string;
  year: number;
  tags: string[];
  url: string;
  image: StaticImageData;
}
