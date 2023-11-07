import { styled } from 'styled-components';

export const BgGray = styled.div`
    padding: 30px 60px 60px;
    background-color: var(--color-bg-gray);
`

export const InfoBox = styled.div`
    max-width: 1320px;
    margin: 0 auto;
    display:flex;
`

export const InfoLeftBox = styled.div`
    width: 280px;
`
export const InfoImg = styled.img`
    width: 100%;
    height: 400px;
`
export const GraphSection = styled.section`
    margin-top: 27px;
`
export const GrayText = styled.p`
    margin-bottom:${(props) => props.margin};
    font-size: 12px;
    color: #8c8c8c; 
`
export const Average = styled.em`
    font-size: 18px;
    color: #333;
`

export const InfoRightBox = styled.div`
    flex: 1 0 0;
    padding-left: 32px;
`
export const GridSection = styled.section`
    width: 100%;
    display: grid;
    align-items: center;
    grid-template-columns: auto auto auto;
    column-gap: 8%;
    padding-bottom: 10px;
    border-bottom: 1px solid rgb(217, 217, 217);
`

export const ScoreDiv = styled.div`
    text-align: center;
    display: flex;
`

export const ScoreText = styled.strong`
    font-size: 36px;
    line-height: 42px;
`
export const Btn = styled.button`
    width: 80px;
    height: 90px;
    background: none;
    border: none;
`

export const DescSection = styled.section`
    width: 100%;
    margin-top: 25px;
    font-size: 14px;
    line-height: 22px;
    color:var(--color-light-gray);
`
export const CommentDiv = styled.div`
    padding: 20px 0;
    border-bottom: 1px solid rgb(217, 217, 217);
`
export const WriteDiv = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`
export const moreDiv = styled.div`
    position: absolute;
    right: 0;
    top: calc(100% + 10px);
    width: 176px;
    background-color: #fff;
`