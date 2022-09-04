import styled from "styled-components";


export const CardContainer = styled.div`
  display: flex;
  gap: 32px;
  margin-top: 54px;

`
export const Card = styled.div`
  max-width: 262px;

  min-height:310px;

  display: flex;
  flex-direction: column;
  align-items: center;  
  justify-content: space-between;

  background: ${(props) => props.theme['base-card']};

  position: relative;
  border-radius: 6px 36px;

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    margin-top: 12px;
  }

  img {
    position: absolute;
    top: -20px;
    width: 120px;
    height: 120px;
  }

  h2 {
    font-family: "Baloo 2";
    font-weight: 700;
    font-size: 20px;
    color: ${(props) => props.theme['base-subtitle']};
  }


footer {
  display: flex;
  align-items: center;

  div {
    display: flex;
    flex-direction: row;
    background: ${(props) => props.theme['base-button']};

    svg {
      color: ${(props) => props.theme['purple']}
    }
  }
}
`

export const Title = styled.p`
    text-transform: uppercase;
    padding: 4px 8px;
    border-radius: 100px;
    background: ${(props) => props.theme['yellow-light']};
    color:  ${(props) => props.theme['yellow-dark']};
    font-weight: 700;
    line-height: 13px;
    font-size: 11px;
    margin-top: 12px;
`

export const Description = styled.p`
  color: ${(props) => props.theme['base-label']};
  font-size: 16px;
  line-height: 18.2px;
  margin-top: 8px;
`

