
import getConfig from 'next/config'
import { useRouter } from 'next/router'
import BgVideo from '../../components/BgVideo/BgVideo'
import styles from '../jobs/jobs.module.css'
import RoomIcon from '@material-ui/icons/Room'
import AddIcon from '@material-ui/icons/Add'
import TuneIcon from '@material-ui/icons/Tune'




export default function JobsPage({ jobs, page, numJobs }) {
  const router = useRouter()

  const lastPage = Math.ceil(numJobs / 3)

  return (
    <>
    <BgVideo />
    <div className={styles.principal}>
      <div className={styles.ultimos}>
            <div><p className={styles.pp}>Latest jobs added</p></div>
            <div><p className={styles.p}>27 jobs available</p></div>
        </div> 

    
    <div className={styles.filtro}>
    <div>
            <p className={styles.filterTitle}>Filter by</p>
            <div className={styles.filterOption}>
                <div><p className={styles.p}>City</p></div>
            <div><i className={styles.fas}><AddIcon/></i></div>
            </div>
            <div className={styles.filterOption}>
                <div><p className={styles.p}>State</p></div>
                <div><i className={styles.fas}><AddIcon/></i></div>
            </div>
            <div className={styles.filterOption}>
                <div><p className={styles.p}>Category</p></div>
                <div><i className={styles.fas}><AddIcon/></i></div>
            </div>
            <div className={styles.filterOption}>
                <div><p className={styles.p}>Type</p></div>
                <div><i className={styles.fas}><AddIcon/></i></div>
            </div>
            <div className={styles.settings}>
                <i className={styles.fas}><TuneIcon/></i>
            </div>
        </div>
    </div>
    <div >
      
    </div>
    <div className={styles.listado}>
    < ul >
      {
jobs.map(job=>(
<section className={styles.jobSearch}>
        <div className={styles.jobs}>
          <div className={styles.jobList}>
        <div className={styles.jobPosition}>
          <img className={styles.img} src="/assets/media/home/paper-look.svg" alt="paper icon" />
          <div className={styles.jobTitle}>
            <h3 className={styles.h3}>{job.position}</h3>
            <p className={styles.p}>${job.min_salary} - ${job.max_salary}, full relocation</p>
          </div>
        </div >
        <div className={styles.location}>
      
        <i className={styles.fas}><RoomIcon /></i>
          <p className={styles.p}>{job.City}, {job.state && job.state.name}</p>
        </div>
        <div className={styles.timePosition}>
          <p className={styles.p}>{job.schedule.name}</p>
        </div>
      </div>
      <div/>
          
       </div>
      </section>

))} 
      </ul >
      <button onClick={() => router.push(`/jobs?page=${page - 1}`)}
        disabled={page <= 1}
      >previous</button>
      <button onClick={() => router.push(`/jobs?page=${page + 1}`)}
        disabled={page >= lastPage}
      >next</button>
 

    </div>
    

    </div>
    </>
  )
}


const { publicRuntimeConfig } = getConfig()

//console.log('publica', publicRuntimeConfig.API_URL)

export async function getServerSideProps({ query: { page = 1 } }) {

  console.log('Desde ', page)
  const start = +page === 1 ? 0 : (+page - 1) * 3

  const resJobs = await fetch(`${publicRuntimeConfig.API_URL}/posts/count`)
  const numJobs = await resJobs.json()
  // console.log(numJobs, 'desde await')


  const res = await fetch(`${publicRuntimeConfig.API_URL}/posts?_limit=3&_start=${start}`)
  const data = await res.json()

  return {
    props: {
      jobs: data,
      page: +page,
      numJobs: numJobs

    }
  }
}
