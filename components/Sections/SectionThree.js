import { Paper, Box, Typography, Divider, Grid, List, ListItem, ListItemText } from '@material-ui/core'
import { data } from './Data'
import { useGlobalContext } from '../Context/theme'
import { useLanguageContext } from '../Context/language'
import Image from 'next/image'
import Link from 'next/link'
import useStyles from './Styles'
import ExitToAppRoundedIcon from '@material-ui/icons/ExitToAppRounded';

const SectionThree = () => {
    
    const { currentLanguage } = useLanguageContext();
    const { themeColor } = useGlobalContext();
    const classes = useStyles(themeColor);

    return (
        <div className={classes.root} id="work">
            <Box component='div' align='center'>
                <Typography variant='h3' style={{ fontWeight: 'bold', color: themeColor.fontColor }}><span className={classes.span}>2.1</span> {currentLanguage.home.thirdSection[0]}</Typography>
                <Divider />
                <br/>
            </Box>
            <Paper className={classes.paper} elevation={0}>
                <Box component='div' align='center'>
                    {data.projects.map(element => (
                        <Grid container key={element.id} spacing={5} style={{ padding: '20px 0px 20px 0px', backgroundColor: themeColor.backgroundColor, flexDirection: element.id % 2 === 0 && 'row-reverse' }}>
                        <Grid item xs={12} sm={6}>
                            <Box component='div'>
                                <Link href={element.link}>
                                <Image className={classes.projectImages}
                                    src={element.src}
                                    alt={element.alt}
                                    width={579}
                                    height={360}
                                />
                                
                                </Link>
                            </Box>
                        </Grid>                        
                        <Grid item xs={12} sm={6}>
                            <Box component='div'>
                                <Typography variant='subtitle1' style={{ color: themeColor.fontColor }}>{element.id}.<span className={classes.span}> {currentLanguage.home.thirdSection[1]}</span></Typography>
                                <Typography variant='h4' style={{ fontWeight: 'bold', color: themeColor.fontColor }} paragraph>{currentLanguage.lang === 'es' ? element.name.es : element.name.en}</Typography>
                                <Typography component='div' style={{ backgroundColor: themeColor.neonColor, color: '#fff', padding: '10px 10px 10px 10px', width: '100%' , borderRadius: '5px',  }} align='left' variant='body1' paragraph>{currentLanguage.lang === 'es' ? element.description.es : element.description.en}</Typography>
                                <Typography variant='body1'>{element.technologiesUsed.map((technology, index) => (
                                    <List dense key={index} style={{ color: themeColor.fontColor }}>
                                        <ListItem>
                                            <ListItemText
                                                primary={technology.name}
                                                secondary={currentLanguage.lang === 'es' ? technology.function.es : technology.function.en}
                                            />
                                        </ListItem>
                                    </List>
                                ))}</Typography>
                            </Box>
                        </Grid>
                    </Grid>
                    ))}
                </Box>
            </Paper>
            <Box component='div' align='center'>
                <br/>
                <Typography variant='h3' style={{ fontWeight: 'bold', color: themeColor.fontColor }}><span className={classes.span}>2.2</span> {currentLanguage.home.thirdSection[2]}</Typography>
                <Divider />
                <br/>
            </Box>
            <Paper className={classes.paper} elevation={0} id="components">
                <Box component='div' align='center'>
                            
                    {data.components.map(element => (
                        <Grid container key={element.id} spacing={5} style={{ padding: '20px 0px 20px 0px', backgroundColor: themeColor.backgroundColor, flexDirection: element.id % 2 === 0 && 'row-reverse' }}>
                        <Grid item xs={12} sm={6}>
                            <Box component='div'>
                                <Link href={element.link} rel="noopener noreferrer">
                                    <a target='_blank'>
                                        <Image className={classes.projectImages}
                                            src={element.src}
                                            alt={element.alt}
                                            width={579}
                                            height={360}
                                        />
                                        <ExitToAppRoundedIcon size='large' style={{ color: themeColor.neonColor }}/>
                                    </a>
                                </Link>
                            </Box>
                        </Grid>                        
                        <Grid item xs={12} sm={6}>
                            <Box component='div'>
                                <Typography variant='subtitle1' style={{ color: themeColor.fontColor }}>{element.id}.<span className={classes.span}> {currentLanguage.home.thirdSection[3]}</span></Typography>
                                <Typography variant='h4' style={{ fontWeight: 'bold', color: themeColor.fontColor }} paragraph>{currentLanguage.lang === 'es' ? element.name.es : element.name.en}</Typography>
                                <Typography component='div' style={{ backgroundColor: themeColor.neonColor, color: '#fff', padding: '10px 10px 10px 10px', width: '100%' , borderRadius: '5px',  }} align='left' variant='body1' paragraph>{currentLanguage.lang === 'es' ? element.description.es : element.description.en}</Typography>
                            </Box>
                        </Grid>
                    </Grid>
                    ))}
                </Box>
            </Paper>
        </div>
    )
}

export default SectionThree;