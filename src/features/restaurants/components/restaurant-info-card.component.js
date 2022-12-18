import React from "react";
import styled from "styled-components/native";
import { Image } from "react-native";
import { Card } from "react-native-paper";
import { SvgXml } from "react-native-svg";
import {Favourite} from "../../../components/favourites/favourite.component";

import star from "../../../../assets/star";
import open from "../../../../assets/open";
import { Spacer } from "../../../components/spacer/spacer.component";
import {Text} from "../../../components/typography/text.component";
import {Icon} from "./restaurant-info-card.styles.";



export const RestaurantInfoCard = ({ restaurant = {} }) => {
  const {
    name = "xyz",
    icon,
    photos,
    address,
    isOpenNow,
    rating,
    isClosedTemporarily = true,
    placeId,
  } = restaurant;

  const ratingArray = Array.from(new Array(Math.floor(rating)));
  console.log(ratingArray);

  return (
    <RestaurantCard elevation={5}>
      <View>
        <Favourite restaurant={restaurant}/>
      <RestaurantCardCover key={name} source={{ uri: photos[0] }} />
      </View>
      <Info>
        <Text variant="label">{name}</Text>
        <Section>
          <Rating>
            {ratingArray.map((_,i) => (
              <SvgXml key={`star-${placeId}-${i}`} xml={star} width={20} height={20} />
            ))}
          </Rating>
          <SectionEnd>
            {isClosedTemporarily && (
              <Text variant="error">
                CLOSED TEMPORARILY
              </Text>
            )}
            <Spacer position="left" size="large">
            {isOpenNow && <SvgXml xml={open} width={20} height={20} />}
            </Spacer>
            <Spacer position="left" size="large">
            <Icon style={{ width: 15, height: 15 }} source={{uri:icon}} />
            </Spacer>
          </SectionEnd>
        </Section>

        <Address>{address}</Address>
      </Info>
    </RestaurantCard>
  );
};
