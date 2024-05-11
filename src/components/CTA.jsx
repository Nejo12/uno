import React from 'react'
import styles from '../style'
import Button from './Button'

const CTA = () => {
  return (
    <section className={ `${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow` }>
      <div className='flex-1 flex flex-col'>
        <h2 className={ styles.heading2 }>Wir helfen dir bei der Content-Planung</h2>
        <p className={ `${styles.paragraph} max-w-[470px] mt-5` }>
          Als deine OnlyFans Agentur helfen wir dir dabei, deine persönlichen Ziele zu erreichen. Unsere Account-Manager sorgen dafür, dass du deine Zeit so effektiv wie möglich nutzen und mit weniger Aufwand mehr Umsatz erzielen kannst.
        </p>
      </div>
      <div className={ `${styles.flexCenter} sm:ml-10 ml-0` }>
        <Button />
      </div>
    </section>
  )
}

export default CTA
