import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';



import { AppComponent } from './app.component';
import { headercomponent} from './header/header.component';
import { ReciepeComponent } from './reciepe/reciepe.component';
import { ReciepeListComponent } from './reciepe/reciepe-list/reciepe-list.component';
import { ReciepeDetailsComponent } from './reciepe/reciepe-details/reciepe-details.component';

import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ReciepeItemComponent } from './reciepe/reciepe-list/reciepe-item/reciepe-item.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component'

@NgModule({
  declarations: [
    AppComponent,
    headercomponent,
    ReciepeComponent,
    ReciepeListComponent,
    ReciepeDetailsComponent,
    ShoppingListComponent,
    ReciepeItemComponent,
    ShoppingEditComponent
  
  ],
  imports: [
    BrowserModule,
    FormsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
