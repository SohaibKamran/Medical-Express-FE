import { Component, OnInit } from '@angular/core';
import { ScrollDetail } from '@ionic/core';
@Component({
  selector: 'app-store',
  templateUrl: './store.page.html',
  styleUrls: ['./store.page.scss'],
})
export class StorePage implements OnInit {

  constructor() { }

  showToolbar = false;
  onScroll($event: CustomEvent<ScrollDetail>) {
    if ($event && $event.detail && $event.detail.scrollTop) {
    const scrollTop = $event.detail.scrollTop;
    this.showToolbar = scrollTop >= 225;
    }
  }

  ngOnInit() {
  }

}
