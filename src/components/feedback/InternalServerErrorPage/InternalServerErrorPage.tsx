import React from 'react'

import { ErrorPage } from '@/components/feedback/ErrorPage'

function InternalServerErrorPage() {
    return <ErrorPage title="Internal Server Error" description="The requested page couldn't be loaded. " />
}

export default InternalServerErrorPage
