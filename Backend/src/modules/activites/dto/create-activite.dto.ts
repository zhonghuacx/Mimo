import { IsNotEmpty } from 'class-validator';

export class CreateActiviteDto {
  @IsNotEmpty()
  name: string;
}
