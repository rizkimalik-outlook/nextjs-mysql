import knex from '../../../lib/db'

export default async function handler(req, res) {
    try {
        if (req.method !== 'POST') return res.status(405).end('Method not Allowed');

        const { nama_barang, jumlah } = req.body;
        const barangId = await knex('barang')
                            .insert([
                                { nama_barang: nama_barang, jumlah: jumlah }
                            ]);

        const getData = await knex('barang').where({id: barangId}).first();

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
