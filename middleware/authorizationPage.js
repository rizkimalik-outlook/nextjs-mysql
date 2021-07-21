import cookies from "next-cookies";


export function unAuthPage(ctx){
    return new Promise(resolve => {
        const allCookies = cookies(ctx);
    
        if(allCookies.token)
            return ctx.res.writeHead(302, {
                Location: '/'
            }).end();

        return resolve('unauthpage')
    });
    
}

export function authPage(ctx){
    return new Promise(resolve => {
        const allCookies = cookies(ctx);
    
        if(!allCookies.token)
            return ctx.res.writeHead(302, {
                Location: '/login'
            }).end();

        return resolve({
            token: allCookies.token
        })
    });
    
}