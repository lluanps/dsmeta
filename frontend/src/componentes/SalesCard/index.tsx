import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import NotificationButton from '../NotificationButton'
import './styles.css'

function SalesCard() {
    return (
        <>
            <div className="vendas-card">
                <h2 className="vendas-titulo">Vendas</h2>
                <div className="input-container">
                    <div >
                        <DatePicker
                            selected={new Date()}
                            onChange={(date: Date) => { }}
                            className="dsmeta-form-control"
                            dateFormat="dd/MM/yyyy"
                        />
                    </div>
                    <div>
                        <DatePicker
                            selected={new Date()}
                            onChange={(date: Date) => { }}
                            className="dsmeta-form-control"
                            dateFormat="dd/MM/yyyy"
                        />
                    </div>
                </div>

                <div>
                    <table className="vendas-table">
                        <thead>
                            <th className="responsivo-992">Id</th>
                            <th className="responsivo-576">Data</th>
                            <th>Vendedor</th>
                            <th>Visitas</th>
                            <th className="responsivo-992">Vendas</th>
                            <th className="responsivo-992">Total</th>
                            <th>Notificar</th>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="responsivo-992">#341</td>
                                <td className="responsivo-576">14/11/2022</td>
                                <td className="responsivo-992">15</td>
                                <td className="responsivo-992">11</td>
                                <td>Luan</td>
                                <td>R$ 55300.00</td>
                                <td>
                                    <div className="vendas-botao-container">
                                        <NotificationButton />
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td className="responsivo-992">#341</td>
                                <td className="responsivo-576">14/11/2022</td>
                                <td className="responsivo-992">15</td>
                                <td className="responsivo-992">11</td>
                                <td>Luan</td>
                                <td>R$ 55300.00</td>
                                <td>
                                    <div className="vendas-botao-container">
                                        <NotificationButton />
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td className="responsivo-992">#341</td>
                                <td className="responsivo-576">14/11/2022</td>
                                <td className="responsivo-992">15</td>
                                <td className="responsivo-992">11</td>
                                <td>Luan</td>
                                <td>R$ 55300.00</td>
                                <td>
                                    <div className="vendas-botao-container">
                                        <NotificationButton />
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

            </div>
        </>
    )
}

export default SalesCard
