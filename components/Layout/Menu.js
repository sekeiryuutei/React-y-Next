const Menu = [
    {
        heading: 'Main Navigation',
        translate: 'sidebar.heading.HEADER'
    },
    {
        name: 'Dashboard',
        icon: 'icon-speedometer',
        translate: 'sidebar.nav.DASHBOARD',
        label: { value: 3, color: 'success' },
        submenu: [{
                name: 'Dashboard v1',
                path: '/dashboard/dashboardv1'
            },
            {
                name: 'Dashboard v2',
                path: '/dashboard/dashboardv2'
            },
            {
                name: 'Dashboard v3',
                path: '/dashboard/dashboardv3'
            }
        ]
    },
    {
        name: 'Widgets',
        icon: 'icon-grid',
        path: '/widgets/widgets',
        label: { value: 30, color: 'success' },
        translate: 'sidebar.nav.WIDGETS'
    },
    {
        heading: 'Components',
        translate: 'sidebar.heading.COMPONENTS'
    },
    {
        name: 'Elements',
        icon: 'icon-chemistry',
        translate: 'sidebar.nav.element.ELEMENTS',
        submenu: [{
                name: 'Buttons',
                path: '/elements/buttons',
                translate: 'sidebar.nav.element.BUTTON'
            },
            {
                name: 'Notifications',
                path: '/elements/notifications',
                translate: 'sidebar.nav.element.NOTIFICATION'
            },
            {
                name: 'Sweetalert',
                path: '/elements/sweetalert'
            },
            {
                name: 'Carousel',
                path: '/elements/carousel',
                translate: 'sidebar.nav.element.INTERACTION'
            },
            {
                name: 'Spinners',
                path: '/elements/spinners',
                translate: 'sidebar.nav.element.SPINNER'
            },
            {
                name: 'Dropdown',
                path: '/elements/dropdownanimation',
                translate: 'sidebar.nav.element.DROPDOWN'
            },
            {
                name: 'Nestable',
                path: '/elements/nestable'
            },
            {
                name: 'Sortable',
                path: '/elements/sortable'
            },
            {
                name: 'Cards',
                path: '/elements/cards',
                translate: 'sidebar.nav.element.CARD'
            },
            {
                name: 'Grid',
                path: '/elements/grid',
                translate: 'sidebar.nav.element.GRID'
            },
            {
                name: 'Grid Masonry',
                path: '/elements/gridmasonry',
                translate: 'sidebar.nav.element.GRID_MASONRY'
            },
            {
                name: 'Typography',
                path: '/elements/typography',
                translate: 'sidebar.nav.element.TYPO'
            },
            {
                name: 'IconsFont',
                path: '/elements/fonticons',
                translate: 'sidebar.nav.element.FONT_ICON',
                label: { value: '+400', color: 'success' }
            },
            {
                name: 'IconsWeather',
                path: '/elements/weathericons',
                translate: 'sidebar.nav.element.WEATHER_ICON',
                label: { value: '+100', color: 'success' }
            },
            {
                name: 'Colors',
                path: '/elements/colors',
                translate: 'sidebar.nav.element.COLOR'
            }
        ]
    },
    {
        name: 'Forms',
        icon: 'icon-note',
        translate: 'sidebar.nav.form.FORM',
        submenu: [{
                name: 'Standard',
                path: '/forms/standard',
                translate: 'sidebar.nav.form.STANDARD'
            },
            {
                name: 'Extended',
                path: '/forms/extended',
                translate: 'sidebar.nav.form.EXTENDED'
            },
            {
                name: 'Validation',
                path: '/forms/validation',
                translate: 'sidebar.nav.form.VALIDATION'
            },
            {
                name: 'Wizard',
                path: '/forms/wizard',
            },
            {
                name: 'Upload',
                path: '/forms/upload',
            },
            {
                name: 'Cropper',
                path: '/forms/cropper',
            }
        ]
    },
    {
        name: 'Charts',
        icon: 'icon-graph',
        translate: 'sidebar.nav.chart.CHART',
        submenu: [{
                name: 'Flot',
                path: '/charts/flot',
                translate: 'sidebar.nav.chart.FLOT'
            },
            {
                name: 'Radial',
                path: '/charts/radial',
                translate: 'sidebar.nav.chart.RADIAL'
            },
            {
                name: 'Chartjs',
                path: '/charts/chartjs',
            },
            {
                name: 'Morris',
                path: '/charts/morris',
            },
            {
                name: 'Chartist',
                path: '/charts/chartist',
            }
        ]
    },
    {
        name: 'Tables',
        icon: 'icon-grid',
        translate: 'sidebar.nav.table.TABLE',
        submenu: [{
                name: 'Standard',
                path: '/tables/standard',
                translate: 'sidebar.nav.table.STANDARD'
            },
            {
                name: 'Extended',
                path: '/tables/extended',
                translate: 'sidebar.nav.table.EXTENDED'
            },
            {
                name: 'Datatable',
                path: '/tables/datatable',
                translate: 'sidebar.nav.table.DATATABLE'
            },
            {
                name: 'Datagrid',
                path: '/tables/datagrid',
            }
        ]
    },
    {
        name: 'Maps',
        icon: 'icon-map',
        translate: 'idebar.nav.map.MAP',
        submenu: [{
                name: 'Google',
                path: '/maps/google',
                translate: 'sidebar.nav.map.GOOGLE'
            },
            {
                name: 'Vector',
                path: '/maps/vector',
                translate: 'sidebar.nav.map.VECTOR'
            }
        ]
    },
    {
        heading: 'More',
        translate: 'sidebar.heading.MORE'
    },
    {
        name: 'Pages',
        icon: 'icon-doc',
        translate: 'sidebar.nav.pages.PAGES',
        submenu: [{
                name: 'Login',
                path: '/pages/login',
                as: '/login',
                translate: 'sidebar.nav.pages.LOGIN'
            },
            {
                name: 'Register',
                path: '/pages/register',
                as: '/register',
                translate: 'sidebar.nav.pages.REGISTER'
            },
            {
                name: 'Recover',
                path: '/pages/recover',
                as: '/recover',
                translate: 'sidebar.nav.pages.RECOVER'
            },
            {
                name: 'Lock',
                path: '/pages/lock',
                as: '/lock',
                translate: 'sidebar.nav.pages.LOCK'
            },
            {
                name: 'Not Found',
                path: '/pages/notfound',
                as: '/notfound'
            },
            {
                name: 'Error 500',
                path: '/pages/error500',
                as: '/error500'
            },
            {
                name: 'Maintenance',
                path: '/pages/maintenance',
                as: '/maintenance'
            }
        ]
    },
    {
        name: 'Extras',
        icon: 'icon-cup',
        translate: 'sidebar.nav.extra.EXTRA',
        submenu: [{
                name: 'Mailbox',
                path: '/extras/mailbox',
                translate: 'sidebar.nav.extra.MAILBOX',
            },
            {
                name: 'Bug Tracker',
                path: '/extras/bugtracker'
            },
            {
                name: 'Contact Details',
                path: '/extras/contactdetails'
            },
            {
                name: 'Contacts',
                path: '/extras/contacts'
            },
            {
                name: 'Faq',
                path: '/extras/faq'
            },
            {
                name: 'File Manager',
                path: '/extras/filemanager'
            },
            {
                name: 'Followers',
                path: '/extras/followers'
            },
            {
                name: 'Help Center',
                path: '/extras/helpcenter'
            },
            {
                name: 'Plans',
                path: '/extras/plans'
            },
            {
                name: 'Project Details',
                path: '/extras/projectdetails'
            },
            {
                name: 'Projects',
                path: '/extras/projects'
            },
            {
                name: 'Settings',
                path: '/extras/settings'
            },
            {
                name: 'Social Board',
                path: '/extras/socialboard'
            },
            {
                name: 'Team Viewer',
                path: '/extras/teamviewer'
            },
            {
                name: 'Vote Links',
                path: '/extras/votelinks'
            },
            {
                name: 'Timeline',
                path: '/extras/timeline',
                translate: 'sidebar.nav.extra.TIMELINE'
            },
            {
                name: 'Calendar',
                path: '/extras/calendar',
                translate: 'sidebar.nav.extra.CALENDAR'
            },
            {
                name: 'Invoice',
                path: '/extras/invoice',
                translate: 'sidebar.nav.extra.INVOICE'
            },
            {
                name: 'Search',
                path: '/extras/search',
                translate: 'sidebar.nav.extra.SEARCH'
            },
            {
                name: 'Todo',
                path: '/extras/todo',
                translate: 'sidebar.nav.extra.TODO'
            },
            {
                name: 'Profile',
                path: '/extras/profile',
                translate: 'sidebar.nav.extra.PROFILE'
            }
        ]
    },
    {
        name: 'Blog',
        icon: 'icon-notebook',
        submenu: [{
                name: 'List',
                path: '/blog/list'
            },
            {
                name: 'Post',
                path: '/blog/post'
            },
            {
                name: 'Articles',
                path: '/blog/articles'
            },
            {
                name: 'Article View',
                path: '/blog/articleview'
            }
        ]
    },
    {
        name: 'eCommerce',
        icon: 'icon-basket-loaded',
        submenu: [{
                name: 'Orders',
                path: '/ecommerce/orders',
                label: { value: 10, color: 'success' },
            },
            {
                name: 'Order-view',
                path: '/ecommerce/orderview'
            },
            {
                name: 'Products',
                path: '/ecommerce/products'
            },
            {
                name: 'Product-view',
                path: '/ecommerce/productview'
            },
            {
                name: 'Checkout',
                path: '/ecommerce/checkout'
            }
        ]
    },
    {
        name: 'Forum',
        icon: 'icon-speech',
        path: '/forum/categories',
        as: '/forum'
    }
];

export default Menu;