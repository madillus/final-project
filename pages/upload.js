import styled from 'styled-components';
import {useState} from 'react';
import {useMutate} from 'restful-react';
import Axios from 'axios';

const StyInput = styled.input`
margin-bottom: 2rem;
`

const StyButton = styled.button`
margin-bottom: 2rem;
`

const Upload = () => {
  const [selectedImage, setSelectedImage] = useState();
  const [images, setImages] = useState([]);
  // const { mutate: uploadImage, loading, error} = useMutate ({
  //   verb: 'post',
  //   path: 'image-upload'

  // });

  const handleChange = (e) => {
    setSelectedImage(e.target.files[0]);
  }

  const handleImageUpload = () => {
    if (!selectedImage) {
      return;
    }
    const formData = new FormData();
    formData.append('image', selectedImage);

        Axios.post

    uploadImage(formData)
      .then(uploadedImage => {
        setImages([...images, uploadedImage]);
      })
      .catch(_ => {
        console.log('Error')
      })
  }

return (
  <>


  <input
  onChange={handleChange}
  accept='.jpg, .png, .jpeg'
  className='fileInput'
  type='file'>
  </input>
  <div>
<button
onClick={handleImageUpload}
disabled={!selectedImage}
className='button'
>Upload

</button>
<div>
  {images.map(image =>
    <div>
      <a key={image.cloudinaryId} href={image.url} target='_blank'>
      <img src={image.url} alt='' />
      </a>
    </div>)}
</div>

  </div>
  </>

)

}

export default Upload;