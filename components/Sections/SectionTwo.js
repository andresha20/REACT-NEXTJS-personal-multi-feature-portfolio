import Image from 'next/image'
import { Paper, Box, Typography, Divider } from '@material-ui/core';
import useStyles from './Styles'
import { useGlobalContext } from '../Context/theme'
import { useLanguageContext } from '../Context/language'

const SectionTwo = () => {
    
    const { currentLanguage } = useLanguageContext();
    const { themeColor } = useGlobalContext();
    const classes = useStyles(themeColor);
    const images = [
        { src: "/images/react.png", alt: "React Library", infoDescription: ['Functional Components', 'Router', 'Hooks', 'Props', 'Redux', 'Context API', "API's", "Styled Components", "More..."] }, 
        { src: "/images/nextjs.png", alt: "Next.js React Framework", infoDescription: ['2 Lorem ipsum dolor sit amet.'] }, 
        { src: "/images/mongodb.png", alt: "MongoDB", infoDescription: ['3 Lorem ipsum dolor sit amet.'] }, 
        { src: "/images/nodejs.svg", alt: "Node.js", infoDescription: ['4 Lorem ipsum dolor sit amet.'] }
    ];

    return (
        <div className={classes.root} id='about'>
            <Box component='div' align='center'>
                <Typography variant='h3' style={{ fontWeight: 'bold', color: themeColor.fontColor }}><span className={classes.span}>01.</span> {currentLanguage.home.secondSection[0]}</Typography>
                <Divider/>
                <br/>
            </Box>
        <Paper className={classes.paperTwo} elevation={4}>
            <Box component='div' align='center'>
                <div className={classes.sectionTwoParagraphContainer}>
                    <div className={classes.paragraphSectionTwo}>
                        <Typography variant='body1' paragraph style={{ color: themeColor.fontColor }}>{currentLanguage.home.secondSection[1]}</Typography>
                        <Typography variant='body1' paragraph style={{ color: themeColor.fontColor }}>{currentLanguage.home.secondSection[2]} <span style={{ fontWeight: 'bold' }}>{currentLanguage.home.secondSection[3]}</span> {currentLanguage.home.secondSection[4]} <span style={{ fontWeight: 'bold' }}>{currentLanguage.home.secondSection[5]}</span></Typography>
                    </div>
                    <div className={classes.profileImage}>
                        <div className={classes.profileImageBorder}>
                            <Image 
                                    src={images[0]['src']}
                                    alt={images[0]['alt']}
                                    width={100}
                                    height={100}
                            />
                        </div>
                        <span>Background</span>
                    </div>
                </div>
                <br/>
                <Typography variant='h6' className={classes.boldTitle}>{currentLanguage.home.secondSection[6]}</Typography>
                <br/>
                <Box>
                    <div className={classes.container}>
                        {images.map((image, index) => (
                            <div className={classes.image} key={index}>
                                <Box component='grid' container='true' boxShadow={2} className={classes.tooltip} align='center'>
                                    <Typography variant='h6' style={{ fontWeight: 'bold' }} paragraph>{image.alt}</Typography>
                                    {image.infoDescription.map((descriptionItem, index) => (
                                        <Typography key={index} variant='body1' align='left' component='p'>•&nbsp;{descriptionItem}</Typography>
                                    ))}
                                </Box>
                                <Image
                                    src={image.src}
                                    alt={image.alt}
                                    width={100}
                                    height={100}
                                />
                            </div>
                        ))}
                    </div>
                    <Typography variant='caption' color='textSecondary' style={{ color: themeColor.fontColor }}>{currentLanguage.home.secondSection[7]}</Typography>
                </Box>
            </Box>
        </Paper>
    </div>
    )
}

export default SectionTwo;