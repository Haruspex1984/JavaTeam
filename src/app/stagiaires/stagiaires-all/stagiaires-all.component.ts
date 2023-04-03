import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Stagiaire} from "../../shared/models/stagiaire";
import {ActivatedRoute} from "@angular/router";
import {StagiairesService} from "../../shared/services/stagiaires/stagiaires.service";


@Component({
  selector: 'app-stagiaires-all',
  templateUrl: './stagiaires-all.component.html',
  styleUrls: ['./stagiaires-all.component.css']
})
export class StagiairesAllComponent implements OnInit {


  stagiaires: Stagiaire[] = []

  constructor(private route: ActivatedRoute, private service: StagiairesService) {
  }

  ngOnInit(): void {
    this.stagiaires = this.service.stagiaires
    this.stagiaires.sort((a, b) => a.firstname.localeCompare(b.firstname));

  }


}
