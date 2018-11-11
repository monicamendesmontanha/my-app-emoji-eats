import React from 'react'

const Order = ({ order, total, handleReset, handleSubmit }) => (
  <div className="order__wrapper">
    <div className="order__title">My order</div>
    {order.length === 0 ? (
      <React.Fragment>
        <div className="order__text">
          You haven't ordered any emojis. Select some delicious emojis from the menu.
        </div>
        <div className="order__emoji">
          <span role="img" aria-label="point">
            ⬅ ️
            </span>
        </div>
      </React.Fragment>
    ) : (
        <React.Fragment>
          {order.map((item, index) => (
            <div className="order__item" key={index}>
              <span>{item.name}</span>
              <span>${item.price}</span>
            </div>
          ))}
          <div className="order__total">
            <span>Total</span>
            <span>${total}</span>
          </div>
          <button className="order__reset" onClick={handleSubmit}>Submit</button>
          <button className="order__reset" onClick={handleReset}>Reset</button>
        </React.Fragment>
      )
    }
  </div>
)

export default Order