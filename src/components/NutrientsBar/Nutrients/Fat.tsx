import React from 'react';
import {
    FlatList,
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    View,
    Button
  } from 'react-native';
import * as Progress from 'react-native-progress';
import styled from "styled-components/native";



const BarView = styled.View`
width: 40%;
padding: 0 15px;
  flex-direction: row;
  margin-top: 20px;
`;
 
const Bar = styled.View`
  margin: 10px 0;
  flex: 1;
`;
 
const BarText = styled.Text`
  width: 40px;
  text-align: center;
  font-size: 15px;
  padding: 3px 0 0 5px;
`;

const Fat = () => {
  
    const fat = [
    {
    id: 1,
    boolean: false,
    },
    {
      id: 2,
      boolean: true,
    }
  ]
  
    const tasksValue = Object.values(fat);
    const length = tasksValue.length;
    const completed = tasksValue.filter((task) => task.boolean === true).length;
    return (
      <BarView>
          <BarText>
          지방(g)
        </BarText>
        <Bar>
          <Progress.Bar
            progress={completed / length}
            width={null}
            height={8}
            color='green'
          />
        </Bar>
        <BarText>
          {completed}/{length}
        </BarText>
      </BarView>
    );
  };

export default Fat;