import { NgModule } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';


import { HelloComponent } from './hello.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { AboutComponent } from './about/about.component';
import { ContantComponent } from './contant/contant.component';


const routes: Routes = [
  
  { path: 'home', component: HeaderComponent },
  { path: 'about', component: aboutComponent },
  { path: 'contant', component: contantComponent },

];

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, HeaderComponent, HomeComponent, FooterComponent, AboutComponent, ContantComponent,],
  bootstrap:    [ AppComponent ]
})
export class AppRoutingModule { }