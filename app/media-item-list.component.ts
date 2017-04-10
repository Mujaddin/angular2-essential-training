import { Component } from '@angular/core';

@Component({
  selector: 'mw-media-item-list',
  templateUrl: 'app/media-item-list.component.html',
  styleUrls: ['app/media-item-list.component.css']
})
export class MediaItemListComponent {
  selectedItem = null;
  onMediaItemDelete(mediaItem) { console.log("deleted") }
  onMediaItemPreview(mediaItem) {
    this.selectedItem = mediaItem;
  }
  onPopup(mediaItem) {
    this.selectedItem = null;
  }
  mediaItems = [
    {
      id: 1,
      name: "Youtube Sports",
      medium: "free",
      format: "Adobe Flash Player",
      year: 2010,
      profile: "YouTube, the biggest video hosting site in the world, provides tons of interesting content online. And for free. You can also upload your own videos to share with the world.",
      isFavorite: false
    },
    {
      id: 2,
      name: "Yahoo Sports",
      medium: "free",
      format: "Adobe Flash Player",
      year: 2010,
      profile: "ind all the lastest sports news, scores, photoes and epsecially videos coming from different sources like NFL, NBA and also Yahoo Sports itself.",
      isFavorite: false
    }, {
      id: 3,
      name: "SL.com Vidoe",
      medium: "free",
      format: "Adobe Flash Player",
      year: 2010,
      profile: "SI.com is the best resource for breaking news, analysis of sports. You can also watch its big library of videos.",
      isFavorite: false
    }, {
      id: 4,
      name: "ESPN video",
      medium: "free",
      format: "Adobe Flash Player",
      year: 2010,
      profile: "ESPN, as the worldwide leader in sports, provides a big amount of information, like news, scores and also videos for you to check the lastest matches.",
      isFavorite: false
    }, {
      id: 5,
      name: "NDTV",
      medium: "free",
      format: "Adobe Flash Player",
      year: 2010,
      profile: "New Dehli TV or NDTV is a news channel based in India that also allows you to watch the latest sports video for free wherever you are in the world.",
      isFavorite: false
    }
  ];
}
