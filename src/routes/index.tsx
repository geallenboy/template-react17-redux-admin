import { lazy, Suspense } from 'react';
import { Navigate, useLocation, useRoutes } from 'react-router-dom';

import LoadingScreen from '@/components/LoadingScreen';
import AuthGuard from '@/guards/AuthGuard';
import GuestGuard from '@/guards/GuestGuard';
import DashboardLayout from '@/layouts/dashboard';
import LogoOnlyLayout from '@/layouts/LogoOnlyLayout';
import MainLayout from '@/layouts/main';

const Loadable = (Component: any) => (props: any) => {
  const { pathname } = useLocation();
  const isDashboard = pathname.includes('/dashboard');
  return (
    <Suspense
      fallback={
        <LoadingScreen
          sx={{
            ...(!isDashboard && {
              top: 0,
              left: 0,
              width: 1,
              zIndex: 9999,
              position: 'fixed'
            })
          }}
        />
      }
    >
      <Component {...props} />
    </Suspense>
  );
};

// Authentication
const Login = Loadable(lazy(() => import('@/pages/authentication/login')));
const Register = Loadable(lazy(() => import('@/pages/authentication/register')));
const ResetPassword = Loadable(lazy(() => import('@/pages/authentication/resetPassword')));
const VerifyCode = Loadable(lazy(() => import('@/pages/authentication/verifyCode')));
// Dashboard
const App = Loadable(lazy(() => import('@/pages/dashboard/app')));
const GeneralEcommerce = Loadable(lazy(() => import('@/pages/dashboard/GeneralEcommerce')));
const GeneralBanking = Loadable(lazy(() => import('@/pages/dashboard/GeneralBanking')));
const GeneralBooking = Loadable(lazy(() => import('@/pages/dashboard/GeneralBooking')));
const EcommerceShop = Loadable(lazy(() => import('@/pages/dashboard/EcommerceShop')));
const EcommerceProductDetails = Loadable(
  lazy(() => import('@/pages/dashboard/EcommerceProductDetails'))
);
const EcommerceProductList = Loadable(lazy(() => import('@/pages/dashboard/EcommerceProductList')));
const EcommerceProductCreate = Loadable(
  lazy(() => import('@/pages/dashboard/EcommerceProductCreate'))
);
const EcommerceCheckout = Loadable(lazy(() => import('@/pages/dashboard/EcommerceCheckout')));
const EcommerceInvoice = Loadable(lazy(() => import('@/pages/dashboard/EcommerceInvoice')));
const BlogPosts = Loadable(lazy(() => import('@/pages/dashboard/BlogPosts')));
const BlogPost = Loadable(lazy(() => import('@/pages/dashboard/BlogPost')));
const BlogNewPost = Loadable(lazy(() => import('@/pages/dashboard/BlogNewPost')));
const UserProfile = Loadable(lazy(() => import('@/pages/dashboard/UserProfile')));
const UserCards = Loadable(lazy(() => import('@/pages/dashboard/UserCards')));
const UserList = Loadable(lazy(() => import('@/pages/dashboard/UserList')));
const UserAccount = Loadable(lazy(() => import('@/pages/dashboard/UserAccount')));
const UserCreate = Loadable(lazy(() => import('@/pages/dashboard/UserCreate')));
const Chat = Loadable(lazy(() => import('@/pages/dashboard/Chat')));
const Mail = Loadable(lazy(() => import('@/pages/dashboard/Mail')));
const Calendar = Loadable(lazy(() => import('@/pages/dashboard/Calendar')));
const Kanban = Loadable(lazy(() => import('@/pages/dashboard/Kanban')));
// Main
const LandingPage = Loadable(lazy(() => import('@/pages/website/landing')));
const About = Loadable(lazy(() => import('@/pages/website/about')));
const Contact = Loadable(lazy(() => import('@/pages/website/contact')));
const Faqs = Loadable(lazy(() => import('@/pages/website/faqs')));
const Maintenance = Loadable(lazy(() => import('@/pages/website/Maintenance')));
const Page500 = Loadable(lazy(() => import('@/pages/Page500')));
const NotFound = Loadable(lazy(() => import('@/pages/Page404')));

