'use client'
import { motion } from 'framer-motion'

import { BlurDivProps } from './BlurAnimate.types'

export default function BlurAnimate({ extra }: BlurDivProps) {
    return (
        <motion.div
            className={`rounded-[32px] absolute ${extra}`}
            style={{ backgroundColor: '#ffbd1b', transformOrigin: 'center' }}
            animate={{
                scale: [0.9, 1, 0.9],
                backgroundColor: [
                    '#ffbd1b',
                    '#ffbd1b',
                    '#ff9900',
                    '#ff9900',
                    '#ffbd1b',
                    '#ff9900',
                    '#ff9900',
                    '#ffbd1b',
                    '#ffbd1b',
                ],
            }}
            transition={{
                repeat: Infinity,
                duration: 5,
                ease: 'linear',
            }}
        />
    )
}
