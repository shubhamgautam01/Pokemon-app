import React from 'react';
//import Cards from './Cards';
import { Form, FormGroup, FormLabel, FormControl ,Container, Row, Col, Button  } from 'react-bootstrap';




const InputField = {
    width: '33%',
    height: '25px',
    border: '2px Solid grey',
    borderRadius: '7px',
    marginTop: '8px',
    marginBottom: '4px',
    padding: '6px',
    fontSize: '15px',


};

const Label ={
    textAlign: 'Left',
};

const ButtonStyle = {
    width: '20%',
    height: '40px',
    fontSize: '18px',
    marginTop: '14px',
    borderRadius: '6px',
    backgroundColor: '#639f3f',
    color: 'white',
    fontWeight: '500',

};

const TypeStyle = {
    display: 'inline-flex',
};

const Card = {
    border: '2px solid white',
    width: '70%',
    display: 'inline-block',
    margin: '30px',
    background: '#eaf5f0',
};

const LabelBar = {
    margin: '18px',
    color: '#0e233a',
    fontFamily: 'serif',
};









class Fields extends React.Component{



    constructor(props) {
        super(props);
        this.state = {
            visible: false,
            isLoading: true,
            errors: null,
            bawsala_code: '',
            contact_no: '',
            country_code: '',
            data: { },
        };
        this.handleSubmit = this.handleSubmit.bind(this);

    };




    handleSubmit(e) {
        //this.refs.bawsala_code.value
        e.preventDefault();
        let reqBody = {
            bawsala_code: this.refs.bawsala_code.value,
            contact_no: this.refs.contact_no.value,
            country_code: this.refs.country_code.value
        };

        const url = "http://team.bawsala.net/api/v1/search-bawsala-code";



        fetch(url, {

            method: "POST",
            mode:'no-cors',
            cache: 'no-cache',
            credentials: "include",
            headers: {
                //'Authorization': "--token-",
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'api-key': "4f774d79346777546c7534614c50736b394a3063504c3079",
                'ln': "en",
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Request-Methods': 'POST',
                'Access-Control-Request-Headers': 'Origin'
            },
            body: JSON.stringify(reqBody)
        })

            .then((res) => {

                console.log("Bawsala Code", res);

                if (res.ok) {
                    return res.json();
                } else {
                    throw new Error('Something went wrong with your fetch');
                };
            })

            .then((json) => {

                this.setState({
                    visible: true,
                    isLoading: false,
                    data: JSON.parse(JSON.stringify(json.payload)),
                });



            })

    }


    componentDidMount(){
        this.generateItem();
    }



    renderElement(){


        if(this.state.data.bawsala_code_details[0].customer_details[0].customer_address.address_type === 1)
            return (
                <div>
                    <h3 style={{color: '#1B2631',}}><strong style={{marginRight: '18px', color: '#0e233a', fontFamily: 'serif',}}>House:</strong> Office No. {this.state.data.bawsala_code_details[0].customer_details[0].customer_address.building_no},
                        Floor No. {this.state.data.bawsala_code_details[0].customer_details[0].customer_address.street_name}</h3>
                </div>
            );
        else if(this.state.data.bawsala_code_details[0].customer_details[0].customer_address.address_type === 2)
            return (
                <div>
                    <h3 style={{color: '#1B2631',}}><strong style={{marginRight: '18px', color: '#0e233a', fontFamily: 'serif',}}>Office:</strong> {this.state.data.bawsala_code_details[0].customer_details[0].customer_address.delivery_place_name},
                        Office No. {this.state.data.bawsala_code_details[0].customer_details[0].customer_address.delivery_place_number},
                        Floor No. {this.state.data.bawsala_code_details[0].customer_details[0].customer_address.floor},
                        Building No. {this.state.data.bawsala_code_details[0].customer_details[0].customer_address.building_no},
                        {this.state.data.bawsala_code_details[0].customer_details[0].customer_address.street_name} </h3>
                </div>
            );

        else if(this.state.data.bawsala_code_details[0].customer_details[0].customer_address.address_type === 3)
            return (
                <div>
                    <h3 style={{color: '#1B2631',}}><strong style={{marginRight: '18px', color: '#0e233a', fontFamily: 'serif',}}>Shop:</strong> {this.state.data.bawsala_code_details[0].customer_details[0].customer_address.delivery_place_name},
                        Shop No. {this.state.data.bawsala_code_details[0].customer_details[0].customer_address.delivery_place_number},
                        Floor No. {this.state.data.bawsala_code_details[0].customer_details[0].customer_address.floor},
                        Building No. {this.state.data.bawsala_code_details[0].customer_details[0].customer_address.building_no},
                        {this.state.data.bawsala_code_details[0].customer_details[0].customer_address.street_name} </h3>
                </div>
            );

        else
            return (
                <div>
                    <h3 style={{color: '#1B2631',}}><strong style={{marginRight: '18px', color: '#0e233a', fontFamily: 'serif',}}>Apartment:</strong> {this.state.data.bawsala_code_details[0].customer_details[0].customer_address.delivery_place_name},
                        Apartment No. {this.state.data.bawsala_code_details[0].customer_details[0].customer_address.delivery_place_number},
                        Floor No. {this.state.data.bawsala_code_details[0].customer_details[0].customer_address.floor},
                        Building No. {this.state.data.bawsala_code_details[0].customer_details[0].customer_address.building_no},
                        {this.state.data.bawsala_code_details[0].customer_details[0].customer_address.street_name} </h3>
                </div>
            )
    };




