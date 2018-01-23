export class User {
    _id?: string;
    name:  {
        firstName:string,
        lastName:string
    };
    email: string;
    password: string;
    language: string;
}