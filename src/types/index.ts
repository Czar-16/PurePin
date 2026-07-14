export interface GeneratedImageUrl {
  type: "jpg" | "png";
  url: string;
}

export interface GenerateResult {
  images: GeneratedImageUrl[];
}
