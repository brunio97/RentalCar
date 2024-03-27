import React from "react";
import compact1 from '../assets/cars/compact/compact1.png'
import economy from '../assets/cars/compact/economy.png'
import fullsize from '../assets/cars/compact/fullsize.png'
import midsize from '../assets/cars/compact/midsize.png'
import standard from '../assets/cars/compact/standard.png'
import FullSizeSUV from '../assets/cars/SUV/FullSizeSUV.avif'
import StandardSUV from '../assets/cars/SUV/StandardSUV.avif'
import compactSUV from '../assets/cars/SUV/compactSUV.avif'
import midsizeSuv from '../assets/cars/SUV/midsizeSuv.avif'
import luxurySUV from '../assets/cars/SUV/luxurySUV.avif'
import premiumSUV from '../assets/cars/SUV/premiumSUV.avif'
import Pass12Van from '../assets/cars/Vans/12PassVan.avif'
import Pass15Van from '../assets/cars/Vans/15PassVan.avif'
import Pass7MiniVan from '../assets/cars/Vans/7PassMiniVan.avif'
import Pass8MiniVan from '../assets/cars/Vans/8PassMiniVan.avif'
import CargoVan from '../assets/cars/Vans/CargoVan.avif'
import HalfTonPickup from '../assets/cars/trucks/HalfTonPickup.avif'
import Pickup from '../assets/cars/trucks/standardPickup.avif'

import MidsizeLuxurySedan from '../assets/cars/luxury/MidsizeLuxurySedan.png'
import Premium from '../assets/cars/luxury/Premium.png'
import PremiumCrossover from '../assets/cars/luxury/PremiumCrossover.avif'
import StandardElite from '../assets/cars/luxury/StandardElite.png'
import fullsizeElite from '../assets/cars/luxury/fullsizeElite.png'
import fullsizeLuxurySedan from '../assets/cars/luxury/fullsizeLuxurySedan.png'

