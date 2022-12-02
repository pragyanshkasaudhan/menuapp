import Image from 'next/image'
import { useState } from 'react'
import style from '../../styles/Home.module.css'
import Bar from '../components/bottombar'
import CatList from '../components/categorylist'
import ItemCard from '../components/itemcard'

const products = () => {
    const [categorydata, setCategorydata] = useState([])

    return (
        <>
            <div className={style.mainwrapper}>
                <div className={style.toprow}>
                    <i className={`bi bi-list ${style.menuicon}`} />
                    <Image src={"/icons/man.png"} alt="Avatar" width={30} height={30}></Image>
                </div>
                <div className={`p-3 ${style.greeting}`}>
                    <span>Hi! Pragyansh</span><br />
                    <span className={style.tagline}>What do you wanna eat today?</span>
                </div>
                <CatList />
                {/* <div className='menucategory'></div> */}
                <div className={style.categorywisedisplay}>
                    <div className={style.category}>
                        <span className={`p-3 ${style.categoryName}`}>North Indian</span>
                        <ItemCard />
                    </div>
                    <div className={style.category}>
                        <span className={`p-3 ${style.categoryName}`}>Chinese</span>
                        <ItemCard />
                    </div>
                    <div className={style.category}>
                        <span className={`p-3 ${style.categoryName}`}>Fast Food</span>
                        <ItemCard />
                    </div>
                </div>
            </div>
            <Bar />
        </>
    )
}

export default products;