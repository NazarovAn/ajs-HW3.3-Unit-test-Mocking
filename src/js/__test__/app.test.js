import getLevel from '../app';
import fetchData from '../http';

jest.mock('../http');

beforeEach(() => {
  jest.resetAllMocks();
});

describe('Mock fetchData', () => test.each([
  ['fetchData response \'ok\'', { level: 10, status: 'ok' }, 'Ваш текущий уровень: 10'],
  ['fetchData response \'not ok\'', { status: 'not ok' }, 'Информация об уровне временно недоступна'],
])(
  ('%s'),
  (level, amount, expected) => {
    fetchData.mockReturnValue(amount);
    expect(getLevel(101)).toBe(expected);
  },
));

// test('fetchData response \'ok\'', () => {
//   fetchData.mockReturnValue({ level: 10, status: 'ok' });
//   expect(getLevel(101)).toBe('Ваш текущий уровень: 10');
// });

// test('fetchData response \'not ok\'', () => {
//   fetchData.mockReturnValue({ level: 10, status: 'not ok' });
//   expect(getLevel(101)).toBe('Информация об уровне временно недоступна');
// });
