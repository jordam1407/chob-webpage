import React from 'react'

import styles from './ErrorPage.module.css'
import { ErrorPageProps } from './ErrorPage.types'

function ErrorPage({ title, description }: ErrorPageProps) {
    return (
        <div id="error-page" className={styles['error-container']}>
            <h1>{title}</h1>
            <div className={styles['error-message']}>
                <p>{description}</p>
            </div>
        </div>
    )
}

export default ErrorPage
