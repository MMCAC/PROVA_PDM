import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView, Image, TextInput
} from 'react-native';

import { Feather } from '@expo/vector-icons';

import {styles} from './style'

export default function CadastrarAbrigoScreen() {
  const [nome, setNome] = useState('');
  const [idade, setIdade] = useState('');
  const [sexo, setSexo] = useState('');
  
  return (
    <ScrollView>
      <View style={styles.container}>
          <View style={styles.superior}>
            <View style={styles.icons}>
              <TouchableOpacity>
                <Feather name="menu" size={28} color="#fff" />
              </TouchableOpacity>
              <TouchableOpacity>
                <Feather name="settings" size={28} color="#fff" />
              </TouchableOpacity>
            </View>
          </View>
        <View style={styles.perfil}>
          <View style={styles.photo}>
          <Image source={require('../../../assets/user.png')} style={styles.imagem} />
          </View>

        </View>

        <View style={styles.infoCard}>
                    <Text style={styles.tituloDados}>DADOS PESSOAIS</Text>

                    <View style={styles.infoName}>
                      <TextInput
                                style={styles.inputD}
                                placeholder="Nome"
                                value={nome}
                                onChangeText= {(text) => setNome(text)}
                            />
                    </View>
                    

                    <View style={styles.insideInfo}>
                        <View style={styles.info}>
                            <TextInput
                                style={styles.inputD}
                                placeholder="Idade"
                                value={idade}
                                onChangeText= {(text) => setIdade(text)}
                                keyboardType='numeric'
                                maxLength={2}
                            />
                        </View>

                        <View style={styles.info}>
                            <TextInput
                                style={styles.inputD}
                                placeholder="Sexo"
                                value={sexo}
                                onChangeText= {(text) => setSexo(text)}
                                maxLength={6}
                            /></View>                                      
                    </View>
                </View>

        <View style={{flexDirection: 'row', width: '50%', justifyContent: 'center', backgroundColor: 'white', borderRadius: 50, marginTop: 50}}><Text style={{color:'black', fontSize: 30, fontWeight: 700}}>GALERIA</Text></View>
        <View style={styles.fotos}>
          <Image source={require('../../../assets/ex1.jpeg')} style={styles.imagem2} />
          <Image source={require('../../../assets/ex2.jpeg')} style={styles.imagem2} />
        </View>
        <View style={styles.fotos}>
          <Image source={require('../../../assets/ex3.jpeg')} style={styles.imagem2} />
          <Image source={require('../../../assets/ex4.jpeg')} style={styles.imagem2} />
        </View>
      </View>
    </ScrollView>
  );
}