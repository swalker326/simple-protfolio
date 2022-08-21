import { Parallax, Background } from "react-parallax";
import reactLogo from "./assets/react.svg";
import techImage from "./assets/workstation.avif";
import { Box, Typography } from "@mui/material";
import { DefaultLayout } from "./layouts";


function App() {
  return (
    <DefaultLayout>
      <Parallax
        bgImage={techImage}
        renderLayer={(percentage) => (
          <div
            style={{
              position: "absolute",
              background: `rgba(255, 125, 0, ${percentage * 1})`,
              left: "0",
              top: "0",
              width: percentage * 800,
              height: percentage * 270
            }}
          />
          
        )}
      >
        <Box sx={{ height: "120rem" }}>
          <Typography typography={"h1"}>Shane G Walker</Typography>
        </Box>
      </Parallax>
    </DefaultLayout>
  );
}

export default App;
