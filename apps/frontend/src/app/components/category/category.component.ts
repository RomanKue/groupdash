import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'groupdash-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.sass'],
})
export class CategoryComponent implements OnInit {
  @Input() fav!: boolean
  @Input() private!: boolean

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  constructor() {}

  // eslint-disable-next-line @angular-eslint/no-empty-lifecycle-method, @typescript-eslint/no-empty-function
  ngOnInit(): void {}
}
