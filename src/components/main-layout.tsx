import NavigationBar from "./navbar";

export default function MainLayout({children}) {
    return (
    <>
    <NavigationBar/>
        {children}
    </>
    )

};


