import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  data: any[] = [];

  constructor(private postService: PostService) { }

  ngOnInit(): void {
      this.postService.getPosts().subscribe(data => {
        this.data = data;
      })

  }
}
