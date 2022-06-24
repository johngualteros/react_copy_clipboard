import "./App.css";
import { useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { Toaster, toast } from "react-hot-toast";
import {
  LightTheme,
  Button,
  ChildrenLightTheme,
  ContainerCodeLightTheme,
  ColorBlue,
  Code,
  Tab,
  ColorRed,
  ColorPurple,
  ColorOrange,
  ColorGray,
  ChildrenDarkTheme,
  ContainerCodeDarkTheme,
  DarkTheme,
} from "./styles/styles";
import Themes from "./styles/styles";
import { ThemeProvider } from "styled-components";
function App() {
  const [copy, setCopy] = useState('def main():\n  print("Hello World!")');

  return (
    <ThemeProvider theme={Themes["light"]}>
      <LightTheme>
        <ChildrenLightTheme>
          {/* Copy ClipBoard */}
          <CopyToClipboard text={copy}>
            <Button onClick={() => toast("Texto Copiado")}>Copy</Button>
          </CopyToClipboard>
          <ContainerCodeLightTheme>
            <Code>
              <pre>
                <ColorBlue>def</ColorBlue> <ColorRed>main()</ColorRed>
                <ColorGray>:</ColorGray>
                <br />
                <Tab>
                  <ColorPurple>print</ColorPurple>
                  <ColorGray>(</ColorGray>
                  <ColorOrange>"Hello World"</ColorOrange>
                  <ColorGray>)</ColorGray>
                </Tab>
              </pre>
            </Code>
          </ContainerCodeLightTheme>
        </ChildrenLightTheme>
        <Toaster />
      </LightTheme>
    </ThemeProvider>
  );
}

export default App;