    generateItem() {



        if (this.state.visible) {
            return(
                <div>
                    <Container style={Card}>
                        <div style={TypeStyle}>
                            <h3 style={LabelBar} >First Name:</h3>
                            <h4 style={{color: '#1B2631',}}>{this.state.data.customer.first_name}</h4>
                        </div>

                        <br/>
                        <div style={TypeStyle}>
                            <h3 style={LabelBar}>Last Name:</h3>
                            <h4 style={{color: '#1B2631',}}>{this.state.data.customer.last_name}</h4>
                        </div>
                        <br/>

                        <div style={TypeStyle}>
                            <h3 style={LabelBar}>Mobile Number:</h3>
                            <h4 style={{color: '#1B2631',}}>{this.state.data.customer.mobile}</h4>
                        </div>
                        <br/>

                        <div style={TypeStyle}>
                            <h3 style={LabelBar}>Address Type:</h3>
                            <h4 style={{color: '#1B2631',}}>
                                {
                                    this.state.data.bawsala_code_details[0].address_type
                                }
                            </h4>
                        </div>
                        <br/>

                        {/* Image of the User */}
                        {/*<h2>{this.state.data.customer.avatar}</h2>*/}

                        <div style={TypeStyle}>
                            {this.renderElement()}
                        </div>
                        <br/>
                    </Container>
                </div>
            )
        }
        return null;
    }






    render() {

        return (
            <Container>



                <Form onSubmit={this.handleSubmit}>
                    <Row>
                        <FormGroup >
                            <Col xs={12} md={4}>
                                <FormLabel style={Label}>Bawsala Code</FormLabel>
                            </Col>
                            <Col xs={12} md={8}>
                                <FormControl style={InputField} type='text' ref="bawsala_code" name='bawsala_code' placeholder='Bawsala Code'
                                             required={true} />
                            </Col>
                        </FormGroup>
                    </Row>

                    <Row>
                        <FormGroup>
                            <Col xs={12} md={4}>
                                <FormLabel style={Label}>Contact Number:</FormLabel>
                            </Col>
                            <Col xs={12} md={8}>
                                <FormControl style={InputField} type='text' ref="contact_no" name='contact_no' placeholder='Contact No'  />
                            </Col>
                        </FormGroup>
                    </Row>

                    <Row>
                        <FormGroup >
                            <Col xs={12} md={4}>
                                <FormLabel style={Label}>Country Code:</FormLabel>
                            </Col>
                            <Col xs={12} md={8}>
                                <FormControl style={InputField} type='text' ref="country_code" name='country_code' placeholder='Country Code'
                                              />

                            </Col>
                        </FormGroup>
                    </Row>

                    <Row>
                        <Button style={ButtonStyle} type='submit' value="Submit" >Submit</Button>
                    </Row>
                </Form>



                {this.generateItem()}

            </Container>

        );
    }
}




export default Fields;