// Components
const ComponentsOverview = Loadable(lazy(() => import('@/pages/website/componentsOverview')));
const Color = Loadable(
  lazy(() => import('@/pages/components-overview/foundations/FoundationColors'))
);
const Typography = Loadable(
  lazy(() => import('@/pages/components-overview/foundations/FoundationTypography'))
);
const Shadows = Loadable(
  lazy(() => import('@/pages/components-overview/foundations/FoundationShadows'))
);
const Grid = Loadable(lazy(() => import('@/pages/components-overview/foundations/FoundationGrid')));
const Icons = Loadable(
  lazy(() => import('@/pages/components-overview/foundations/FoundationIcons'))
);
const Accordion = Loadable(lazy(() => import('@/pages/components-overview/material-ui/Accordion')));
const Alert = Loadable(lazy(() => import('@/pages/components-overview/material-ui/Alert')));
const Autocomplete = Loadable(
  lazy(() => import('@/pages/components-overview/material-ui/Autocomplete'))
);
const Avatar = Loadable(lazy(() => import('@/pages/components-overview/material-ui/Avatar')));
const Badge = Loadable(lazy(() => import('@/pages/components-overview/material-ui/Badge')));
const Breadcrumb = Loadable(
  lazy(() => import('@/pages/components-overview/material-ui/Breadcrumb'))
);
const Buttons = Loadable(lazy(() => import('@/pages/components-overview/material-ui/buttons')));
const Checkbox = Loadable(lazy(() => import('@/pages/components-overview/material-ui/Checkboxes')));
const Chip = Loadable(lazy(() => import('@/pages/components-overview/material-ui/chips')));
const Dialog = Loadable(lazy(() => import('@/pages/components-overview/material-ui/dialog')));
const Label = Loadable(lazy(() => import('@/pages/components-overview/material-ui/Label')));
const List = Loadable(lazy(() => import('@/pages/components-overview/material-ui/Lists')));
const Menu = Loadable(lazy(() => import('@/pages/components-overview/material-ui/Menus')));
const Pagination = Loadable(
  lazy(() => import('@/pages/components-overview/material-ui/Pagination'))
);
const Pickers = Loadable(lazy(() => import('@/pages/components-overview/material-ui/pickers')));
const Popover = Loadable(lazy(() => import('@/pages/components-overview/material-ui/Popover')));
const Progress = Loadable(lazy(() => import('@/pages/components-overview/material-ui/progress')));
const RadioButtons = Loadable(
  lazy(() => import('@/pages/components-overview/material-ui/RadioButtons'))
);
const Rating = Loadable(lazy(() => import('@/pages/components-overview/material-ui/Rating')));
const Slider = Loadable(lazy(() => import('@/pages/components-overview/material-ui/Slider')));
const Snackbar = Loadable(lazy(() => import('@/pages/components-overview/material-ui/Snackbar')));
const Stepper = Loadable(lazy(() => import('@/pages/components-overview/material-ui/stepper')));
const Switches = Loadable(lazy(() => import('@/pages/components-overview/material-ui/Switches')));
const Table = Loadable(lazy(() => import('@/pages/components-overview/material-ui/table')));
const Tabs = Loadable(lazy(() => import('@/pages/components-overview/material-ui/Tabs')));
const Textfield = Loadable(lazy(() => import('@/pages/components-overview/material-ui/textfield')));
const Timeline = Loadable(lazy(() => import('@/pages/components-overview/material-ui/Timeline')));
const Tooltip = Loadable(lazy(() => import('@/pages/components-overview/material-ui/Tooltip')));
const TransferList = Loadable(
  lazy(() => import('@/pages/components-overview/material-ui/transfer-list'))
);
const TreeView = Loadable(lazy(() => import('@/pages/components-overview/material-ui/TreeView')));

//
const Charts = Loadable(lazy(() => import('@/pages/components-overview/extra/Charts')));

const Editor = Loadable(lazy(() => import('@/pages/components-overview/extra/Editor')));
const CopyToClipboard = Loadable(
  lazy(() => import('@/pages/components-overview/extra/CopyToClipboard'))
);
const Upload = Loadable(lazy(() => import('@/pages/components-overview/extra/Upload')));
const Carousel = Loadable(lazy(() => import('@/pages/components-overview/extra/Carousel')));
const MultiLanguage = Loadable(
  lazy(() => import('@/pages/components-overview/extra/MultiLanguage'))
);
const Animate = Loadable(lazy(() => import('@/pages/components-overview/extra/animate')));
const MegaMenu = Loadable(lazy(() => import('@/pages/components-overview/extra/MegaMenu')));
const FormValidation = Loadable(
  lazy(() => import('@/pages/components-overview/extra/form-validation'))
);

