import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import comp from './comp.module.css';

// import Items from '../api/items.json';
// import { useState } from 'react';




const Itemcard = () => {
    // console.log(cat);
    const [data, setData] = useState([])

    const getdata = async () => {fetch("http://localhost:3005/items/")
    .then(response => response.json())
    .then(json => {
        setData(json);
        // console.log(json);
    })
}

    useEffect(() => {
      getdata();
    },[])

    return (
        <>
            <div className={comp.rowslide}>
            
                {data.map(elem => (
                    <div className={comp.cardbg} key={elem.id}>
                        <div className={comp.itemLeft}>
                            <div className={comp.carditemnameprice}>
                                <span className={comp.itemName}>{elem.name}</span>
                                <span className={comp.itemPrice}>₹{elem.price}</span>
                            </div>
                            <div className={comp.cardMeta}>
                                <img src={`/icons/${elem.vegnonveg}.png`} alt="Veg" height={20} />
                                <span className={comp.itemReview}><i className="bi bi-star-fill"></i>&nbsp;{elem.rating}</span>
                            </div>

                        </div>
                        <div className={comp.itemRight}>
                            <Link href={`/products/${elem.id}`}><Image src={"/images/hakka.png"} alt="Product" width={100} height={100} ></Image></Link>
                            <div className={comp.itemAdd}>
                                <button>ADD</button>
                            </div>
                        </div>
                    </div>
                ))
                }
            </div>
        </>
    )
}

export default Itemcard;