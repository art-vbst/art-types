import type { Image } from './image';

export type Artwork = {
  id: string;
  title: string;
  painting_number: number | null;
  painting_year: number | null;
  width_inches: number;
  height_inches: number;
  price_cents: number;
  paper: boolean | null;
  sort_order: number | null;
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
  Pending = 'pending',
  Sold = 'sold',
  NotForSale = 'not_for_sale',
  Unavailable = 'unavailable',
  ComingSoon = 'coming_soon',
}

export enum ArtworkMedium {
  OilPanel = 'oil_panel',
  AcrylicPanel = 'acrylic_panel',
  OilMdf = 'oil_mdf',
  OilPaper = 'oil_paper',
  Unknown = 'unknown',
}

export enum ArtworkCategory {
  Figure = 'figure',
  Landscape = 'landscape',
  MultiFigure = 'multi_figure',
  Other = 'other',
}
