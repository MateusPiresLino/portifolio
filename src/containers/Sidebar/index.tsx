import Avatar from '../../components/Avatar'
import Paragrafo from '../../components/Paragrafo'
import Title from '../../components/Title'

import { Descricao, BotaoTema, SidebarContainer } from './styles'

// isso é o components para criação do aside no html
const Sidebar = () => (
  <aside>
    <SidebarContainer>
      <Avatar></Avatar>
      <Title fontSize={20}>Mateus Lino</Title>
      <Paragrafo tipo="secundario" fontSize={16}>
        Omateuslino
      </Paragrafo>
      <Descricao tipo="principal" fontSize={12}>
        Engenheiro Front-end
      </Descricao>
      <BotaoTema>Trocar tema</BotaoTema>
    </SidebarContainer>
  </aside>
)

export default Sidebar
