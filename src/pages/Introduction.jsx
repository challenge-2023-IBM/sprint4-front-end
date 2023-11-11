import introductionimg from '../assets/bg-images/introduction-img.png'

function Introduction() {

return (
    <>
    <section className="introduction">
            <div className="introduction-container">
                <div className="introduction-text d-flex flex-column align-items-start justify-content-center p-5">
                    <h2 className="text-start">Introdução</h2>
                    <p className="text-start ">Um dos componentes vitais para a vida humana é o gás oxigênio. Elemento presente em 21% da atmosfera e responsável por diversas reações químicas, dentre elas, a respiração aeróbica. No entanto, a constante liberação de gases poluentes dificulta sua utilização.</p>
                </div>
                
                <div className="introduction-img">
                    <img src={introductionimg} alt="imagem de chaminé"/>
                </div>
            </div>
        </section>
    </>
)
}
export default Introduction
