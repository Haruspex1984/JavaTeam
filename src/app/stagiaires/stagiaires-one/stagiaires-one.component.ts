import {Component, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {StagiairesService} from "../../shared/services/stagiaires/stagiaires.service";
import {Stagiaire} from "../../shared/models/stagiaire";
import {Comment} from "../../shared/models/stagiaire";
import {ActivatedRoute} from "@angular/router";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {min} from "rxjs";

@Component({
  selector: 'app-stagiaires-one',
  templateUrl: './stagiaires-one.component.html',
  styleUrls: ['./stagiaires-one.component.css']
})
export class StagiairesOneComponent implements OnInit {

  constructor(private service: StagiairesService, private route: ActivatedRoute, private formBuilder: FormBuilder) {
  }

  stagiaires: Stagiaire[] = [];
  comments: Comment[] = []
  selectedStagiaire: Stagiaire | undefined

  ngOnInit(): void {
    document.body.scrollTop = document.documentElement.scrollTop = 0;
    this.stagiaires = this.service.stagiaires;
    const id: number = this.route.snapshot.params['id'];
    this.selectedStagiaire = this.stagiaires.find(a => a.id == id)
    if (this.selectedStagiaire != undefined) {
      this.comments = this.selectedStagiaire.comments

    }
  }



  commentForm: FormGroup = this.formBuilder.group({
    author: ['', [Validators.required,Validators.min(5)]],
    content: ['', Validators.required]
  })

  submit() {
    let values = this.commentForm.value;

    let newComment: Comment = {
      author: values.author,
      content: values.content,
      stagiaireId: this.route.snapshot.params['id'],
      creationDate : new Date()
    }

    this.service.submit(newComment).subscribe({
      next: () => {
        this.commentForm.reset()
        location.reload();

      }
    });
  }
}


