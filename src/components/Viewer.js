import '../App.css'
const Viewer = ({imageSelected}) => {
  
    return <>
    
    <img 
    className='viewer-image'
    src={imageSelected.image} alt=''/>
       
        </>
}

export default Viewer;