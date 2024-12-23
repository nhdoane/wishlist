import { Component, output } from '@angular/core';
import { ForgeOptionModule, ForgeSelectModule } from '@tylertech/forge-angular';
import { WishItem } from '../../shared/models/wishitem';
import { FormsModule } from '@angular/forms';

const filters = [
  (item: WishItem) => item,
  (item: WishItem) => !item.isComplete,
  (item: WishItem) => item.isComplete,
];

@Component({
  selector: 'wish-filter',
  imports: [ForgeOptionModule, ForgeSelectModule, FormsModule],
  templateUrl: './wish-filter.component.html',
  styleUrl: './wish-filter.component.scss',
})
export class WishFilterComponent {
  ngOnInit(): void {
    this.filter.emit(filters[0]);
  }

  listFilter: any = '0';
  filter = output<any>();

  changeFilter(value: any) {
    this.filter.emit(filters[value]);
  }
}
