import { BrowserRouter, Route, Routes } from "react-router-dom"
import { VideoList } from "./components/videos/VideoList"
import { VideoForm } from "./components/videos/VideoForm"
import { Layout } from "./components/layout/Layout"

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<VideoList />} />
          <Route path="/new-video" element={<VideoForm />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App