export class Category {
  constructor(
    public title: string,
    public items: CategoryItem[]
  ) {}
}

export class CategoryItem {
  constructor(
    public title: string,
    public queryParam: any
  ) {}
}

export class Product {
  constructor(
    public title?: string,
    public price?: number,
    public category?: string,
    public imageUrls?: string[],
    public description?: string,
    public fabric?: string,
    public key?: string,
  ) {}
}

export class ShoppingCart {
  public items: ShoppingCartItem[] = [];

  constructor(public itemsMap: { [key: string]: ShoppingCartItem }) {
    this.itemsMap = itemsMap || {};
    for (const productId in itemsMap) {
      this.items.push(
        new ShoppingCartItem(itemsMap[productId])
      );
    }
  }

  public get totalItemsCount(): number {
    let count = 0;
    for (let productId in this.itemsMap) {
      count += this.itemsMap[productId].quantity;
    }
    return count;
  }

  get totalPrice(): number {
    let sum = 0;
    this.items.forEach(item => sum += item.totalPrice);
    return sum;
  }
}

export class ShoppingCartItem {
  public key: string;
  public title: string;
  public imageUrls: string[];
  public price: number;
  public quantity: number;
  public size: number;

  constructor(init?: Partial<ShoppingCartItem>) {
    Object.assign(this, init);
  }

  get totalPrice(): number {
    return this.price * this.quantity;
  }
}
