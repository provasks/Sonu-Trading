import { Injectable } from "@angular/core";
@Injectable()
export class Globals {
    constructor() { }
    API_ENDPOINT: string = "http://localhost:8081/api/";
    IMAGE_PATH: string = "../assets/img/";
    SCREEN:any = {
        DESKTOP: "1200px",
        TABLET: "992px",
        MOBILE: "768px"
    }
}