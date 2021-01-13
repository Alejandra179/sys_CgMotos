const mongoose = require('mongoose');
const {
    Schema,
    model
} = mongoose;

const StockSchema = new Schema({
    categoria:{
        type: String,
        required: true
    },
    subcategoria: {
        type: String,
        required: true
    },
    marca_producto: {
        type: String,
        required: true,
    },
    marca_motos:[
        {
            marca: String,
            modelos: String
        }
    ],
    descripcion: {
        type: String,
        required: true
    },
    tamanio:{
        ancho: Number,
        largo: Number,
        diametro: Number,
        espesor: Number,
        talle: Number
        
    },
    contenido_neto: String,
    tipo_contenedor: {
        type: String,
        enum: ['Aerosol','Bidón']
    },
    detalles: String,
    codigo: String,
    stock: 
        {
            cantidad: {
                type:Number,
                required: true
            },
            color: String
            
        }
        
    ,
    
    precio: {
        type: Number,
        required: true
    },
    imagen: String,
    extension_img: String,
    grado_aceite_motor: String,
    tipo_combustion: String,
    
}, {
    timestamps: true
})

module.exports = model('Stock', StockSchema); 
