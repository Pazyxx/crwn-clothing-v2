import styled from "styled-components";

export const CategoryTitle = styled.h2`
    display: flex;
    justify-content: center;
    font-size: 38px;
`

export const CategoryContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    column-gap: 10px;
    row-gap: 50px;
    @media (max-width: 750px){
        grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    }
}
`


