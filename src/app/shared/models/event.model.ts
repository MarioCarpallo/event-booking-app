export interface EventDetail {
    id: string;
    title: string;
    subtitle: string;
    image: string;
    place: string;
    startDate: string;
    endDate: string;
    description: string;
}

export interface EventInfo {
    id: string;
    title: string;
    subtitle: string;
    image: string;
}

export interface Session {
    date: string;
    availability: string;
}

export class EventSession {
    event?: EventInfo;
    sessions?: Session[];
}

export interface Cart{
    eventInfo: EventInfo,
    sessions: SessionCart[]
}

export interface SessionCart {
    date: string;
    quantity: number;
}