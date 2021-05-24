declare global {
  interface Cake {
    id: string;
    name: string;
    comment: string;
    yumFactor: number;
    imgUrl?: string;
  }
}

export {};
