'use client'
import { motion } from 'framer-motion'

import { FadeUpProps } from './FadeUp.types'

export default function FadeUp({ children, y, animation }: FadeUpProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: y ?? 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: animation }}
            viewport={{ once: true }}>
            {children}
        </motion.div>
    )
}
