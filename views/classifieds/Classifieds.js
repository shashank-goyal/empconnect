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
import data from './data'
export default class Classifieds extends Component {

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