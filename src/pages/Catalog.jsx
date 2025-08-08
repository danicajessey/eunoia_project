import '../styles/Catalog.css';
import Navbar from '../components/Navbar';
import { useState } from 'react';
import Snackbouquet from '../assets/images/Snackbouquet.png';
import moneybouquet from '../assets/images/moneybouquet.png';
import custombouquet from '../assets/images/custombouquet.png';
import giftbox from '../assets/images/giftbox.png';
import classygift from '../assets/images/classygift.png';
import gift from '../assets/images/giftt.jpg'
import giftframe from '../assets/images/giftframe.png'
import flowerbouquet from '../assets/images/flowerbouquet.png'


function Catalog () {
    return (
        <>
        <Navbar />
        <div className="header">Catalog</div>
        <div className="grid-container">
            <div className="card">
                <img src={Snackbouquet}alt="Snack bouquet" />
                <p>Snack Bouquet</p>
                <button>Add Cart</button>
            </div>
            <div className="card">
                <img src={moneybouquet}alt="money bouquet" />
                <p>Money Bouquet</p>
                <button>Add Cart</button>
            </div>
            <div className="card">
                <img src={flowerbouquet}alt="flower bouquet" />
                <p>Flower Bouquet</p>
                <button>Add Cart</button>
            </div>
            <div className="card">
                <img src={custombouquet}alt="custom bouquet" />
                <p>Custom Bouquet</p>
                <button>Add Cart</button>
            </div>
            <div className="card">
                <img src={giftbox}alt="gift box" />
                <p>Gift Box</p>
                <button>Add Cart</button>
            </div>
            <div className="card">
                <img src={classygift}alt="classy card" />
                <p>Classy Card</p>
                <button>Add Cart</button>
            </div>
            <div className="card">
                <img src={gift}alt="Gift" />
                <p>Garden in the Dome</p>
                <button>Add Cart</button>
            </div>
            <div className="card">
                <img src={giftframe}alt="gift frame" />
                <p>Gift Framet</p>
                <button>Add Cart</button>
            </div>
        </div>
        </>
    )
}

export default Catalog;
