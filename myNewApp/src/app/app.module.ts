import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentNameComponent } from './component-name/component-name.component';
import { DirectiveNameDirective } from './directive-name.directive';

@NgModule({
  declarations: [
    AppComponent,
    ComponentNameComponent,
    DirectiveNameDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
