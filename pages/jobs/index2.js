import React,{useState,useEffect} from 'react'
import HeaderJobs from '../../components/HeaderJobs/HeaderJobs'
import ListJobs from '../../components/ListJobs/ListJobs'
import { countJobs, getAllJobs, getAllJobsPerPage } from '../../services/jobs/jobsServices'
import { getAllCategories } from '../../services/category/categoryServices'

import styles from '../jobs/jobs.module.css'
import TuneIcon from '@material-ui/icons/Tune'
import RoomIcon from '@material-ui/icons/Room'
import { useRouter } from 'next/router'
import { getAllStates, getStates } from '../../services/states/statesServices'




export default function listOfJobs() {
  const router = useRouter()

  const [jobs,setJobs] = useState([])
  const [jobsPorFiltrar,setJobsPorFiltrar] = useState([])
  
  const [jobsFiltrados,setJobsFiltrados] = useState([])

  const [CantjobsFiltrados,setCantJobsFiltrados] = useState(0)
  const [isFilter,setIsFilter] = useState(false)
  
  
  
  const [numJobs, setNumJobs] =useState(0)
  const [category, setCategory] = useState([])
  const [categoryId, setCategoryId] = useState(0)
  const [estados, setEstados] = useState([])
  const [estado, setEstado] = useState([])
  const [estadoId, setEstadoId] = useState(0)
  const [loading, setLoading] =useState(false)
  const [page,setPage] = useState(1)
  const lastPage = Math.ceil(numJobs / 3)


  useEffect(()=>{
    setLoading(true)
    setIsFilter(false)
    getAllJobsPerPage(page).then(newJobs=>{
      const data = newJobs 
      setJobs(data)
      setLoading(false)
    })

    setLoading(true)
    countJobs().then(num=>{
      setNumJobs(num)
      setLoading(false)
    })


    setLoading(true)
    const resultados = getStates().then(newEstados=>{
      setEstados(newEstados)
      setLoading(false)
       setLoading(true)})

      getAllCategories().then(newCategory=>{     
        const data = newCategory 
        setCategory(data)
        setLoading(false)
      })
  
  },[page])

  useEffect(()=>{
  console.log('categoria',categoryId,'estado',estadoId)
  // console.log('Cambió estado',estadoId)
  if(categoryId== 0 && estadoId == 0 ){
  console.log('no hay seleccion')
  return null
  }

  if(categoryId !==0 && estadoId.length !==0 ){
    //console.log('Seleccionado los dos', categoryId, estadoId)
    return null
    }

    if(categoryId !==0 && estadoId.length ==0 ){
      //console.log('Seleccionado Category')
      return null
      }

      if(categoryId ==0 && estadoId.length !==0 ){
        console.log('Seleccionado Estado',estadoId)
        getAllJobs().then((jobs)=>{
          const filtroEdoAndCat = jobs.filter((job)=>{
            if(job.state){
             return job.state.id==estadoId && job.category.id == categoryId
            }
           setJobs(filtroEdoAndCat) 
          })
        })
        return null
        }
    
  

  

  },[categoryId,estadoId])


  

const previusPage= ()=>{
  let actual = page
  actual = actual-1
  if(actual<=0){
    setPage(0)
  }else{
   setPage(actual)
   
  }
  router.push(`/jobs?page=${actual}`)
}

const nextPage=()=>{
  let actual = page
  actual = actual+1
  if(actual>=lastPage){setPage(lastPage)}else{
    setPage(actual)  
  }
  console.log(page,lastPage,numJobs)
  router.push(`/jobs?page=${actual}`)
}

function cargarJobs(){
  setLoading(true)
  setIsFilter(false)
  getAllJobsPerPage(page).then(newJobs=>{
    const data = newJobs 
    setJobs(data)
    setLoading(false)
  })

  setLoading(true)
  countJobs().then(num=>{
    setNumJobs(num)
    setLoading(false)
  })

}

const filtrarCategory= (e)=>{
  if(e=='Select Category'){
  return cargarJobs()
  }
  setCategoryId(e)
  getAllJobs().then(jobs=>{
    //console.log(e,jobs,'desde el principio')
     const filtrados = jobs.filter(job=>job.category.id==categoryId)   
     setJobs(filtrados)  

    setCantJobsFiltrados(filtrados.length)
    setIsFilter(true)
    })
    
  //  console.log(jobs)
}


const filtrarStates = (e)=>{
    if(e=='Select State'){
    return cargarJobs()
    }
    setEstadoId(e)
    getAllJobs().then(
      jobs=>{
      let filtrados = jobs.filter(job=>{
      if(job.state !== null)
      { 
        return job.state.id==estadoId}
      })
      console.log(filtrados,jobs)
      setJobs(filtrados)  
      setCantJobsFiltrados(filtrados.length)
      setIsFilter(filtrados)
      return jobs
      })
}



  return (
    <>
    <HeaderJobs/>
  <div className={styles.principal}>
    <div  className={styles.filtro}>
      <p className={styles.filterTitle}>Filter by</p>
      {isFilter && (<p>Record:{CantjobsFiltrados}</p>)}
          <div>
             <select className={styles.filtro} value={category.name} onChange={e => setCategoryId(e.target.value)}>
               <option value={0} key={0}>Select Category</option>
              {
              category.map(opcion=>(
                <option 
                key={opcion.id} 
                value={opcion.id}
                >{opcion.name}
                </option>
              ))}
             </select>
            </div>
            <br/>
            <div>
             <select className={styles.filtro}  onChange={e => setEstadoId(e.target.value)}>
             <option value={0} key={0}>Select State</option>
             {estados.map(opcion=>(
                <option 
                key={opcion.id} 
                value={opcion.id}
                >{opcion.name}
                </option>
              ))}
             </select>
            </div>
           </div>
            <div className={styles.filterOption}>
            </div>
            <div className={styles.settings}>
                <i className={styles.fas}><TuneIcon/></i>
            </div>
        </div>
      <div className={styles.listado}>
        <ul>
          {(!jobs && setJobs([]))}
       { jobs.map(job=>(
<section className={styles.jobSearch} key={job.id}>
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
      </section>))}
        </ul>
      </div>
      {!isFilter && (<div>
      <button onClick={previusPage}
        disabled={page <= 1} className={styles.previous}>previous</button>
      <button onClick={nextPage}
        disabled={page>=lastPage} className={styles.next}>next</button>
      </div>) } 
      
  </>
  )
}
