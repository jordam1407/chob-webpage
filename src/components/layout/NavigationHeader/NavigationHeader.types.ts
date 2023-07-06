export interface NavItem {
    text: string
    link: string
}

export type NavigationHeaderProps = {
    image: string
    navs: NavItem[]
}
