import styled from "styled-components";
// Light Theme
export const LightTheme = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #12141cff;
  display: flex;
  flex-direction: column;
`;
export const ChildrenLightTheme = styled.div`
  width: 70%;
  height: 100vh;
  background-color: #f5f5f5;
  padding: 60px;
`;
export const ContainerCodeLightTheme = styled.div`
  width: 100%;
  background-color: #e1e1e1;
`;
// DarkTheme
export const DarkTheme = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #12141cff;
  display: flex;
  flex-direction: column;
`;
export const ChildrenDarkTheme = styled.div`
  width: 70%;
  height: 100vh;
  background-color: #f5f5f5;
  padding: 60px;
`;
export const ContainerCodeDarkTheme = styled.div`
  width: 100%;
  background-color: #e1e1e1;
`;
export const Tab = styled.span`
  margin-left: 3%;
`;
export const Code = styled.code`
  font-size: 18px;
`;
export const ColorBlue = styled.span`
  color: #00bcd4;
  font-weight: bold;
`;
export const ColorRed = styled.span`
  color: #ff6060;
  font-weight: bold;
`;
export const ColorPurple = styled.span`
  color: #ad60ff;
  font-weight: bold;
`;
export const ColorOrange = styled.span`
  color: #ffd860;
  font-weight: bold;
`;
export const ColorGray = styled.span`
  color: #9e9e9e;
  font-weight: bold;
`;
export const Button = styled.button`
  padding: 10px 20px;
  background-color: #ff2d20ff;
  border-radius: 5px;
  border: none;
  color: #fff;
  font-size: 18px;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  &:hover {
    color: #222;
    transition: all 0.3s ease-in-out;
  }
`;

const Themes = {
  light: {
    LightTheme,
    ChildrenLightTheme,
    ContainerCodeLightTheme,
  },
  dark: {
    DarkTheme,
    ChildrenDarkTheme,
    ContainerCodeDarkTheme,
  },
};

export default Themes;
