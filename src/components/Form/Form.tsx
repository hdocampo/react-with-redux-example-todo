import React from 'react'

interface IProps {
    text: string;
    age?: number;
}

interface IState {
    email: string;
    name: string;
    [index: string]: string;
}

export default class Form extends React.Component<IProps, IState> {
    state: IState = {
        email: '',
        name: ''
    };

    private handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value  } = e.currentTarget;
        this.setState({ [`${name}`]: value });
    }

    public render() {
        const { text, age } = this.props;
        const { name, email } = this.state;
        return (
            <div>
                <h1>My Form component</h1>
                <p>{text} your age is {age}</p>
                <input type="text" name="name" value={name} onChange={this.handleChange} />
                <p>Welcome {name}</p>
                <input type="email" name="email" value={email} onChange={this.handleChange} />
                <p>Your e-mail is {email}</p>
            </div>
        );
    }
}
