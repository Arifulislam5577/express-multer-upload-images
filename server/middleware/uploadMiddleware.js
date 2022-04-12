import multer from "multer";

const multerConfig = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./client/public/images");
  },
  filename: (req, file, cb) => {
    const ext = file.mimetype.split("/")[1];
    const name = file.originalname.split(".")[0];
    cb(null, `${name}-${Date.now()}.${ext}`);
  },
});

const isImage = (req, file, cb) => {
  if (file.mimetype.startsWith("image")) {
    cb(null, true);
  } else {
    cb(null, new Error("Please upload a image"));
  }
};

const upload = multer({ storage: multerConfig, fileFilter: isImage });
export const uploadImage = upload.single("articleImage");
