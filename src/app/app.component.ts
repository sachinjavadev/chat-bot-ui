import { ChangeDetectorRef, Component } from '@angular/core';
import { StompService } from './stomp.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-angular11-project2';
  constructor(private stompService: StompService, private cdr: ChangeDetectorRef) {}
  message: string = '';
  messages: { timestamp: Date, content: string }[] = [];
  // sendMessage() {
  //   this.stompService.sendMessage('/app/send', 'Hello, STOMP!');sss
  // }

  ngOnInit(): void {
    this.stompService.onMessage((message: string) => {
      this.messages.push({
        timestamp: new Date(),
        content: message
      });
    });

    this.cdr.detectChanges();
  }

  sendMessage() {
    if (this.message.trim()) {
      this.stompService.sendMessage('/app/send', this.message);
      // this.messages.push({
      //   timestamp: new Date(),
      //   content: this.message
      // });
      this.message = ''; // Clear the input after sending
    }
  }
/*
    title = 'my-angular11-project2';
  message: string = '';
  messages: { timestamp: Date, content: string }[] = [];

  constructor(private stompService: StompService) {
    // Subscribe to topic and handle incoming messages
    /*
    this.stompService.onMessage((message: string) => {
      this.messages.push({
        timestamp: new Date(),
        content: message
      });
    });
  }

  sendMessage() {
    if (this.message.trim()) {
      this.stompService.sendMessage('/app/send', this.message);
      this.message = ''; // Clear the input after sending
    }
  }*/
}
