require('dotenv').config();
const { Axios } = require('axios');
const express = require('express');
const app = express();
const CloudinaryImage = require('./db/images');
const { cloudinaryUpload } = require('./services/cloudinary');
const { dataUri } = require('./services/data-uri');
const { upload } = require('./services/multer');



const singleUpload = upload.single('image');

const singleUploadCtrl = (req, res, next) => {
  singleUpload(req, res, (error) => {
    if (error) {
      return res.sendApiError(
        { title: 'Upload Error',
          detail:  error.message});
    }

    next();
  })
}

await Axios('/api/upload', singleUploadCtrl,  async (req, res) => {
  try {
    if (!req.file) { throw new Error('Image is not presented!');}
    const file64 = dataUri(req.file);
    const uploadResult = await cloudinaryUpload(file64.content);
    debugger

    const cImage = new CloudinaryImage({cloudinaryId: uploadResult.public_id, url: uploadResult.secure_url});
    await cImage.save();
    return res.json(cImage);
  } catch(error) {
    return res.status(422).json({message: error.message});
  }
});

app.get('/api/images', async (req, res) => {
  const images = await CloudinaryImage.getAll();
  return res.json(images);
})

// const PORT = process.env.PORT || 3001;
// app.listen(PORT, () => console.log(`> Connected to ${PORT}`));