import arduino from '../assets/arduino/arduino.png'
import MQ135 from '../assets/arduino/mq-135.png'
import NEO6M from '../assets/arduino/neom6.png'
import ESP01 from '../assets/arduino/esp01.png'
import DHT11 from '../assets/arduino/dht11.png.png'

function Arduino() {

return (
    <>
        <section className="arduino" id="Arduino">
            <div className="title-arduino d-flex justify-content-center align-items-center">
                <h2 className="text-center ">ARDUINO</h2>
            </div>
            <div className="arduino-container">
                <div className="arduino-uno d-flex justify-content-evenly align-items-center">
                    <p>O Arduino UNO é a peça principal do projeto, responsavel por conectar todos os componentes.</p>
                    <img src={arduino} alt="arduino UNO"/>
                </div>
                <div className="sensor-mq d-flex justify-content-evenly align-items-center">
                    <p>O sensor MQ-135 é responsável por medir a quantidade de gases poluentes presentes no ar.</p>
                    <img src={MQ135} alt="sensor mq-135"/>
                </div>
                <div className="sensor-neo d-flex justify-content-evenly align-items-center">
                    <p>O sensor NEO 6M é responsável por informar a sua localização obtida a partir de diversos satélites.</p>
                    <img src={NEO6M} alt="sensor NEO M6"/>
                </div>
                <div className="sensor-esp d-flex justify-content-evenly align-items-center">
                    <p>O sensor ESP-01 é responsável por conectar o Arduino internet e, assim, enviar os dados para um banco de dados. </p>
                    <img src={ESP01} alt="sensor ESP-01"/>
                </div>
                <div className="sensor-dht d-flex justify-content-evenly align-items-center">
                    <p>O sensor DHT-11 é responsável por medir a temperatura e umidade do ar.</p>
                    <img src={DHT11} alt="sensor DHT11"/>
                </div>
            </div>
        </section>
    </>
)
}
export default Arduino
