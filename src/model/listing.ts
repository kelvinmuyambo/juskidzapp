export class Listing {
    key: string;
    title: string;
    description: string;
    town: string;
    category: string;
    image: string;
    images: Array<any>;
    isActive: boolean = false;
    uid: string;
    date: Date = new Date();
    likes: Array<string> = [];
    dislikes: Array<string> = [];
    comments: Array<any> = [];
    contact_infomation: Array<any> = [];
    hasPaid: boolean = false;
    paymentStatus: number = 0;
}