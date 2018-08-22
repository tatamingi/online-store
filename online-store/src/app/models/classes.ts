export class Category {
  constructor(
    public title: string,
    public items: string[]
  ) {}
}

export class Product {
  constructor(
    public key: string,
    public title: string,
    public price: number,
    public category: string,
    public imageUrls: string[],
    public description: string
  ) {}
}
