import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http"

@Injectable({
  providedIn: 'root'
})
export class GithubService {

  baseUrl = "https://api.github.com/users/"

  constructor(private http:HttpClient) { }

  getUserDetails(userName : string)
  {
    return this.http.get(this.baseUrl + userName);
  }

  getRepos(repoUrl:string)
  {
    return this.http.get(repoUrl);
  }
}
