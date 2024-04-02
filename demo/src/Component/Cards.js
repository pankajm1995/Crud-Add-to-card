import React, { useState } from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import CardsData from './CardsData'

const Cards = () => {

    const [Data,setData]= useState(CardsData)

    return (
        <div>
           
            <div className='container'>
            <h1 className='mt-3'>Add to Cart Project</h1>
                <div className='row d-flex justify-content-center align-items-center'>
                    {
                        Data.map((element,id)=>{
                            return (
                                <>
                                <Card style={{ width: '350px' }} className="mx-2 mt-4 card_style p-0"> 
                                    <Card.Img variant="top" src={element.imgdata}  style={{height:200}}/>
                                    <Card.Body>
                                        <Card.Title>Card Title</Card.Title>
                                        <Card.Text>
                                            Some quick example text to build on the card title and make up the
                                            bulk of the card's content.
                                        </Card.Text>
                                        <Button variant="primary">Add to Cart</Button>
                                    </Card.Body>
                                </Card>
                            </>

                            )
                        })
                    }



                   
                </div>
            </div>


        </div>
    )
}

export default Cards
