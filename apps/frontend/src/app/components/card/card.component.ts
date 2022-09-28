import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'groupdash-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.sass'],
})
export class CardComponent implements OnInit {
  showTag = false

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  constructor() {}

  toggleTag(): void {
    this.showTag = !this.showTag
  }

  // eslint-disable-next-line @angular-eslint/no-empty-lifecycle-method, @typescript-eslint/no-empty-function
  ngOnInit(): void {}
}
