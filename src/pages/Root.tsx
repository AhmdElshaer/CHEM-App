import { Outlet } from "react-router-dom";
import Header from "../layout/header";


function RootLayout () {

  return(
    <>
    <Header />
    <main className="container flex justify-center items-center m-auto mt-3">
    <Outlet />
    </main>
    </>
  )
}

export default RootLayout;