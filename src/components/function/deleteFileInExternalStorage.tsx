import { Filesystem, Directory } from '@capacitor/filesystem';

export async function deleteFileInExternalStorage(fileName: string) {
    try {

        await Filesystem.deleteFile({
            path: `${fileName}`,
            directory: Directory.ExternalStorage,
        });

    } catch (error) {
        console.error("Error delete data:", error);
    }
}
