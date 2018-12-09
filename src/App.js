import React, {Component} from 'react';import './App.css';import axios from 'axios';class App extends Component {    state = {        stations: []    }    componentDidMount() {        this.getStations();        this.renderMap();    }    renderMap = () => {        loadScript("https://maps.googleapis.com/maps/api/js?key=" +            "AIzaSyAAHhlH1VNV94TBEO4wLnaJvNaw5r6W9sk&callback=initMap");        window.initMap = this.initMap;    }    getStations = () => {        const endPoint = "https://api.virta.fi/v4/stations";        axios.get(endPoint).then((response) => {            this.setState({stations: response.data})        })            .catch(error => {                console.log("ERROR: " + error)            })    }    initMap = () => {        const map = window.google.maps.Map(document.getElementById('map'), {            center: {lat: -34.397, lng: 150.644},            zoom: 8        });        const marker = new window.google.maps.Marker({            position: {lat: -34.397, lng: 150.644},            map: map,            title: "Hello World"        })    }    render() {        return (            <main>                <div id='map'></div>            </main>        );    }}function loadScript(url) {    var index = window.document.getElementsByTagName("script")[0];    var script = window.document.createElement("script");    script.src = url;    script.async = true;    script.defer = true;    index.parentNode.insertBefore(script, index);}export default App;