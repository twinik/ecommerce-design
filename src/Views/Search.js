import React from "react";
import { StyleSheet, View } from "react-native";
import { global } from "../Styles/Global";
import { SearchBar } from "react-native-elements";

class Search extends React.Component {
  state = {
    search: "",
  };

  updateSearch = (search) => {
    this.setState({ search });
  };

  render() {
    const { search } = this.state;

    return (
      <View style={global.container}>
        <SearchBar
          placeholder="Search..."
          round={true}
          containerStyle={{ backgroundColor: "orange" }}
          onChangeText={this.updateSearch}
          value={search}
        />
      </View>
    );
  }
}

export default Search;

const styles = StyleSheet.create({});
