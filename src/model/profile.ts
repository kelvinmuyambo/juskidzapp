import { Child } from "./child";

export class Profile{
    uid: string;
    image: string;
    full_name : string;
    age: number;
    town: string;
    children: Array<Child>;
}