import { cn } from '@/lib/utils';
import { Container } from './container';
import React from 'react';
import Image from 'next/image';
import {User} from 'lucide-react'
import { ShoppingCart } from 'lucide-react';
import {Button} from '../ui/button'

interface Props {
    className?: string;
    }
export const Header: React.FC<Props> = ({ className }) => {
    return (
    <header className={cn('border border-b', className)}>
    <Container className='flex items-center justify-between py-8'>
        <div className='flex items-center gap-4'>
            <Image src="./pizza1.svg" alt="каки" width={35} height={35}/>
            <div>
                <h1 className="text-black text-2xl font-black font-['Nunito'] uppercase tracking-tight">next pizza</h1>
                <p className="text-[#7b7b7b] text-base font-normal font-['Nunito']">вкуснее уже не может быть</p>
            </div>
        </div>
        <div className='flex gap-[10px]'>
            <Button variant="outline">
                <User/>
                <h1>Профиль</h1>
            </Button>
            <Button variant="default">
                <h1>520 Р</h1>
                <span></span>
                <ShoppingCart/>
            </Button>
        </div>
    </Container>
    </header>
 );
}