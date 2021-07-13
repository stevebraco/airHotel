import React from "react";
import styled from "styled-components";
import { BsStarFill, BsStarHalf, BsStar } from "react-icons/bs";
const Stars = ({ stars, reviews }) => {


  return (
    <Wrapper>
      <div className="stars">
        {/* Stars */}
        <span>
          {stars >= 1 ? (
            <BsStarFill />
          ) : stars >= 0.5 ? (
            <BsStarHalf />
          ) : (
            <BsStar />
          )}
        </span>
        {/* End Stars */}
        {/* Stars */}
        <span>
          {stars >= 2 ? (
            <BsStarFill />
          ) : stars >= 1.5 ? (
            <BsStarHalf />
          ) : (
            <BsStar />
          )}
        </span>
        {/* End Stars */}
        {/* Stars */}
        <span>
          {stars >= 3 ? (
            <BsStarFill />
          ) : stars >= 2.5 ? (
            <BsStarHalf />
          ) : (
            <BsStar />
          )}
        </span>
        {/* End Stars */}
        {/* Stars */}
        <span>
          {stars >= 4 ? (
            <BsStarFill />
          ) : stars >= 3.5 ? (
            <BsStarHalf />
          ) : (
            <BsStar />
          )}
        </span>
        {/* End Stars */}
        {/* Stars */}
        <span>
          {stars === 5 ? (
            <BsStarFill />
          ) : stars >= 4.5 ? (
            <BsStarHalf />
          ) : ( 
            <BsStar />
          )}
        </span>
        {/* End Stars */}
      </div>
      <p className="reviews">({reviews} customer reviews)</p>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  span {
    color: #ffb900;
    font-size: 1rem;
    margin-right: 0.25rem;
  }
  p {
    margin-left: 0.5rem;
    margin-bottom: 0;
  }
  margin-bottom: 0.5rem;
`;
export default Stars;


// Stars array method
  // Create an empty array with five items
  // don't care the first parameter
  // const tempStars = Array.from({ length: 5 }, (_, index) => {
  //   console.log(index); // 0 1 2 3 4
  //   const number = index + 0.5
  //   return(
  //     <span>
  //       {stars >= index + 1 ? (
  //         <BsStarFill />
  //       ) : stars >= number ? (
  //         <BsStarHalf />
  //       ) : (
  //         <BsStar />
  //       )}
  //     </span>
  //   )
  // })
  // console.log(tempStars); // (5) [undefined, undefined, undefined, undefined, undefined]
