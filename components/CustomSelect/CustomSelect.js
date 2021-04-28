import { useState, useEffect, useCallback } from 'react'
import { useGlobalContext } from '../Context/theme'
import useStyles from './Styles'
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import Image from 'next/image';

const CustomSelect = ({ values, color, size, design }) => {

    const { themeColor } = useGlobalContext();
    const classes = useStyles(themeColor);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [keyPressed, setKeyPressed] = useState(false);
    const [selectedValue, setSelectedValue] = useState(null);
    // const [hoveredElement, setHoveredElement] = useState(null);
    const [valuesIndex, setValuesIndex] = useState(0);

    const openDropdown = () => setIsDropdownOpen(state => !state);

    // This is an example on how to correctly use 'useCallback' to develop the hover functionality.
    // const handleHover = useCallback((hoveredValue) => {
    //     if (hoveredValue) {
    //         const hoveredItem = values.find(value => value === hoveredValue )
    //         return setHoveredElement(hoveredItem);
    //     }
    // }, [])

    const handleKeyDown = (e) => {
        e.preventDefault();
        if (e.key === 'ArrowDown') {
            setKeyPressed(true);
            console.log('Arrow down');
            return setValuesIndex(index => {
                if (index === values.length - 1) {
                    return index;
                } else {
                    return index + 1;
                }
            })
        }
        if (e.key === 'ArrowUp') {
            setKeyPressed(true);
            console.log('Arrow up');
            return setValuesIndex(index => {
                if (index === 0) {
                    return index;
                } else {
                    return index - 1;
                }
            })
        }
        if (e.key === 'Enter') {
            setKeyPressed(true);
            return setSelectedValue(values.find((value, index) => valuesIndex === index));
        }
    }

    const handleKeyUp = () => setKeyPressed(false);

    useEffect(() => {
        window.addEventListener('keydown', handleKeyDown);
        window.addEventListener('keyup', handleKeyUp);
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
            window.removeEventListener('keyup', handleKeyUp);
        }
    }, [valuesIndex])

    return (
            <div className={classes.root} onClick={openDropdown}>
                <div style={{   
                                position: 'relative',
                                display: 'flex',
                                alignItems: 'center' ,
                                flexDirection: 'column',
                                width: '100%'
                                }}>
                                <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', width: '100%', backgroundColor: themeColor.backgroundColorLight, paddingLeft: 5 }}>
                                    <div style={{ width: '90%', flexGrow: 1, display: 'flex', justifyContent: 'flex-start', fontWeight: 'bold' }}>{typeof(values[0]) === 'object' ? values[valuesIndex]['alt'] : values[valuesIndex]}</div>
                                    <div className={classes.icon}>
                                        {isDropdownOpen ? <KeyboardArrowUpIcon/> : <KeyboardArrowDownIcon/>}
                                    </div>
                                </div>
                    {
                    values 
                    ? typeof(values[0]) === 'object'
                        ? isDropdownOpen && 
                            <div style={{ 
                                display: design === 'list' ? 'flex' : 'grid',
                                position: 'absolute',
                                width: '100%',
                                flexDirection: design === 'list' && 'column',
                                gridTemplateColumns: design !== 'list' && 'auto auto auto',
                                border: `2px solid #3d3d3d`,
                                backgroundColor: themeColor.backgroundColorLight,
                                top: '1.5rem',
                                boxShadow: '0 0px 25px 0px rgba(0, 0, 0, 0.10)',

                                }}>
                                {
                                    values.map((value, index) => {
                                    return <div key={index} style={{ 
                                            display: 'flex',
                                            width: '100%',
                                            padding: '5px 5px 5px 5px',
                                            justifyContent: design === 'grid' && 'center',
                                            backgroundColor: valuesIndex === index && `${color}`,
                                            color: valuesIndex === index && '#fff',
                                            cursor: valuesIndex === index && 'pointer'
                                            }}
                                            onClick={() => setSelectedValue(value.src)}
                                            onMouseEnter={() => setValuesIndex(index)}
                                            >
                                                <Image 
                                                    src={value.src}
                                                    alt={value.alt}
                                                    height={size}
                                                    width={size}
                                                />
                                            </div>
                                        }) 
                                } 
                            </div>
                        : isDropdownOpen && 
                            <div style={{ 
                                display: 'flex',
                                position: 'absolute',
                                width: '100%',
                                flexDirection: 'column',
                                border: `2px solid #3d3d3d`,
                                backgroundColor: themeColor.backgroundColorLight,
                                top: '1.5rem',
                                boxShadow: '0 0px 25px 0px rgba(0, 0, 0, 0.10)',
                                }}>
                                {
                                values.map((value, index) => {
                                return <div key={index} style={{ 
                                    display: 'flex',
                                    width: '100%',
                                    paddingLeft: 5,
                                    backgroundColor: valuesIndex === index && `${color}`,
                                    color: valuesIndex === index && '#fff',
                                    cursor: valuesIndex === index && 'pointer'
                                }} 
                                    onClick={() => setSelectedValue(value)}
                                    onMouseEnter={() => setValuesIndex(index)}
                                    >{value}</div>
                                }) 
                                } 
                            </div>
                            
                    : <span>Nothing to display here</span>
                    }
                </div>
            </div>      
    )
}

export default CustomSelect;
