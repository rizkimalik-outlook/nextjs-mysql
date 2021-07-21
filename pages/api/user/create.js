import knex from '../../../lib/db'
import bcrypt from 'bcryptjs'

export default async function handler(req, res) {
    try {
        if (req.method !== 'POST') return res.status(405).end('Method not Allowed');

        const { name, username, email, password, level } = req.body;
        const salt = bcrypt.genSaltSync(10)
        const passwordHash = bcrypt.hashSync(password, salt)

        const userid = await knex('users')
                             .insert([
                                { name, username, email, password: passwordHash, level }
                            ]);

        const getData = await knex('users').where({id: userid}).first();

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
