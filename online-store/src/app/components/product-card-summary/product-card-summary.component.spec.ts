import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductCardSummaryComponent } from './product-card-summary.component';

describe('ProductCardSummaryComponent', () => {
  let component: ProductCardSummaryComponent;
  let fixture: ComponentFixture<ProductCardSummaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductCardSummaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductCardSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
