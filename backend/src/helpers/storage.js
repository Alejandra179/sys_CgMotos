const multer = require('multer');
const { path } = require('path');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'src/storage/img')
    },
    filename: (req, file, cb)=> {
        cb(null,`${file.fieldname}_${file.originalname}`)
    }
    
})

const formato = multer({
    storage: storage,
    dest: '../storage/img',
    limits: {fileSize: 1000000},
    fileFilter: (req, file, cb)=> {
        const filetype = /jpg|jpeg|png|gif/;
        const mimetype = filetype.test(file.mimetype);
        const extname = filetype.test(path.extname(file.originalname));
        if(mimetype && extname){
            return cb(null, true)
        }
        res.status(400).json({success: false,message:'Error: Debe ser una imagen'})
        
    }
}) 

const upload = multer({ storage, formato});
module.exports = upload