import knex from '../../../lib/db'
import authorization from '../../../middleware/authorization'

export default async function handler(req, res) {
    try {
        if(req.method !== 'POST') return res.status(405).end('Method not Allowed');
        const auth = await authorization(res, req);

        const {id} = req.body;
        const barang = await knex('barang').where('id',id);
        
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
  