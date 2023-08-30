import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ShoppingListComponent } from './components/shopping-list.component';
import { ShoppingListEditComponent } from './components/shopping-list-edit.component';
import { RecipeListComponent } from './recipe/recipe-list.component';
import { RecipeItemComponent } from './recipe/recipe-item.component';
import { RecipeDetailComponent } from './recipe/recipe-detail.component';
import { ComponentComponent } from './header/component/component.component';

@NgModule({
  declarations: [
    AppComponent,
    ShoppingListComponent,
    ShoppingListEditComponent,
    RecipeListComponent,
    RecipeItemComponent,
    RecipeDetailComponent,
    ComponentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
