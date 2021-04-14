export default interface IStorageProvider {
  saveFile(file: striong): Promise<string>;
  deleteFile(file: string): Promise<void>;
}
