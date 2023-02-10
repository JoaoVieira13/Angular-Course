import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ServersComponent } from './servers/servers.component';
import { FormsModule } from '@angular/forms';
import { TwoWayDatabindingComponent } from './two-way-databinding/two-way-databinding.component';

@NgModule({
  declarations: [
    AppComponent,
    ServersComponent,
    TwoWayDatabindingComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
