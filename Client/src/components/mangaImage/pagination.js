import React from 'react';
import Pagination from "react-js-pagination";
import MaterialIcon from '../global/materialicon';

class Paginations extends React.Component {
    constructor() {
        super()
        this.state = {
            page: 1
        }
    }

    render() {
        return (

            <Pagination
                hideFirstLastPages
                prevPageText={<MaterialIcon iconName='keyboard_arrow_left' />}
                nextPageText={<MaterialIcon iconName='keyboard_arrow_right' />}
                pageRangeDisplayed={5}
                activePage={this.state.page}
                itemsCountPerPage={42}
                totalItemsCount={520}
                onChange={(e) => {
                    this.setState({ page: e })
                    this.props.fetch(e)
                }}
            />

        )
    }
}

export default Paginations;