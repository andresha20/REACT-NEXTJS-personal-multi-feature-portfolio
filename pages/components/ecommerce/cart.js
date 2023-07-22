import { Divider, Paper, TextField } from '@material-ui/core'
import { useState, useRef } from 'react'
import { useGlobalContext } from '../../../components/Context/theme'
import { useLanguageContext } from '../../../components/Context/language'
import useStyles from './Styles'
import Link from 'next/link'
import Head from 'next/head'
import Image from 'next/image'
import ArrowBackIosRoundedIcon from '@material-ui/icons/ArrowBackIosRounded'

const Cart = () => {

    const { themeColor } = useGlobalContext();
    const { currentLanguage } = useLanguageContext();
    const classes = useStyles(themeColor);
    const [shoppingCartProducts, setShoppingCartProducts] = useState([])
    const [marketProducts, setMarketProducts] = useState([
        { name: 'Sandwich', src: '/Images/sandwich.png', id: '01', stock: 5, price: 2.75, orders: 1, total: 2.75 },
        { name: 'Sushi', src: '/Images/sushi.png', id: '02', stock: 7, price: 1.25, orders: 1, total: 1.25 },
        { name: 'Apple', src: '/Images/apple.png', id: '03', stock: 6, price: 0.75, orders: 1, total: 0.75 },
        { name: 'Noodles', src: '/Images/noodles.png', id: '04', stock: 3, price: 4.75, orders: 1, total: 4.75 }
    ])

    const addToCart = (productID) => {
        // Market products
        const indexOfSelectedProduct = marketProducts.findIndex(product => product.id === productID);
        const temporaryArray = [...marketProducts]

        // Shopping cart products
        const indexOfShoppingCartProduct = shoppingCartProducts.findIndex(product => product.id === productID);
        const temporaryShoppingCartArray = [...shoppingCartProducts]
        const shoppingCartProduct = temporaryShoppingCartArray[indexOfShoppingCartProduct]

        if (temporaryArray[indexOfSelectedProduct]['stock'] > 0) {
            const selectedProduct = temporaryArray[indexOfSelectedProduct]
            selectedProduct.stock -= 1;
            setMarketProducts(temporaryArray);

            if (indexOfShoppingCartProduct !== -1) {
                shoppingCartProduct.orders = shoppingCartProduct.orders + 1;
                shoppingCartProduct.total = shoppingCartProduct.orders * shoppingCartProduct.price;
                return setShoppingCartProducts(temporaryShoppingCartArray);
            } else {
                temporaryShoppingCartArray.push(selectedProduct);
                return setShoppingCartProducts(temporaryShoppingCartArray);
            }
        }
    }

    const removeFromCart = (productID) => {
        // Shopping cart products
        const indexOfSelectedProduct = shoppingCartProducts.findIndex(product => product.id === productID);
        const temporaryCartArray = [...shoppingCartProducts];
        const selectedProduct = temporaryCartArray[indexOfSelectedProduct];

        // Market products
        const indexOfMarketProduct = marketProducts.findIndex(product => product.id === productID)
        const temporaryMarketArray = [...marketProducts];
        const marketProduct = temporaryMarketArray[indexOfMarketProduct];

        if (selectedProduct.orders > 0) {
            selectedProduct.orders -= 1;
            selectedProduct.total -= selectedProduct.price;
            marketProduct.stock += 1;
            setShoppingCartProducts(temporaryCartArray);
            return setMarketProducts(temporaryMarketArray);
        } else {
            temporaryCartArray.splice(indexOfSelectedProduct, 1);
            marketProduct.stock += 1;
            setShoppingCartProducts(temporaryCartArray);
            return setMarketProducts(temporaryMarketArray);
        }
    }

    const clearCart = () => {
        setShoppingCartProducts([]);
        return setMarketProducts([
            { name: 'Sandwich', src: '/Images/sandwich.png', id: '01', stock: 5, price: 2.75, orders: 1, total: 2.75 },
            { name: 'Sushi', src: '/Images/sushi.png', id: '02', stock: 7, price: 1.25, orders: 1, total: 1.25 },
            { name: 'Apple', src: '/Images/apple.png', id: '03', stock: 6, price: 0.75, orders: 1, total: 0.75 },
            { name: 'Noodles', src: '/Images/noodles.png', id: '04', stock: 3, price: 4.75, orders: 1, total: 4.75 }
        ]);
    }

    return (
        <>
        <Head>
        <title>Shopping Cart</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" key='title'/>
        </Head>
            <div className={classes.goBack}>
                <ArrowBackIosRoundedIcon style={{ color: themeColor.neonColor }}/>
                <Link href='/'>
                    <p style={{ textDecoration: 'none', fontWeight: 'bold', color: themeColor.neonColor }}>{currentLanguage.cart.goBack}</p>
                </Link>
            </div>
            <div className={classes.root}>
                <Paper className={classes.customSelect} elevation={1} align='center' >
                    <div className={classes.image}>
                        <Image 
                            src='/Images/market.png'
                            alt='Market'
                            height={150}
                            width={150}
                        />
                    </div>
                    <h1 className={classes.title}>{currentLanguage.cart.info[0]}</h1>
                    <p className={classes.description}>{currentLanguage.cart.info[1]}</p>
                    <br/>
                    <div className={classes.content}>
                        {
                        marketProducts.map(product => <div key={product.id} className={classes.itemsDiv} onDragStart={() => console.log('Drag started')}>
                                <div className={classes.itemImage}>
                                    <Image 
                                        src={product.src}
                                        alt={product.name}
                                        height={75}
                                        width={75}
                                    />
                                    <p style={{ color: product.stock === 0 ? 'hsl(20, 100%, 50%)' : themeColor.fontColor, position: 'absolute', top: -11, left: 5 }}>{product.stock}</p>
                                </div>
                                <div>
                                    <h3 className={classes.itemTitle}>{product.name}</h3>
                                    <p className={classes.itemTitle}>${product.price}/u</p>
                                    { product.stock > 0 
                                    ?   <div className={classes.buttonDiv}>
                                            <button className={classes.button} onClick={() => addToCart(product.id)}>+</button>
                                        </div>
                                    : <p className={classes.outOfStock}>{currentLanguage.cart.info[2]}</p>
                                    }
                                </div>
                            </div>
                        )
                        }
                    </div>
                </Paper>
                <Paper className={classes.customSelect} elevation={1}>
                    <div className={classes.image}>
                        <Image 
                            src='/Images/shoppingCart.png'
                            alt='Shopping Cart'
                            height={150}
                            width={150}
                        />
                    </div>
                    <h1 className={classes.title}>{currentLanguage.cart.info[3]}</h1>
                    <p className={classes.description}>{currentLanguage.cart.info[4]}</p>
                    <br/>
                    <div className={classes.content}>
                        <h3 className={classes.grandTotal}>{currentLanguage.cart.info[5]} 
                            <span style={{ color: themeColor.neonColor }}> $
                            {
                            shoppingCartProducts.reduce((accumulator, product) => accumulator + product.total, 0).toFixed(2)
                            }
                            </span>
                        </h3>
                        <Divider />
                        {
                        shoppingCartProducts.length > 0 
                        ?
                        shoppingCartProducts.map(product => (
                        product.orders > 0 &&
                        <div key={product.id} className={classes.itemsDiv}>
                            <div className={classes.itemImage}>
                                <Image 
                                src={product.src}
                                alt={product.name}
                                height={75}
                                width={75}
                                />
                                <p className={classes.imageFloatingNumber}>{product.orders}</p>
                            </div>
                            <div>
                                <h3 className={classes.itemTitle}>{product.name}</h3>
                                <p className={classes.itemTitle}><span style={{ fontWeight: 'bold' }}>TOTAL:</span> ${product.total.toFixed(2)}</p>
                                <div className={classes.buttonDiv}>
                                    <button className={classes.button} onClick={() => removeFromCart(product.id)}>-</button>
                                </div>
                            </div>
                        </div>
                        ))
                        :
                        <h3 style={{ textAlign: 'center', color: themeColor.fontColor, fontWeight: 'bold' }}>{currentLanguage.cart.info[6]}</h3>
                        }
                        <div style={{ marginTop: 20, }}>
                            <button className={classes.button} onClick={() => clearCart()}>{currentLanguage.cart.info[7]}</button>
                        </div>
                    </div>
                </Paper>
            </div>
        </>
    )
}

export default Cart;
