export interface TimelineEvent {
  id: string;
  date: string;
  image: string;
  description: string;
}

export interface TimelineYear {
  year: number;
  events: TimelineEvent[];
}
