import React from 'react'
import { feedback } from '../constants'
import styles from '../style'
import Feedback from './Feedback'

const Testimonials = () => {
  return (
    <section id='clients' className={ `${styles.paddingY} ${styles.flexce} flex-col relative` }>
      <div className='absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient bottom-40' />
      <div className='w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]'>
        <h2 className={ styles.heading2 }>Erhalte Einblicke <br className='sm:block hidden' />in deine Leistung</h2>
        <div className='w-full md:mt-0 mt-6'>
          <p className={ `${styles.paragraph} text-left max-w-[450px]` }>
            Als deine OnlyFans Agentur helfen wir dir dabei, deine persönlichen Ziele zu erreichen. Unsere Account-Manager sorgen dafür, dass du deine Zeit so effektiv wie möglich nutzen und mit weniger Aufwand mehr Umsatz erzielen kannst.
          </p>
        </div>
      </div>
      <div className='flex flex-wrap sm:justify-evenly justify-center w-full feedback-contrainer relative z-[1]'>
        { feedback.map((card) => (
          <Feedback key={ card.id } { ...card } />
        )) }
      </div>
    </section>
  )
}

export default Testimonials
