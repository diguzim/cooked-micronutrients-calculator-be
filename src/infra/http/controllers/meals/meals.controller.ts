import { Body, Controller, Post, Request, UseGuards } from '@nestjs/common';
import { CreateMealFromItemsUseCase } from '../../../../core/application/meal/create-meal-from-items.use-case';
import { CreateMealFromItemsDto } from './dtos/create-meal-from-items.dto';
import { MealSerializer } from '../../../../utils/serializers/meal.serializer';
import { JwtAuthGuard } from '../../../../utils/guards/jwt-auth.guard';

@Controller('meals')
export class MealsController {
  constructor(
    private readonly createMealFromItemsUseCase: CreateMealFromItemsUseCase,
  ) {}

  @UseGuards(JwtAuthGuard)
  @Post('create-from-items')
  async createMealFromItems(
    @Body() createMealDto: CreateMealFromItemsDto,
    @Request() req,
  ) {
    const meal = await this.createMealFromItemsUseCase.execute(
      createMealDto,
      req.user.userId,
    );

    return MealSerializer.serialize(meal);
  }
}