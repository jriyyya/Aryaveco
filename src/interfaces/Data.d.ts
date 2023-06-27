export interface Product {
  name: string;
  description: string;
  imgUrl: string;
  features: {
    capacity: number;
    storage: number;
    power: number;
    noise: number;
    extras: string[];
  };
  highlights: {
    title: string;
    items: { key: string; value: string }[];
  }[];
}
