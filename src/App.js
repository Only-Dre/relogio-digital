import React, {useState, useEffect} from 'react';

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
  <div>
    <h2>Relógio Digital</h2>
    {/* Mostra o Relógio no formato local ex: '21:05:55' */}
    {/* LocaleTimeString e a variável de estado "hora" atualiza localmente o horário e faz a contagem por 1000 milisegundos */}
    <p>A hora atual é: {hora.toLocaleTimeString()}</p>
  </div>
  );
}
export default Relogio;