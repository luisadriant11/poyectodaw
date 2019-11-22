import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

//Aqui se importan los componentes
import { AppComponent } from './app.component';
import { FooterComponent } from './shared/footer/footer.component';
import { MainComponent } from './index/main/main.component';
import { HeaderComponent } from './shared/header/header.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, FooterComponent, MainComponent, HeaderComponent], //Aqui se declaran los componentes
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
