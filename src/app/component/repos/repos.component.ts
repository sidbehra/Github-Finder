import { Component, Input, OnInit,OnChanges,ChangeDetectorRef } from '@angular/core';
import { GithubService } from 'src/app/services/github.service';

@Component({
  selector: 'app-repos',
  templateUrl: './repos.component.html',
  styleUrls: ['./repos.component.css']
})
export class ReposComponent implements OnInit,OnChanges {

  @Input()  repoUrl:string;
  repos = []

  constructor(private githubService:GithubService,private ref:ChangeDetectorRef) { }

  ngOnInit() {
    this.githubService.getRepos(this.repoUrl)
  }

  ngOnChanges()
  {
    if (this.repoUrl) {
      this.githubService.getRepos(this.repoUrl).subscribe((repos:[]) => {
        this.repos = repos;
        this.ref.detectChanges();
      },(err)=>{
        console.log(err);
      })
    }
  }

}
