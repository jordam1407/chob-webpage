'use client'
import { motion } from 'framer-motion'

import { BlurDivProps } from './BlurAnimate.types'

export default function BlurAnimate({ extra }: BlurDivProps) {
    return (
        <motion.div
            className={`rounded-[32px] absolute ${extra}`}
            style={{ backgroundColor: '#FFA500', transformOrigin: 'center' }}
            animate={{
                rotate: [0, 360],
                backgroundColor: ['#FFA500', '#FF0000', '#00FF00', '#0000FF', '#FFA500'],
            }}
            transition={{
                repeat: Infinity,
                duration: 5,
                ease: 'linear',
            }}
        />
    )
}
