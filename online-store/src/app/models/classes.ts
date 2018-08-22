export class Category {
  constructor(
    public title: string,
    public items: string[]
  ) {}
}

export class Product {
  constructor(
    public title: string,
    public price: number,
    public category: string,
    public imageUrls: string[],
    public description: string,
    public fabric: string
  ) {}
}
