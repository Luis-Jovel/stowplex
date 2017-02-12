import React, {Component} from 'react';
import boxes from '../../boxes.jpg';
import ladies from './img/ladies.jpg';
import bike from './img/bike.jpg';
import GoogleMap from 'google-map-react'
import MyGreatPlace from './my_great_place.jsx';

import {Grid, Row, Col, PageHeader, Button, Glyphicon, FormControl} from 'react-bootstrap';
import {Typeahead} from 'react-bootstrap-typeahead';
let DatePicker = require('react-bootstrap-date-picker');

class HomePage extends Component {
	static defaultProps = {
	    center: {lat: 47.6101360, lng: -122.3420570},
	    neigh1: {lat: 47.6091360, lng: -122.3400570},
	    neigh2: {lat: 47.6141360, lng: -122.3390570},
	    neigh3: {lat: 47.6121360, lng: -122.3440870},

	    zoom: 9,
	    greatPlaceCoords: {lat: 59.724465, lng: 30.080121}
	};
    constructor(props){
    	super(props)
    	this.state = {
    		city: '',
    		size: '',
    		date: ''
    	}
    	this.search=this.search.bind(this);
    }
    cities = ['Seattle', 'Redmond', 'Bellevue', 'New-York', 'Los Angeles'];

    search() {
    	// location.href = '/search?city=' + this.state.city + '&size' + this.state.size + '&checkIn=' + this.state.date;
    	window.location='/listing/1'
    }

    render() {
        return (
        	<div>
            {/*Grid fluid={true}*/}
           <Grid>
                {/* <div style={{ width: "100%", height: 325, backgroundPosition: 'right center bottom 220px', backgroundImage: `url(${bike})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}></div> */}
                <div style={{ width: "100%", height: 370, backgroundPosition: 'center center', backgroundImage: `url(${ladies})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}></div>
                <PageHeader>Store your valuables<br/>
                    <small>love your stuff with StowPlex.</small>
                </PageHeader>
                <Row>
                    <Col className="nopadding-right" xs={9} smOffset={1} lgOffset={1} mdOffset={1} sm={4} lg={4}
                         md={4}>
                        <Typeahead options={this.cities} bsSize="large" placeholder="City" style={{ width: "100%" }}
                                   onChange={(e) => {
                                       this.setState({ city: e.target.value })
                                   }} value={this.state.city}/>
                    </Col>
                    <Col className="nopadding" xsHidden={true} sm={2} lg={2} md={2}>
                        <DatePicker bsSize="large" style={{ width: "100%" }}
                                    className="input-lg" onChange={(e) => {
                            this.setState({ date: e.target.value })
                        }} value={this.state.date}/>
                    </Col>
                    <Col className="nopadding" xsHidden={true} sm={2} lg={2} md={2}>
                        <FormControl componentClass="select" placeholder="select" bsSize="large" className="input-lg"
                                     style={{ width: "100%" }} onChange={(e) => {
                            this.setState({ size: e.target.value })
                        }} value={this.state.size}>
                            <option value="sm">Size</option>
                            <option value="sm">0-100 sqft.</option>
                            <option value="md">100-300 sqft.</option>
                            <option value="lg">300-1000 sqft.</option>
                        </FormControl>
                    </Col>
                    <Col xs={3} sm={2} lg={2}
                         md={2}><Button bsStyle="primary" bsSize="large" style={{ width: "100%" }}
                                        onClick={this.search}><Glyphicon
                        glyph="search"/>&nbsp;<span className="hidden-sm">Search</span></Button>
                    </Col>
                </Row>
            <div style={{paddingTop: 50, height: 400}}>
            <GoogleMap
              bootstrapURLKeys={{
                key: 'AIzaSyAxDKJ3r8J6Fnal3vSFuWyXEvv-nydofx0',
              }}
              defaultCenter={this.props.center}
              defaultZoom={15} >
              <span {...this.props.center}
                className="glyphicon glyphicon-map-marker"
                style={{fontSize: 40, color: '#d9230f', textShadow: '1px 2px 0 #eee'}}>
              </span>
              <span {...this.props.neigh1}
                className="glyphicon glyphicon-map-marker"
                style={{fontSize: 40, color: '#33AFFF', textShadow: '1px 2px 0 #eee'}}>
              </span>
              <span {...this.props.neigh2}
                className="glyphicon glyphicon-map-marker"
                style={{fontSize: 40, color: '#33AFFF', textShadow: '1px 2px 0 #eee'}}>
              </span>
              <span {...this.props.neigh3}
                className="glyphicon glyphicon-map-marker"
                style={{fontSize: 40, color: '#33AFFF', textShadow: '1px 2px 0 #eee'}}>
              </span>
            </GoogleMap>
          </div>
            </Grid>
</div>
        );
    }
}

export default HomePage;
