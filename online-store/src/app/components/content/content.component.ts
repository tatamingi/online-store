import { Component, OnInit } from '@angular/core';
import { TYPES_MAIN_PAGE } from '../../data/data';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {
  public types: any[];

  constructor() {
    this.types = TYPES_MAIN_PAGE;
  }

  ngOnInit() {
  }

}
