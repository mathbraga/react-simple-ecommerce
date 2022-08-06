import styled from "styled-components";

const PageTitle = styled.div`
    font-weight: ${props => props.weight ? props.weight : '400'};
    font-size: ${props => props.size ? props.size : '2.625rem'};

    margin-bottom: ${props => props.bottomSpace ? props.bottomSpace : '100px'};
`;

export default PageTitle;
