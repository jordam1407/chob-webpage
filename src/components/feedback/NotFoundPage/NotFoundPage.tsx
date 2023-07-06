import React from 'react'

import { ErrorPage } from '@/components/feedback/ErrorPage'

function InternalServerErrorPage() {
    return (
        <ErrorPage
            title="Page not found"
            description="The page you are trying to open does not exist. You may have mistyped the address, or the page 
            has been moved to another URL."
        />
    )
}

export default InternalServerErrorPage
