import React, { useState, useContext } from "react";

import { Spacer } from "../../../components/spacer/spacer.component";

import {
  AccountBackground,
  AccountContainer,
  AccountCover,
  AuthButton,
  AuthInput,
} from "../components/account.styles";
import { AuthenticationContext } from "../../../services/authentication/authentication.context";
import {ActivityIndicator, Colors} from "react-native-paper";

export const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { onLogin, error, isLoading } = useContext(AuthenticationContext);

  return (
    <>
      <AccountBackground>
      <AccountCover />
      <AccountContainer>
        
        <AuthInput
          label="E-mail"
          value={email}
          textContentType="emailAddress"
          keyboardType="email-address"
          autoCapitalize="none"
          onChangeText={(u) => setEmail(u)}
        />

        <Spacer size="large">
          <AuthInput
            label="password"
            value={password}
            textContentType="password"
            secureTextEntry
            autoCapitalize="none"
            onChangeText={(p) => setPassword(p)}
          />
        </Spacer>

        <Spacer size="large">
          {!isLoading? (
          <AuthButton
            icon="lock-open-outline"
            mode="contained"
            onPress={() => onLogin(email, password)}
          >
            login
          </AuthButton>
          ):(
            <ActivityIndicator animating={true} color={Colors.blue300}/>
          )}

        </Spacer>
      </AccountContainer>
      <Spacer size='large'>
        <AuthButton mode='contained'
        onPress={()=>navigation.goBack()}>
          Back
        </AuthButton>
      </Spacer>
      </AccountBackground>
    </>
  );
};
