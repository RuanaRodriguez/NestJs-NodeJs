import { IsString, IsNotEmpty, MinLength, IsEmail, MaxLength } from "class-validator";
export class CreateRegisterDTO{

    @IsString()
    @IsNotEmpty()
    name:string

    @IsEmail()
    @IsNotEmpty()
    email:string;

    @MinLength(6)
    @IsNotEmpty()
    @MaxLength(20)
    password:string;

    @IsNotEmpty()
    @IsString()
    site:string;   
    
}