import jeep from '../assets/cars/AWD/jeep.avif'
import jeepWrangler4Door from '../assets/cars/AWD/jeepWrangler4Door.avif'
const ListOfCars =[
    
    {id:1,title:'Economy',type:'compact',text:'Mitsubishi Mirage or similar',gearBox:'Automatic',people:4,bags:2,img:economy,description:'Economy cars are smaller vehicles that typically seat up to four passengers. Their high fuel economy makes them great for city driving, while their size makes them easy to maneuver through traffic.',features:['2 Wheel Drive','Gasoline Vehicle','AM/FM Stereo Radio','Automatic','Air Conditioning']},
    {id:2,title:'Midsize', type:'compact',text:'Toyota Corolla or similar',gearBox:'Automatic',people:5,bags:3,img:midsize,description:'An intermediate car rental provides some more room for passengers and luggage than most smaller cars. Reserve now and get low rates on an intermediate car rental from Rent-A-Car. A midsize car, also referred to as an intermediate car, is a sedan that offers more space than a compact while still being very fuel efficient. An example of a midsize car rental is a Hyundai Elantra.',features:['2 Wheel Drive','Gasoline Vehicle','AM/FM Stereo Radio','Automatic','Air Conditioning','Cruise Control','Bluetooth']},
    {id:3,title:'Standard', type:'compact',text:'Volkswagen Jetta or similar',gearBox:'Automatic',people:5,bags:3,img:standard,description:'A standard car rental is a larger sedan, which provides more room for passengers and can fit an additional bag in the trunk compared to an intermediate car. ',features:['2 Wheel Drive','Gasoline Vehicle','AM/FM Stereo Radio','Automatic','Air Conditioning','Cruise Control','Bluetooth']},
    {id:4,title:'Compact' ,type:'compact',text:'Nissan Versa or similar',gearBox:'Automatic',people:5,bags:2,img:compact1,description:'Compact cars offer great gas mileage and the ease of driving and parking in high traffic areas. Reserve now and get low rates on a compact car rental from Rent-A-Car. A compact car is a smaller vehicle, such as a Nissan Versa, that seats up to five people. This type of car is easy to park, plus gets excellent gas mileage.',features:['2 Wheel Drive','Gasoline Vehicle','AM/FM Stereo Radio','Automatic','Air Conditioning','Cruise Control']},
    {id:5,title:'Full Size', type:'compact',text:'Chevy Malibu or similar',gearBox:'Automatic',people:5,bags:4,img:fullsize,description:'A Full-Size car rental is helpful when needing more passenger room and luggage space than a smaller car offers. Reserve now and get low rates on a Full-Size car from  Rent-A-Car.',features:['2 Wheel Drive','Gasoline Vehicle','AM/FM Stereo Radio','Automatic','Air Conditioning','Cruise Control','Bluetooth']},

    {id:6,title:'Compact SUV', type:'SUV',text:'Nissan Kicks or similar',gearBox:'Automatic',people:5,bags:3,img:compactSUV,description:'A compact SUV provides plenty of room for bags, plus nimble handing that is great for city driving.',features:['2 Wheel Drive','Gasoline Vehicle','AM/FM Stereo Radio','Automatic','Air Conditioning','Cruise Control','Bluetooth']},
    {id:7,title:'Standard SUV', type:'SUV',text:'Ford Edge or similar',gearBox:'Automatic',people:5,bags:5,img:StandardSUV,description:'A standard SUV rental provides plenty of room for passengers and luggage. SUVs are great for business, leisure, or weekend road trips. Reserve now and get low rates on a standard SUV from Rent-A-Car.',features:['2 Wheel Drive','Gasoline Vehicle','AM/FM Stereo Radio','Automatic','Air Conditioning','Cruise Control','Bluetooth']},
    {id:8,title:'Midsize SUV', type:'SUV',text:'Nissan Rogue or similar',gearBox:'Automatic',people:5,bags:4,img:midsizeSuv,description:'This mid-size SUV strikes the perfect balance of a larger interior with the easy driving of a sedan.',features:['2 Wheel Drive','Gasoline Vehicle','AM/FM Stereo Radio','Automatic','Air Conditioning','Cruise Control','Bluetooth']},
    {id:9,title:'Full size SUV', type:'SUV',text:'Chevrolet Tahoe or similar',gearBox:'Automatic',people:7,bags:3,img:FullSizeSUV,description:'A large SUV rental has room for up to seven people and offers third row of seating along with plenty of room for luggage. Full-size SUVs are great for weekend road trips and special occasions. Start a reservation to see pricing and availability for daily and weekly rentals.',features:['2 Wheel Drive','Gasoline Vehicle','AM/FM Stereo Radio','Automatic','Air Conditioning','Cruise Control','Bluetooth']},
    {id:10,title:'Premium SUV', type:'SUV',text:'Chevy Suburban or similar',gearBox:'Automatic',people:8,bags:7,img:premiumSUV,description:'The large premium SUV seats up to 8 passengers while still providing ample cargo space, making it great for long trips. ',features:['2 Wheel Drive','Gasoline Vehicle','AM/FM Stereo Radio','Automatic','Air Conditioning','Cruise Control','Bluetooth']},
    {id:11,title:'Luxury SUV', type:'SUV',text:'Infiniti QX80 or similar',gearBox:'Automatic',people:7,bags:3,img:luxurySUV,description:'Our large luxury SUVs offer 7 passenger seating, plus features like leather seats and a sunroof.',features:['2 Wheel Drive','Electric Sunroof','AM/FM Stereo Radio','Automatic','Gasoline Vehicle','Cruise Control','Air Conditioning','Leather Interior']},

    {id:11,title:'1/2 Ton Pickup', type:'truck',text:'Ford F150 or similar',gearBox:'Automatic',people:4,bags:4,img:HalfTonPickup,description:'Need to haul or move something? A pickup truck rental has the space, power, and durability to for the job. Reserve now and get low rates on a pickup truck rental from  Rent-A-Car.',features:['2 Wheel Drive','Gasoline Vehicle','AM/FM Stereo Radio','Automatic','Air Conditioning','Cruise Control','Bluetooth']},
    {id:12,title:'Standard Pickup', type:'truck',text:'Chevy Colorado or similar',gearBox:'Automatic',people:4,bags:3,img:Pickup,description:'A small pickup truck rental is great for hauling smaller items that will not fit in your own car. Reserve now and get low rates on a small pickup truck rental from  Rent-A-Car.',features:['2 Wheel Drive','Gasoline Vehicle','AM/FM Stereo Radio','Automatic','Air Conditioning','Cruise Control','Bluetooth']},

    {id:13,title:'7 Passenger Minivan', type:'vans',text:'Chrysler Pacifica or similar',gearBox:'Automatic',people:7,bags:5,img:Pass7MiniVan,description:'A minivan rental is perfect for long road trips and family vacations with room for 7 people. Reserve now and get low rates on a minivan rental whether you are looking for a rental for a few days or weeks. Start a reservation to see pricing and availability.',features:['2 Wheel Drive','Gasoline Vehicle','Cruise Control','AM/FM Stereo Radio','Automatic','Air Conditioning']},
    {id:14,title:'15 Passenger Van', type:'vans',text:'Ford Transit Wagon or similar1',gearBox:'Automatic',people:15,bags:2,img:Pass15Van,description:'Going on a family team road trip? Need a vehicle to get around town with a large family or group? A full size, 15 passenger van is the most convenient choice and is a great alternative to renting a bus.',features:['Gasoline Vehicle','Cruise Control','AM/FM Stereo Radio','Automatic','Air Conditioning']},
    {id:15,title:'12 Passenger Van', type:'vans',text:'Ford Transit Wagon or similar',gearBox:'Automatic',people:12,bags:7,img:Pass12Van,description:'12 Passenger vans are ideal for hauling large groups around town or on a long road trip. Enjoy the convenience of a large van for your next trip. Check van pricing and availability by starting a reservation today.',features:['Gasoline Vehicle','Cruise Control','AM/FM Stereo Radio','Automatic','Air Conditioning']},
    {id:16,title:'8 Passenger Minivan', type:'vans',text:'Toyota Sienna or similar',gearBox:'Automatic',people:8,bags:5,img:Pass8MiniVan,description:'Eight passenger minivan rentals are great for traveling with a large group whether it is for a family vacation or business trip. Reserve now and get low rates on a minivan rental from Rent-A-Car.',features:['2 Wheel Drive','Gasoline Vehicle','Cruise Control','AM/FM Stereo Radio','Automatic','Air Conditioning']},
    {id:17,title:'Cargo Van', type:'vans',text:'Chevrolet Express Cargo or similar',gearBox:'Automatic',people:2,bags:0,img:CargoVan,description:'Renting a cargo van is a great way to make small moves easy. Reserve now and get low rates on a cargo van rental from  Rent-A-Car.',features:['Gasoline Vehicle','AM/FM Stereo Radio','Automatic','Air Conditioning','Non Removable Hardtop']},

    {id:18,title:'Standard Elite', type:'luxury',text:'BMW 228i Gran Coupe or similar',gearBox:'Automatic',people:5,bags:2,img:StandardElite,description:'Standard elite vehicles offer sporty driving characteristics and high-end interiors, perfect for car enthusiasts. Rent cars like a Mercedes CLA, Audi A3, or similar.',features:['Gasoline Vehicle','Bluetooth','Cruise Control','AM/FM Stereo Radio','Automatic','Air Conditioning','Leather Interior']},
    {id:19,title:'Full size Elite', type:'luxury',text:'Audi A5 Sportback or similar',gearBox:'Automatic',people:5,bags:3,img:fullsizeElite,description:'Amazing Luxury Car',features:['Bluetooth','Cruise Control','AM/FM Stereo Radio','Automatic','Air Conditioning','Leather Interior']},
    {id:22,title:'Premium', type:'luxury',text:'Nissan Maxima or similar',gearBox:'Automatic',people:5,bags:4,img:Premium,description:'A premium car rental offers comfortable seating with plenty of room in the trunk for luggage. A premium rental car is a great choice for a business travel or leisure. Reserve now and get low rates from  Rent-A-Car.',features:['Gasoline Vehicle',,'Bluetooth','Cruise Control','AM/FM Stereo Radio','Automatic','Air Conditioning']},
    {id:21,title:'Full size Luxury Sedan', type:'luxury',text:'BMW 7-Series, Audi A8 or similar',gearBox:'Automatic',people:5,bags:4,img:fullsizeLuxurySedan,description:'The lavish design of an elite convertible rental provides the ultimate driving experience. Drive a Maserati Ghibli or similar.',features:['Gasoline Vehicle','Cruise Control',' AM/FM Stereo Radio','Automatic','Air Conditioning']},
    {id:20,title:'Midsize Luxury Sedan', type:'luxury',text:'BMW 5-Series, Mercedes Benz E-Class or similar',gearBox:'Automatic',people:5,bags:4,img:MidsizeLuxurySedan,description:'A premium elite car combines a powerful engine with a luxurious intertior for the ultimate driving experience. Drive an Audi A6, BMW 5 Series, or similar.',features:['Gasoline Vehicle','Cruise Control',' AM/FM Stereo Radio','Automatic','Air Conditioning']},
    {id:23,title:'Premium Crossover', type:'luxury',text:'Volkswagen Atlas or similar',gearBox:'Automatic',people:7,bags:3,img:PremiumCrossover,description:'A Crossover Premium, such as a Volkswagen Atlas or similar, seats up to 7 passengers and holds 4 bags. Its spacious cabin is perfect for a family vacation.',features:['2 Wheel Drive',,'Gasoline Vehicle',' Bluetooth','Cruise Control', 'AM/FM Stereo Radio','Automatic',' Air Conditioning']},

    {id:24,title:'JEEP', type:'awd',text:'Jeep Wrangler or similar',gearBox:'Automatic',people:4,bags:3,img:jeep,description:'Rent a 2-door Jeep Wrangler and embark on your next adventure. Whether it is exploring the beautiful Hawaii beaches, taking a trip along the Pacific Coast Highway, or a driving through New York City, a Jeep is a great choice.',features:['Gasoline Vehicle',,'Cruise Control','AM/FM Stereo Radio','Automatic' ,' Air Conditioning','4 Wheel Drive or All Wheel Drive']},
    {id:25,title:'JEEP Wrangler 4 Door', type:'awd',text:'Jeep Wrangler Unlimited or similar',gearBox:'Automatic',people:5,bags:5,img:jeepWrangler4Door,description:'Enjoy the flexibility a Jeep offers with plenty of space for passengers and cargo. Whether you are looking to explore the beautiful Hawaii beaches, taking a trip along the Pacific Coast Highway, or a driving through New York City, a Jeep is a great choice.',features:['Gasoline Vehicle',,'Cruise Control','AM/FM Stereo Radio','Automatic' ,' Air Conditioning','4 Wheel Drive or All Wheel Drive']}
];
export default ListOfCars;