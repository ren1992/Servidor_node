import path from 'path';
import multer from 'multer';
const __dirname = path.resolve();
const storageImagePlato = multer.diskStorage
(
    {
        destination: function (req, file, cb) 
        {
            cb(null, path.join(__dirname,'../servidor/imagen/plato'))
        },
        filename: function (req, file, cb) 
        {
            console.log(file);
            cb(null, file.originalname)
        }
    }
)
  
const storageImageUsuario = multer.diskStorage
(
    {
        destination: function (req, file, cb) 
        {
            cb(null, path.join(__dirname,'../servidor/imagen/plato'))
        },
        filename: function (req, file, cb) 
        {
            cb(null, file.originalname)
        }
   }
)
 
export const uploadPlato = multer({ storage: storageImagePlato })
export const uploadUsuario = multer({ storage: storageImageUsuario })
