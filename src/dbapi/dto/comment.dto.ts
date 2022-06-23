import {
  IsDate,
  IsInt,
  IsOptional,
  IsPositive,
  IsString,
} from 'class-validator';

export class CommentDTO {

  @IsString()
  text!: string;

  @IsOptional()
  @IsDate()
  createdAt!: Date;
}


// export class CommentDTO {
//   @IsInt()
//   @IsPositive()
//   id!: number;

//   @IsString()
//   text!: string;

//   @IsOptional()
//   @IsDate()
//   createdAt!: Date;
// }
