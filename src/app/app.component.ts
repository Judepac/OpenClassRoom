import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  postList = [
   { title: 'Mon premier post',
    content: 'Specie urgentium honore arma tandem urgentium Parthicarum factu varia consilio miscente haec optimum primum eius.',
    loveIts: 0,
    created_at: new Date()
  },
  { title: 'Mon deuxieme post',
    content: 'Specie urgentium honore arma tandem urgentium Parthicarum factu varia consilio miscente haec optimum primum eius.',
    loveIts: 0,
    created_at: new Date()
  },
  { title: 'Encore un post',
    content: 'Specie urgentium honore arma tandem urgentium Parthicarum factu varia consilio miscente haec optimum primum eius.',
    loveIts: 0,
    created_at: new Date()
  }
];

  constructor() { };

}
