import {
  IsEmail,
  IsInt,
  IsNotEmpty,
  IsOptional,
  IsPhoneNumber,
  IsString,
} from 'class-validator';

export class UpdateGymDto {
  @IsOptional()
  @IsString()
  roomName?: string;
  @IsOptional()
  @IsInt()
  numberOfRooms?: number;
  @IsString()
  @IsNotEmpty()
  address?: string;
  @IsNotEmpty()
  @IsPhoneNumber()
  telephone?: string;
  @IsString()
  @IsNotEmpty()
  @IsEmail()
  email?: string;
}
