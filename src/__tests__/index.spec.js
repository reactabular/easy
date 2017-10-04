import { Table, bindColumns, processRows } from '../index';

it('should export an API', () => {
  expect(Table).toEqual(expect.any(Function));
  expect(bindColumns).toEqual(expect.any(Function));
  expect(processRows).toEqual(expect.any(Function));
});
