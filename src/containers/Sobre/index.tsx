import Title from '../../components/Title'
import Paragrafo from '../../components/Paragrafo'
import { GithubSecao } from './styles'

const Sobre = () => (
  <section>
    <Title fontSize={16}>Sobre mim</Title>
    <Paragrafo tipo="principal">
      Sou um desenvolvedor em transição de carreira, movido por curiosidade e
      vontade de aprender de verdade. Sempre busco entender o “porquê” das
      soluções e não apenas seguir fórmulas prontas. Tenho uma base sólida em
      desenvolvimento web e foco em lógica de programação, além de gostar de
      criar projetos práticos, funcionais e com propósito. Acredito que
      tecnologia vai além do código: é sobre resolver problemas reais e evoluir
      a cada desafio. Estou pronto para contribuir com equipes que valorizam
      aprendizado, transparência e entrega de valor.
    </Paragrafo>
    <GithubSecao>
      <img src="https://github-readme-stats.vercel.app/api?username=MateusPiresLino&show_icons=true&theme=radical" />
      <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=MateusPiresLino&layout=compact&langs_count=7&theme=radical" />
    </GithubSecao>
  </section>
)

export default Sobre
