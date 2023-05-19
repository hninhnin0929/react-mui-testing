const person = {
    name: 'Gregorio Y. Zara',
    theme: {
        backgroudColor: 'black',
        color: 'pink'
    }
};
export default function Profilejsx(){
    return(
        <div style={person.theme}>
            <h1>{person.name}'s Todos</h1>
            <img 
                className="avatar"
                src="https://i.imgur.com/7vQDofPs.jpg"
                alt="Gregorio Y. Zara"/>
            <ul>
                <li>Improve the videophone</li>
                <li>Prepare aeronautics lectures</li>
                <li>Work on the alcohol-fuelled engine</li>
            </ul>
        </div>
    );
}