export default function Router() {
  return useRoutes([
    {
      path: 'auth',
      children: [
        {
          path: 'login',
          element: (
            <GuestGuard>
              <Login />
            </GuestGuard>
          )
        },
        {
          path: 'register',
          element: (
            <GuestGuard>
              <Register />
            </GuestGuard>
          )
        },
        { path: 'login-unprotected', element: <Login /> },
        { path: 'register-unprotected', element: <Register /> },
        { path: 'reset-password', element: <ResetPassword /> },
        { path: 'verify', element: <VerifyCode /> }
      ]
    },
    {
      path: 'dashboard',
      element: (
        <AuthGuard>
          <DashboardLayout />
        </AuthGuard>
      ),
      children: [
        { path: '', element: <Navigate to="/dashboard/app" replace={true} /> },
        { path: 'app', element: <App /> },
        { path: 'ecommerce', element: <GeneralEcommerce /> },
        { path: 'banking', element: <GeneralBanking /> },
        { path: 'booking', element: <GeneralBooking /> },
        {
          path: 'e-commerce',
          children: [
            { path: '', element: <Navigate to="/dashboard/e-commerce/shop" replace /> },
            { path: 'shop', element: <EcommerceShop /> },
            { path: 'product/:name', element: <EcommerceProductDetails /> },
            { path: 'list', element: <EcommerceProductList /> },
            { path: 'product/new', element: <EcommerceProductCreate /> },
            { path: 'product/:name/edit', element: <EcommerceProductCreate /> },
            { path: 'checkout', element: <EcommerceCheckout /> },
            { path: 'invoice', element: <EcommerceInvoice /> }
          ]
        },
        {
          path: 'user',
          children: [
            { path: '', element: <Navigate to="/dashboard/user/profile" replace /> },
            { path: 'profile', element: <UserProfile /> },
            { path: 'cards', element: <UserCards /> },
            { path: 'list', element: <UserList /> },
            { path: 'new', element: <UserCreate /> },
            { path: ':name/edit', element: <UserCreate /> },
            { path: 'account', element: <UserAccount /> }
          ]
        },
        {
          path: 'blog',
          children: [
            { path: '', element: <Navigate to="/dashboard/blog/posts" replace /> },
            { path: 'posts', element: <BlogPosts /> },
            { path: 'post/:title', element: <BlogPost /> },
            { path: 'new-post', element: <BlogNewPost /> }
          ]
        },
        {
          path: 'mail',
          children: [
            { path: '', element: <Navigate to="/dashboard/mail/all" replace /> },
            { path: 'label/:customLabel', element: <Mail /> },
            { path: 'label/:customLabel/:mailId', element: <Mail /> },
            { path: ':systemLabel', element: <Mail /> },
            { path: ':systemLabel/:mailId', element: <Mail /> }
          ]
        },
        {
          path: 'chat',
          children: [
            { path: '', element: <Chat /> },
            { path: 'new', element: <Chat /> },
            { path: ':conversationKey', element: <Chat /> }
          ]
        },
        { path: 'calendar', element: <Calendar /> },
        { path: 'kanban', element: <Kanban /> }
      ]
    },
    {
      path: '/',
      element: <MainLayout />,
      children: [
        { path: '', element: <LandingPage /> },
        { path: 'about-us', element: <About /> },
        { path: 'contact-us', element: <Contact /> },
        { path: 'faqs', element: <Faqs /> },
        {
          path: 'components',
          children: [
            { path: '', element: <ComponentsOverview /> },
            { path: 'color', element: <Color /> },
            { path: 'typography', element: <Typography /> },
            { path: 'shadows', element: <Shadows /> },
            { path: 'grid', element: <Grid /> },
            { path: 'icons', element: <Icons /> },
            { path: 'accordion', element: <Accordion /> },
            { path: 'alert', element: <Alert /> },
            { path: 'autocomplete', element: <Autocomplete /> },
            { path: 'avatar', element: <Avatar /> },
            { path: 'badge', element: <Badge /> },
            { path: 'breadcrumbs', element: <Breadcrumb /> },
            { path: 'buttons', element: <Buttons /> },
            { path: 'checkbox', element: <Checkbox /> },
            { path: 'chip', element: <Chip /> },
            { path: 'dialog', element: <Dialog /> },
            { path: 'label', element: <Label /> },
            { path: 'list', element: <List /> },
            { path: 'menu', element: <Menu /> },
            { path: 'pagination', element: <Pagination /> },
            { path: 'pickers', element: <Pickers /> },
            { path: 'popover', element: <Popover /> },
            { path: 'progress', element: <Progress /> },
            { path: 'radio-button', element: <RadioButtons /> },
            { path: 'rating', element: <Rating /> },
            { path: 'slider', element: <Slider /> },
            { path: 'snackbar', element: <Snackbar /> },
            { path: 'stepper', element: <Stepper /> },
            { path: 'switch', element: <Switches /> },
            { path: 'table', element: <Table /> },
            { path: 'tabs', element: <Tabs /> },
            { path: 'textfield', element: <Textfield /> },
            { path: 'timeline', element: <Timeline /> },
            { path: 'tooltip', element: <Tooltip /> },
            { path: 'transfer-list', element: <TransferList /> },
            { path: 'tree-view', element: <TreeView /> },
            { path: 'chart', element: <Charts /> },
            { path: 'editor', element: <Editor /> },
            { path: 'copy-to-clipboard', element: <CopyToClipboard /> },
            { path: 'upload', element: <Upload /> },
            { path: 'carousel', element: <Carousel /> },
            { path: 'multi-language', element: <MultiLanguage /> },
            { path: 'animate', element: <Animate /> },
            { path: 'mega-menu', element: <MegaMenu /> },
            { path: 'form-validation', element: <FormValidation /> }
          ]
        }
      ]
    },
    {
      path: '*',
      element: <LogoOnlyLayout />,
      children: [
        { path: 'maintenance', element: <Maintenance /> },

        { path: '500', element: <Page500 /> },
        { path: '404', element: <NotFound /> },
        { path: '*', element: <Navigate to="/404" replace /> }
      ]
    },
    { path: '*', element: <Navigate to="/404" replace /> }
  ]);
}
