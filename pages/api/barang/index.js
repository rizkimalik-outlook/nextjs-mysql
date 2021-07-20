import knex from '../../../lib/db'

export default async function handler(req, res) {
    // console.log(req.headers);
    try {
        const barang = await knex('barang')
        
        res.status(200);
        res.json({ 
            status: 200,
            data: barang 
        });
    } 
    catch (error) {
        console.log(error);
    }
    
  }
  