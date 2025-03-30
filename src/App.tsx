import { FC, useContext, useEffect, useState } from "react";
import BodyGeneralContent from "./components/style/body-general-content";
import {
  GlobalContext,
  GlobalContextProvider,
} from "./contexts/global-context";
import Router from "./router";
import FlexEndBox from "./components/style/flex-end-box";
import { IconButton } from "@mui/material";
import Icons from "./components/style/icons/icons";
import FlexBetBox from "./components/style/flex-bet-box";
import ipInfo from "./utils/ip-info";

function App() {
  return (
    <GlobalContextProvider>
      <Main />
    </GlobalContextProvider>
  );
}

const Main: FC = () => {
  const context = useContext(GlobalContext);
  const [location, setLocation] = useState("");

  useEffect(() => {
    ipInfo(setLocation);
  }, []);

  return (
    <BodyGeneralContent
      style={{
        backgroundColor: context?.colors.background,
        color: context?.colors.text,
      }}
    >
      <div
        style={{
          width: "100%",
          height: "25px",
        }}
      >
        <FlexBetBox style={{ width: "100%" }}>
          {" "}
          <p style={{ padding: "0 0.2rem 0 0.5rem" }}>{location}</p>
          <FlexEndBox>
            <IconButton onClick={() => context?.changeTheme()}>
              {context?.theme === "light" ? (
                <Icons.NightsStayIcon
                  sx={{ fontSize: "1.2rem", color: context?.colors.text }}
                />
              ) : (
                <Icons.LightModeIcon
                  sx={{ fontSize: "1.2rem", color: context?.colors.text }}
                />
              )}
            </IconButton>
          </FlexEndBox>
        </FlexBetBox>
      </div>
      <Router />
    </BodyGeneralContent>
  );
};

export default App;
