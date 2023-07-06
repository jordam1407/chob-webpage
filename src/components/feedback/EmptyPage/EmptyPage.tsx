import React from 'react'

import { ErrorPage } from '@/components/feedback/ErrorPage'

function EmptyPage() {
    return (
        <ErrorPage
            title={`This page doesn't have content to display.`}
            description="You can add UI components from the left menu on the previous screen."
        />
    )
}

export default EmptyPage
