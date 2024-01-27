const path = require("path")
const fs = require("fs") 
const UpldoadConfig = require("../config/upload")

class DiskStorage {
  async saveFile(file) {

    await fs.promises.rename(
      path.resolve(UpldoadConfig.TMP_FOLDER, file),
      path.resolve(UpldoadConfig.UPLOAD_FOLDER, file),
    );

    return file;
  }

  async deleteFile(file) {
    const filePath = path.resolve(UpldoadConfig.UPLOAD_FOLDER, file);

    try {
      await fs.promises.stat(filePath);
    } catch {
      return;
    }

    await fs.promises.unlink(filePath);
  }
}

module.exports = DiskStorage;