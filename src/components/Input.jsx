
import { TextField,Select, NativeSelect } from "@mui/material";
import { useEffect, useState } from "react";
import ImageResult from "./ImageResult";
  

const Input = () => {
  
 const [text, setText] = useState('');
 const [item, setItems] = useState(10)
 const [images, setImages] = useState([])

const handleChange = (e) => {
     setText(e.target.value);
}
const handleItem = (e) => {
    setItems(e.target.value);
}

useEffect(() => {
    if(text.trim() !== '') {
    let API_KEY = '47237388-04fcc875d6f1db869a8ab7dfb';
    let API_URL =  'https://pixabay.com/api';
    fetch(`${API_URL}/?key=${API_KEY}&q=${text}&image_type=photos&per_page=${item}&safesearch=true`)
    .then((res) =>  res.json())
    .then((data) => {
         setImages(data.hits || []);
    })
   } else {
    setImages([]);
   }
},[text,item])

return (
    <div>
        <TextField variant="standard" name = "text" label = "Search images" value={text} onChange={handleChange} fullWidth ={true} />
        <br /> <br />
        <NativeSelect value={item} fullWidth = {true}
          name = "item"  label = "no of items" onChange={handleItem} >
         <option value={5}>5</option>
         <option value={10}>10</option>
         <option value={20}>20</option>
         <option value={30}>30</option>
         <option value={50}>50</option>
        </NativeSelect>
      <br /> <br /> <br />
       {images.length > 0 ? (<ImageResult images = {images} />) : null}
    </div>
     
    
  )
}
export default Input; 
