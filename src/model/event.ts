import { Listing } from "./listing";

export class Event extends Listing {
    startDate: any;
    endDate: any;
    startTime: any = '10:00';
    endTime: any = '16:00';
    rsvp: Array<any>;
}