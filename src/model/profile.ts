import { Child } from "./child";

export class Profile {
    uid: string;
    image: string;
    first_name: string;
    last_name: string;
    town: string;
    gender: string;
    children: Array<Child>;
}