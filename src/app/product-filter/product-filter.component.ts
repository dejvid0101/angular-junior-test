import { Component, EventEmitter, Output } from '@angular/core';
import { range } from 'rxjs';

@Component({
  selector: 'app-product-filter',
  templateUrl: './product-filter.component.html',
  styleUrls: ['./product-filter.component.scss']
})
export class ProductFilterComponent {

  public min: any = 0;
  public max: any = 0;

public isError:boolean=false;

  @Output() range: EventEmitter<any[]> = new EventEmitter<any[]>();

  updateMaxPrice(maxInput: any) {
    this.max=maxInput.target.value;
  }
  updateMinPrice(minInput: any) {
    this.min=minInput.target.value;

  }

  emitRangeChanged() {

    

if(this.min<0||this.max<0)this.isError=true;
if(parseInt(this.min)>parseInt(this.max))this.isError=true


    this.range.emit([this.min, this.max]);

  }
}
