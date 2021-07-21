
export default function response (res, val, msg) {
    console.log(val)

    let data = {
        'status': 200,
        'message': msg,
        'data': val
    }

    res.json(data);
    res.end();
}

// export { response }