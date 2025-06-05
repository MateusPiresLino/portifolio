import { Par } from './styles'

export type Props = {
  children: string
  tipo?: 'principal' | 'secundario'
}

const Paragrafo = ({ children, tipo = 'principal' }: Props) => (
  <Par tipo={tipo}>{children}</Par>
)

export default Paragrafo
