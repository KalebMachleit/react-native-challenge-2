import { Image, StyleSheet, View, Text } from 'react-native';

export default function HomeScreen() {
  return (
    <View style={styles.page}>
      <Image style={styles.profileImage} 
      source={ require('../../assets/images/swagged-out.png')}/>
      <View style={styles.name}>
        <Text style={styles.nameText}>Kaleb Machleit</Text>
      </View>
      <View style={styles.body}>
        <Text style={styles.bodyText}>My passion revolves around computers. I love learning about everything about them, from hardware to software. I began just playing video games as a kid, and eventually the curiosity grew beyond that. I built my own computer and a few of my friends. As I grow my career, I want to continue to learn until I reach the point that I can contribute to the growth of computer technology</Text>
        <Text style={styles.bodyText}>This year in SCLA, I have taken the role of Product Manager to become a stronger leader in the business world.</Text>
        <Text style={styles.bodyText}>I hope to somedey lead a company that is devoted to pushing the limits of tech and bringing the next major shift in computing</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    paddingTop: 25,
    height: '100%',
    flex: 1
  },
  profileImage: {
    width: 200,
    height: 200,
    margin: 'auto',
    marginBottom: 10,
    borderRadius: 50,
  },
  name: {
    padding: 25,
    backgroundColor: '#79E6CA'
  },
  nameText: {
    fontSize: 48,
  },
  body: {
    backgroundColor: '#C6F3E7',
    flexGrow: 1,
    padding: 25,
  },
  bodyText: {
    fontSize: 18
  }
});
