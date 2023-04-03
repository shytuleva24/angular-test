import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";
export interface Post {
  title: string
  text: string
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  e: number = Math.E

  str: string = 'hello world'

  date: Date = new Date()

  float: number = 0.42
  obj: object = {
    a: 1,
    b: {
      c: 2,
      d: {
        e: 3,
        f: 4
      }
    }
  }

  search:string = ''
  searchField: string = 'title'
  posts: Post[] = [
    {
      title: "Title Post 1",
      text: 'lorem lorem lorem lorem lorem'
    },
    {
      title: "Title Post 2",
      text: 'lorem lorem lorem lorem lorem lorem lorem'
    },
    {
      title: "Title Post 3",
      text: 'lorem lorem'
    }
  ]

  addPost() {
    this.posts.unshift({
      title: 'Angular 8',
      text: 'Angular course'
    })
  }

  // async pipe

  p: Promise<string> = new Promise<string>(resolve => {
    setTimeout(() => {
      resolve('Promise Resolved')
    }, 4000)
  })
  myDate$: Observable<Date> = new Observable<Date>(obs => {
    setInterval(() => {
      obs.next(new Date())
    }, 1000)
  })
  myDate: Date | undefined
  ngOnInit() {
    this.myDate$.subscribe(date => {
      this.myDate = date
    })
  }

}
