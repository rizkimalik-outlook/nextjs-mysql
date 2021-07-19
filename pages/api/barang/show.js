import knex from '../../../config/db'

export default async function handler(req, res) {
    try {
        if(req.method !== 'POST') return res.status(405).end('Method not Allowed');

        const {id} = req.body;
        const barang = await knex.select().from('barang').where('id',id);
        
        res.status(200);
        res.json({ 
            'data': barang 
        });
    } 
    catch (error) {
        console.log(error);
    }
    
  }
  