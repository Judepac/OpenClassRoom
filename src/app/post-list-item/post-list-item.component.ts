import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.scss']
})
export class PostListItemComponent implements OnInit {
@Input() post: any[];

  constructor() { }

  ngOnInit() {
  }
  plusLove(article) {
    article.loveIts++;
  }
  moinsLove(article) {
    article.loveIts--;
  }
  modifLove(article){
    if ( article.loveIts > 0) {
      return 'Lightgreen';
    }
    if ( article.loveIts < 0) {
      return 'Lightcoral';
    }
  }

}
