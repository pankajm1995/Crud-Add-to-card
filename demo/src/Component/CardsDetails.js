import React from 'react'
import Table from 'react-bootstrap/Table';
const CardsDetails = () => {
  return (
    <div>
        <>
          <div className='container mt-2 '>
            <h2 className='text-text-center'>Item Details</h2>
              <section className='container mt-3 border border-danger'>
                <div className='item detail d-flex'>
                  <div className='item-img'>
                    <img src="https://cdn.pixabay.com/photo/2022/06/07/20/52/curry-7249247_640.jpg" alt="dish"/>
                  </div>
                  <div className='details'>
                    <Table>
                      <tr>
                        <td>
                          <p><strong>Restoraunt</strong>:Keyur Dhaba</p>
                          <p><strong>Price</strong>:₹ 450</p>
                          <p><strong>Dishes</strong>: Western India</p>
                          <p><strong>Total</strong>: ₹ 450</p>
                          <p><stron>Remove</stron><span><i class="fa fa-trash color" aria-hidden="true" style={{cursor:'pointer'}}></i></span></p>
                        </td>
                        <td>
                          <p><strong>Rating</strong>:<span style={{margin:'10px',padding:'5px'}}>De do jo dena hai</span></p>
                          <p><strong>Order Review</strong>: ⭐ ⭐ ⭐ ⭐ ⭐ </p>
                        </td>
                      </tr>
                    </Table>
                  </div>
                </div>
              </section>
          </div>
        </>
    </div>
  )
}

export default CardsDetails
    