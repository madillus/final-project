import { useGet } from "restful-react";
import Head from 'next/head'

const Images = () => {
  const { data: images, loading } = useGet({
    path: "/images",
  });

  const displayImages = () => {
    return images.map(image =>
      <div class="col-lg-3 col-md-4 col-6">
        <a key={image.cloudinaryId}  href={image.url} target="_blank" class="d-block mb-4 h-100">
          <img class="img-fluid img-thumbnail" src={image.url} alt="" />
        </a>
      </div>
      )
  }

  if (loading) {
    return 'Loading..'
  }

  return (
    <>
      <Head text="Images"/>
      <div className="row text-center text-lg-left">
        {
          images ? displayImages() : 'No Images :('
        }
      </div>
    </>
  )
}

export default Images;