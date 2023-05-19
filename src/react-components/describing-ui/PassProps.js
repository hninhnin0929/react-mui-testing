import { get } from 'jquery';
import Avatar from './Avatar';


function Card({ children }){
    return(
        <div className='card'>
            {children}
        </div>
    )
}

export default function PassProps(){
    return (
        <div>
            <Card>
                <Avatar
                    size={100}
                    person={{
                        name: 'Tun Tun',
                        imageId: 'YfeOqp2'
                    }}
                />
                <Avatar
                    size={80}
                    person={{
                        name: 'U Ba',
                        imageId: 'rtttt'
                    }}
                />
                <Avatar
                    size={50}
                    person={{
                        name: 'Mya',
                        imageId: 'wiuioh'
                    }}
                />
            </Card>
        </div>
    );
}