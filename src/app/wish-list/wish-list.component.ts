import { Component, input, computed, model } from '@angular/core';
import {
  ForgeCheckboxModule,
  ForgeIconButtonModule,
  ForgeDividerModule,
} from '@tylertech/forge-angular';
import { WishItem } from '../../shared/models/wishitem';

@Component({
  selector: 'wish-list',
  imports: [ForgeCheckboxModule, ForgeIconButtonModule, ForgeDividerModule],
  templateUrl: './wish-list.component.html',
  styleUrl: './wish-list.component.scss',
})
export class WishListComponent {
  wishes = input<WishItem[]>([]);

  setIsComplete(item: WishItem) {
    item.isComplete = !item.isComplete;
    console.log(item.isComplete);
  }

  // implement a delete function...somehow
  deleteWish(item: WishItem) {
    // // var index = this.wishes().indexOf(item);
    // // var updated = this.wishes().splice(index, 1);
    // const updatedWishes = this.wishes().filter((wish) => wish !== item);
    // // Update the signal with the new array
    // this.wishes.update(updatedWishes);
  }
}
