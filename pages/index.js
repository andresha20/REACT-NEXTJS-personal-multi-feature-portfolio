import Sidebar from '../components/Sidebar/Sidebar'
import SectionOne from '../components/Sections/SectionOne'
import SectionTwo from '../components/Sections/SectionTwo'
import SectionThree from '../components/Sections/SectionThree'
import SectionFour from '../components/Sections/SectionFour'
import useStyles from '../src/IndexStyles'

import { useGlobalContext } from '../components/Context/theme'


// const LoadingComponent = dynamic(() => import('../components/Loading/Loading'), { loading: () => <p>LOADING 2...</p> })

export default function Home() {
  
    const { themeColor } = useGlobalContext();
    const classes = useStyles(themeColor);

    return (
    <div className={classes.mainWrapper}>
      <div className={classes.leftColumn}>
        <Sidebar content="blbla@gmail.com"/>
      </div>      
      <div className={classes.mainColumn}>
        {/* <LoadingComponent /> */}
        <SectionOne />
        <SectionTwo />
        <SectionThree />
        <SectionFour />
      </div>      
      <div className={classes.rightColumn}>
      <Sidebar content="test"/>
      </div>
    </div>
  )
}
