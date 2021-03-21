import React from 'react';
import Ganesh from '../images/ganesh.jpg'
import Shanmukha from '../images/shanmukha.jpg'
import Ayyappa from '../images/ayyappa.jpg'
import Hanuman from '../images/hanuman.jpg'
import Krishna from '../images/krishna.jpg'
import RamaSita from '../images/rama_sita.jpg'
import ShivaParvathi from '../images/shiva_parvathi.jpg'
import Shivalinga from '../images/shivalinga.jpg'
import Vishnu from '../images/vishnu.jpg'
import Dakshinamurthy from '../images/dakshinamurthy.jpg'
import Periyavar from '../images/periyavar.jpg'
import Navagraha from '../images/navagraha.jpg'


const Deities = () => {
    return (
        <div id="deities">
            <h1>Deities</h1>
            <div className="deities-details">
                <div className="card">
                    <img className="card-img-top" src={Ganesh} alt="ganesh"></img>
                    <div className="card-body">
                    <h3 className="card-title">Lord Ganesha</h3>
                        <p className="card-text">The lord who removes all obstacles</p>
                    </div>
                </div>
                <div className="card">
                    <img className="card-img-top" src={Hanuman} alt="hanuman"></img>
                    <div className="card-body">
                        <h3 className="card-title">Lord Hanuman</h3>
                        <p className="card-text">The greatest devotee of Lord Rama</p>
                    </div>
                </div>
                <div className="card">
                    <img className="card-img-top" src={Krishna} alt="krishna"></img>
                    <div className="card-body">
                        <h3 className="card-title">Lord Krishna</h3>
                        <p className="card-text">The universal Guru</p>
                    </div>
                </div>
                <div className="card">
                    <img className="card-img-top" src={RamaSita} alt="rama-sita"></img>
                    <div className="card-body">
                        <h3 className="card-title">Rama and Sita</h3>
                        <p className="card-text">Rama and his family</p>
                    </div>
                </div>
                <div className="card">
                    <img className="card-img-top" src={Shanmukha} alt="Shanmukha"></img>
                    <div className="card-body">
                        <h3 className="card-title">Lord Shanmukha</h3>
                        <p className="card-text">Shanmukha and his consorts</p>
                    </div>
                </div>
                <div className="card">
                    <img className="card-img-top" src={Ayyappa} alt="ayyappa"></img>
                    <div className="card-body">
                        <h3 className="card-title">Lord Ayyappa</h3>
                        <p className="card-text">Harihara Suta</p>
                    </div>
                </div>
                <div className="card">
                    <img className="card-img-top" src={ShivaParvathi} alt="Shiva-Parvathi"></img>
                    <div className="card-body">
                        <h3 className="card-title">Shiva and Parvathi</h3>
                        <p className="card-text">The Prakriti and Purusha</p>
                    </div>
                </div>
                <div className="card">
                    <img className="card-img-top" src={Vishnu} alt="vishnu"></img>
                    <div className="card-body">
                        <h3 className="card-title">Lord Vishnu</h3>
                        <p className="card-text">The sustainer of universe</p>
                    </div>
                </div>
                <div className="card">
                    <img className="card-img-top" src={Shivalinga} alt="shiva"></img>
                    <div className="card-body">
                        <h3 className="card-title">Shivalingam</h3>
                        <p className="card-text">The destroyer of universe</p>
                    </div>
                </div>
                <div className="card">
                    <img className="card-img-top" src={Dakshinamurthy} alt="dakshinamurthy"></img>
                    <div className="card-body">
                        <h3 className="card-title">Lord Dakshinamurthy</h3>
                        <p className="card-text">The first Guru</p>
                    </div>
                </div>
                <div className="card">
                    <img className="card-img-top" src={Periyavar} alt="periyavar"></img>
                    <div className="card-body">
                        <h3 className="card-title">Sri Chandrasekharendra Saraswati</h3>
                        <p className="card-text">Sage of Kanchi or Mahaperiyava</p>
                    </div>
                </div>
                <div className="card">
                    <img className="card-img-top" src={Navagraha} alt="navagraha"></img>
                    <div className="card-body">
                        <h3 className="card-title">Navagraha</h3>
                        <p className="card-text">The nine great seizers, also referred to as grahas</p>
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default Deities
