import { AppRepository } from 'src/repository/app.repository';
import { AppService } from './app.service';
import { Test, TestingModule } from '@nestjs/testing';

describe.skip('getHello', () => {
  let appService: AppService;
  let appRepository: AppRepository;

//   beforeEach(async () => {
//     const module: TestingModule = await Test.createTestingModule({
//       imports: [],
//       providers: [AppRepository],
//     }).overrideProvider(AppRepository).useValue(appRepository).compile();
//   });

  test('repositoryがnullを返す時、Hello guest!が返ること', () => {
    const expected = 'Hello guest!';
    // jest.
    expect(appService.getHello(null)).toBe(expected);
  });
  test('repositoryが文字列を返す時、Hello `repositoryから返る値`!が返ること', () => {
    const expected = 'Hello user!';
    expect(appService.getHello('user')).toBe(expected);
  });
});
