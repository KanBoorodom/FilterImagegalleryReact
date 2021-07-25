import React,{useState,useEffect} from 'react'
import Header from './Components/Header'
/* import Addtype from './Components/Addtype' */
import Imagesgallery from './Components/Imagesgallery'
import ImageShow from './Components/ImageShow'
import {imagesdata} from './Components/imagesdata'
import {imageInform} from './Components/images'
import './App.css';

function App() {
/*   const [types,setTypes] = useState(imagesdata) */
  const [newTypes,setNewTypes] = useState(imagesdata)
  const [images,setImages] = useState(imageInform)
  const [search,setSearch] = useState('')
  const [magnify, setMagnify] = useState(false)
  
  useEffect(()=>{
    const filterShowImage = () => {
      /* Search */
      const searchFilter = []
      imagesdata.forEach(image => {
        if(image.type.match(search) !== null && search !== ''){
          searchFilter.push(image.type)
        }
      })
      /* Show image that match selected image type */
      const filter = []
      newTypes.forEach(type => {
        if(type.select){
          filter.push(type.type)
        }
      })
      if(filter.includes('all')){
        setImages(imageInform)
      }
      else{
        setImages(imageInform.filter(image => filter.includes(image.type)))
      }
      if(magnify){
        if(searchFilter.includes('all') || search === ''){
          setImages(imageInform)
        }
        else{
          setImages(imageInform.filter(image => searchFilter.includes(image.type)))    
        }
      }
    } 

    const typeHandle = ()=>{
      let fCount = 0
      /* Hilight selected image type */
      newTypes.forEach(type =>{
        !type.select && (fCount = fCount+1)
      })
      if(fCount === newTypes.length){
        setNewTypes(newTypes.map(type => {
          if(type.type === 'all'){
            type.select = true
          }
          return type
        }))
      }
    }
      typeHandle()
      filterShowImage()
    },
    [newTypes,search,magnify]
  )
  
  return (
    <div className="App">
        <Header 
            types = {newTypes} setTypes = {setNewTypes} 
            search = {search} setSearch = {setSearch} 
            magnify = {magnify} setMagnify = {setMagnify}    
        />
        {/* <Addtype />   */}
        <Imagesgallery images = {images} setImages = {setImages}/>
        {
          images.map(image => {
            if(image.show){
              return <ImageShow image ={image} images= {images} setImages = {setImages} key = {image.id}/>
            }
            return null
          })
        }
    </div>
  );
}

export default App;
