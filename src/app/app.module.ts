import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { AdminThemeComponent } from './theme/admin-theme/admin-theme.component';
import { DefaultThemeComponent } from './theme/default-theme/default-theme.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminThemeComponent,
    DefaultThemeComponent
  ],
  imports: [
    BrowserModule,
    ButtonsModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
