import React, { Component } from 'react'
import axios from 'axios'
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
import SimpleSlider from './SimpleSlider'

export default class Achievements extends Component {

    constructor(props){
       super(props);
       this.state = {
           activeItem : 'home'
       }
       this.handleItemClick = this.handleItemClick.bind(this);
    }

    handleItemClick(e, {name}){
        this.setState({activeItem:name})
        if(name=='home'){
            console.log('home')
        }else {
            console.log('cultural')
        }

    }

    render() {
        var {activeItem} = this.state
        return (
            <div>
                <Segment style={{ padding: '6em 0em' }} vertical>
                    <Grid container stackable verticalAlign='top'>
                        <Grid.Row>
                            <Grid.Column width={4}>
                                <Menu pointing secondary vertical>
                                    <Menu.Item name='home' active={activeItem === 'home'} icon="home" size="large" onClick={this.handleItemClick}>
                                    Home
                                    </Menu.Item>

                                    <Menu.Item name='rewards' active={activeItem === 'standingOvation'} onClick={this.handleItemClick}>
                                    Rewards Ricognation
                                    <img src='images/standing_ovation.png'   className='CustomIcon'/>
                                    </Menu.Item>

                                    <Menu.Item name='sports' active={activeItem === 'sports'} onClick={this.handleItemClick}>
                                    Sports
                                    <img src='images/sports_icon.svg' className='CustomIcon'/>
                                    </Menu.Item>

                                    <Menu.Item name='cultural' active={activeItem === 'culturalActivities'} onClick={this.handleItemClick}>
                                    Cultural  Activities
                                    <img src='images/cultural_activities_icon.svg' className='CustomIcon'/>
                                    </Menu.Item>
                                </Menu>
                            </Grid.Column>

                            <Grid.Column width={12}>
                                {activeItem == 'home' ? <SimpleSlider/> : <AchievementTile data={data}/>}
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </Segment> 
            </div>
        )
    }
}