import { images } from "@/constants/images";
import { Poster } from "./models/poster";

export const posters:Poster[] = [
    new Poster({image:images.image1, title:'Display Product', color:'#5a3d20'}),
    new Poster({image:images.image2, title:'Promotion', color:'#7d7b7b'}),
    new Poster({image:images.image3, title:'Branding', color:'#434c57'}),
    new Poster({image:images.image4, title:'Announcement', color:'#7aaab7'}),
    new Poster({image:images.image5, title:'Personal', color:'#422717'}),
]