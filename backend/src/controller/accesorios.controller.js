const accesoriosCtrl = {};
const Accesorio = require('../models/Stock');
const { path } = require('path');

accesoriosCtrl.getAccesorios = async(req, res) => {
    const accesorios = await Accesorio.find({categoria:"accesorios"});
    res.status(200).json({accesorios});
};
//obtener
accesoriosCtrl.getAccesorio = async(req, res) => {
    const accesorio = await Accesorio.findById({_id: req.params.id});
    res.status(200).json({accesorio});
};
//formulario para agregar
accesoriosCtrl.renderFormAntiparra = (req, res)=> {
    res.send('formulario');
}
const getFileExtension = (filename)=> filename.split('.').pop();
accesoriosCtrl.createAntiparra = async(req, res)=> {
    const {
        marca_producto,
        descripcion,
        detalles,
        precio
    } = req.body;
    let stock = {
        cantidad: req.body.cantidad,
        color: req.body.color
    };
    const categoria= 'Accesorios';
    const subcategoria = 'antiparras';
    const originalname = req.file.originalname;
    const extension_img = getFileExtension(originalname);
    const imagen = req.file.filename;
    const newAccesorio = new Accesorio({
        categoria,
        subcategoria,
        marca_producto,
        descripcion,
        detalles,
        stock,
        precio,
        imagen,
        extension_img 
    });
    await newAccesorio.save();
    res.status(200).json({success: true, message:'accesorio agregado correctamente'})


}
//formulario para editar
accesoriosCtrl.renderEditAntiparra = async (req, res)=>{
    const accesorio = await Accesorio.findById(req.params.id);
    res.json({ accesorio });
}

accesoriosCtrl.updateAntiparra = async (req, res)=>{
    const {
        marca_producto,
        descripcion,
        detalles,
        precio,
        imagen,
        extension_img
    } = req.body;
    let stock = {
        cantidad: req.body.cantidad,
        color: req.body.color
    };
    const categoria= 'Accesorios';
    const subcategoria = 'antiparras';
    await Accesorio.findByIdAndUpdate(req.params.id,{
        categoria,
        subcategoria,
        marca_producto,
        descripcion,
        detalles,
        stock,
        precio,
        imagen,
        extension_img 
    });
    res.status(200).json({success: true, message:'accesorio actualizado correctamente'})
}

accesoriosCtrl.deleteAntiparra = async(req, res )=>{
    await Accesorio.findByIdAndDelete(req.params.id);
    res.status(200).json({success: true, message: 'accesorio eliminado correctamente'})
}
/* 


accesoriosCtrl.renderAccesorios = async (req, res) => {
    const accesorios = await Accesorio.find({categoria:"accesorios"});
    res.render('accesorios/accesorios-list', {accesorios});
};
accesoriosCtrl.renderEdit = async (req, res) => {
    const accesorios = await Accesorio.findById(req.params.id);
    res.render('accesorios/edit-accesorio', { accesorios });
}

accesoriosCtrl.updateAccesorio = async (req, res) => {
    const {
        categoria,
        subcategoria,
        marca_producto,
        descripcion,
        tamanio,
        contenido_neto,
        detalles,
        codigo,
        precio
    } = req.body;

    let stock = {
        cantidad: req.body.cantidad,
        color: req.body.color
    };

    let marca_motos = [{
            marca: req.body.marca1,
            modelos: req.body.modelos1
        },
        {
            marca: req.body.marca2,
            modelos: req.body.modelos2
        }
    ];
    await Accesorio.findByIdAndUpdate(req.params.id, {
        categoria,
        subcategoria,
        marca_producto,
        marca_motos,
        descripcion,
        tamanio,
        contenido_neto,
        detalles,
        codigo,
        stock,
        precio
    });
    req.flash('success_msg','Accesorio actualizado satisfactoriamente')
    res.redirect('/accesorios');
    //error para traer
} */
module.exports = accesoriosCtrl;