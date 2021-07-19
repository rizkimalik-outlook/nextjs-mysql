import knex from '../../../config/db'

export default async function handler(req, res) {
    try {
        const barang = await knex('barang')
        
        res.status(200);
        res.json({ 
            'data': barang 
        });
    } 
    catch (error) {
        console.log(error);
    }
    
  }
  