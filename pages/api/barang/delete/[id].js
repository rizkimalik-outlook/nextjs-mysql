import knex from '../../../../lib/db'

export default async function handler(req, res) {
    try {
        if(req.method !== 'DELETE') return res.status(405).end('Method not Allowed');

        const {id} = req.query;
        const deleteRow = await knex('barang').where({ id }).del();

        res.status(200);
        res.json({ 
            status: 200,
            message: 'Success Delete',
        });
    } 
    catch (error) {
        console.log(error);
    }
    
  }
  