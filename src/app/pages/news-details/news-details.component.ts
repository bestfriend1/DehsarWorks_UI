import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Story } from 'src/app/interfaces';
import { StoryService } from 'src/app/services/story.service';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-news-details',
  templateUrl: './news-details.component.html',
  styleUrls: ['./news-details.component.scss'],
})
export class NewsDetailsComponent {
  selectedNews: Story;
  youtubeEmbedLink:SafeResourceUrl;

  constructor(
    private storyService: StoryService,
    private route: ActivatedRoute,
    private sanitizer: DomSanitizer
  ) {}

  ngOnInit(): void {
    let id = this.route.snapshot.params['id'];

    this.storyService.getStoriesFromServer().subscribe((stories) => {
      this.storyService.stories = stories;
      this.selectedNews = stories[id];
      this.youtubeEmbedLink = this.sanitizer.bypassSecurityTrustResourceUrl(this.selectedNews.youtubeLink);
    });
  }
}
