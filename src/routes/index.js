import Dashboard from "../pages/admin/DashboardPage/Dashboard";
import HomePage from "../pages/customer/HomePage/HomePage";
import NotFoundPage from "../pages/customer/NotFoundPage/NotFoundPage";
import OrderPage from "../pages/customer/OrderPage/OrderPage";
import ProductsPage from "../pages/customer/ProductsPage/ProductsPage";

export const routes = [
    // customer
    {
        path: '/',
        page: HomePage,
        isShowHeader: true
    },
    {
        path: '/order',
        page: OrderPage,
        isShowHeader: true
    },
    {
        path: '/products',
        page: ProductsPage,
        isShowHeader: true
    },
    {
        path: '*',
        page: NotFoundPage
    },
    // admin
    {
        path: '/admin/dashboard',
        page: Dashboard
    },
    // employee
    
]