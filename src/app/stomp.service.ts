import { Injectable } from '@angular/core';
import { Client, Message } from '@stomp/stompjs';
import * as SockJS from 'sockjs-client';

@Injectable({
  providedIn: 'root'
})
export class StompService {
  private client: Client;
  private messageCallback: (message: string) => void = () => {};

  constructor() {
    this.client = new Client({
      webSocketFactory: () => new SockJS('http://localhost:8080/ws'),
      debug: str => console.log('STOMP debug:', str),
      reconnectDelay: 5000,
      heartbeatIncoming: 4000,
      heartbeatOutgoing: 4000,
      onConnect: (frame) => {
        console.log('Connected to STOMP broker:', frame);
        this.subscribeToTopic();
      },
      onStompError: frame => {
        console.error('Broker error:', frame.headers['message']);
      }
    });
    this.client.activate();
  }

  private subscribeToTopic() {
    this.client.subscribe('/topic/your-topic', (message: Message) => {
      console.log('Received message:', message.body); // Log received message
      if (this.messageCallback) {
        this.messageCallback(message.body);
      }
    });
  }

  public sendMessage(destination: string, body: any) {
    console.log('Sending message to', destination, 'with body:', body); // Log sent message
    this.client.publish({ destination: destination, body: body });
  }

  public onMessage(callback: (message: string) => void) {
    this.messageCallback = callback;
  }
}
