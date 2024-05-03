import React, {useEffect, useState} from 'react';
import {Alert, Linking, StyleSheet, View} from 'react-native';
import {supabase} from '../../lib/supabase';
import {Button, Input} from 'react-native-elements';

export const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const handleSubscribeUrl = async ({url}: {url: string}) => {
      console.log('url', url);
      if (url.includes('reactnativesupabase2://MainStack')) {
        const {access_token, refresh_token} = extractTokens(url);

        if (!access_token || !refresh_token) return;

        const {data, error} = await supabase.auth.setSession({
          access_token,
          refresh_token,
        });
        if (error) throw error;
        return data.session;
      }
    };

    const subscribe = Linking.addEventListener('url', handleSubscribeUrl);

    return () => {
      return subscribe.remove();
    };
  }, []);

  async function signInWithEmail() {
    setLoading(true);
    const {error} = await supabase.auth.signInWithPassword({
      email: email,
      password: password,
    });

    if (error) Alert.alert(error.message);
    setLoading(false);
  }

  function extractTokens(url: string) {
    const hash = url.split('#')[1]; // Get the fragment after '#'
    const params = new URLSearchParams(hash); // Create a URLSearchParams object

    const access_token = params.get('access_token'); // Get 'access_token'
    const refresh_token = params.get('refresh_token'); // Get 'refresh_token'

    return {access_token, refresh_token};
  }

  async function signUpWithEmail() {
    setLoading(true);
    const {
      data: {session},
      error,
    } = await supabase.auth.signUp({
      email: email,
      password: password,
    });

    if (error) Alert.alert(error.message);
    if (!session)
      Alert.alert('Please check your inbox for email verification!');
    setLoading(false);
  }

  return (
    <View style={styles.container}>
      <View style={[styles.verticallySpaced, styles.mt20]}>
        <Input
          label="Email"
          leftIcon={{type: 'font-awesome', name: 'envelope'}}
          onChangeText={text => setEmail(text)}
          value={email}
          placeholder="email@address.com"
          autoCapitalize={'none'}
        />
      </View>
      <View style={styles.verticallySpaced}>
        <Input
          label="Password"
          leftIcon={{type: 'font-awesome', name: 'lock'}}
          onChangeText={text => setPassword(text)}
          value={password}
          secureTextEntry={true}
          placeholder="Password"
          autoCapitalize={'none'}
        />
      </View>
      <View style={[styles.verticallySpaced, styles.mt20]}>
        <Button
          title="Sign in"
          disabled={loading}
          onPress={() => signInWithEmail()}
          buttonStyle={styles.button}
        />
      </View>
      <View style={styles.verticallySpaced}>
        <Button
          title="Sign up"
          disabled={loading}
          onPress={() => signUpWithEmail()}
          buttonStyle={styles.registerButton}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 12,
  },
  verticallySpaced: {
    paddingTop: 4,
    paddingBottom: 4,
    alignSelf: 'stretch',
  },
  mt20: {
    marginTop: 20,
  },
  button: {
    borderRadius: 20,
    backgroundColor: 'black',
    padding: 10,
  },
  registerButton: {
    backgroundColor: 'gray',
    borderRadius: 20,
    padding: 10,
    marginTop: 10,
  },
});
