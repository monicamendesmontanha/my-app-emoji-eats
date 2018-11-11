import React from 'react'
import './App.css'
import Header from './components/Header'
import MenuItem from './components/MenuItem'
import Order from './components/Order'
import Loading from './components/Loading'
import { menuData } from './data/menuData'

class App extends React.Component {

  state = {
    order: [],
    total: 0,
    data: []
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ data: menuData })
    }, 3000);
  }

  handleUpdate = (name, price) => {
    const newItem = { name, price }
    this.setState({
      order: this.state.order.concat(newItem),
      total: this.state.total + price
    })
  }

  submitOrder = () => {
    const synth = window.speechSynthesis
    const utterthis = new SpeechSynthesisUtterance(
      `Welcome to emoji MediaElementAudioSourceNode. You have ordered ${this.state.order.map(
        item => item.name
      )}.This comes to a total of ${this.state.total} dollars`
    )

    synth.speak(utterthis)
  }

  resetOrder = () => {
    this.setState({
      order: [],
      total: 0,
    })
  }

  render() {
    const { total, order, data } = this.state
    return (
      <div className="App">
        <Header />
        {data.length === 0 ? (
          <Loading />
        ) : (
            <div className="menu">
              <div className="menuitens">
                {data.map((item, index) => (
                  <MenuItem
                    key={index}
                    name={item.name}
                    emoji={item.emoji}
                    label={item.label}
                    description={item.description}
                    price={item.price}
                    updateOrder={this.handleUpdate}
                  />
                ))}
              </div>
              <Order
                order={order}
                total={total}
                handleReset={this.resetOrder}
                handleSubmit={this.submitOrder} />
            </div>
          )}
      </div>
    )
  }
}

export default App