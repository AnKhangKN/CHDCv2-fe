import Dashboard from "../pages/admin/DashboardPage/Dashboard";
import CartPage from "../pages/customer/CartPage/CartPage";
import FavoritePage from "../pages/customer/FavoritePage/FavoritePage";
import HomePage from "../pages/customer/HomePage/HomePage";
import NewPage from "../pages/customer/NewPage/NewPage";
import NotFoundPage from "../pages/customer/NotFoundPage/NotFoundPage";
import OrderPage from "../pages/customer/OrderPage/OrderPage";
import ProductsPage from "../pages/customer/ProductsPage/ProductsPage";
import PromotionPage from "../pages/customer/PromotionPage/PromotionPage";

export const routes = [
    // customer
    {
        path: '/',
        page: HomePage,
        isShowHeader: true,
        isShowFooter: true
    },
    {
        path: '/order',
        page: OrderPage,
        isShowHeader: true,
        isShowFooter: true
    },
    {
        path: '/products',
        page: ProductsPage,
        isShowHeader: true,
        isShowFooter: true
    },
    {
        path: '/promotion',
        page: PromotionPage,
        isShowHeader: true,
        isShowFooter: true
    },
    {
        path: '/new',
        page: NewPage,
        isShowHeader: true,
        isShowFooter: true
    },
    {
        path: '/cart',
        page: CartPage,
        isShowHeader: true,
        isShowFooter: true
    },
    {
        path: '/favorite',
        page: FavoritePage,
        isShowHeader: true,
        isShowFooter: true
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