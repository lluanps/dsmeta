import axios from "axios";
import { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Sale } from "../../models/sale";
import { BASE_URL } from "../../utils/request";
import NotificationButton from '../NotificationButton';
import './styles.css';

function SalesCard() {

    const min = new Date(new Date().setDate(new Date().getDate() - 365));
    const max = new Date();

    const [minDate, setMinDate] = useState(min);
    const [maxDate, setMaxDate] = useState(max);

    const [sales, setSales] = useState<Sale[]>([]);

    useEffect(() => {
        axios.get(`${BASE_URL}/sales`)
            .then(response => {
                setSales(response.data.content);
            })
    }, []);


    return (
        <>
            <div className="vendas-card">
                <h2 className="vendas-titulo">Vendas</h2>
                <div className="input-container">
                    <div >
                        <DatePicker
                            selected={minDate}
                            onChange={(date: Date) => setMinDate(date)}
                            className="dsmeta-form-control"
                            dateFormat="dd/MM/yyyy"
                        />
                    </div>
                    <div>
                        <DatePicker
                            selected={maxDate}
                            onChange={(date: Date) => setMaxDate(date)}
                            className="dsmeta-form-control"
                            dateFormat="dd/MM/yyyy"
                        />
                    </div>
                </div>

                <div>
                    <table className="vendas-table">
                        <thead>
                            <tr>
                                <th className="responsivo-992">Id</th>
                                <th className="responsivo-576">Data</th>
                                <th>Vendedor</th>
                                <th>Visitas</th>
                                <th className="responsivo-992">Vendas</th>
                                <th className="responsivo-992">Total</th>
                                <th>Notificar</th>
                            </tr>
                        </thead>
                        <tbody>
                            {sales.map(sale => {
                                return (
                                    <tr key={sale.id}>
                                        <td className="responsivo-992">{sale.id}</td>
                                        <td className="responsivo-576">{new Date(sale.date).toLocaleDateString()}</td>
                                        <td>{sale.sellerName}</td>
                                        <td className="responsivo-992">{sale.visited}</td>
                                        <td className="responsivo-992">{sale.deals}</td>
                                        <td>{sale.amount.toFixed(2)}</td>
                                        <td>
                                            <div className="vendas-botao-container">
                                                <NotificationButton />
                                            </div>
                                        </td>
                                    </tr>
                                )
                            })}

                        </tbody>
                    </table>
                </div>

            </div>
        </>
    )
}

export default SalesCard
