import React, { Component } from 'react';



class ScrollTop extends Component {
    state = { 
        intervalId: 0,
        scrollShow :false,
        activeHeight: '',
     }
  
scrollStep() {
    if (window.pageYOffset === 0) {
        clearInterval(this.state.intervalId);
    }
    window.scroll(0, window.pageYOffset - 100);
  }
  
  scrollToTop() {
    let intervalId = setInterval(this.scrollStep.bind(this), 10);
    this.setState({ intervalId: intervalId });
    
  }

    render() {
        
        document.onscroll = ()=>{
            if(window.pageYOffset > 500){
                this.setState({
                    activeHeight : 'show'
                })
          }else{
            this.setState({
                activeHeight : ''
            }) 
          }
        }

        return (
            <span onClick={ () => { this.scrollToTop(); }}  className={`back-to-top ${this.state.activeHeight}`}>
                <i className="flaticon-pointer-inside-a-circle"></i>
            </span>
        );
    }
}

export default ScrollTop;