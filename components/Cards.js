import React from 'react';
import CardItem from './CardItem';
import './Cards.css';

function Cards() {
    return (
        <div className='cards'>
            <h1>My latest projects.</h1>
            <div className='cards_container'>
                <div className='cards_wrapper'>
                    <ul className='cards_items'>
                        <CardItem 
                            src='images/img-9.jpg'
                            text='Barnabus - The Bar-Share App. I use __.'
                            label='Barnabus' 
                            path='/projects' />
                        <CardItem 
                            src="images/img-2.jpg"
                            text="This app uses a __ cryptocurrency API to __" 
                            label="Cryptocurrency" 
                            path="/projects" />
                    </ul>
                    <ul className='cards_items'>
                        <CardItem 
                            src="images/img-9.jpg"
                            text="This is the band site I made for Lick Pills For Science" 
                            label="Band Site" 
                            path="/projects" />
                        <CardItem 
                            src="images/img-2.jpg"
                            text="Homicidal Grandma - A Tactical RPG" 
                            label="Tactical RPG Game. I used Python and __ in building this game." 
                            path="/projects" />
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Cards;