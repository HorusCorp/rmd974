import React from 'react'
import Link from 'next/link'

function FirstPartHomme() {
    return (
        <div className='firstpart__home'>
            {/* historic text */}
            <div className='img__cover__left'></div>
            <div className='firstpart__home_right'>
                <h2>Notre Histoire</h2>
                <p>Une belle aventure qui débuta en 2011 dans le Sud de l’île de la Réunion avec comme ligne de conduite importer et commercialiser des produits de qualité avec la couleur et fibre Réunionnaise.</p><br/>
                <h2>Notre Vision</h2>
                <ul>
                    <li>Apporter du goût et une qualité à un prix abordable aux professionnels.</li><br/>
                    <li>Donner du choix à nos clients.</li><br/>
                    <li>Être proche et réactif en livrant nos clients.</li>
                </ul>
                <div className='flex justify_center'>
                <Link href='/About'><div className='buttons__content__gradiant extralarge'>En savoir plus </div></Link>
                </div>
            </div>
        </div>
    )
}

export default FirstPartHomme
