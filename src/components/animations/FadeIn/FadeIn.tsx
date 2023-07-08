'use client'
import { motion } from 'framer-motion'

import { FadeInProps } from './FadeIn.types'

export default function FadeIn({ children, animation }: FadeInProps) {
    return (
        <motion.div
            className="relative z-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ delay: animation }}>
            {children}
        </motion.div>
    )
}
