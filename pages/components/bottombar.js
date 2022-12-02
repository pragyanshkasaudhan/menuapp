import Link from 'next/link';
import comp from './comp.module.css'
const bottombar = () => {
  return (
    <div className={`fixed-bottom ${comp.bar}`}>
        <Link href={'/products'}><button><i className="bi bi-house-fill" /></button></Link>
        <Link href={'/products'}><button><i className="bi bi-search" /></button></Link>
        <Link href={'/products'}><button><i className="bi bi-heart-fill" /></button></Link>
        <Link href={'/products'}><button><i className="bi bi-cart-fill" /></button></Link>
    </div>
  )
}
export default bottombar;