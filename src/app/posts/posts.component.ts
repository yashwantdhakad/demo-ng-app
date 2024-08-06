import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts: any[] = [];

  constructor(private postService: PostService) { }

  ngOnInit(): void {
      // this.postService.getPosts().subscribe(data => {
      //   this.data = data;
      // })
      this.postService.getPosts().subscribe({
        next: (data) => {
          this.posts = data;
        },
        error: (error) => {
          console.log(error);
        }
      })

  }
}
