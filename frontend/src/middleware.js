import { NextResponse } from "next/server";
import { jwtVerify } from 'jose';

const SECRET = process.env.SECRET;

export async function middleware(req) {
    const token = req.cookies.get('userToken')?.value;
    const { pathname } = req.nextUrl;

    if (pathname === '/log-in' || pathname === '/sign-up') {
        if (token) {
            try {
                await jwtVerify(token, new TextEncoder().encode(SECRET));
                return NextResponse.next();
            } catch {
                return NextResponse.next();
            }
        }
        return NextResponse.next();
    }

    if(pathname.startsWith('/admin')) {
        if (token) {
            const {payload} = await jwtVerify(token, new TextEncoder().encode(SECRET));
            if (payload.access === 'admin') {
                return NextResponse.next();
            }
            return NextResponse.redirect(new URL('/', req.url));
        }
        return NextResponse.redirect(new URL('/log-in', req.url));
    }

    if(pathname === '/complex_constructor' || pathname === '/statistic'){
        if (token) {
            const {payload} = await jwtVerify(token, new TextEncoder().encode(SECRET));
            if ((payload.access === 'admin') || (payload.card_type === 'premium')){
                return NextResponse.next();
            }
            return NextResponse.redirect(new URL('/premium', req.url));
        }
        return NextResponse.redirect(new URL('/log-in', req.url));
    }

    if (!token) {
        return NextResponse.redirect(new URL('/log-in', req.url));
    }

    try {
        await jwtVerify(token, new TextEncoder().encode(SECRET));
        return NextResponse.next();
    } catch (err) {
        const response = NextResponse.redirect(new URL('/log-in', req.url));
        response.cookies.delete('userToken');
        return response;
    }
}

export const config = {
    matcher: ['/', '/profile/:path*', '/training/:path*', '/admin', '/program/:path*', '/training/:path*', '/exercise/:path*', '/complex_constructor', '/statistic'],
};