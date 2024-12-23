import { Component, output } from '@angular/core';
import { ForgeFieldModule, ForgeButtonModule } from '@tylertech/forge-angular';
import { WishItem } from '../../shared/models/wishitem';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'add-wish-form',
  imports: [ForgeButtonModule, ForgeFieldModule, FormsModule],
  templateUrl: './add-wish-form.component.html',
  styleUrl: './add-wish-form.component.scss',
})
export class AddWishFormComponent {
  addWish = output<WishItem>();

  newWishText = '';

  addNewWish() {
    this.addWish.emit(new WishItem(this.newWishText));
    this.newWishText = '';
  }
}
