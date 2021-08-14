import { Component } from '@angular/core';
import { Howl, Howler } from 'howler';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'lamdekor';
  sound: any;
  clicked = false;

  constructor() {
    this.sound = new Howl({
      src: ['assets/music.mp3']
    });
    this.sound.load();
    this.sound.volume(0.2);
  }

  playMusic() {
    if (!this.clicked) {
      this.sound.play()
    }
    this.clicked = true;
  }

}
