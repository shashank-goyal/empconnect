import React, { Component } from 'react'
import {
    Button,
    Container,
    Divider,
    Grid,
    Header,
    Icon,
    Image,
    List,
    Menu,
    Segment,
    Visibility,Dropdown,
    Tab,Label
} from 'semantic-ui-react'
import ClassifiedTile from './ClassifiedTile'
const description = [
    'Cute dogs come in a variety of shapes and sizes. Some cute dogs are cute for their adorable faces, others for their',
    'tiny stature, and even others for their massive size.',
  ].join(' ')
const data = [
    {
        title:"Shashank",
        image:"images/standing_ovation.png",
        type:"Standing Ovation",
        year:"Aug, 207",
        price:"200000",
        contact:"554554",
        description:description
    },
    {
        title:"Jimit",
        image:"images/badminton.png",
        type:"Badminton",
        year:"Sep, 2017",
        price:"1000",
        contact:"554554",
        description:description
    },
    {
        title:"Chandra",
        image:"images/table_tennis.jpg",
        type:"Table Tennis",
        year:"July, 2017",
        price:"1000000",
        contact:"55455ff4",
        description:description
    },
    {
        title:"Master",
        image:"images/singing.jpg",
        type:"Singing",
        year:"Nov, 2016",
        price:"100000",
        contact:"554554",
        description:description
    },
    {
        title:"Thiru",
        image:"images/dance.jpg",
        type:"Dancing",
        year:"Mar, 2012",
        price:"200000",
        contact:"554554",
        description:description
    }
]
export default class Achievements extends Component {


    render() {
        return (
            <div>
                <Segment style={{ padding: '6em 0em' }} vertical>
                    <Grid container stackable verticalAlign='top'>
                    <Grid.Row id="clasifiedTile">
                      <Grid.Column width={2}>
                       </Grid.Column>
                       <Grid.Column width={12}>
                         <ClassifiedTile data={data}/>
                        </Grid.Column>
                         
                    </Grid.Row>
                    </Grid>
                </Segment>
            </div>
        )
    }
}