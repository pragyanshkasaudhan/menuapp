import single from './sproduct.module.css';
import Addbtn from '../components/addtocart';
import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';

const singleproduct = () => {

    const [itemdata, setItemdata] = useState([]);

    const getdata = async () => {
        fetch(`https://my-json-server.typicode.com/pragyanshkasaudhan/menuapp/items/${window.location.href.split('/').pop()}`)
        .then(response => response.json())
        .then(json => {
        setItemdata(json);
        console.log(json);
    })
}
useEffect(()=> {
    getdata();
},[])

    // ${window.location.href.split('/').pop()}


    return (
        <>
            <div className={single.fullview}>
                <div className={single.top}>
                    <Link href={'/products'}><i className="bi bi-arrow-left-circle-fill" /></Link>
                    <i className="bi bi-heart" />
                </div>
                <div className={single.content} key={itemdata.id}>
                    <div className={single.itemimg}><Image src={'/images/hakka.png'} width={250} height={250}></Image></div>
                    <span className={single.itemName}>{itemdata.name}</span>
                    <div className={single.detail}>
                        <Image src={`/icons/${itemdata.vegnonveg}.png`} alt={itemdata.vegnonveg} width={22} height={30}></Image>
                        <span className={single.itemPrice}>₹{itemdata.price}</span>
                        <span><i className="bi bi-star-fill"></i>&nbsp;{itemdata.rating}</span>
                    </div>
                    <p className={single.text}>
                        {itemdata.deatils}
                    </p>
                </div>
            <Addbtn />
            </div>
        </>
    )
}

export default singleproduct;