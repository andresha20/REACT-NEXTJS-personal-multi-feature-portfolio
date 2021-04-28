import { useState } from 'react'
import { Paper } from '@material-ui/core'
import { useGlobalContext } from '../../../components/Context/theme'
import { useLanguageContext } from '../../../components/Context/language'
import useStyles from './Styles'
import CustomSelectComponent from '../../../components/CustomSelect/CustomSelect'
import Slider from '@material-ui/core/Slider'
import Link from 'next/link'
import Head from 'next/head'
import ListAltRoundedIcon from '@material-ui/icons/ListAltRounded';
import GridOnRoundedIcon from '@material-ui/icons/GridOnRounded';
import ArrowBackIosRoundedIcon from '@material-ui/icons/ArrowBackIosRounded';

const CustomSelect = () => {
    
    const { currentLanguage } = useLanguageContext();
    const { themeColor } = useGlobalContext();
    const classes = useStyles(themeColor);
    const text = ["This", "is a", "custom", "select"];
    const sizes = [
        { label: '30 px', value: 30 },
        { label: '50 px', value: 50 },
        { label: '70 px', value: 70 }
    ];
    const images = [
        { src: "/images/react.png", alt: "React Library", }, 
        { src: "/images/nextjs.png", alt: "Next.js React Framework" }, 
        { src: "/images/mongodb.png", alt: "MongoDB" }, 
        { src: "/images/nodejs.svg", alt: "Node.js" }
    ];
    
    const [chosenOption, setChosenOption] = useState(text);
    const [imageSize, setImageSize] = useState('30');
    const [color, setColor] = useState('#009488');
    const [design, setDesign] = useState('list');


    return (
        <>
            <Head>
            <title>Custom Selection</title>
            <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" key='title'/>
            </Head>
            <div className={classes.goBack}>
                <ArrowBackIosRoundedIcon style={{ color: themeColor.neonColor }}/>
                <Link href='/'>
                    <a style={{ textDecoration: 'none', fontWeight: 'bold', color: themeColor.neonColor }}>{currentLanguage.select.goBack}</a>
                </Link>
            </div>
            <div className={classes.root}>
                <Paper className={classes.customSelect} elevation={1}>
                    <h1 className={classes.title}>{currentLanguage.select.info[0]}</h1>
                    <p style={{ textAlign: 'center' }}>{currentLanguage.select.info[1]}</p>
                    <h4 style={{ color: themeColor.fontColor, textAlign: 'center' }}>{currentLanguage.select.info[2]}</h4>
                    <div className={classes.customSelectContentDIV}>
                        <div className={classes.colorOne} onClick={() => setColor('#FF6347')}>
                            <span style={{visibility: 'hidden'}}>1</span>
                        </div>
                        <div className={classes.colorTwo} onClick={() => setColor('#FF8C00')}>
                            <span style={{visibility: 'hidden'}}>2</span>
                        </div>
                        <div className={classes.colorThree} onClick={() => setColor('#ff78cb')}>
                            <span style={{visibility: 'hidden'}}>3</span>
                        </div>
                    </div>
                    <h4 style={{ color: themeColor.fontColor, textAlign: 'center' }}>{currentLanguage.select.info[3]}</h4>
                    <div className={classes.customSelectContentDIV}>
                        <div className={classes.boxes} onClick={() => setChosenOption(images)}>{currentLanguage.select.info[4]}</div>
                        <div className={classes.boxes} onClick={() => setChosenOption(text)}>{currentLanguage.select.info[5]}</div>
                    </div>
                    {
                    typeof(chosenOption[0]) === 'object' && 
                        <>
                            <h4 style={{ color: themeColor.fontColor, textAlign: 'center' }}>{currentLanguage.select.info[6]}</h4>
                            <div className={classes.customSelectContentDIV}>
                                <Slider 
                                    className={classes.slider}
                                    defaultValue={30}
                                    aria-labelledby="discrete-slider-restrict"
                                    step={null}
                                    max={70}
                                    min={30}
                                    valueLabelDisplay="auto"
                                    marks={sizes}
                                    style={{ color: themeColor.neonColor }}
                                    onChange={(e, value) => {
                                        setImageSize(value);
                                    }}
                                />
                            </div>
                            <div className={classes.customSelectContentDIV}>
                                <h4 style={{ color: themeColor.fontColor, textAlign: 'center' }}>{currentLanguage.select.info[7]}</h4>
                                <GridOnRoundedIcon fontSize='large' className={classes.icon} onClick={() => setDesign('grid')}/>
                                <ListAltRoundedIcon fontSize='large' className={classes.icon} onClick={() => setDesign('list')}/>
                            </div>
                        </>
                    }
                </Paper>
                <Paper className={classes.defaultSelect} elevation={1}>
                    <h1 className={classes.title}>{currentLanguage.select.info[8]}</h1>
                    <p style={{ textAlign: 'center' }}>{currentLanguage.select.info[9]}</p>
                    <div style={{ marginBottom: '2rem' }}>
                        <CustomSelectComponent values={chosenOption} color={color} size={imageSize} design={design}/>
                    </div>
                    <h4 style={{ color: themeColor.fontColor, textAlign: 'center' }}>{currentLanguage.select.info[10]}</h4>
                        <p style={{ textAlign: 'center' }}>{currentLanguage.select.info[11]}</p>
                        <select>
                            <option>This</option>
                            <option>is a</option>
                            <option>default select</option>
                        </select>                    
                </Paper>
            </div>
    </>
    )
}

export default CustomSelect;