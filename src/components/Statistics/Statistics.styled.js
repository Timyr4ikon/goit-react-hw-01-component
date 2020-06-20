import styled from "styled-components";

export const StatSect = styled.section`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: #fff;
    width: auto;
    margin: 0 auto;
`;

export const StatTitle = styled.h2`
    margin: 25px 0;
    text-align: center;
    color: #666666;
`;

export const StatsList = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    justify-content: space-between;
`;

export const StatsItem = styled.li`
    width: 50px;
    padding: 15px;
`;

export const StatsItemLabel = styled.span`
    font-size: 14px;
    color: white;
    display: block;
    text-align: center;
    margin-bottom: 5px;
`;

export const StatsItemPercent = styled.span`
    font-size: 18px;
    color: white;
    font-weight: bold;
    display: block;
    text-align: center;
`;