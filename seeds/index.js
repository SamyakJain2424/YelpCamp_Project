const express = require('express');
const cities = require('./cities')
const path = require('path')
const { places, descriptors } = require('./seedHelpers')
const mongoose = require('mongoose')
const Campground = require('../models/campground');

mongoose.connect('mongodb://localhost:27017/yelp-camp', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
    console.log("Database connected");
});

const sample = array => array[Math.floor(Math.random() * array.length)];

const seedDB = async () => {
    await Campground.deleteMany({});
    for (let i = 0; i < 50; i++) {
        const random1000 = Math.floor(Math.random() * 1000);
        const price = Math.floor(Math.random() * 20) + 10;
        const camp = new Campground({
            author: '64eda280a6f6ada337300a7f',
            location: cities[random1000].city + ", " + cities[random1000].state,
            title: sample(descriptors) + " " + sample(places),
            image: 'http://source.unsplash.com/collection/483251',
            description: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, corrupti delectus! Nulla alias ipsa quam doloremque vitae odit, atque dolorum asperiores aut, tenetur dolores laboriosam maxime. Repellat ducimus excepturi molestias.',
            price,
            geometry: [cities[random1000].latitude, cities[random1000].longitude],
            images: [
                {
                    url: 'https://res.cloudinary.com/doctdsquf/image/upload/v1693861087/YelpCamp/ttqbtlvgx4u1nbvfiti1.jpg',
                    filename: 'YelpCamp/ttqbtlvgx4u1nbvfiti1'

                },
                {
                    url: 'https://res.cloudinary.com/doctdsquf/image/upload/v1693861087/YelpCamp/gd2rlonx5kzyxffxvq8c.jpg',
                    filename: 'YelpCamp/gd2rlonx5kzyxffxvq8c'
                }
            ]
        })
        await camp.save();
    }

}

seedDB().then(() => {
    mongoose.connection.close();
});