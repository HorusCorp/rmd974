
import React, {useState} from 'react'
import Link from 'next/link'

function NavWithLogo() {

    const [active,setActive] = useState(1)

    //FOR LIGHT VERSION USE THIS ONE
    return(
        <div className='navs__content__basic'>
            <Link href='/' onClick={()=>setActive(1)} className={active===1?'active_navs':''}>
                <img className='logo_navs' src='../logo.png' alt='logo compagny' width='70' height='50'/>
            </Link>
            <Link href='/' onClick={()=>setActive(2)} className={active===2?'active_navs':''}>Accueil</Link>
            <Link href='/About' onClick={()=>setActive(3)} className={active===3?'active_navs':''}>A propos</Link>
        </div>
        )
    }

export default NavWithLogo;
