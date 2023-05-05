import { Outlet } from "react-router-dom";
import Header from "../layout/header";


function RootLayout () {

  return(
    <>
    <Header />
    <main className="container flex justify-center items-center h-screen m-auto">
    <Outlet />
    </main>
    </>
  )
}

export default RootLayout;