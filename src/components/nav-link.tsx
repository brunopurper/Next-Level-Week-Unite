interface NavLinkProps {
    children: string
}

export function NavLink(props: NavLinkProps) {
    return (
        <a href=""className="font-medium text-sm">{props.children}</a>
    )
}