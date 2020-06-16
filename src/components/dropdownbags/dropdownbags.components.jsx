import React from 'react';

import DropdownList from '../dropdown-list/dropdown-list.components';

import './dropdownbags.styles.scss';

class DropDownBags extends React.Component{
    constructor(){
        super()

        this.state={
            bags:[
                {
                    id:1,
                    title:'BAGS',
                    subtitle:'ALL',
                    linkUrl:'category/all-products'
                },
                {
                    id:2,
                    title:'BAGS',
                    subtitle:'BACKPACKS',
                    linkUrl:'category/backpacks'
                },
                {
                    id:3,
                    title:'BAGS',
                    subtitle:'STACHELS',
                    linkUrl:'category/satchels'
                },
                {
                    id:4,
                    title:'BAGS',
                    subtitle:'HANDBAGS',
                    linkUrl:'category/handbags'
                },
                {
                    id:5,
                    title:'BAGS',
                    subtitle:'MENS',
                    linkUrl:'category/mens'
                },
                {
                    id:6,
                    title:'BAGS',
                    subtitle:'LAPTOP CASES',
                    linkUrl:'category/laptop-cases'
                },{
                    id:7,
                    title:'BAGS',
                    subtitle:'WALLETS',
                    linkUrl:'category/wallets'
                },
                {
                    id:8,
                    title:'BAGS',
                    subtitle:'OTHER',
                    linkUrl:'category/other'
                }
            ]
        }
    }
    render(){
        return(
            <div className='bag'>
                {/* <form>
                    <input type='text'/>
                </form> */}
                {this.state.bags.map(({ id, subtitle, linkUrl }) => (
                <DropdownList key={id} subtitle={subtitle} linkUrl={linkUrl}/>))}
            </div>
        )
    }
};

export default DropDownBags;