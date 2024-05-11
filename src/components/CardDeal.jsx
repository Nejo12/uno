import React from 'react'
import { card } from '../assets'
import Button from './Button'
import styles, { layout } from '../style'

const CardDeal = () => {
  return (
    <section className={ layout.section }>
      <div className={ layout.sectionInfo }>
        <h2 className={ styles.heading2 }>Skaliere dein Geschäft <br className='sm:block hidden' /> als Geldverdiener. </h2>
        <p className={ `${styles.paragraph} max-w-[470px] mt-5` }>
          Erfolg auf OnlyFans ist keine Einbahnstraße, sondern ein stetiger Prozess des Wachstums und der Weiterentwicklung. Wir helfen dir dabei, dein OnlyFans-Geschäft effizient zu skalieren und weiterzuentwickeln, ohne dass du dich um alle Details kümmern musst. Von der Automatisierung von Prozessen über die Identifizierung neuer Einnahmequellen bis hin zur Optimierung deiner Strategie unterstützen wir dich dabei, dein Geschäft auf die nächste Stufe zu heben und langfristigen Erfolg zu erzielen.

        </p>
        <Button styles='mt-10' />
      </div>
      <div className={ layout.sectionImg }>
        <img
          src={ card }
          alt='tina card'
          className='w-[100%] h-[100%] rounded-[10px] object-cover'
        />
      </div>
    </section>
  )
}

export default CardDeal
