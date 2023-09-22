import React from "react";
import {styled} from "styled-components";

const StyleItem = styled.div`
  background: skyblue;
  display: flex;
  width: 100vw;
  height: 10vh;
  margin-top: 5vh;
`;
const TodoItem = ({img, title}) => {
    return(
            <StyleItem>
              {title}
              <img src={img} alt="이미지"/>
            </StyleItem>      
    )
}

export default TodoItem;