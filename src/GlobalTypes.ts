export type statusBike = "stolen" | "found" | "impounded";

export interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export interface BikeProps {
  date_stolen?: 1715061600;
  description?: null;
  frame_colors?: [];
  frame_model?: string;
  id?: number;
  is_stock_img?: boolean;
  large_img?: string;
  location_found?: string;
  manufacturer_name?: string;
  external_id?: number;
  registry_name?: string;
  registry_url?: string;
  serial?: string;
  status?: statusBike;
  stolen?: boolean;
  stolen_coordinates?: [];
  stolen_location?: string;
  thumb?: string;
  title?: string;
  url?: string;
  year?: number;
  propulsion_type_slug?: string;
  cycle_type_slug?: string;
}
