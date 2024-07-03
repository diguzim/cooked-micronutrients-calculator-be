import { Item, ItemType } from '../../core/domain/item/item.entity';
import { User } from '../../core/domain/user/user.entity';

export const mockedItem = new Item({
  name: 'Some item',
  type: ItemType.RAW,
  proteinRatio: 0.2,
  fatRatio: 0.3,
  carbohydrateRatio: 0.4,
  fiberRatio: 0.1,
  kcalPerGram: 5.1,
});

export const mockedUser = new User({
  name: 'John Doe',
  email: 'email@example.com',
  password: 'hashedPassword',
});
