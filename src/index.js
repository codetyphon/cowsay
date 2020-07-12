import ReactCLI, { Section } from "react-cli-renderer";
import React from "react";
import chalk from "chalk";
import mqtt from 'mqtt';

class MyReactCLIApp extends React.Component {
  state = {
    say: 'loading'
  };

  componentDidMount() {
    let that=this;
    let client  = mqtt.connect('mqtt://mqtt.eclipse.org')

    client.on('connect', function () {
      client.subscribe('cowsay', function (err) {
        if (!err) {
          client.publish('cowsay', 'Hello mqtt')
        }
      })
    })

    client.on('message', function (topic, message) {
      that.setState({ say: message.toString() })
      // client.end()
    })
  }

  render() {
    return (
      <Section border={{ horizontal: "-", vertical: "|" }} align="center">
        <Section align="left">
          {chalk.black(`----------`)}{chalk.yellow(`${this.state.say}`)}<br/>
          {/* {chalk.black(`----------`)}{chalk.yellow(`---------------------`)}<br/> */}
          {chalk.black(`----------------`)}{chalk.yellow(`\\`)}{chalk.black(`--`)}{chalk.yellow(`^__^`)}<br/>
          {chalk.black(`-----------------`)}{chalk.yellow(`\\  (oo)\\_______`)}<br/>
          {chalk.black(`-------------------`)}{chalk.yellow(`(__)\\`)}{chalk.black(`-------`)}{chalk.yellow(`)\\/\\`)}<br/>
          {chalk.black(`-----------------------`)}{chalk.yellow(`||----w |`)}<br/>
          {chalk.black(`-----------------------`)}{chalk.yellow(`||`)}{chalk.black(`-----`)}{chalk.yellow(`||`)}<br/>
        </Section>
      </Section>
    );
  }
}

ReactCLI(<MyReactCLIApp />);