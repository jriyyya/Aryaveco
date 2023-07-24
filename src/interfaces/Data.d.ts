export interface Product {
  name: string;
  description: string;
  imgUrl: string;
  features: {
    items: {
      key: string;
      value: string
    }[]
    extras: string[];
  };
  highlights: {
    title: string;
    items: { key: string; value: string }[];
  }[];
}
