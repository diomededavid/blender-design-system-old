interface MenuProps {
    /**
     * Menu title
     */
    menuTitle: string;
    menuItem?: string;
}

export const Menu = ({menuTitle, menuItem="menuitem"}: MenuProps) => {
    return (
            <li tabIndex={0} >
                <a className="justify-between">
                    {menuTitle}
                    <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                         viewBox="0 0 24 24">
                        <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"/>
                    </svg>
                </a>
                <ul className="p-2">
                    <li><a>{menuItem}</a></li>
                    <li><a>Submenu 2</a></li>
                </ul>
            </li>
    )
};

export default Menu;
