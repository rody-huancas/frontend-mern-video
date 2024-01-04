import { BrowserRouter, Route, Routes } from "react-router-dom"
import { ToastContainer } from "react-toastify"
import { VideoList } from "./components/videos/VideoList"
import { VideoForm } from "./components/videos/VideoForm"
import { Layout } from "./components/layout/Layout"
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout/>}>
            <Route index element={<VideoList />} />
            <Route path="/new-video" element={<VideoForm />} />
            <Route path="/update/:id" element={<VideoForm />} />
          </Route>
        </Routes>
      </BrowserRouter>

      {/* alertas */}
      <ToastContainer />
    </>
  )
}

export default App;