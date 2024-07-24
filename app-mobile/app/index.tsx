
import Pergunta from "@/components/questionario/Pergunta";
import Resultado from "@/components/questionario/Resultado";
import Logo from "@/components/template/Logo";
import Pagina from "@/components/template/Pagina";
import useQuestionario from "@/data/hooks/useQuestionario";
import { View } from "react-native";

export default function Index() {

  const {pergunta, concluido, pontuacao, totalDePerguntas, responder, reiniciar} = useQuestionario()

  return (
    <Pagina>
      <View style={{ gap: 40 }}>
        <Logo/>
        {concluido ? (
          <Resultado 
            pontuacao={pontuacao} 
            totalDePerguntas={totalDePerguntas} 
            reiniciar={reiniciar}
          />
        ) : (
          <Pergunta pergunta={pergunta} opcaoSelecionada={responder}/>
        )}
      </View>
    </Pagina>
    
  );
}
