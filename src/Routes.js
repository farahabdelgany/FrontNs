import React from "react";
import App from "./App";
import Welcome from "./pages/Welcome";
import ResetPassword1 from "./pages/ResetPassword1";
import Login from "./shared/Login";
import ResetPassword from "./pages/ResetPassword";
import ResetPassword2 from "./pages/ResetPassword2";
import Register from "./pages/Register";
import VerificationCode from "./pages/VerificationCode";
import Verified from "./pages/Verified";
import BorrowComplete from "./pages/BorrowComplete";
import Borrow from "./pages/Borrow";
import AllTranscation from "./pages/AllTranscation";
import EDITBOOKS from "./pages/EDITBOOKS";
import AccountPrivacy from "./pages/AccountPrivacy";
import DELETEBOOK from "./pages/DELETEBOOK";
import ADDBOOKS from "./pages/ADDBOOKS";
import Search from "./pages/Search";
import HomeAdmin from "./pages/HomeAdmin";
import Account from "./pages/Account";
import Home from "./pages/Home";
import {createBrowserRouter , Navigate} from "react-router-dom";
import MyShelf from "./pages/MyShelf";
import TranscationHistory from "./pages/TranscationHistory";
import BookPreview from "./pages/BookPreview";
import User from "./middleware/User";
import Admin from "./middleware/Admin";
import Guest from "./middleware/Guest";
  

const Routes = createBrowserRouter([
  {
    path:"/",
    element: <App />,
    children: [{
      path: "welcome",
      element: <Welcome />,
        },

        {
          element: <Guest />,
          children: [
            {
              path: "/login",
              element: <Login />,
            },
            {
              path: "/register",
              element: <Register />,
            },
            {
              path: "/reset-password-2" ,
              element:<ResetPassword1 />,
            },
            {
              path:"/reset-password-1" ,
              element:<ResetPassword />,
            },
            {
              path:"/reset-password-3" ,
              element:<ResetPassword2 />,
            },
            {
              path:"/verification-code" ,
              element:<VerificationCode />,
            },
            {
              path:"/verified" ,
              element:<Verified />,
            },
          ]
            },

        { 
          element: <Admin/>,
          children: [ 
            { 
              path:"/home-admin" ,
              element:<HomeAdmin />
            }, 
            {
              path:"/add-books" ,
              element:<ADDBOOKS />
            },
            {
              path:"/delete-book",
              element:<DELETEBOOK />,
            },
            {
              path:"/-editbooks",
              element:<EDITBOOKS />,
            },
            {
              path:"/-all-transcation",
              element:<AllTranscation />, 
            },
          ]
        },

        { 
          element: <User/>,
          children: [ 
            { 
              path: "/borrow-complete", 
              element: <BorrowComplete />, 
            }, 
            { 
              path: "borrow", 
              element: <Borrow />, 
            }, 
            { 
              path: "/account-privacy", 
              element: <AccountPrivacy />, 
            }, 
            {
              path: "/search",
              element: <Search/>,
            },
        { 
              path: "/account-privacy", 
              element: <AccountPrivacy />, 
            }, 
        { 
              path: "acount", 
              element: <Account />, 
            }, 
            { 
              path: "/home", 
              element: <Home />, 
            }, 
            {
              path: "/my-shelf",
              element: <MyShelf/>,
            },
        { 
              path: "/transcation-history", 
              element: <TranscationHistory />, 
            }, 
        { 
              path: "/book-preview", 
              element: <BookPreview />, 
            }, 
          ], 
        },
  
  ]
  },
  {
    path: "*",
    element: <Navigate to={"/"}/>
  },
  ]);
export default Routes;