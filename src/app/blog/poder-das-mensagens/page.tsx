import { Metadata } from 'next'

import BlogPost from '@/components/layout/BlogPost/BlogPost'

import Content from './readme.mdx'

export const metadata: Metadata = {
    title: 'O Poder das Mensagens',
    description: 'O Poder das Mensagens: Aproveite o Potencial do Chat para Gerar Leads',
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
