import React, { useState, useContext } from "react";
import { List, Avatar } from "react-native-paper";
import styled from "styled-components";
import { AuthenticationContext } from "../../../services/authentication/authentication.context";
import { useFocusEffect } from "@react-navigation/native";
import { TouchableOpacity } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { SafeArea } from "../../../components/utils/safe-area.component";
import { Text} from "../../../components/utils/safe-area.component"
import { Spacer } from "../../../components/spacer/spacer.component";
import { get } from "react-native/Libraries/TurboModule/TurboModuleRegistry";

const SettingsItem = styled(List.Item)`
  padding: ${(props) => props.theme.space[3]};
`;

const AvatarContainer = styled.View`
  align-items: center;
`;

export const SettingsScreen = ({ navigation }) => {
  const { onLogout, user } = useContext(AuthenticationContext);
  const [photo, setPhoto] = useState(null);
  const getProfilePicture = async (currentUser) => {
    const photoUri = await AsyncStorage.getItem(`${currentUser.uid}-photo`);
    setPhoto(photoUri);
  };
  useFocusEffect(() => {
    getProfilePicture(user);
  }, [user]);

  return (
    <SafeArea>
      <AvatarContainer>
        <TouchableOpacity onPress={() => navigation.navigate("Camera")}>
          {!photo && (
            <Avatar.Icon size={180} icon="human" backgroundColor="#2182BD" />
          )}

          {photo && (
            <Avatar.Image
              size={180}
              source={{ uri: photo }}
              backgroundColor="#2182BD"
            />
          )}
        </TouchableOpacity>
        <Spacer position="top" size="large">
          <Text variant="label">{user.email}</Text>
        </Spacer>
      </AvatarContainer>

      <List.Section>
        <SettingsItem
          title="favourites"
          left={(props) => <List.Icon {...props} color="black" icon="heart" />}
          onPress={() => Navigation.navigate("Favourites")}
        />

        <SettingsItem
          title="logout"
          left={(props) => <List.Icon {...props} color="black" icon="door" />}
          onPress={onLogout}
        />
      </List.Section>
    </SafeArea>
  );
};
