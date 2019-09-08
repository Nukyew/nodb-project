import React, {Component} from 'react'

export default class CategorySelect extends Component {
    state = {
        categories: ['', 'cool', 'weird', 'stupid', 'funny', 'heartwarming']
    }

    render(){
        let list = this.state.categories.map((el, i) => {
            return <option key={i} value={el}>{el}</option>
        })
        return(
            <div className="category-select">
                <p className="category-select-title">I'm looking for something</p>
                <div>
                    <select onChange={e => this.props.selectCategory(e.target.value)}>
                        {list}
                        {!this.props.jonMode ? <></> : <option key={'jon'} value='jon'>Jon</option>}
                    </select>
                </div>
            </div>
        )
    }
}