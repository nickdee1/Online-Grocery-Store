import React from "react";
import Item from "../Item";

class MeatCategory extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: []
        };
    }

    componentDidMount() {
        fetch("http://localhost:8080/items")
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        items: result.items
                    });
                },
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    })
                }
            )
    }

    render() {
        const { error, isLoaded, items } = this.state;
        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <div>Loading...</div>;
        } else {
            return (
                <div>
                    <h1 style={{paddingLeft: "20px", marginTop: "20px", marginBottom: "10px"}}>Meat</h1>

                    <div className="app">

                        {items.map(item => (
                            <Item itemName={item.name} price={item.price} id={item.id}/>
                        ))}
                    </div>
                </div>
            );
        }
    }


}

export default MeatCategory;