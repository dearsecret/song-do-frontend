import Root from "./components/Root";
import { createBrowserRouter } from "react-router-dom";
import NotFound from "./routes/NotFound";
import Home from "./routes/Home";
import Profile from "./routes/Profile";
import Invoices from "./routes/Invoices";
import InvoiceDetail from "./routes/InvoiceDetail";
import NoticeDetail from "./routes/NoticeDetail";
import HostInvoices from "./routes/HostInvoices";


const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      errorElement : <NotFound/>,
      children : [
        {
          path : "",
          element : <Home/>,
        },
        {
          path : "profile",
          element : <Profile />,
        },
        {
          path : "invoices",
          element : <Invoices />
        },
        {
          path : "host",
          element : <HostInvoices />
        },
        {
          path : "invoice/:invoicePk",
          element : <InvoiceDetail />
        },
        {
          path : "notices/:noticePk",
          element : <NoticeDetail />
        },
      ]
    },
  ]);

export default router;