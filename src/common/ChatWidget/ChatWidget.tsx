// components/ChatWidget.js
'use client'
import { useEffect, useState } from 'react'

const ChatWidget = () => {
    const [size, setSize] = useState({ width: '96px', height: '96px' })
    useEffect(() => {
        const messageListener = (event: MessageEvent) => {
            if (event.data.type === 'iframe-data') {
                const { isOpen, isMobileDevice } = event.data.payload
                if (!isOpen) {
                    setSize({ width: '96px', height: '96px' })
                }
                if (isOpen) {
                    if (isMobileDevice) {
                        setSize({ width: '100%', height: '100%' })
                    } else {
                        setSize({ width: '402px', height: '90%' })
                    }
                }
                console.log(isOpen, isMobileDevice)
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
            className="fixed z-10 right-0 bottom-0"
            src="http://localhost:5173/"
            width={size.width}
            height={size.height}
        />
    )
}

export default ChatWidget
