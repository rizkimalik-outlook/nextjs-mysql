import knex from '../../../lib/db'

export default async function handler(req, res) {
    try {
        if(req.method !== 'PUT') return res.status(405).end('Method not Allowed');

        // const {id} = req.query;
        const {id, name, username, email, password, level} = req.body;
        
        const uid = await knex('users')
                        .where({ id })
                        .update({name, username, email, password, level})
        
        // console.log(update);
        const getData = await knex('users').where({id: id}).first();

        res.status(200);
        res.json({ 
            'status': 200,
            'data': getData 
        }); 
    } 
    catch (error) {
        console.log(error);
    }
    
  }
  