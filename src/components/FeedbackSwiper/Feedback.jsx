import React from 'react'
import styled from "styled-components";

import StarIcon from '@mui/icons-material/Star';
import StarHalfIcon from '@mui/icons-material/StarHalf';

import { tablet } from "../../responsive";

const ElementWrapper = styled.div`
  display: flex;
  width: 70%;
  ${tablet({ flexDirection: "column" })}
  height: 407px;
  padding: 30px 0;
`
const ColLeft = styled.div`
  display: flex;
  flex: 1 1 50%;
  justify-content: flex-start;
  align-items: center;
  gap: 27px;
  ${tablet({ justifyContent: "center" })}

  & img{
    width: 248px;
    ${tablet({ width: "30%" })}
    object-fit: contain;
  }
`

const InfoAvatar = styled.div`
  display: flex;
  flex-direction: column;
  text-align: start;

  & h2{
    font-family: var(--body-font-barlow);
    font-size: 24px;
    font-weight: 900;
    color: var(--white);
  }

  & h3{
    font-family: var(--body-font-gilroy-medium);
    font-size: 16px;
    color: var(--white);
  }
`

const ColRigth = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1 1 50%;
  justify-content: center;
  align-items: flex-start;

  & p{
    font-size: 18px;
    color: white;
    text-align: justify;
    font-family: var(--body-font-gilroy-regular);
  }
`

const FeedbackStart = styled.div`
`

function Feedback(props) {

  const { urlImages, nameCarrier, feedbackInfo, companyName } = props;

  return (
    <ElementWrapper>
      <ColLeft>
        <img src={urlImages} alt="" />
        <InfoAvatar>
          <h2>{nameCarrier}</h2>
          <h3>{companyName}</h3>
        </InfoAvatar>
      </ColLeft>
      <ColRigth>
        <FeedbackStart>
          <StarIcon sx={{ color: "#FF7700", fontSize: 35 }} />
          <StarIcon sx={{ color: "#FF7700", fontSize: 35 }} />
          <StarIcon sx={{ color: "#FF7700", fontSize: 35 }} />
          <StarIcon sx={{ color: "#FF7700", fontSize: 35 }} />
          <StarHalfIcon sx={{ color: "#FF7700", fontSize: 35 }} />
        </FeedbackStart>
        <p>
          {feedbackInfo}
        </p>
      </ColRigth>
    </ElementWrapper>
  )
}

export default Feedback