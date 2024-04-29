import { Component, OnInit } from '@angular/core';
import { StoryService } from 'src/app/services/story.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit{

  get news() {
    return this.storyService.stories;
  }

  constructor(private storyService: StoryService){}

  ngOnInit(): void {
    this.storyService.getStoriesFromServer().subscribe((stories)=>{
      this.storyService.stories = stories;
    })
  }

}
