import { Component, OnInit } from '@angular/core';
import { CATEGORIES } from '../../data/data';
import { Category } from '../../models/classes';


@Component({
  selector: 'app-product-filter',
  templateUrl: './product-filter.component.html',
  styleUrls: ['./product-filter.component.scss']
})
export class ProductFilterComponent implements OnInit {
  public items: string[];
  public categories: Category[];

  constructor() {
    this.categories = CATEGORIES;
  }

  ngOnInit() {
  }

  public setItems = (activeCategory: Category) => {
    this.items = activeCategory.items;
  }
}
