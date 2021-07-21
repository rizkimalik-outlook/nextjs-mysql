import knex from '../../../lib/db'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import response from '../../../lib/res';

export default async function handler(req, res) {
    try {
        if (req.method !== 'POST') return res.status(405).end('Method not Allowed');

        const { username, password } = req.body;

        const checkUser = await knex('users')
                            .where({username})
                            .first();

        // if(!checkUser) return res.status(401).end('User not found');
        if(!checkUser) return response(res, username, 'User not found')

        const checkPassword = await bcrypt.compare(password, checkUser.password)
        // if(!checkPassword) return res.status(401).end();
        if(!checkPassword) return response(res, '', 'Password not match')

        const token = jwt.sign({
            id: checkUser.id,
            username:checkUser.username
        }, process.env.JWT_SECRET, {expiresIn: '2d'})

        const data = {
            token: token
        }

        response(res, data, 'User login success');
    }
    catch (error) {
        console.log(error);
    }

}
