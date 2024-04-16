import { useEffect, useState} from 'react'

const MyCard = () => {
    const [products, setProducts] = useState([]);

    useEffect(()=>{
        const productInfo=fetch("https://dummyjjson.com/products")
        .then(result=>result.json())
        .then(data=>{
            setProducts(data.products)
        })
    },[]);
