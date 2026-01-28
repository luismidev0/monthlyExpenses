import { expensives } from "@prisma/client";

export interface createExpensivesDto {
  title: String;
  description?: String;
  value: Number;
}

export interface IExpesivesServices {
    createExpensive(data:createExpensivesDto): Promise<expensives>
}
