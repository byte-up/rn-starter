import React from "react";
import { connect } from "react-redux";
import { StyleSheet, Text, View } from "react-native";

import { loadingStart } from "./AppActions";

class HomeScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Test</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

const mapDispatchToProps = (dispatch) => {
  return {
    onLoadingStart: () => {
      return dispatch(loadingStart());
    },
  };
};

const mapStateToProps = (state) => {
  return {
    loading: state.app.loading,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
