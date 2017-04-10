import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule, XHRBackend } from '@angular/http';
import { routing } from './app.routing';

import { AppComponent } from './app.component';
import { MediaItemComponent } from './media-item.component';
import { MediaItemListComponent } from './media-item-list.component';
import { FavoriteDirective } from './favorite.directive';
import { CategoryListPipe } from './category-list.pipe';
import { PopupComponent } from './popup.component';
import { PopupImageComponent } from './popup-image.component';
import { ImageDirective } from "./image.directive";
import { AddFormComponent } from "./add-form.component";
import { channelListToken, channelLists } from "./providers"
@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    ReactiveFormsModule,
    routing

  ],
  declarations: [
    AppComponent,
    MediaItemComponent,
    MediaItemListComponent,
    FavoriteDirective,
    CategoryListPipe,
    PopupComponent,
    PopupImageComponent,
    ImageDirective,
    AddFormComponent
  ],
  providers: [
    { provide: channelListToken, useValue: channelLists }
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }