import { Filesystem, Directory, Encoding } from '@capacitor/filesystem';

// Check if file user data exist
export async function checkTokenUser(navigation: any) {
  try {
    const fileName = "user_data.json";
    const contents = await Filesystem.readFile({
      path: `${fileName}`,
      directory: Directory.ExternalStorage,
      encoding: Encoding.UTF8,
    });

    return contents;

  } catch (error) {
    navigation.push('/', 'root', 'replace');
    console.error("Error reading user data:", error);
  }
}
