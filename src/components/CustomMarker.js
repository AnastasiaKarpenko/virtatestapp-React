import React from 'react';
import axios from "axios";
import {InfoWindow, Marker} from "react-google-maps";

class CustomMarker extends React.PureComponent {
    state = {
        isOpen: false,
        isLoading: false,
        savedInfo: null
    };

    toggle = () => {
        this.setState({
            isOpen: !this.state.isOpen
        });
    };

    onMarkerClickHandler = () => {
        console.log("Clicked on", this.props.data); // this.props.data is station
        if (this.state.isOpen) {
            this.setState({
                isOpen: false
            });
        } else {
            this.setState({
                isLoading: true,
                isOpen: true
            });
            axios.get('https://api.virta.fi/v4/stations/' + this.props.data.id).then(({data}) => {
                this.setState({
                    savedInfo: data
                });
                this.setState({
                    isLoading: false
                });
            }).catch(() => {
                this.setState({
                    isLoading: false
                });
            });
        }
    };

    getStatusText(status) {
        if (status === 1) {
            return "Available";
        }
        if (status === 2) {
            return "Busy"
        }

        return "-";
    }

    renderStatus() {
        if (this.state.isLoading) {
            return "Loading...";
        }
        if (!this.state.savedInfo) {
            return null;
        }

        return <div>
            {
                "Station: " + this.state.savedInfo.name
            }

            {
                this.state.savedInfo.evses.map((ev, key) => <div>
                    EvCharger #{key + 1} {this.getStatusText(ev.status)}
                </div>)
            }
        </div>
    }

    render() {
        return (
            <Marker position={this.props.position} onClick={this.onMarkerClickHandler}>
                {(this.state.isOpen && <InfoWindow onCloseClick={this.toggle}>
                    <div>
                        {this.renderStatus()}
                    </div>
                </InfoWindow>) || null}
            </Marker>
        );
    }
}

export default CustomMarker;