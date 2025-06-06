import { Par } from './styles'

export type Props = {
  children: string
  tipo?: 'principal' | 'secundario'
  fontSize?: number
}

const Paragrafo = ({ children, tipo = 'principal', fontSize }: Props) => (
  <Par fontSize={fontSize} tipo={tipo}>
    {children}
  </Par>
)

export default Paragrafo
