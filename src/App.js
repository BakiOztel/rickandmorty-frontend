import { Route, Routes } from "react-router-dom"
import Layout from "./component/layout/layout.js";
import Main from "./pages/main.js";
import CharacterPage from "./pages/character.js";
import CharacterDetailPage from "./pages/characterDetail.js";
import FavPage from "./pages/fav.js";
import LocationPage from "./pages/location.js";
import EpisodeDetail from "./pages/episodeDetail.js";
import LocationDetail from "./pages/locationDetail.js";
function App() {


  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Main />} />
        <Route path="/episode/:id" element={<EpisodeDetail />} />
        <Route path="/character" element={<CharacterPage />} />
        <Route path="/character/:id" element={<CharacterDetailPage />} />
        <Route path="/favorite/" element={<FavPage />} />
        <Route path="/location" element={<LocationPage />} />
        <Route path="/location/:id" element={<LocationDetail />} />
      </Route>
    </Routes>

  );
}

export default App;
