import { BrowserRouter, Routes, Route } from "react-router-dom";
import {Box} from "@mui/material"
import NavBar from "./components/NavBar";
const App = () => {
  return (
    <BrowserRouter>
    <Box sx={{backgroundColor:"#000"}}>
        <NavBar />
        <Routes>
            <Route path="/" exact element={<Feed />}  />
            <Route path="/video/:id" element={<VideoDetail />}  />
            <Route path="/video/:id"  element={<ChannelDetail />}  />
            <Route path="/video/:id" element={<SearchFeed />}  />
        </Routes>
    </Box>
    </BrowserRouter>
  )
}

export default App