import arduinoicon from '../assets/icons/arduino-icon.png'
import datebaseicon from '../assets/icons/database-icon.png'
import androidicon from '../assets/icons/android.png'


function Solution() {

return (
    <>
        <section className="solution" id="Solution">
            <h2>Solução</h2>
            <div className="itens-solution-container">
                <div className="item-solution-arduino d-flex justify-content-center align-items-center flex-column">
                    <div className="icon">
                        <img src={arduinoicon} alt="ícone arduino"/>
                    </div>
                    <p>O circuito com arduino para medir a qualidade do ar</p>
                </div>
                <div className="item-solution-text-send d-flex justify-content-center align-items-center flex-column">
                    <p>Envio das leituras para o banco de dados</p>
                    <div className="arrow d-flex"><i className="pointer arrow-right"></i></div>
                </div>
                <div className="item-solution-database d-flex justify-content-center align-items-center flex-column">
                    <div className="icon">
                        <img src={datebaseicon} alt="ícone banco de dados"/>
                    </div>
                </div>
                <div className="item-solution-send-database d-flex justify-content-center align-items-center flex-column">
                    <p>Envio e recebimento de informações para o banco de dados</p>
                    <div className="d-flex arrow">
                        <i className="pointer arrow-left"></i>
                        <i className="pointer arrow-right"></i>
                    </div>
                </div>
                <div className="item-solution-android d-flex justify-content-center align-items-center flex-column">
                    <div className="icon">
                        <img src={androidicon} alt="ícone banco de dados"/>
                    </div>
                    <p>Um aplicativo para mostrar ao usuário os resultados e recomendações</p>
                </div>
            </div>
        </section>
    </>
)
}
export default Solution
