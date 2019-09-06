import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppHighlightDirective } from './highlight.directive';
import { PipeFilter } from './filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    AppHighlightDirective,
    PipeFilter
  ],
  imports: [
    BrowserModule
  ],
  providers: [PipeFilter],
  bootstrap: [AppComponent]
})
export class AppModule { }
