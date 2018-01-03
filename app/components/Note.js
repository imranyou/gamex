import React from 'react';
import { StyleSheet, Text, View, ScrollView, TextInput, TouchableOpacity } from 'react-native';

export default class Note extends React.Component {

    render() {
        return (
            <View style={styles.container}>

                <View style={styles.header}>
                    <Text style={styles.headerText}>NOTER</Text>
                </View>

                <ScrollView style={styles.scrollContainer}></ScrollView>

                <View style={styles.footer}>

                    <TextInput style={styles.textInput} placeholder='>note' placeholderTextColor='white'
                               underlineColorAndroid='transparent'>

                    </TextInput>

                </View>

                <TouchableOpacity style={styles.addButton}>
                    <Text style={styles.addButtonText}>+</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({

});
