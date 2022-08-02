import React, { useState } from 'react'
import styled from 'styled-components'
// if the image is undefined, that is just going to be an empty array
// we will need too to update the default value url
const ProductImages = ({images = [{url: ''}]}) => {
  // I would want to display the first image and then as i'm clicking, i'll change that state index
  // And i'm changing that index, the value in the main one will also change
  const [main, setMain] = useState(images[0])
  console.log(main);
  console.log(images);
  return <Wrapper>
    <img src={main.url} alt="main image" className='main' />
    <div className="gallery">
      {images.map((image, index) => {
        return <img key={index} src={image.url} alt={image.filename} onClick={() => setMain(images[index])} className={`${image.url === main.url ? 'active' : null}`} />
      })}
    </div>
  </Wrapper>
}

const Wrapper = styled.section`
  .main {
    height: 600px;
  }
  img {
    width: 100%;
    display: block;
    border-radius: var(--radius);
    object-fit: cover;
  }
  .gallery {
    margin-top: 1rem;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    column-gap: 1rem;
    img {
      height: 100px;
      cursor: pointer;
    }
  }
  .active {
    box-shadow: 0px 0px 0px 2px var(--clr-primary-5);
  }
  @media (max-width: 576px) {
    .main {
      height: 300px;
    }
    .gallery {
      img {
        height: 50px;
      }
    }
  }
  @media (min-width: 992px) {
    .main {
      height: 500px;
    }
    .gallery {
      img {
        height: 75px;
      }
    }
  }
`

export default ProductImages
