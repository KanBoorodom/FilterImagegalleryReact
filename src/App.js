import React,{useState,useEffect} from 'react'
import Input from './Components/Input'
import GalleryName from './Components/GalleryName'
import TypeContainer from './Components/TypeContainer'
import Imagesgallery from './Components/Imagesgallery'
import ImageShow from './Components/ImageShow'
import {imagesdata} from './Components/imagesdata'
import {imageInform} from './Components/images'
import './App.css';

import { faSearch } from '@fortawesome/free-solid-svg-icons'

function App() {
  /* Gallery Name */
  const [galname,setGalName] = useState("Kan's filter image gallery")

  /* Type  */
  const [newTypes,setNewTypes] = useState(imagesdata)
  const [inputType,setInputType] = useState('')

  /* Search */
  const [search,setSearch] = useState('')
  const [magnify, setMagnify] = useState(false)
  const searchHandle = ()=>{
    setMagnify(!magnify)
    setNewTypes(newTypes.map(type => {
        type.type === 'all' ? type.select = true :type.select  = false
        return type
    }))
  }

  /* Image */
  const [images,setImages] = useState(imageInform)
  
  useEffect(()=>{
    const filterShowImage = () => {
      /* Search */
      const searchFilter = []
      imagesdata.forEach(image => {
        if(image.type.match(search.toLowerCase()) !== null && search !== ''){
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
        <GalleryName galname = {galname} setGalName = {setGalName}/>
        <TypeContainer 
          types = {newTypes} setTypes = {setNewTypes} 
          inputType = {inputType} setInputType = {setInputType}
          magnify = {magnify} setMagnify = {setMagnify}    
        />
        <p>
          {!magnify ? 'Click at magnify to activate search.'
            :'Close search for select type.'}
        </p>
        <Input 
                inputValue = {search} setInputValue = {setSearch} 
                inputActive = {magnify}
                placeHolderValue = {'Enter image type'}
                iconType = {faSearch}
                click = {searchHandle}
        />
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
