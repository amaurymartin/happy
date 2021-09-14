import multer from 'multer';
import path from 'path';
import crypto from 'crypto';

export default {
  storage: multer.diskStorage({
    destination: path.join(__dirname, 'uploads', 'orphanageImages'),
    filename: (request, file, callback) => {
      callback(
        null,
        // TODO: sanitize originalname
        `${crypto.randomBytes(6).toString('hex')}-${file.originalname}`,
      );
    },
  }),
};
