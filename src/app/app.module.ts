import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HeaderComponent} from './components/header/header.component';
import {PopupNotificationComponent} from './components/popup/notification/popup-notification.component';
import {HttpClientModule} from '@angular/common/http';
import {PostDetailComponent} from './pages/post-detail/post-detail.component';
import {PostListComponent} from './pages/post-list/post-list.component';
import {PostLandingComponent} from './components/post/post-landing.component';
import {PopupMenuComponent} from './components/popup/menu/popup-menu.component';
import {PopupModalComponent} from './components/popup/modal/popup-modal.component';
import {SimpleLoadingComponent} from './components/loading/simple/simple-loading.component';
import {SearchMenuComponent} from './components/search/menu/search-menu.component';
import {FilterInputComponent} from './components/search/input/filter/filter-input.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PopupNotificationComponent,
    PostDetailComponent,
    PostListComponent,
    PostLandingComponent,
    PopupMenuComponent,
    PopupModalComponent,
    SimpleLoadingComponent,
    SearchMenuComponent,
    FilterInputComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
