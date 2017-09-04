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

import AchievementTile from './AchievementTile'
import data from './data'

export default class Achievements extends Component {


    render() {
        return (
            <div>
                <Segment style={{ padding: '6em 0em' }} vertical>
                    <Grid container stackable verticalAlign='top'>
                    <Grid.Row id="AchievementTile">
                      <Grid.Column width={2}>
                       </Grid.Column>
                       <Grid.Column width={12}>
                         <AchievementTile data={data}/>
                        </Grid.Column>
                         
                    </Grid.Row>
                    </Grid>
                </Segment>
            </div>
        )
    }
}