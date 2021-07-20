import knex from '../../../lib/db'

export default async function handler(req, res) {
    try {
        if(req.method !== 'PUT') return res.status(405).end('Method not Allowed');

        // const {id} = req.query;
        const {id, nama_barang, jumlah} = req.body;
        
        const updateId = await knex('barang')
                        .where({ id: id })
                        .update({nama_barang: nama_barang, jumlah: jumlah})
        
        // console.log(update);
        const updateData = await knex('barang').where({id: id}).first();

        res.status(200);
        res.json({ 
            'status': 200,
            'data': updateData 
        }); 
    } 
    catch (error) {
        console.log(error);
    }
    
  }
  