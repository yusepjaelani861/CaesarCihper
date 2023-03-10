import React from 'react';
import { Link, Head } from '@inertiajs/inertia-react';
import Navbar from '@/Components/Navbar';
import Footer from '@/Components/Footer';

export default function Welcome(props) {
    return (
        <>
            <Head title="Caesar" />
            <Navbar />
            <div className="container mx-auto mt-7" style={{height: '70vh'}}>
                <h1 className="text-3xl text-center underline mb-3">Praktikum Kriptografi</h1>
                <div className="flex justify-center items-center">
                    <li>
                        <Link href="/kriptografi/caesar" className="text-xl font-semibold text-blue-500 hover:text-blue-900">Encrypt dan Decrypt Caesar Cipher</Link>
                    </li>
                </div>

            </div>
            <Footer />
        </>
    );
}
