import React, { useState, useContext } from "react";
import { Text } from "../../../components/typography/text.component";
import { Spacer } from "../../../components/spacer/spacer.component";
import { ActivityIndicator, Colors, TextInput } from "react-native-paper";

import {
  AccountBackground,
  AccountContainer,
  AccountCover,
  AuthButton,
  AuthInput,
} from "../components/account.styles";
import { AuthenticationContext } from "../../../services/authentication/authentication.context";

export const RegisterScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatedPassword, setRepeatedPassword] = useState("");
  const { onRegister, isLoading, error } = useContext(AuthenticationContext);

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
            <AuthInput
              label="repeat password"
              value={repeatedPassword}
              textContentType="password"
              secureTextEntry
              autoCapitalize="none"
              onChangeText={(p) => setRepeatedPassword(p)}
            />
          </Spacer>
          {error && (
            <ErrorContainer size="large">
              <Text variant="error">{error}</Text>
            </ErrorContainer>
          )}

          <Spacer size="large">
            {!isLoading ? (
              <AuthButton
                icon="mail"
                mode="contained"
                onPress={() => onRegister(email, password, repeatedPassword)}
              >
                register
              </AuthButton>
            ) : (
              <ActivityIndicator animating={true} color={Colors.blue300} />
            )}
          </Spacer>
        </AccountContainer>
        <Spacer size="large">
          <AuthButton mode="contained" onPress={() => navigation.goBack()}>
            Back
          </AuthButton>
        </Spacer>
      </AccountBackground>
    </>
  );
};
