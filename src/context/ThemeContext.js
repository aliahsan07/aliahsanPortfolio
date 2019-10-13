import React from 'react';

const defaultState = {
    dark: false,
    notFound: false,
    toggleDark: () => {},
};

const ThemeContext = React.createContext(defaultState);

class ThemeProvider extends React.Component {
    state={
        dark: false,
        notFound: false,
    }


    componentDidMount(){
        const isDark = JSON.parse(localStorage.getItem('dark'));

        if (isDark){
            this.setState({ dark: isDark });
        }
    }

    componentDidUpdate(prevState){
        const { dark } = this.state;

        if(prevState.dark != dark){
            localStorage.setItem('dark', JSON.stringify('dark'));
        }
    }

    toggleDark = () => {
        this.setState(prevState => ({ dark: !prevState.dark }))
    }
    
    setNotFound = () => {
        this.setState({ notFound: true })
    }

    setFound = () => {s
        this.setState({ notFound: false })
    }

    render(){
        const { children } = this.props;
        const { dark, notFound } = this.state;

        return (
            <ThemeContext.Provider
                value={{
                    dark,
                    notFound,
                    setFound: this.setFound,
                    setNotFound: this.setNotFound,
                    toggleDark: this.toggleDark,
                }} 
                >
                    {children}
                </ThemeContext.Provider>
        )
    }
}


export default ThemeContext;

export { ThemeProvider };