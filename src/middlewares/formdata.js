import multer from 'multer';
const upload = multer()

export const formdataMiddleware = upload.array();