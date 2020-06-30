import styled from 'styled-components';

export const ResultsPanelContainer = styled.div`
  width: 100%;
  max-width: 900px;
  height: 600px;
  background-color: ${({ theme: { background } }) => background.secondary};
  display: flex;
  flex-direction: row;
  border-top: 4px solid darkgray;

  @media (max-width: 600px) {
    flex-direction: column-reverse;
  }
`;

export const OverviewUsers = styled.div`
  width: 50%;
  height: 100%;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    display: none;
  }

  @media (max-width: 600px) {
    width: 100%;
    height: 350px
  }
`;

export const ChartPanel = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: ${({ isBar }) => isBar ? 'space-evenly' : 'center'};
  align-items: center;
  position: relative;

  @media (max-width: 600px) {
    justify-content: ${({ isBar }) => isBar ? 'space-evenly' : 'flex-end'};
  }

  .recharts-bar-background-rectangle {
    fill: ${({ theme: { background } }) => background.terciary};
  }

  .recharts-legend-item-text {
    color: grey;
  }

  div:nth-child(2) {
    display: ${({ isBar }) => isBar ? 'flex' : 'none'};
  }

  div:nth-child(3) {
    display: ${({ isBar }) => isBar ? 'none' : 'flex'};
    width: 400px;
    height: 325px;

    @media (max-width: 600px) {
      width: 300px !important;
      height: 300px !important;
    }
  }

  @media (max-width: 600px) {
    width: 100%;
    height: 250px
  }
`;

export const SelectChart = styled.div`
  @media (max-width: 600px) {
    position: ${({ isBar }) => isBar ? null : 'absolute'};
    top: ${({ isBar }) => isBar ? null : '20px'};
    z-index: 999;
  }
  span {
    height: 20px;
    width: auto;
    padding: 10px;
    background-color: white;
    border-radius: 5px;
    font-weight: bold;
    cursor: pointer;
  }

  span:nth-child(1) {
    background-color: ${({ theme: { background }, isBar }) => isBar ? background.terciary : background.secondary};
    color: #8884d8;
    margin-right: 15px;
  }

  span:nth-child(2) {
    background-color: ${({ theme: { background }, isBar }) => isBar ? background.secondary : background.terciary};
    color: #af5c69;
  }
`;