import Navbar from "./Navbar"

export default function PageContainer({showNavbar, pageComponent}) {
    const page = pageComponent();
    if (showNavbar) {
        return (
            <>
                <Navbar />
                {page}
            </>
        )
    }
    else {
        return <> {page} </>
    }
}