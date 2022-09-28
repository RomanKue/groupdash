import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'groupdash-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.sass'],
})
export class SearchComponent implements OnInit {
  showSearch = false

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  constructor() {}

  setSearch(show: boolean): void {
    this.showSearch = show
  }

  toggleSearch(): void {
    this.showSearch = !this.showSearch
  }

  // @HostListener('click')
  // // eslint-disable-next-line @typescript-eslint/no-explicit-any
  // clickInside($event: any) {
  //   $event.stopPropagation();
  // }

  // @HostListener('document:click')
  // clickOutside() {
  //     this.setSearch(false)
  // }

  // eslint-disable-next-line @angular-eslint/no-empty-lifecycle-method, @typescript-eslint/no-empty-function
  ngOnInit(): void {}
}
