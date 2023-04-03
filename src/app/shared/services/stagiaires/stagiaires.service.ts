import {inject, Injectable, OnInit} from '@angular/core';
import {Stagiaire} from "../../models/stagiaire";
import {Comment} from "../../models/stagiaire";
import {ActivatedRouteSnapshot, ResolveFn, RouterStateSnapshot} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class StagiairesService {

  stagiaires: Stagiaire[] | any

  loadAll(): Observable<Stagiaire> {
    return this.http.get<Stagiaire>("http://localhost:8080/stagiaires/all")
  }

  submit(comment: Comment) {
    return this.http.post("http://localhost:8080/stagiaires/new-comment", comment)
  }


  constructor(private http: HttpClient) {
    this.loadAll().subscribe({
      next: value => {
        this.stagiaires = value;
      },
      error: err => {
        console.log("Erreur")
      }
    })
  }


}

export const StagiaireResolverAll: ResolveFn<Stagiaire> =
  (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
    return inject(StagiairesService).loadAll();
  };


