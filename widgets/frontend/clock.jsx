import React from 'react';

class Clock extends React.Component {

    constructor(props){
        super(props);

       this.state = {
            time: new Date(),
        };

    }

    tick() {
        this.setState({
            time: new Date()
        });
    }

    componentDidMount() {
        const ticker = setInterval(this.tick.bind(this), 1000);
    }

    render() {

        const hours = this.state.time.getHours() % 12;
        const minutes = this.state.time.getMinutes();
        const seconds = this.state.time.getSeconds();
        var formattedMinutes = ("0" + minutes).slice(-2);
        var formattedSeconds = ("0" + seconds).slice(-2);

        return <div className="clock-div">
            <h1 className="widget-header">This is a clock</h1>
            <div className="clock">
                <p>
                    <span className="clock-header">Time</span>
                    <span>{hours}:{formattedMinutes}:{formattedSeconds}</span>
                </p>
                <p>
                    <span className="clock-header">Date</span>
                    <span>{this.state.time.toDateString()}</span>
                </p>
            </div>
        </div>
    }
}

export default Clock;