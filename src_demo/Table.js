import React,{Component} from 'react';
class Table extends Component{
    render(){
        const characterData=this.props.characterData;
        const removeCharacter=this.props.removeCharacter;

        return(
            <table>
                <TableHeader />
                <TableBody characterData={characterData} 
                    removeCharacter={removeCharacter}
                />
            </table>    
        )
    }
}

const TableBody = props => { 
    const rows=props.characterData.map((row,index)=>{
        return (
            <tr key={index}>
            <td>{row.name}</td>
            <td>{row.job}</td>
            <td><button onClick={()=>props.removeCharacter(index)}>Delete</button></td>
            </tr>
        );
    })
    return <tbody>{rows}</tbody>;
}

const TableHeader = () => { 
    return (
        <thead>
            <tr>
                <th>Name</th>
                <th>Job</th>
            </tr>
        </thead>
    );
}

export default Table;