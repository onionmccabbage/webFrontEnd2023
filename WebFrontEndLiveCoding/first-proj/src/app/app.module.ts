import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MyStocksComponent } from './my-stocks/my-stocks.component';
import { HeadComponent } from './head/head.component';
import { FootComponent } from './foot/foot.component';
import { DeleteMeComponent } from './delete-me/delete-me.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    MyStocksComponent,
    HeadComponent,
    FootComponent,
    DeleteMeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
