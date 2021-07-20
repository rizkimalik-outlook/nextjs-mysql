import knex from '../../../lib/db'

export default async function handler(req, res) {
    try {
        if(req.method !== 'PUT') return res.status(405).end('Method not Allowed');

        const {slug} = req.query;
        const {nama, jumlah} = req.body;
        const update = await knex('barang')
                            .update({ name: nama, jumlah: jumlah })
                            .where({ slug: slug })
        
        res.status(200);
        res.json({ 
            'data': 'Success Update' 
        });
    } 
    catch (error) {
        console.log(error);
    }
    
  }
  