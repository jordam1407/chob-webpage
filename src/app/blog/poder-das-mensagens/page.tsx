import { Metadata } from 'next'

import BlogPost from '@/components/layout/BlogPost/BlogPost'

import Content from './readme.mdx'

export const metadata: Metadata = {
    title: 'Release 0.5.0 • Firezone Blog',
    description: 'Firezone 0.5.0 Release',
}

export default function Page() {
    return (
        <BlogPost
            authorName="Jordam Mendes de Pinho"
            authorTitle="Founder & CEO"
            title="O Poder das Mensagens: Aproveite o Potencial do Chat para Gerar Leads"
            date="10 de Julho de 2023">
            <Content />
        </BlogPost>
    )
}
