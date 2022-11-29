import { BrowserRouter, Routes, Route} from "react-router-dom";
import CandidatesList from "./scripts/components/CandidatesLists";
import CandidateSingle from "./scripts/components/CandidateSingle";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' exact element={<CandidatesList/>}/>
        <Route path='/:id' exact element={<CandidateSingle/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App;