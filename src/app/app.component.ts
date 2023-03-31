import {Component, OnInit} from '@angular/core';
export interface Post {
  title: string
  text: string
  id?: number
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  posts: Post[] = [
    {title: 'Angular', text: 'lorem', id: 1},
    {title: 'Angular 2', text: 'lorem 2', id: 2}
  ]
  ngOnInit(): void {
    setTimeout(() => {
      // this.posts[0].title = "Changed!"
      this.posts[0] = {
        title: 'Changed!',
        text: 'lorem'
      }
    }, 5000)
  }

  updatePosts(post: Post) {
    this.posts.unshift(post)
  }
  removePost(id: number) {
    this.posts = this.posts.filter(p => p.id !== id)
  }
}
