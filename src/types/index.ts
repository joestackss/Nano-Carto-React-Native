export interface Template {
  id: string;
  title: string;
  category: TemplateCategory;
  image: string;
  thumbnail: string;
  isSelected?: boolean;
  badge?: string;
  isPremium?: boolean;
}

export interface GeneratedPoster {
  id: string;
  prompt: string;
  imageUrl: string;
  thumbnailUrl: string;
  template: Template;
  size: PosterSize;
  category: string;
  createdAt: Date;
  isLiked?: boolean;
  downloadCount?: number;
}

export interface PosterSize {
  label: string;
  value: string;
  width: number;
  height: number;
  icon: string;
  aspectRatio: number;
}

export type TemplateCategory =
  | "Display"
  | "Promotion"
  | "Branding"
  | "Announcement"
  | "Professional"
  | "Social Media"
  | "Event"
  | "Product";

export type CreationMode = "smart" | "advanced";

export type AppScreen = "index" | "create";

export interface CreationSettings {
  size: PosterSize;
  category: string;
  style: string;
  quality: "standard" | "premium" | "ultra";
}
