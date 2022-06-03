import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList } from 'react-native';


export default function App() {
  return (
    <View style={styles.container}>
      <Text> Rede Social - Encontros do Senac</Text>
      <Text> Você tem um projeto Integrador?</Text>
      <Text> Quer envolver novas áreas?</Text>
      <Text> Então...Vamos encontrar os alunos aqui? ;)</Text>
      <FlatList
      data={pessoas}
      renderItem={({item})=>
    <View>
     <Text>{item.nome}</Text>
     <Text>{item.curso}</Text>
     <Text>{item.periodo}</Text>
     <Text>{item.turma}</Text>
     <Text>{item.gosto}</Text>
     <Text>{item.bio}</Text>

    </View>

    }
    />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const pessoas = [
  {
    uid:159,
    nome:'Mucilon Mazzucato',
    curso: 'Técncico de informática',
    periodo:'Manhã',
    turma: 'TI10',
    gosto:'Hardware, Front-end, Redes,PHP',
    bio:'Gosto de tocar guitarra, tenho preguiça de trocar idéia com garotas, e fumar paiero',
    img:'./assets/123Projeto.jpg'
  },
  {
    uid:420,
    nome:'Caio elias',
    curso:'Tecnico de informatica',
    periodo:'Manhã',
    turma:'TI10m',
    gosto:'Hardware,Banco de dados,C#',
    bio:'garoto de programa junior',
    img:'./assetes/',
  },
  {
    uid:158,
    nome:'homem aranha',
    curso:'escalada',
    periodo:'manhã',
    turma:'ti19',
    gosto:'subir parede',
    bio:'dormir acordar trabalhar banho e comer e dps tudo de novo',
    img:'./assets/',
  },
  {
    uid:150,
    Nome:'Adriano Silva',
    Curso:'Técnico de Informática',
    Periodo: 'Manhã',
    Turma:'TI10',
    Gosto:'Programação',
    Bios: 'Engajando na empresa da Microsolft',
    img: './assets/'
  },
  {
    uid:157,
    nome:'Galvez',
    curso:'Tecnico de informatica',
    periodo:'Manhã',
    turma:'TI10m',
    gosto:'C#',
    bio:'Narguileiro',
    img:'./assets/',
  }, 
  ];