import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView, Dimensions
} from 'react-native';

import { Feather } from '@expo/vector-icons';

import {styles} from './style'

import Button from '../../components/button';

export default function CalcsScreen() {
  const [currentPanel, setCurrentPanel] = useState('');
  const [peso, setPeso] = useState(0);
  const [altura, setAltura] = useState(0);
  const [result, setResult] = useState(0);
  const [cintura, setCintura] = useState(0);
  const [quadril, setQuadril] = useState(0);
  const [classification, setClass] = useState('');

  function imc() {
    let denominador =  (Number(altura) * Number(altura)) / 10000;
    let res = Number(peso) / Number(denominador)

    if (res < 17) {
      setClass('Muito abaixo do peso.');
    }
    else  if (res >= 17 && res <= 18.5){
        setClass('Abaixo do peso.');
      }
      else if (res >= 18.5 && res < 25) {
          setClass('Peso Normal');
        }
        else if (res >= 25 && res < 30) {
            setClass('Acima do peso.');
          }
          else if (res >= 30 && res < 35) {
              setClass('Obesidade grau I');
            }
            else if (res >= 35 && res <= 40) {
                setClass('Obesidade grau II');
              }
              else if (res > 40) {
                  setClass('Obesidade grau III');
                }

    
    setResult(res.toFixed(2));
  }

  function icq() {
    const icq = cintura / quadril;
    setResult(icq.toFixed(2));
  }

  function limpar() {
    setAltura(0);
    setPeso(0);
    setResult(0);
    setClass('');
  }

  return (
  <ScrollView>
    <View style={styles.container}>
      <View style={styles.initial}>
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

        <View style={styles.options}>
          <TouchableOpacity onPress={() => setCurrentPanel('imc')} style={styles.optionsButton}>
            <Text style={{ color: 'black', fontWeight: 700}}>IMC</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setCurrentPanel('icq')} style={styles.optionsButton}>
            <Text style={{ color: 'black', fontWeight: 700,}}>ICQ</Text>
          </TouchableOpacity>
        </View>

        {currentPanel === 'imc' && (
          <View style={styles.body}>
          <View style={styles.main}>
            <View style={styles.graph}>
              <TextInput
                placeholder="A cm"
                style={styles.input}
                inputMode={'numeric'}
                maxLength={3}
                value={altura == 0 ? '' : altura}
                onChangeText={(t) => setAltura(t)}
              />
              <Text style={styles.barra}>|</Text>
              <TextInput
                placeholder="P Kg"
                style={styles.input}
                inputMode={'numeric'}
                maxLength={3}
                value={peso == 0 ? '' : peso}
                onChangeText={(t) => setPeso(t)}
              />
            </View>
  
            <Button text='Calcular' onPress={() => {imc()}}/>
            <TouchableOpacity onPress={() => limpar()}><Text style={styles.clear}>Limpar</Text></TouchableOpacity>
          </View>

          <View style={styles.data}>
            <View style={styles.resultRow}>
              <View style={styles.result}>
                <Text style={styles.subtitle}>RESULTADO</Text>
                <TextInput
                  style={styles.resultInput1}
                  editable={false}
                  value={result == 0 ? '' : result}
                />
              </View>
              <View style={styles.result}>
                <Text style={styles.subtitle}>CLASSIFICAÇÃO</Text>
                <TextInput
                  style={styles.resultInput2}
                  editable={false}
                  value={classification == 0 ? '' : classification}
                />
              </View>
            </View>
          </View>
        </View>
        )}

        {currentPanel === 'icq' && (
          <View style={styles.body}>
          <View style={styles.main}>
            <View style={styles.graph}>
              <TextInput
                placeholder="C cm"
                style={styles.input}
                inputMode={'numeric'}
                maxLength={3}
                value={cintura == 0 ? '' : cintura}
                onChangeText={(t) => setCintura(t)}
              />
              <Text style={styles.barra}>|</Text>
              <TextInput
                placeholder="Q cm"
                style={styles.input}
                inputMode={'numeric'}
                maxLength={3}
                value={quadril == 0 ? '' : quadril}
                onChangeText={(t) => setQuadril(t)}
              />
            </View>
  
            <Button text='Calcular' onPress={() => {icq()}}/>
            <TouchableOpacity onPress={() => limpar()}><Text style={styles.clear}>Limpar</Text></TouchableOpacity>
          </View>

          <View style={styles.data}>
              <View style={styles.result}>
                <Text style={styles.subtitle}>RESULTADO</Text>
                <TextInput
                  style={styles.resultInput1}
                  editable={false}
                  value={result == 0 ? '' : result}
                />
              </View>
          </View>
        </View>
        )}

        
      </View>
    </View>
  </ScrollView>

  );
}
