import type { Image } from './image';

export type Artwork = {
  id: string;
  title: string;
  painting_number: number | null;
  painting_year: number | null;
  width_inches: number;
  height_inches: number;
  price_cents: number;
  description: string | null;
  paper: boolean;
  sort_order: number;
  sold_at: string | null;
  status: ArtworkStatus;
  medium: ArtworkMedium;
  category: ArtworkCategory;
  images: Image[];
  created_at: string;
  order_id: string | null;
};

export enum ArtworkStatus {
  Available = 'available',
  Sold = 'sold',
  NotForSale = 'not_for_sale',
  Unavailable = 'unavailable',
  ComingSoon = 'coming_soon',
}

export enum ArtworkMedium {
  OilOnPanel = 'oil_on_panel',
  AcrylicOnPanel = 'acrylic_on_panel',
  OilOnMdf = 'oil_on_mdf',
  OilOnOilPaper = 'oil_on_oil_paper',
  ClaySculpture = 'clay_sculpture',
  PlasterSculpture = 'plaster_sculpture',
  InkOnPaper = 'ink_on_paper',
  MixedMediaOnPaper = 'mixed_media_on_paper',
  Unknown = 'unknown',
}

export enum ArtworkCategory {
  Figure = 'figure',
  Landscape = 'landscape',
  MultiFigure = 'multi_figure',
  Other = 'other',
}
