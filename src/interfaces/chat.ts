export interface ChatInfo {
  id: number;
  name: string;
  // isShow: boolean
}

export interface ChatMessage {
  text: string;
  outcomming: boolean;
  match?: boolean
}

export interface Chat {
  info: ChatInfo;
  messages: ChatMessage[];
}