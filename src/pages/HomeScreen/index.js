import {Text, View, StyleSheet, StatusBar, TextInput, TouchableOpacity, FlatList, ImageBackground, BlurView, Image, ScrollView} from 'react-native'
import React from 'react'
import { Feather } from '@expo/vector-icons';

import {styles} from './style'

export default function CadastrarAbrigoScreen() {
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
      <View style={styles.header}>
        <ImageBackground
        source={require('../../../assets/gymhome.jpeg')} // Caminho da imagem de fundo
        style={styles.background}
        >
          <View style={styles.overlay}>
            <Text style={styles.text}>ACADEMIA</Text>
          </View>
        </ImageBackground>
      </View>

      <View style={styles.cadastro}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.cadastroButton}>CADASTRAR-SE</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.bottom}>

          <Text style={styles.cadastroButton}>LOCAIS</Text>

        <View style={styles.photos}>
              <Image source={require('../../../assets/ACADEMIA1.jpeg')} style={styles.imagem} />
              <Image source={require('../../../assets/ACADEMIA2.jpeg')} style={styles.imagem} />
        </View>
      </View>
    </View>
    </ScrollView>
  );
}