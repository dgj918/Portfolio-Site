import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { pluck, map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import {articles} from './articles.json'

interface articleMetaData {
  title: string,
  date: string,
  picture: string
}

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {
  articlesMetaData: articleMetaData[]

  constructor(
    private http: HttpClient
  ) { 
    this.articlesMetaData = articles
  }

  ngOnInit(): void {
  }

  getArticleMetaData(): Observable<any>{
    return this.http.get('./blog.articles.json')
  }

}
