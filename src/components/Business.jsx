import React from 'react'
import { features } from '../constants'
import styles, { layout } from '../style'
import Button from './Button'

const FeatureCard = ({ icon, title, content, index }) => (
  <div className={ `flex flex-row p-6 rounded-[20px] ${index !== features.length - 1 ? 'mb-6' : 'mb-0'} feature-card` }>
    <div className='flex-1 flex flex-col'>
      <div className={ `w-[100%] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue mb-3` }>
        <img
          src={ icon }
          alt='icon'
          className='w-[20%] h-[50%] object-contain'
        />
        <h4 className='font-poppins font-semibold text-white text-[18px] leading-[23px]'>
          { title }
        </h4>
      </div>
      <p className='font-poppins font-normal text-dimWhite text-[16px] leading-[24px]'>
        { content }
      </p>
    </div>
  </div>
)

const Business = () => {
  return (
    <section id='features' className={ layout.section }>
      <div className={ layout.sectionInfo }>
        <h2 className={ styles.heading2 }>Professionelle Unterstützung <br className='sm:block hidden' />für dich .</h2>
        <p className={ `${styles.paragraph} max-w-[470px] mt-5` }>
          In der Welt von OnlyFans kann es schwierig sein, sich durchzusetzen und erfolgreich zu sein. Aber keine Sorge, wir sind hier, um dir den Rücken zu stärken! Unsere OnlyFans-Agentur bietet dir professionelle Unterstützung und Expertenberatung, damit du das Beste aus deinem Account herausholen kannst. Egal, ob es darum geht, hochwertige Inhalte zu erstellen, deine Reichweite zu erhöhen oder monetäre Möglichkeiten zu maximieren, wir sind an deiner Seite, um sicherzustellen, dass du erfolgreich bist.
        </p>
        <Button styles='mt-10' />
      </div>
      <div className={ `${layout.sectionImg} flex-col` }>
        { features.map((feature, index) => (
          <FeatureCard key={ feature.id } { ...feature } index={ index } />
        )) }
      </div>
    </section>
  )
}

export default Business
