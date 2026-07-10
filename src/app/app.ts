import { Component, signal } from '@angular/core';
import { NavbarComponent } from "./components/navbar/navbar.component";
import { HeroComponent } from "./components/hero/hero.component";
import { DutiesComponent } from "./components/duties/duties.component";
import { VideoGallariesComponent } from "./components/video-gallaries/video-gallaries.component";
import { PosterGallriesComponent } from "./components/poster-gallries/poster-gallries.component";
import { ContactComponent } from "./components/contact/contact.component";
//import { MediaShowcaseComponent } from "./components/media-showcase/media-showcase.component";
import { SkillsComponent } from "./components/skills/skills.component";
import { LeadershipComponent } from "./components/leadership/leadership.component";

@Component({
  selector: 'app-root',
  imports: [NavbarComponent, HeroComponent, DutiesComponent, VideoGallariesComponent, PosterGallriesComponent, ContactComponent, SkillsComponent, LeadershipComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('police-pro-portfolio');
}
