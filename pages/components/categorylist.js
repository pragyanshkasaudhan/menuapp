import Image from "next/image";
import comp from './comp.module.css';
import Menu from '../api/menu.json'
import { useState } from "react";


const categorylist = () => {
    const [data, setData] = useState(Menu);


    return (
        <>
            <div className={comp.rowslide}>
                {
                data.map(value => (
                        <div className={comp.main} key={value.id}>
                        <div className={comp.menuimg}><Image src={`/icons/${value.imgsrc}`} alt='Picture' height={30} width={30} ></Image></div>
                        <span>{value.name}</span>
                        </div>
                    ))
                }
                
            </div>
        </>
    )
}

export default categorylist;