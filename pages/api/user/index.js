import knex from '../../../lib/db'

export default async function handler(req, res) {
    // console.log(req.headers);
    try {
        const getData = await knex('users')
        
        res.status(200);
        res.json({ 
            status: 200,
            data: getData 
        });
    } 
    catch (error) {
        console.log(error);
    }
    
  }
  