import { PosterType } from "../types/poster";

export class Poster{
    title: string;
    image: string;
    color:string

    constructor({title, image, color}:PosterType){
        this.image = image;
        this.title = title;
        this.color = color
    }
}