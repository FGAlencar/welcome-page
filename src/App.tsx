import { AvisoInicialPage } from './components/AvisoInicial/AvisoInicialPage'
import Curriculum from './data/Curriculum'
import { RenderCurriculum } from './components/RenderCurriculum'


function App() {
  return  <>
            <AvisoInicialPage mensagem='Em manutenção' enabled/>
            <RenderCurriculum curriculum={Curriculum}/>
          </>
}

export default App
