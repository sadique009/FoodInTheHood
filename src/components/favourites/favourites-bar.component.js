import React from "react";
import styled from "styled-components";
import { ScrollView, TouchableOpacity } from "react-native";
import { Spacer } from "../spacer/spacer.component";
import { CompactRestaurantInfo } from "../restaurant/compact-restaurant-info.component";
import { Text } from "../typography/text.component";

const FavouritesWrapper = styled.View`
  padding: 10px;
`;

export const FavouritesBar = ({ favourites, onNavigate }) => {
  {
    if(!favourites.length){
        return null;
    }
    
    return (
      <FavouritesWrapper>
        <Spacer variant="left.large">
          <Text variant="caption">FAVOURITES</Text>
        </Spacer>
        <ScrollView
          horizontal
          showHorizontalScrollIndicator={false}
        ></ScrollView>
        {favourites.map((restaurant) => {
          const key = restaurant.name;
          return (
            <Spacer key={key} position="left" size="medium">
              <TouchableOpacity
                onPress={() => {
                  onNavigate("RestaurantDetail",
                    {
                      restaurant,
                    });
                }}
              >
                <CompactRestaurantInfo restaurant={restaurant} />
              </TouchableOpacity>
            </Spacer>
          );
        })}
      </FavouritesWrapper>
    );
  }
};
