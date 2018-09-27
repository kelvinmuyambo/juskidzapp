export class Listing {
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
    deadline: Date;
    uid: string;
}