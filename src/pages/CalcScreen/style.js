import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#AA0000',
    paddingTop: 30
  },
  initial: {
    backgroundColor: '#AA0000',
    background: 'linear-gradient(180deg, #AA0000, #000)',
    width: '100%',
    height: '',
    flex: 1,
    alignItems: 'center',
    paddingTop: 40,
  },
  superior: {
    width: '90%',
    paddingBottom: 40,
  },
  icons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  options: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 10,
    
  },
  optionsButton: {
    padding: 10,
    backgroundColor: 'white',
    borderRadius: 20,
    marginHorizontal: 10,
    width: 100,
    alignItems: 'center',
    marginBottom: 30,
  },
  header: {
    paddingVertical: 10,
    paddingHorizontal: 30,
    alignItems: 'center',
  },
  title: {
    color: '#fff',
    fontSize: 30,
    fontWeight: "700",
    marginBottom: 10,
    textAlign: 'center',
  },
  information: {
    color: '#fff',
    textAlign: 'center',
  },
  body: {
    width: '98%',
    borderRadius: 50,
    background: 'linear-gradient(180deg, #000, #AA0000)',
    paddingVertical: 10,
    paddingHorizontal: 20,
    flexDirection: 'column',
    padding: 30,
  },
  main: {
    paddingHorizontal: 30,
    alignItems: 'center',
    flexDirection: 'column',
  },
  graph: {
    marginVertical: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 60,
    paddingHorizontal: 20,
    borderWidth: 10,
    borderColor: '#fff',
    borderRadius: 100,
    background: 'linear-gradient(180deg, #000, #AA0000)',
  },
  input: {
    width: 50,
    color: '#fff',
    textAlign: 'center',
    margin: 10,
    fontSize: 20,
    fontWeight: "600",
    borderBottomColor: '#fff',
    borderBottomWidth: 2,
    outline: 'none',
  },
  barra: {
    fontSize: 50,
    color: '#fff',
  },
  clear: {
    marginTop: 10,
    color: '#fff',
    fontSize: 14,
    borderBottomWidth: 1,
    borderBottomColor: '#fff'
  },  
  data: {
    paddingVertical: 60,
    paddingHorizontal: 5,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  resultRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  subtitle: {
    color: '#fff',
    fontSize: 16,
    fontWeight: "700",
    textAlign: 'center',
    marginBottom: 20,
  },
  result: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  resultInput1: {
    width: 100,
    borderBottomWidth: 2,
    outline: 'none',
    borderBottomColor: '#fff',
    color: '#fff',
    textAlign: 'center',
    fontWeight: "700",
    fontSize: 13
  },
  resultInput2: {
    width: 150,
    borderBottomWidth: 2,
    outline: 'none',
    borderBottomColor: '#fff',
    color: '#fff',
    textAlign: 'center',
    fontWeight: "700",
    fontSize: 13
  },
});