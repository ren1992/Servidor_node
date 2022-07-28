import path from 'path';
import multer from 'multer';

const storageImagePlato = multer.diskStorage
(
    {
        destination: function (req, file, cb) 
        {
            cb(null, path.join(__dirname,'../imagenes/platos'))
        },
        filename: function (req, file, cb) 
        {
            cb(null, file.fieldname + '-' + Date.now())
        }
    }
)
  
const storageImageUsuario = multer.diskStorage
(
    {
        destination: function (req, file, cb) 
        {
            cb(null, path.join(__dirname,'../imagenes/usuario'))
        },
        filename: function (req, file, cb) 
        {
            cb(null, file.fieldname + '-' + Date.now()+'.'+file.mimetype.split('/')[0])
        }
  }
)
 
 
  export const uploadPlato = multer({ storage: storageImagePlato })
  export const uploadUsuario = multer({ storage: storageImageUsuario })
