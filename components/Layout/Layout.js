import Navbar from '../NavigationBar/Navbar'
import Footer from '../Footer/Footer'
import useStyles from './Styles'
import { useGlobalContext } from '../Context/theme'

const Layout = ({ children }) => {
    
    const { themeColor } = useGlobalContext();
    const classes = useStyles(themeColor);

    return (
        <div className={classes.root}>
            <Navbar />
            <main className={classes.main}>
                {children}
            </main>
            <Footer />
        </div>
    )
}

export default Layout;