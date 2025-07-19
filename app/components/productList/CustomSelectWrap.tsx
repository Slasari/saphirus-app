"use client";
import dynamic from 'next/dynamic';

const CustomSelect = dynamic(() => import('./CustomSelect'), { ssr: false });

export default CustomSelect;