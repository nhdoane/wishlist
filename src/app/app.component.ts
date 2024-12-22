import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { WishItem } from '../shared/models/wishitem';
import {
  ForgeButtonModule,
  ForgeCheckboxModule,
  ForgeFieldModule,
  ForgeIconButtonModule,
  ForgeIconModule,
  ForgeDividerModule,
  ForgeSelectModule,
} from '@tylertech/forge-angular';

const filters = [
  (item: WishItem) => item,
  (item: WishItem) => !item.isComplete,
  (item: WishItem) => item.isComplete,
];

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    ForgeSelectModule,
    ForgeDividerModule,
    ForgeButtonModule,
    ForgeCheckboxModule,
    ForgeFieldModule,
    ForgeIconModule,
    ForgeIconButtonModule,
    FormsModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'wishlist';
  newWishText = '';
  items: WishItem[] = [
    new WishItem('learn angular'),
    new WishItem('get coffee', true),
    new WishItem('find bills that pay themselves'),
  ];

  listFilter: any = '0';
  get visibleItems(): WishItem[] {
    var e = this.listFilter;
    return this.items.filter(filters[this.listFilter]);
  }

  setIsComplete(item: WishItem) {
    item.isComplete = !item.isComplete;
  }

  addNewWish() {
    this.items.push(new WishItem(this.newWishText));
    this.newWishText = '';
  }
}
