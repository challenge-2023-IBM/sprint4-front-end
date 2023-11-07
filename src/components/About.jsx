import aboutimg from '../assets/bg-images/about-hand-up.png'

function About() {

return (
    <>
        <section className="about" id='About'>
            <div className="cloud">
                <div className="img-about d-flex justify-content-center">
                    <img src={aboutimg} alt="imagem de mão levantada"/>
                </div>
                <div className="text-about d-flex flex-column justify-content-center align-items-center">
                    <h2 className="text-start">Quem somos nós?</h2>
                    <p className="text-center">Nós somos a Fresh Air, uma empresa biotecnológica que esta sendo planejada com o intuito de visar a sustentabilidade através da aplicabilidade do arduino em um aplicativo, no qual informará a qualidade do ar baseado na quantidade de gases poluentes analisada pelos sensores, propagando conhecimento para a população acerca deste tema.</p>
                </div>
            </div>
        </section>
    </>
)
}
export default About
