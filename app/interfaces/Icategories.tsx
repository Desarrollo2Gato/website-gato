type Keywords = string[];

interface OpenGraph {
  title: string;
  description: string;
  type: 'article';
  url: string;
  images?: { url: string }[];
}

interface dataMetadata {
  title: string;
  description: string;
  keywords: Keywords;
  openGraph: OpenGraph;
}

export interface Category {
  metadata: dataMetadata;
  name: string;
  path: string;
}