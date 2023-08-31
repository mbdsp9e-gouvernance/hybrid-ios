import { Filesystem, Directory, Encoding } from '@capacitor/filesystem';

export async function writeInExternalStorage(content: any, fileName: string) {
  try {

    await Filesystem.writeFile({
      path: `${fileName}`,
      data: content,
      directory: Directory.ExternalStorage,
      encoding: Encoding.UTF8,
    });


  } catch (error) {
    console.error("Error saving data:", error);
  }
}
