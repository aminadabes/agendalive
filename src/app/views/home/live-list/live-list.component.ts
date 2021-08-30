import { Component, OnInit } from '@angular/core';
import { LiveService } from 'src/app/shared/service/live.service';
import { Live } from 'src/app/shared/model/live.model';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-live-list',
  templateUrl: './live-list.component.html',
  styleUrls: ['./live-list.component.css']
})
export class LiveListComponent implements OnInit {

  livesNext!: Live[];
  livesPrevious!: Live[];
  livesNextReady: boolean = false;
  livesPreviousReady: boolean = false;
  url: string = '';
  urlSafe!: SafeResourceUrl;


  constructor(
    private rest: LiveService,
    public sanitizer: DomSanitizer
  ) { }

  ngOnInit() {
   this.getLives();
  }

  getLives(){
    console.log("asdadgadgasga")
    this.rest.getLiveWithFlag('next').subscribe((data: { content: Live[]; }) => {
      this.livesNext = data.content;
      this.livesNext.forEach(live => {
        live.urlSafe = this.sanitizer.bypassSecurityTrustResourceUrl(live.liveLink);
        this.livesNextReady = true;
      });
    });

    this.rest.getLiveWithFlag('previous').subscribe((data: { content: Live[]; }) => {
      this.livesPrevious = data.content;
      this.livesPrevious.forEach(live => {
        live.urlSafe = this.sanitizer.bypassSecurityTrustResourceUrl(live.liveLink);
      });
      this.livesPreviousReady = true;
    });
  }

}
