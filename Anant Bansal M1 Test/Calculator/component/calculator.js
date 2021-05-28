import React from 'react';
import './calcui.css'

export default class Calc extends React.Component {


    constructor() {
        super();
        this.state = {
            question: '',
            answer: ''
        }
        this.handleClick = this.handleClick.bind(this);
    }


    render() {
        return ( <
            div class = 'main' >
            <
            input type = 'text'
            value = { this.state.question }
            />        <
            input type = 'text'
            value = { this.state.answer }
            /> <
            button name = 'clear'
            className = 'item-1'
            onClick = { this.handleClick } > clear < /button>  <
            button name = '='
            className = 'item'
            onClick = { this.handleClick }
            id = 'item-sign' >= < /button> <
            button name = '+'
            className = 'item'
            onClick = { this.handleClick }
            id = 'item-sign' > + < /button>  <
            button name = '7'
            className = 'item'
            onClick = { this.handleClick } > 7 < /button> <
            button name = '8'
            className = 'item'
            onClick = { this.handleClick } > 8 < /button> <
            button name = '9'
            className = 'item'
            onClick = { this.handleClick } > 9 < /button> <
            button name = '-'
            className = 'item'
            onClick = { this.handleClick }
            id = 'item-sign' > - < /button>  <
            button name = '4'
            className = 'item'
            onClick = { this.handleClick } > 4 < /button> <
            button name = '5'
            className = 'item'
            onClick = { this.handleClick } > 5 < /button> <
            button name = '6'
            className = 'item'
            onClick = { this.handleClick } > 6 < /button> <
            button name = '*'
            className = 'item'
            onClick = { this.handleClick }
            id = 'item-sign' > * < /button> <
            button name = '1'
            className = 'item'
            onClick = { this.handleClick } > 1 < /button> <
            button name = '2'
            className = 'item'
            onClick = { this.handleClick } > 2 < /button> <
            button name = '3'
            className = 'item'
            onClick = { this.handleClick } > 3 < /button> <
            button name = '/'
            className = 'item'
            onClick = { this.handleClick }
            id = 'item-sign' > /</button >
            <
            /div>
        );

    }
    handleClick(event) {
        const value = event.target.name;
        switch (value) {
            case '=':
                {
                    if (this.state.question !== '') {
                        var ans = '';
                        try {
                            ans = eval(this.state.question);
                        } catch (err) {
                            this.setState({ answer: "Math Error" });
                        }
                        if (ans === undefined)
                            this.setState({ answer: "Math Error" });
                        else
                            this.setState({ answer: ans, question: '' });
                        break;
                    }
                }
            case 'clear':
                {
                    this.setState({ question: '', answer: '' });
                    break;
                }

            case 'Delete':
                {
                    var str = this.state.question;
                    str = str.substr(0, str.length - 1);
                    this.setState({ question: str });
                    break;
                }

            default:
                {
                    this.setState({ question: this.state.question += value })
                    break;
                }
        }
    }

}