import {
  View, // Para agrupar elementos (= div)
  Text, // Para exibir textos (= p, h1...)
  TouchableOpacity, // Para botões clicáveis (= button)
  ScrollView, // Para a área principal com scroll,
  StyleSheet // Para aplicar estilo na página
 } from 'react-native'; // Impor                     ta os componentes View e Text
 
export default function Index() {
 return (
    <ScrollView>
        { /*=========== TOPO (HEADER) =============*/}
        { /*=========== Área de cabeçalho com logo e menu =============*/}
        <View style={styles.topo}>

        { /* Logo do sistema */}
          <Text style={styles.logo}>TechEduca</Text>

          { /* Menu de Navegação */}
          <View style={styles.menu}>
            <Text style={[styles.menuItem, styles.ativo]}> Início </Text> { /*=========== Item Ativo =============*/}
            <Text style={styles.menuItem}> Sobre </Text>
            <Text style={styles.menuItem}> Contato </Text>

          
            { /* Botão de Login */}
          <TouchableOpacity style={styles.btnLogin}>
            <Text style={styles.textoBotao}>Login</Text>
          </TouchableOpacity>

          </View>

        </View>

        { /*=========== HERO =============*/}
        { /* Seção principal (banner incial) */}
        <View style={styles.hero}>
          <View style={styles.heroContent}>
        { /* Título Principal */}
          <Text style={styles.heroTitulo}> Formação em Tecnologia para o mercado real</Text>
          
          { /* Descrição */}
          <Text style={styles.descricao}>
            Aprenda desenvolvimento web, lógica e banco de dados
          </Text>

          { /* Aviso sobre Login */}
          <Text style={styles.avisoLogin}>
            Para visualizar os cursos, é necessário fazer login
          </Text>

          { /* Botão principal */}
          <TouchableOpacity style= {styles.btnPrimario}>
            <Text>Fazer Login</Text>
          </TouchableOpacity>

          { /* Botão secundário */}
          <TouchableOpacity style= {styles.btnSecundario}>
            <Text>Fale Conosco</Text>
          </TouchableOpacity>

          </View>
        </View>

        { /*=========== DESTAQUES =============*/}
        { /* Seção com benefícios da plataforma*/}
        <View style={styles.destaques}>
          <View style={styles.container}>
          
          { /* Título da Seção */}
          <Text style ={styles.tituloDestaque}>Por que estudar na TechEduca?</Text>

          <View style={styles.cards}>
          
          { /* Lista dos Cards*/}

          { /* CARD 1 */}
          <View style = {styles.card}>
            <Text style = {styles.cardTitulo}>Projetos Reais</Text> { /* Título */}
            <Text style = {styles.cardDescricao}> { /* Descrição */}
              Você desenvolve sites com base em situações profissionais
            </Text>
          </View>

          { /* CARD 2 */}
          <View style = {styles.card}>
            <Text style = {styles.cardTitulo}>Materiais Didáticos</Text>
            <Text style = {styles.cardDescricao}>
              Conteúdos e exercícios práticos
            </Text>
          </View>

          { /* CARD 3 */}
          <View style = {styles.card}>
            <Text style = {styles.cardTitulo}>Suporte do Instrutor</Text>
            <Text style = {styles.cardDescricao}>
              Acompanhamento durante todo processo
            </Text>
          </View> 

  '       </View>
          </View>
        </View>

        { /*=========== RODAPÉ =============*/}
        { /* Parte final da página */}
        <View style={styles.rodape}>
          { /* Texto de direitos de autorais */}
          <Text style={styles.textoRodape}> 2026 TechEduca. Todos os direitos reservados.</Text>

          { /* Links de Contato */}
          <Text style={styles.linkRodape}>Entre em contato</Text>
        </View>

    </ScrollView>
 );
}

const styles = StyleSheet.create(
  {
    topo: {
      backgroundColor: '#1a4db3',
      padding:20,
      alignItems: 'center',
      gap: 10,
    },

    logo: {
      color:'#ffffff',
      fontSize:24,
      fontWeight: 'bold',
    },

    menu: {
      marginTop: 10,
      alignItems: 'center',
      gap: 8,
    },

    menuItem: {
      color: '#ffffff',
      fontWeight: 'bold',
    },

    ativo: {
      color: '#ff6a00',
    },

    btnLogin: {
      backgroundColor: '#ff6a00',
      color: '#ffffff',
      paddingHorizontal: 20,
      paddingVertical: 10,
      borderRadius:8,
      marginTop: 10,
    },

    hero: {
      backgroundColor: '#ffffff',
      textAlign: 'center',
      padding: 30,
    },

    heroContent: {
      alignItems: 'center'
    },

    heroTitulo: {
      fontSize: 28,
      color: '#1a4db3',
      fontWeight: 'bold',
      textAlign: 'center',
      marginBottom: 10,
    },

    avisoLogin: {
      fontSize: 16,
      color: '#222',
      textAlign: 'center',
      marginTop: 10,
      marginBottom:20
    },

    btnPrimario: {
      backgroundColor: '#ff6a00',
      color: '#ffffff',
      paddingHorizontal:10,
      paddingVertical: 20,
      borderRadius: 8,
      textDecorationLine: 'none',
      marginTop: 10
    },

    btnSecundario: {
      backgroundColor: '#ffffff',
      color: '#1a4db3',
      paddingHorizontal:10,
      paddingVertical: 20,
      borderRadius: 8,
      borderColor: '#1a4db3',
      borderWidth: 2,
      textDecorationLine: 'none',
      marginTop: 10,
    } ,

    textoBotao : {
      color: '#ffffff',
      fontWeight: 'bold',
      textAlign: 'center',
    },

    descricao : {
      color: '#222',
      fontSize: 28,
      textAlign: 'center',
      lineHeight: 25,
      marginBottom: 10,
    },

    destaques: {
      padding: 20,
    },

    container: {
      padding: 20,
    },

    cards:{
      marginTop: 20,
    },

    card : {
      backgroundColor: '#ffffff',
      padding: 20,
      borderRadius: 8,
      marginBottom: 10,
      elevation: 3,
      boxShadow: '#222'
    },

    cardTitulo: {
      color: '#1a4db3',
      fontSize: 18,
      fontWeight: 'bold',
      textAlign: 'center',
      marginBottom: 8,
    },

    cardDescricao: {
      color: '#222',
      fontSize: 15,
      textAlign: 'center',
      lineHeight: 22,
    },

    rodape: {
      backgroundColor: '#1a4db3',
      padding: 20,
      alignItems: 'center',
    },

    textoRodape: {
      color : '#ffffff',
      textAlign: 'center', 
      marginBottom: 8,
    },

    linkRodape: {
      color: '#ff6a00',
      fontWeight: 'bold',
      textDecorationLine: 'none'
    },

    tituloDestaque : {
      color: '#1a4db3',
      fontSize: 24,
      fontWeight: 'bold',
      textAlign: 'center',
      marginBottom: 20
    }

  }
)