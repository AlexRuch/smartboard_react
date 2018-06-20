import React from 'react';
import { connect } from 'react-redux';
import { loadEnableProject, changeBoardEntry, setDefaultEntry } from '../actions/projects';
import BoardMonitor from '../components/board/boardMonitor';

class Board extends React.Component {
    componentWillMount() {
        const SERVER_ADDRESS = 'http://85.95.146.73:8080';
        const eventSource = new EventSource(SERVER_ADDRESS + '/live/update');
        eventSource.onopen = function (e) {
                    console.log("Соединение открыто");
                
        };

        eventSource.onerror = function (e) {
            if (this.readyState === EventSource.CONNECTING) {
                console.log("Соединение порвалось, пересоединяемся...");        
            } else {
                console.log("Ошибка, состояние: " + this.readyState);        
            }
        };
        eventSource.onmessage = ( message ) => {
            console.log(JSON.parse(message.data));
            this.props.setDefaultEntry();
            this.props.loadEnableProject(JSON.parse(message.data));
        }
    }

    render(){
        return(
            <BoardMonitor enableProject={this.props.enableProject}
                          boardEntry={this.props.boardEntry}
                          changeBoardEntry={(entryIndex) => this.props.changeBoardEntry(entryIndex)} 
                          entryIndex={this.props.entryIndex} />
        );
    }

}

function mapStateToProps(state) {
    return {
        enableProject: state.projects.enableProject,
        boardEntry: state.projects.boardEntry, 
        entryIndex: state.projects.entryIndex
    }
}

function mapDispatchToProps(dispatch) {
    return {
        loadEnableProject: ( project ) => {
            dispatch(loadEnableProject(project))
        },
        changeBoardEntry: ( entryIndex ) => {
            dispatch(changeBoardEntry(entryIndex))
        },
        setDefaultEntry: () => {
            dispatch(setDefaultEntry());
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Board);
