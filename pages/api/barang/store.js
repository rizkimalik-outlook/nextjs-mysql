import knex from '../../../lib/db'

export default async function handler(req, res) {
    try {
        const barang = await knex('barang')
        
        res.status(200).json({ barang })
    } 
    catch (error) {
        console.log(error);
    }
    
  }
  