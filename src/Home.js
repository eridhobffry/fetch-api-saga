import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import { requestApiData } from "./actions";

class Home extends React.Component {
  componentDidMount() {
    this.props.requestApiData();
  }

  // person = (x, i) => (
  //   <div key={x.id.value}>
  //     <h1>{x.gender}</h1>
  //     <h1>{x.name.first}</h1>
  //     <h1>{x.name.last}</h1>
  //     <img src={x.picture.medium} />
  //   </div>
  // );

  // LOGIN GATEWAY
  person = (x, i) => (
    <div>
      <h1>{x.username}</h1>
      <h1>{x.password}</h1>
    </div>
  );

  render() {
    const { results = [] } = this.props.data;
    return results.length ? (
      <h1>{results.map(this.person)}</h1>
    ) : (
      <div>
        <h1>loading nih...</h1>
        <p>
          Jalanin dulu aja <br /> kalo ga coba cek api.js ganti linknya, <br />{" "}
          abis itu ke Home.js ganti const person nya{" "}
        </p>
      </div>
    );
  }
}

const mapStateToProps = state => ({ data: state.data });

const mapDispatchToProps = dispatch =>
  bindActionCreators({ requestApiData }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Home);
