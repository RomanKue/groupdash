import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'groupdash-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.sass'],
})
export class AccountComponent implements OnInit {
  showDrop = false

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  constructor() {}

  setDrop(show: boolean): void {
    this.showDrop = show
  }

  @HostListener('click')
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  clickInside($event: any) {
    $event.stopPropagation();
  }

  @HostListener('document:click')
  clickOutside() {
      this.setDrop(false)
  }

  // eslint-disable-next-line @angular-eslint/no-empty-lifecycle-method, @typescript-eslint/no-empty-function
  ngOnInit(): void {}
}
