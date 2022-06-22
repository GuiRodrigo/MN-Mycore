import { Link } from "react-router-dom";

export function PaymentGatewayBranch() {
    return (
        <ul>
            <li> <Link className="noDropdown" to="#">Gerencianet</Link> </li>
            <li> <Link className="noDropdown" to="#">Wide Pay</Link> </li>
            <li> <Link className="noDropdown" to="#">Galaxpay</Link> </li>
            <li> <Link className="noDropdown" to="#">F2B</Link> </li>
            <li> <Link className="noDropdown" to="#">Boleto Fácil</Link> </li>
            <li> <Link className="noDropdown" to="#">Pulsar Pay</Link> </li>
            <li> <Link className="noDropdown" to="#">Pag Seguro</Link> </li>
            <li> <Link className="noDropdown" to="#">Cielo</Link> </li>
        </ul>
    )
}