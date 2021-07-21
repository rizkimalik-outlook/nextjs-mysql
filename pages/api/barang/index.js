import knex from '../../../lib/db'
// import authorizations from '../../../middleware/authorization'

export default async function handler(req, res) {

    if(req.method !== 'GET') return res.status(405).end();
    // const auth = await authorizations(req, res);

    const barang = await knex('barang')
    
    res.status(200);
    res.json({ 
        status: 200,
        data: barang 
    });

    
}
  