export interface ChatInfo {
  id: number;
  name: string;
}

export interface ChatMessage {
  text: string;
  outcomming: boolean;
  found: boolean
}

export interface Chat {
  info: ChatInfo;
  messages: ChatMessage[];
}