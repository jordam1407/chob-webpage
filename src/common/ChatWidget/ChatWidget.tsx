// components/ChatWidget.js
'use client'
import { useEffect, useState } from 'react'

const ChatWidget = () => {
    const [size, setSize] = useState({ width: '96px', height: '96px' })
    useEffect(() => {
        const messageListener = (event: MessageEvent) => {
            if (event.data.type === 'iframe-data') {
                const { isOpen, isMobile } = event.data.payload
                if (!isOpen) {
                    setSize({ width: '96px', height: '96px' })
                }
                if (isOpen) {
                    if (isMobile) {
                        setSize({ width: '100%', height: '100%' })
                    } else {
                        setSize({ width: '402px', height: '90%' })
                    }
                }
            }
        }

        window.addEventListener('message', messageListener)

        return () => {
            window.removeEventListener('message', messageListener)
        }
    }, [])

    return (
        <iframe
            title="chat"
            className="fixed z-50 right-0 bottom-0"
            src="https://chob-taupe.vercel.app/"
            width={size.width}
            height={size.height}
        />
    )
}

export default ChatWidget
