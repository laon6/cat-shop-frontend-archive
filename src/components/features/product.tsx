import React from 'react';
import Link from 'next/link';

interface ProductProps {
    src: string;
    name: string;
    price: number;
}

const Product = ({ src, name, price }: ProductProps) => {
    return (
        <div className='flex flex-col items-center border border-gray-300 rounded-md p-3 shadow focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition duration-150 ease-in-out'>
            <Link href="/">
                <img src={src} alt={name} />
            </Link>
            <div className='text-center'>{name}</div>
            <div className='text-center'>{price.toLocaleString()}원</div>
        </div>
    );
};

export default Product;