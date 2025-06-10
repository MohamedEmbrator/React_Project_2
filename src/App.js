import {
  createTheme,
  ThemeProvider,
  CssBaseline,
  Stack,
  Divider,
  Box
} from "@mui/material";
import Header from "components/header.jsx";
import { useMemo, useState } from "react";
import getDesignTokens from "./styles/MyTheme.jsx";

import MyList from "./components/List.jsx";
import Posts from "components/Posts.jsx";
import RightBar from "components/RightBar.jsx";
import AddPost from "components/AddPost.jsx";

function App() {
  const [mode, setmyMOde] = useState(
    localStorage.getItem("currentMode") === null
      ? "dark"
      : localStorage.getItem("currentMode") === "light"
      ? "light"
      : "dark"
  );
  const theme = useMemo(() => createTheme(getDesignTokens(mode)), [mode]);
  const [showList, setshowList] = useState("none");
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box className={theme.palette.mode}>
        <Header showList={showList} setshowList={setshowList} />

        <Stack
          divider={<Divider orientation="vertical" flexItem />}
          sx={{ flexDirection: "row" }}
        >
          <MyList {...{ setmyMOde, theme, showList, setshowList }} />
          <Posts />

          <RightBar theme={theme} />
        </Stack>

        <AddPost />
      </Box>
    </ThemeProvider>
  );
}

export default App;
