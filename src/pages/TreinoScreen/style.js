import { StyleSheet, StatusBar } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
    padding: 8,
    background: 'linear-gradient(180deg, #eee, #666)',
    alignItems: 'center',
    paddingTop: 60,
    backgroundColor: "#AA0000"
  },
  title: {
    fontSize: 40,
    alignSelf: 'center',
    fontWeight: "700",
    marginBottom: 20,
    color: '#fff'
  },
  input: {
    borderWidth: 4,
    borderColor: '#fff',
    paddingVertical: 10,
    paddingHorizontal: 10,
    width: '90%',
    backgroundColor: '#fff',
    borderRadius: 50,
    fontWeight: 600,
    outline: 'none',
    marginRight: 10,
  },
  containerInput: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: "80%",
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#fff',
    borderRadius: 50,
    alignItems: 'center'
  },
  flat: {
    paddingTop: 10,
    paddingHorizontal: 5,
    backgroundColor: '#fff',
    borderRadius: 25,
    borderWidth: 4,
    borderColor: '#fff',
    width: 400,
    paddingBottom: 5,
  },
});
