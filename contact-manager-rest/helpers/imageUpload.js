const cloudinary = require('cloudinary');

cloudinary.config({ 
    cloud_name: 'duu1rdj3e', 
    api_key: '812515561622351', 
    api_secret: 'PUamMPBEZIeR2dUM8k2mPduvgzg' 
  });

  async function uploadImage(image) {
    const result = await cloudinary.uploader.upload(image, {
      transformation: [
        { gravity: "face", height: 400, width: 400, crop: "crop" },
        { radius: "max" },
        { width: 200, crop: "scale" },
      ],
    });
    const imageData = {
      url: result.secure_url,
      publicId: result.public_id,
    };
    return imageData;
  }
  
  module.exports =  uploadImage;