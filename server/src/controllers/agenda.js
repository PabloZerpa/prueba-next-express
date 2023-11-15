
const pool = require('../config');


const obtenerContactos = async (req, res) => {
    try {
        const consulta = await pool.query('SELECT * FROM agenda');
        res.json(consulta[0]);
    } catch (error) {
        return res.status(400).json({ message: 'ERROR AL OBTENER CONTACTOS' });
    }
}

const obtenerPorId = async (req, res) => {
    try {
        const id = req.params.id;
        const consulta = await pool.query('SELECT * FROM agenda WHERE contact_id = ?', [id]);
        res.send(consulta[0]);
    } catch (error) {
        return res.status(400).json({ message: 'ERROR AL OBTENER CONTACTO' });
    }
}

const registrarContacto = async (req ,res) => {
    
    try {
        const { name, phone, email } = req.body;
        await pool.query('INSERT INTO agenda (contact_name, contact_phone, contact_email) VALUES (?,?,?)', [name, phone, email]);
        res.send('REGISTRO EXITOSO');
    } catch (error) {
        return res.status(400).json({ message: 'ERROR AL RESGISTRAR CONTACTO' });
    }
    

}

const editarContacto = async (req ,res) => {

    try {
        const { name, phone, email } = req.body;
        const id = req.params.id;

        await pool.query('UPDATE agenda SET contact_name = ?, contact_phone = ?, contact_email = ? WHERE contact_id = ?', 
            [name,phone,email,id]);
    
        res.send('Actualizacion exitosa');

    } catch (error) {
        return res.status(400).json({ message: 'ERROR AL EDITAR CONTACTO' });
    }

}

const eliminarContacto = async (req ,res) => {
    try {
        const id = req.params.id;
        await pool.query('DELETE FROM agenda WHERE contact_id = ?', [id]);
        res.send('Eliminacion exitosa');
    } catch (error) {
        return res.status(400).json({ message: 'ERROR AL ELIMINAR CONTACTO' });
    }
}

module.exports = { obtenerContactos, obtenerPorId, registrarContacto, editarContacto, eliminarContacto };