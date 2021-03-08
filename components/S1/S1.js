import React, {useEffect, useState} from 'react'
import Link from 'next/link'
import styles from '../S1/S1.module.css'

function S1() {

  const [claseDivUno,setClaseDivUno]=useState(false)
  const [claseDivDos,setClaseDivDos]=useState(false)
  const [claseDivTres,setClaseDivTres]=useState(false)



  function setearClases(e){
    if(e.target.id !==''){
      const elDiv =e.target.id
      switch(elDiv){
      case  'uno':
        setClaseDivUno(true)
        setClaseDivUno(false)
        setClaseDivTres(false)
        break

       case 'dos':
        setClaseDivUno(false)
        setClaseDivUno(true)
          setClaseDivTres(false)
          alert('dos')
        break

        case 'tres':
        setClaseDivUno(false)
        setClaseDivUno(false)
        setClaseDivTres(true)
        break

      }
    }
  }

  return (
    <>
      <section className={styles.section}>
        <div className={styles.btnsRecruiting} id={styles.recruiting}>
          <div className={styles.btns} onClick={(e)=>setearClases(e)} id={'uno'}>
            <p className={styles.p}>Professional Recruiting</p>
          </div>
          <div className={styles.btns2}>
            <p className={styles.p} onClick={(e)=>setearClases(e)} id={'dos'}>Temporary Staff</p>
          </div>
          <div className={styles.btns3}>
            <p className={styles.p} onClick={(e)=>setearClases(e)} id={'tres'}>Find your dream job</p>
          </div>
        </div>
        {/* tab 1 */}
        <div className={styles.professionalRecruiting}>
          <div className={styles.pic}>
            <img className={styles.img} src="/assets/media/home/recruiting.png" alt="People Recruiting" />
          </div>
          <div className={styles.sideText}>
            <h3 className={styles.h3}>Professional Recruiting</h3>
            <p className={styles.p}>Whether you're looking for temporary help around the office or to staff an entire production facility, Labor Staffers has you covered. We can help you control costs, manage risk, eliminate administrative hassles, and increase productivity by growing your team with only the very best talent. We provide our clients with world-class recruiting and hiring services to help fill important needs at your company.</p>
            <div className={styles.btnSide}>
            <div  className={styles.btn}><Link href="/employers"><a href="#">request staff</a></Link></div>
            <div  className={styles.btn}><Link href="/about"><a href="#">give us a call</a></Link></div>
            </div>
          </div>
        </div >

        {/* tab 2 */}
      <div className={styles.professionalRecruiting2}>
          <div className={styles.pic}>
            <img className={styles.img} src="/assets/media/home/temporary-staff2.png" alt="Temporary Staff" />
          </div>
          <div className={styles.sideText}>
            <h3 className={styles.h3}>Temporary Staff</h3>
            <p className={styles.p}>Praesent elementum posuere consequat. Nulla ac rutrum nunc. Morbi varius, nisi nec facilisis finibus, felis velit semper magna, non rhoncus eros eros nec risus. In vel nisi quis magna viverra blandit in quis felis. Nam nisl erat, auctor ut hendrerit in, mollis et ipsum. Nulla sit amet neque eleifend, dictum magna ac, accumsan diam. Ut consequat efficitur aliquet.</p>
            <div className={styles.btnSide}>
            <div  className={styles.btn}><Link href="/employers"><a href="#">request staff</a></Link></div>
            <div  className={styles.btn}><Link href="/about"><a href="#">give us a call</a></Link></div>
            </div>
          </div>
        </div >

        {/* tab 3 */}

         <div className={styles.professionalRecruiting3}>
          <div className={styles.pic}>
            <img className={styles.img} src="/assets/media/home/find-job.png" alt="Find a job" />
          </div>
          <div className={styles.sideText}>
            <h3 className={styles.h3}>Find Your Dream Job</h3>
            <p className={styles.p}>Praesent elementum posuere consequat. Nulla ac rutrum nunc. Morbi varius, nisi nec facilisis finibus, felis velit semper magna, non rhoncus eros eros nec risus. In vel nisi quis magna viverra blandit in quis felis. Nam nisl erat, auctor ut hendrerit in, mollis et ipsum. Nulla sit amet neque eleifend, dictum magna ac, accumsan diam. Ut consequat efficitur aliquet.</p>
            <div className={styles.btnSide}>
            <div  className={styles.btn}><Link href="/employers"><a href="#">request staff</a></Link></div>
            <div  className={styles.btn}><Link href="/about"><a href="#">give us a call</a></Link></div>
            </div>
          </div>
        </div >
      </section >
    </>
  )
}

export default S1
