import { Schema ,SchemaFactory, Prop} from "@nestjs/mongoose";

@Schema()
export class Books{

    @Prop({unique: true})
    title:string;
    
    @Prop({required:true})
    author:string;

    @Prop({required:true})
    description:string;

}

export const BookMarkSchema = SchemaFactory.createForClass(Books);