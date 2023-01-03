import { formatRequestFiles } from ".";

// describe('Utils tests', () => {
//   test('formatRequestFiles function test', () => {
//     expect(formatRequestFiles({
//       "usr/bin": ["lrwxrwxrwx", "1", "root", "root", "7", "16 Sep 02:08"], "boot": ["drwxr-xr-x", "4", "root", "root", "4.0K", "26 Dec 06:16"]
//     })).toEqual(
//       [{ name: 'usr/bin', type: 'Папка', owner: 'root', lastUpdated: '16 Sep 02:08', size: '7' }, { name: 'boot', type: 'Папка', owner: 'root', lastUpdated: '26 Dec 06:16', size: '4.0K' }])
//   })
// })