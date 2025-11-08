export type Image = {
  id: string;
  artwork_id: string | null;
  is_main_image: boolean;
  object_name: string;
  image_url: string;
  image_width: number | null;
  image_height: number | null;
  created_at: string;
};
