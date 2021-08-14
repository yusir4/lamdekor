import { Component } from '@angular/core';
import { Howl, Howler } from 'howler';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'lamdekor';
  constructor() {
    let sound = new Howl({
      src: ['assets/music.mp3']
    });
    sound.loop(0);
    sound.volume(0.2);
    sound.play()
  }
}
