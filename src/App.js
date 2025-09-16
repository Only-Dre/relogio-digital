import React, {useState, useEffect} from 'react';
import './Relogio.css';

function Relogio(){
  // Criando um estado 'Hora' que será inicializado com função Date()

  const [hora, setHora] = useState(new Date());
  
  // useEffect executa sem dependências, vazio
  useEffect(() => {
    // Inicia o Relógio
    const idIntervalo = setInterval(() =>{
    // A função a ser executada e o intervalo de tempo
    console.log("Atualizando o relógio...");
    setHora(new Date());
  }, 1000);

  // Prevenção de vazamento de memória
  // Executa quando o componente for desmontado
  return () => {
    clearInterval(idIntervalo);
    console.log("Relógi desmontado, intervalo limpo");
  }

  }, []); // Vazio

  return(
  <div className="relogio-container">
  <h2>Relógio Digital</h2>
  <p>A hora atual é: {hora.toLocaleTimeString()}</p>
</div>
  );
}
export default Relogio;