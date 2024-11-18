// DayContent.js
import React from 'react';
import "./PlaylistItemDay1.css"
import rutinaImage from "../../../../images/rutinaGym.png"
const PlaylistItemDay1 = ({ title, subtitle, dayNumber, content }) => {
  return (
    <div className="day-content">
      <h1 className="day-title">Día {dayNumber}/90</h1>
      <h1 className="day-title">{title}</h1>
      <h5 className="day-subtitle"><a href="#">{subtitle}</a></h5>
      <p className="day-paragraph">
      En este programa te voy a enseñar como crear aquella <strong>PERSONA QUE ADMIRAS Y RESPETAS💪🏼</strong>
      <br/><br/>
      Vamos a tener 3 pilares prioritarios: <strong>HABITOS - NUTRICION/MACROS - ENTRENAMIENTO</strong>
      <br/><br/>
      Ademas de leer cada dia la refleccion y aplicar la sabiduria compartida, aqui hay literal sabiduria millonaria, aqui hay sabiduria mia de mi experiencia, libros y aprendizajes, de mis mentores millonarios como Llados, Jaime Higuera, Agus Nievas, entre otros (estas mentorias me valieron miles de USD, asi que interioriza las reflecciones a tu vida).
      <br/><br/>
      Sigue los dias y cambiaras totalmente tu forma de ver y vivir la vida, <strong>si fallas con alguno de los 3 Pilares (Habitos, Macros, Entrenamiento) vuelves al DIA 1.</strong>
      </p>

<div className="container">
            <nav className="section-nav">
                <h3>Pilares:</h3>
                <ul>
                <li><a href="#habitos">Hábitos</a></li>
                <li><a href="#macros">Macros / Nutrición</a></li>
                <li><a href="#entrenamiento">Entrenamiento</a></li>
                <li><a href="#agradecido">Agradecido</a></li>
                <li><a href="#documenta">Documenta</a></li>
                <li><a href="#razones">Razones Principales de fallar</a></li>
                </ul>
            </nav>
            <div id="habitos" className="section">
                <h2>Hábitos</h2>
                <p>Estos hábitos son <strong>NO NEGOCIABLES</strong> como absolutamente todo lo que te digo. No lo cuestionas, no dices que no hace falta y no le preguntas a ninguno de tus amigos... ¿entendido?</p>
                <ul>
                    <li>Todos los días te levantas a las 5AM.</li>
                    <li>CERO drogas (alcohol, tabaco, cocaína, vaper... ¡nada!).</li>
                    <li>CERO vicios (masturbarse, videojuegos, casino...).</li>
                    <li>CERO fiestas.</li>
                    <li>Bebes 3 litros de agua al día, comenzando el día con 500ml.</li>
                    <li>No comes en restaurantes durante estos 90 días. Sigues tus macros en casa o en tuppers. Aun no sabes trackear macros</li>
                    <li>No descansas ningún día.</li>
                    <li>Al levantarte, directo a entrenar. Gym si está abierto, o mínimo 100 burpees/sentadillas, cuando sea facil vas subiendo.</li>
                    <li>Round 2 de ejercicio cuando te notes cansado o vago, sin importar la hora. Si necesitas 3 o 4 al dia, lo haces!</li>
                    <li>¡Ya no tienes amigos durante estos 90 días! Olvidate de hablar de todo esto con tus amigos plebeyos..no lo van a entender, te van a decir que no es necesario..el que quiera hacerlo contigo le mandas aqui y lo haceis juntos, eso seria brutal! ¡Solo tienes este FOCO, nada mas! espues de estos 90 dias si quieres volver a ver a tus amigos plebeyos vuelves..pero te aseguro que eso sera lo ultimo quieras hacer si de verdad sigues todo al pie de la letra </li>
                    <li>SI FALLAS 1 DIA CUALQUIERA DE ESTOS HABITOS, DEBES REINICIAR los 90Dias y empezar de nuevo en el Dia 1</li>
                </ul>
            </div>

            <div id="macros" className="section">
                <h2>Macros / Nutrición</h2>
                <p>No saber tus macros es como no saber vivir... es lo más importante, es nuestra SALUD. Te preguntaras porque no te enseñan esto en la escuela o nutricionistas? Simple... les conviene, asi es la matrix, te quieren gordo, debil, sin energia, sin confianza y sin capacidad de tomar ninguna decision por tu cuenta.
                <br/><br/>

                    Yo quiero que seas una BESTIA, UN GANADOR QUE SE COME EL MUNDO! 
                    Asi que aquí te enseño cómo calcular tus propios macros y cómo trackearlos/registrarlos.
                    <br/><br/>
                    Yo no te voy a cobrar por esto a diferencia de todos los coaches fitness o nutricionistas ahi afuera... que te cobran por esto, ellos van te piden tus datos y los ponen en una calculadora como esta... no me extraña que se sientan mal.. yo me sentiria mal.
                    <br/><br/>
                    Calcula tus macros aqui, puedes usar cualquier calculadora de macros de google, pero te recomiendo 2, 1 es la app que utilizo y cree yo mismo, otra es una copada de google.  
                    </p>
                <ul>
                    <li ><a href="https://gonzalo12348.github.io/nutri-goal/" target="_blank" rel="noopener noreferrer">Mi App</a></li>
                    <li ><a href="https://www.calculator.net/macro-calculator.html" target="_blank" rel="noopener noreferrer">Calculator.net</a></li>
                </ul>
                <p> 
                Luego trackeas esos macros en la app <a href="https://myfitnesspal.com" target="_blank" rel="noopener noreferrer">Myfitnesspal </a> para iphone o android, es gratis, ahi logeas la comida. 
                <br/><br/>
                <strong>IMPORTANTE:</strong> 
                </p>
                <ul>
                    <li>Si no se te ven los Abdominales, ponete a definir, debes estar sin grasa y luego crecer. No importa que tan flaco/a o feo/a te sientas</li>
                    <li>- Mete toda la comida vas a comer el dia anterior para asegurarte que esta correcto las calorias sobretodo y los macros mas o menos. Te recomiendo comas todos los dias lo mismo!! No lo compliques!! Esta es la mejor manera de hacerlo, te haces 3 comidas y alomejor un snack, que cuadre las calorias y asi de simple!</li>
                    <li>*Recuerda tomate unas fotos, video y registra tu peso de como te ves el Dia 1, cada semana haces lo mismo, el Dia 90 vas a tener una transformacion tan brutal que llamara la atencion de cualquier persona</li>
                </ul>
                <p>Te dejo una <strong>Estructura de Comidas</strong> para que no pases hambre: <br/><br/>
                <strong>5am</strong> - Te levantas y vas al gym, no tienes que desayunar!! Eso te lo dicen para mantenerte gordo y débil mentalmente, SIGUE ESTO PASO A PASO Y TE PONDRAS EN FORMA!! Yo me tomo un cafe o mate o infusion <br/><br/>
                <strong>7am</strong> - Me tomo un cafe para suprimir apetito cuando estoy en casa y ahora me pongo a leer algo positivo de desarrollo personal como Napoleon Hill o Marco Aurelio y reflexiono escribiendo, esto es clave hacerlo antes o despues del gym pero SIEMPRE para GANAR EL DIA.
                    <br/><br/><strong>9-10am</strong> - Hago mi primera comida que es solo grasas y proteina, como por ejemplo 5 huevos, esto me da energia y me mantiene saciado, NO comas carbohidrato la primera comida!
                    <br/><br/><strong>12pm-2pm</strong> Comida 2** la retrasas lo maximo posible!
                    <br/><br/><strong>5-8pm</strong> - Comida 3 - Proteina, carbohidratos y grass (agrega ensalada para saciarte en todas las comidas)<br/><br/>
                    Yo personalmente agrego en la merienda frutas o cualquier snack o merienda que me ayude a cuadrar las macros.
                    <br/><br/><strong>**Constantemente bebe agua, NO TIENES HAMBRE, TIENES SED.</strong><br/><br/>
                    Si sigues este planning al detalle dia tras dias, en 3 meses estas en la mejor forma física de tu vida!! No vas a pasar hambre v nunca miraras hacia atrás!! Ahora tendrás un lifestvle distinto!
                    No necesitas ningun suplemento y mas si vas justo de dinero, si deseas y puedes darte el gusto, consultame y te doy los tips.
                    </p>
                    <div className="video-container">
                    <iframe    src="https://www.youtube.com/embed/45xnyBOczno?si=bJk8TG_q3ebm5kee" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                    </div>
            </div>

            <div id="entrenamiento" className="section">
                <h2>Entrenamiento</h2>
                <p>Solo existe una manera de entrenar: <strong>DURO!!</strong> Cada día!! Sin descansar ningun dia!! Si todos te diran debes descansar, no les escuches!!! Aquí tienes una rutina para seguir:
                <br/><br/>
                Cuando mas entrenes mas progresas! Fijate nuestros antepasados como estaban constantemente en ejercicio, es nuestra biologia asi.
                <br/><br/>
                Yo no escucho a NADIE que no vive la vida que yo quiero vivir! Nosotros no entrenamos para tener musculos enormes, sino para crear un MINDSET INQUEBRANTABLE!
                <br/><br/>
                Entrenamos para elevar nuestra frecuencia emocional, autodisciplina y poder vibrar alto todo el dia!
                <br/><br/>
                Yo no podria operar 1 dia sin entrenar 2 veces!! seria imposible!! Es que lo mas gracioso es que de esta manera es como mejor te sientes y encima como mas progresas fisicamente!
                </p>
                <ul>
                    <li>Round 1 - GYM te dejo la rutina abajo. Puedes entrenar con barras o tu propio peso tambien, pero entrena duro al fallo</li>
                    <li>Round 2 - 100 a 300 Burpees.</li>
                    <li>Puedes hacerlo en el orden que quieras, pero recomiendo gym a las 5am si tienes uno abierto</li>
                </ul>
                <img src={rutinaImage} alt='rutina-gym-img' style={{ width: "100%"}}/>
            </div>

            <div id="agradecido"  className="section">
                <h2>Agradecido</h2>
                <p>Este es tu unico objetivo!! Olvidate del dinero!! Debes sentirte agradecido cada dia!! Para sentirte agradecido debes poner el trabajo!! Si sigues estos pasos vas a sentirte brutal cada dia!
                <br/><br/>
                Si esto te ayuda se agradecido y compartelo con tu gente en tus redes sociales!
                </p>
            </div>

            <div id="documenta" className="section">
                <h2>Documenta</h2>
                <p>DOCUMENTA
                    Es tu obligacion!!! Documenta todo este proceso en tus redes sociales<br/><br/>

                    Vas a inspirar a muchos y ofender a muchos!! Esto es como todos deberian vivir!!<br/><br/>

                    Amandose y respetandose! Y dejame decirte una cosa si documentas todos estos 90 dias veras como el universo te premia, no pidas nada a cambio, inspira a otros a ser mejor, es como yo lo he hecho y mis mentores asi se han hecho millonarios!!

                    <br/><br/>Todo lo demas vendra solo! Quien sabe despues de estos 90 dias que via quieres tomar en la vida, pero te aseguro que si sigues los pasos vas a cambiar tu vida literal, tu manera de pensar, ver la vida y de actuar.</p>
            </div>

            <div id="razones" className="section">
                <h2>Razones Principales por las que la Gente Falla y la Solución</h2>
                <p>Aqui te dejo una lista de las principales razones por las cuales las personas fallan y no logran crear ese hombre/mujer que admiran y respetan.
                <br/><br/>
                <strong>Ten en cuenta que si fallas aqui, fallaras en la vida...si GANAS aqui ganaras en la vida!</strong>
                <br/><br/>
                <strong>- VICIOS:</strong> si tienes un vicio vuelves a caer en el..ya sea una copa de alcohol, un cigarro, una linea de coca, te masturbas.. Okey en cualquier momento que vayas a caer, simple!!! Te tiras al suelo y te revientas 100 burpees o flexiones o sentadillas, si aun lo quieres hacer te haces otros 100 y asi hasta que no quieras! Te aseguro no caes en el VICIO ! Haces esto 90 dias y ya no tienes vicios nunca mas!
                <br/><br/>
                <strong>- ENTORNO:</strong> Tu entorno es la clave de todo! Si tu vivieras 24HRS conmigo serias una bestia, pero eso no es una posibilidad!! Por eso dije lo de no tener contacto con ningun amigo que este perdido en vicios, sin proposito, negativo y tenga mal mindset o habitos y si se te hace dificil esto no dudes en contactarme a cualquier hora papu, de a poco vas atraer personas de un nuevo ENTORNO de bestias que es lo que te hara no fallar y ganar en la vida! 
                De a poco en la mentoria vamos a crear una brutal comunidad y mentorias en vivo todos juntos conmigo!!
                <br/><br/>
                <strong>- FALTA DE DISCIPLINA:</strong> La disciplina proviene del autocontrol, y eso significa que uno debe controlar todas las cualidades negativas. Antes de poder controlar otras condiciones, debe empezar por controlarse a sí mismo. El dominio de uno mismo es la tarea más difícil que se puede abordar. Si vos no sos capaz de cumplirla con éxito, estará a merced de sí. Cuando se mire al espejo, podrá ver al mismo tiempo a su mejor amigo y a su peor enemigo.
                <br/><br/>
                <strong>- FALTA DE PERSISTENCIA:</strong> La mayoría somos buenos para empezar, pero no servimos para terminar todo lo que comenzamos. Además, la gente tiene propensión a abandonar la lucha ante los primeros signos de derrota.  No hay sustituto para la persistencia. La persona que hace de la persistencia su consigna descubre que, finalmente, el fracaso se cansa de perseguirle y se va. El fracaso no triunfa sobre la persistencia.</p>
            </div>
        </div>
    </div>
  );
};

export default PlaylistItemDay1;
