import { mockedUser } from '../../../utils/test/mocked.entities';
import { CreateUserUseCase } from './create-user.use-case';
import { UserRepository } from '../../domain/user/user.repository';

describe('CreateUserUseCase', () => {
  let createUserUseCase: CreateUserUseCase;

  const userRepository: UserRepository = {
    create: jest.fn(),
    findBy: jest.fn().mockResolvedValue(null),
  };

  beforeEach(() => {
    createUserUseCase = new CreateUserUseCase(userRepository);
  });

  const params = {
    name: 'John Doe',
    email: 'email@example.com',
    password: 'password',
  };

  describe('when user already exists', () => {
    beforeAll(() => {
      userRepository.findBy = jest.fn().mockResolvedValue(mockedUser);
    });

    afterAll(() => {
      userRepository.findBy = jest.fn().mockResolvedValue(null);
    });

    it('should throw an error', async () => {
      await expect(createUserUseCase.execute(params)).rejects.toThrow(
        'User already exists',
      );
    });
  });

  describe('when user does not exist', () => {
    it('should create a user with hashed password', async () => {
      await createUserUseCase.execute(params);

      expect(userRepository.create).toHaveBeenCalledWith({
        name: 'John Doe',
        email: 'email@example.com',
        password: expect.not.stringContaining('password'),
      });

      expect(userRepository.create).toHaveBeenCalledWith({
        name: 'John Doe',
        email: 'email@example.com',
        password: expect.any(String),
      });
    });
  });
});
