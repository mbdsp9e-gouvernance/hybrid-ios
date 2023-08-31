import { Filesystem, Directory, Encoding } from '@capacitor/filesystem';

export async function readData(fileName: string) {
    try {
        const data = await Filesystem.readFile({
            path: `${fileName}`,
            directory: Directory.ExternalStorage,
            encoding: Encoding.UTF8,
        });

        return data;

    } catch (error) {
        console.error("Error reading  data:", error);
    }
}
