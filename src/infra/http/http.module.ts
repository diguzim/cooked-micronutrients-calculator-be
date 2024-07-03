import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { ItemsController } from './controllers/items/items.controller';
import { CreateItemFromRatiosUseCase } from '../../core/application/item/create-item-from-ratios.use-case';
import { CreateItemFromAbsoluteValuesUseCase } from '../../core/application/item/create-item-from-absolute-values.use-case';
import { CreateCompositeItemUseCase } from '../../core/application/item/create-composite-item.use-case';
import { GetItemsUseCase } from '../../core/application/item/get-items.use-case';
import { CalculateNutritionalValuesUseCase } from '../../core/application/item/calculate-nutritional-values.use-case';
import { CreateUserUseCase } from '../../core/application/user/create-user.use-case';
import { UsersController } from './controllers/users/users.controller';

@Module({
  imports: [DatabaseModule],
  controllers: [ItemsController, UsersController],
  providers: [
    CreateItemFromRatiosUseCase,
    CreateItemFromAbsoluteValuesUseCase,
    CreateCompositeItemUseCase,
    GetItemsUseCase,
    CalculateNutritionalValuesUseCase,
    CreateUserUseCase,
  ],
})
export class HttpModule {}
