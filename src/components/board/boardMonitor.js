import React from 'react';


export default class BoardMonitor extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            currentIndex: 0,
            length: 0,
            currentEntryId: 0
        }
        this.changeBoardEntry = this.changeBoardEntry.bind(this);
    }
       

    changeBoardEntry(e) {
        console.log(this.props.enableProject);
        if(this.state.currentEntryId !== this.props.enableProject.projectId){
            this.setState({
                currentIndex: 0,
                currentEntryId: this.props.enableProject.projectId
            });
        }
        this.setState({length: this.props.enableProject.entryList.length});
        e = e || window.event;             
        if (e.keyCode === 39 && this.state.length - 1 > this.state.currentIndex) {
            this.setState({currentIndex: this.state.currentIndex + 1});
            this.props.changeBoardEntry(this.state.currentIndex);
        } else if (e.keyCode === 37 && this.state.currentIndex > 0) {
            this.setState({currentIndex: this.state.currentIndex - 1});
            this.props.changeBoardEntry(this.state.currentIndex);
    
        }

        console.log(this.state.currentIndex);
        this.props.changeBoardEntry(this.state.currentIndex);
    }

    render(){
        if(this.props.enableProject !== undefined && this.props.enableProject !== ''){
        document.onkeydown = this.changeBoardEntry;
        if(this.props.enableProject.entryList[this.props.boardEntry].contentType === 'TEXT'){
            return(
                <div className='boardMonitor'>
                    <div className='boardMonitor__text'>{this.props.enableProject.entryList[this.props.boardEntry].entryText}</div>
                </div>
            );
        } else if(this.props.enableProject.entryList[this.props.boardEntry].contentType === 'IMAGE'){
            return(
                <div className='boardMonitor'>
                    <img alt={this.props.enableProject.entryList[this.props.boardEntry].entryName} 
                        className='BoardMonitor__image' src={'http://85.95.146.73:8080/' + this.props.enableProject.entryList[this.props.boardEntry].imagePath}/>
                </div>
            );
        } else if (this.props.enableProject.entryList[this.props.boardEntry].contentType === 'TABLE'){
            const table = this.props.enableProject.entryList[this.props.boardEntry].tableRowList.map(row => {
                return(
                    <li>{row.rowText}</li>
                );
            });
                return(
                    <div className='boardMonitor__table'>
                        <style>{this.props.enableProject.entryList[this.props.boardEntry].css}</style>
                        <ul className='slide__table'>
                            {table}
                        </ul>
                    </div>
                );
            }
        } else{
            return(
                <div className='boardMonitor'> ПРОЕКТ НЕ БЫРАН</div>
            );
        }
   }
}
