import {
  IsEmail,
  IsInt,
  IsNotEmpty,
  IsNumber,
  IsPhoneNumber,
  IsString,
} from 'class-validator';

export class CreateGymDto {
  @IsString()
  @IsNotEmpty()
  roomName: string;
  @IsString()
  @IsNotEmpty()
  trainingPackageId: string;
  @IsNumber()
  @IsInt()
  @IsNotEmpty()
  numberOfRooms: number;
  @IsString()
  @IsNotEmpty()
  address: string;
  @IsNotEmpty()
  @IsPhoneNumber()
  telephone: string;
  @IsString()
  @IsNotEmpty()
  @IsEmail()
  email: string;
}
