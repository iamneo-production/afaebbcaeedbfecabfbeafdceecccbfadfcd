import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ForexConvertionPipe } from './forex-convertion.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ForexConvertionPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [/* ... */],
  imports: [FormsModule, /* ... */],
  bootstrap: [AppComponent],
})
export class AppModule {}
