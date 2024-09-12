import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000',
    paddingTop: 70,
  },
  superior: {
    width: '90%',
    paddingBottom: 10,
  },
    icons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  perfil:{
    backgroundColor: '',
    width: '90%',
    alignItems: 'center',
    background: 'linear-gradient(180deg, #AA0000, #000)',
    borderRadius: 5,
    paddingVertical: 30
  },
  imagem: {
    borderRadius: 100,
    height: 100,
    width: 100,
  }, 
  nome: {
    color: "white",
    fontWeight: 700,
    marginTop: 10
  },
  fotos: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
    height: 100,
    backgroundColor: 'black',
    borderRadius: 15,
    marginVertical: 20,
    borderWidth: 2,
    borderColor: 'black',
    marginBottom: 40
  },
  imagem2: {
    borderRadius: 100,
    height: 120,
    width: 120,
    borderWidth: 1,
    borderColor: 'white',
    marginBottom: 10,
  }, 
  infoCard: {
    backgroundColor: '#eee',
    borderRadius: 50,
    paddingHorizontal: 40,
    alignItems: 'center',
    marginBottom: 10
  },
  tituloDados: {
    fontWeight: "600",
    fontSize: 30,
    paddingVertical: 30
  },
  infoText: {
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  insideInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: "95%"
  },
  info: {
    backgroundColor: 'white',
    borderRadius: 20,
    marginBottom: 20,
    width: 130,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  infoName: {
    backgroundColor: 'white',
    borderRadius: 20,
    marginBottom: 20,
    width: 300,
  },
  inputD: {
    height: 50,
    width: "100%",
    paddingHorizontal: 10,
    alignContent: 'center',
    textAlign: 'center'
  }

})