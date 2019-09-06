import React, {Component} from 'react'

export default class CategorySelect extends Component {
    state = {
        categories: ['', 'cool', 'weird', 'stupid', 'funny', 'heartwarming', 'jon']
    }

    render(){
        let list = this.state.categories.map((el, i) => {
            return <option key={i} value={el}>{el}</option>
        })
        return(
            <div>
                <form>
                    I'm looking for something
                    <select onChange={e => this.props.selectCategory(e.target.value)}>
                        {list}
                    </select>
                </form>
            </div>
        )
    }
}