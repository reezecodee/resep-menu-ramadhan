interface IDashboardMenus {
  title: string
  icon: string
  path: string
  description?: string
  hidden?: boolean
}

export const SIDEBAR_EXPAND_WIDTH = 280;
export const SIDEBAR_COLLAPSED_WIDTH = 72;
export const APP_MENU: Record<string, { name: string, routes: IDashboardMenus[] }> = {
  main: {
    name: 'Hari',
    routes: [
      {
        title: 'Dashboard',
        icon: 'LayoutDashboard',
        path: 'home',
      },
    ],
  },
};

export const globalSearch = {

};
