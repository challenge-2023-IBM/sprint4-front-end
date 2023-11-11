import axios from "axios"
import { useState } from "react"

export function ZipCodeSearch() {
    const [cepValue, setCepValue] = useState('')
    const [cepData, setCepData] = useState()

    const handleInputChange = (event) => {
        setCepValue(event.target.value)
    }
    const handleSubmit = async (event) => {
        event.preventDefault()
        console.log(cepValue)
        const { data } = await axios.get(`https://viacep.com.br/ws/${cepValue}/json/`)
        setCepData(data)
    }

    return (
        <section className="zip-code" id="zip-code">
            <form onSubmit={(event) => handleSubmit(event)}>
                <h3>Busque seu cep</h3>
                <div className="input-item">
                    <label htmlFor="cep">Cep</label>
                    <input type="text" name="cep" id="cep" value={cepValue} onChange={(event) => handleInputChange(event)} />
                    <button type="submit">Buscar</button>
                </div>
            </form>

            {cepData && (
                <div>
                    <h3>Informações do seu cep</h3>
                    <ul>
                        <li>{cepData.logradouro}</li>
                        <li>{cepData.cep}</li>
                        <li>{cepData.localidade}</li>
                    </ul>
                </div>
            )}
        </section>
    )
}