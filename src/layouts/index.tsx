import { ReactNode } from "react"
import Navbar from "~/components/NavBar"


const Layout = ({ children }: {children: ReactNode}) => {

    return (
        <div className="bg-darkBack h-screen flex justify-center items-center">
            <div className="bg-big-background min-h-screen flex items-center justify-center">
                <Navbar />
                <div className="bg-alternate-box-background p-8 rounded-lg shadow-big">
                    {children}
                </div>
            </div>
        </div>
    )   
}

export default Layout