import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { homeComponent } from "./header/header.component";
import { aboutComponent } from './about/about.component';
import { ContantComponent } from './contant/contant.component';


const routes: Routes = [
  { path: "home", component: homeComponent },
  { path: "about", component: aboutComponent },
  { path: "contant", component: contantComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
