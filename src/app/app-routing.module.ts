import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {StagiairesAllComponent} from "./stagiaires/stagiaires-all/stagiaires-all.component";
import {StagiaireResolverAll} from "./shared/services/stagiaires/stagiaires.service";
import {StagiairesOneComponent} from "./stagiaires/stagiaires-one/stagiaires-one.component";
import {IndexComponent} from "./stagiaires/index/index.component";




const routes: Routes = [
  {path:'',resolve:{stagiaires : StagiaireResolverAll},component:IndexComponent},
  {path:'stagiaires',resolve:{stagiaires : StagiaireResolverAll},component:StagiairesAllComponent},
  {path:'stagiaires/:id',resolve:{stagiaires : StagiaireResolverAll},component:StagiairesOneComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
