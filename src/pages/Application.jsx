import mobileimg from '../assets/bg-images/mobile-.png'
import setacell from '../assets/icons/setacell.png'

function Application() {

return (
    <>
        <section className="app" id="Application">
            <div className="app-text-container d-flex justify-content-center align-items-center">
                <div className="app-text">
                    <h2>Aplicativo</h2>
                    <p>A aplicação conta com um aplicativo que mostra, em tempo real, a qualidade do ar de acordo com os testes realizados  pelo arduino  e o  número de reportes que aquela área recebeu. Ademais, conta com recomendações sobre permanência e conduta nas áreas analisadas.</p>
                    <p>Toda camada de cadastro, login e visualização  será feita no aplicativo.</p>
                </div>
            </div>
            <div className="app-img-container">
                <div className="cell">
                    <img src={mobileimg} alt="celular"/>
                </div>
                <div className="mobile-arrow">
                    <img src={setacell} alt="seta de rotação do celular"/>
                </div>
            </div>
        </section>
    </>
)
}
export default Application
