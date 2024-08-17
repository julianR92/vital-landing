import { Component,Input, OnDestroy, OnInit } from '@angular/core';
import category_data from 'src/app/shared/data/category-data';
import { UtilsService } from 'src/app/shared/services/utils.service';
import { ICategoryType } from 'src/app/shared/types/category-d-t';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-shop-category',
  templateUrl: './shop-category.component.html',
  styleUrls: ['./shop-category.component.scss']
})
export class ShopCategoryComponent implements OnInit, OnDestroy {
  @Input() style_2:Boolean = false;
  @Input() style_3:Boolean = false;
  @Input() style_4:Boolean = false;
  @Input() shop_category_2:Boolean = false;
  public category_data:ICategoryType[] = category_data;
  private subscription: Subscription = new Subscription();
  displayedItems: ICategoryType[] = [];



  constructor(public utilsService:UtilsService, private sanitizer: DomSanitizer){}

  ngOnInit() {
    this.updateDisplayedItems();
    this.subscription.add(
      interval(5000).subscribe(() => this.updateDisplayedItems())
    );
  }
  getSVGImageUrl(image:any) : SafeResourceUrl  {
    let base64string = btoa(image);
    return this.sanitizer.bypassSecurityTrustResourceUrl(
      `data:image/svg+xml;base64,${base64string}`
    );
  }

  updateDisplayedItems() {
    // Mezcla el array y selecciona los primeros 3 elementos
    const shuffled = this.category_data.sort(() => 0.5 - Math.random());
    this.displayedItems = shuffled.slice(0, 3);
  }
  ngOnDestroy() {
    // Limpia la suscripción al destruir el componente
    this.subscription.unsubscribe();
  }

}
