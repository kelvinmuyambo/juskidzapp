export class Event {
    title: string;
    description: string;
    town: string;
    category: string;
    image: string;
    images: Array<any>;
    isActive: boolean = false;
    likes: Array<string> = [];
    dislikes: Array<string> = [];
    contact_infomation: Array<any> = [];
    comments: Array<any> = [];
    date: Date = new Date();
    startDate: any;
    endDate: any;
    startTime: any = '10:00';
    endTime: any = '16:00';
    uid: string;

}