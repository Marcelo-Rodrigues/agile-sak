import { AutoSaveService } from './shared/auto-save.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgxsModule } from '@ngxs/store';
import { NgxsRouterPluginModule } from '@ngxs/router-plugin';
import { HomeComponent } from './home/home.component';
import {MatMenuModule} from '@angular/material/menu';
import { environment } from 'src/environments/environment';
import { MenuComponent } from './shared/menu/menu.component';
import {MatIconModule} from '@angular/material/icon';
import { PlanningModule } from './planning/planning.module';
import { HistoryState } from './planning/histories/history.state';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgxsModule.forRoot([HistoryState], { developmentMode: !environment.production }),
    NgxsRouterPluginModule.forRoot(),
    MatMenuModule,
    MatIconModule,
    PlanningModule
  ],
  providers: [AutoSaveService],
  bootstrap: [AppComponent]
})
export class AppModule { }
