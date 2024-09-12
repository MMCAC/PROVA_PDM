import { StyleSheet, StatusBar} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
    padding: 0,
    background: 'linear-gradient(180deg, #AA0000, #000)',
    alignItems: 'center',
    backgroundColor: '#AA0000',
    paddingTop: 70,
    width: '100%',
    height: '100%',
  },
  header: {
    width: '100%',
    height: "30%",
    backgroundColor: 'white',
  },
  superior: {
    width: '90%',
    paddingBottom: 40,
  },
  icons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Cor preta com opacidade 50%
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
    
  },
  text: {
    fontSize: 44,
    color: 'white',
    fontWeight: "800"
  },
  cadastro: {
    marginVertical: 88,
  },

  button: {
    backgroundColor: 'white',
    paddingVertical: 30,
    paddingHorizontal: 50,
    borderRadius: 50,
  },
  cadastroButton: {
    fontWeight: "800",
    alignSelf: 'center',
    fontSize: 25
  },

  bottom: {
    width: '99%',
    height: 200,
    backgroundColor: '#eee',
    borderRadius: 15,
    flexDirection: 'collumn',
    justifyContent: 'center',
    paddingTop: 10,
  },
    photos: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 40,
    paddingTop: 20
  },
  imagem: {
    borderRadius: 100,
    height: 100,
    width: 100,
    // marginVertical: 20,
    // marginHorizontal: 20
  }, 

}
)