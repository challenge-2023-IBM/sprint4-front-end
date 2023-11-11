import impacticon1 from '../assets/icons/impacts-icon2.png'
import impacticon2 from '../assets/icons/impacts-icon2.png'

function Impacts() {

    return (
        <>
            <section className="impacts" id="Impacts">
                <h2 className="impact-first-title d-flex justify-content-center">Impactos na Humanidade</h2>
                <div className="impact-first d-flex align-items-center justify-content-center">
                    <div className="icon-impact-first d-flex justify-content-center align-items-center">
                        <img src={impacticon1} alt="ícone fumaça" />
                    </div>
                    <p className="text-impact-first">O gás CO é liberado pela queima de combustíveis fósseis. Esse gás interage e se liga às hemácias do sangue com mais afinidade do que o oxigênio, impedindo a ligação desse importante componente com as hemácias, gerando prejuízo a saúde ou até mesmo a morte por intoxicação.
                        Por ser um gás de efeito estufa, sua alta concentração contribuí para o aquecimento global. </p>
                </div>
                <h2 className="impact-second-title d-flex justify-content-center">Como a solução mitiga isso</h2>
                <div className="impact-second d-flex align-items-center justify-content-center">
                    <p className="text-impact-second">Com a implementação da nossa aplicação, a população terá acesso rápido e prático as informações sobre a qualidade do ar em uma determinada área. Assim, evitariam tais locais devido ao excesso de gases prejudiciais à saude.</p>
                    <div className="icon-impact-second d-flex justify-content-center align-items-center">
                        <img src={impacticon2} alt="ícone ideia" />
                    </div>
                </div>
            </section>
        </>
    )
}
export default Impacts
