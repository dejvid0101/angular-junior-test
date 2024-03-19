import { Component, Input, AfterViewInit} from '@angular/core';
import { IProduct } from '../model';
import { ProductFilterComponent } from '../product-filter/product-filter.component';
import { filter } from 'rxjs';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements AfterViewInit{
  @Input() products: IProduct[] = [];
  filteredProducts: IProduct[] = [];

  ngAfterViewInit(): void {
    this.filteredProducts=this.products;

  }

  

  updateList(range:any[]){
    console.log(range);

    this.filteredProducts=this.products.filter((product)=>product.price>range[0]&&product.price<range[1]);
  }
}
